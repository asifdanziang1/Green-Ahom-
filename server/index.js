/**
 * Green Ahom Federation — Razorpay Payment Server
 * ================================================
 * Provides two endpoints:
 *   POST /api/payment/create-order  → Creates a Razorpay order
 *   POST /api/payment/verify        → Verifies the payment signature
 *
 * Prerequisites:
 *   1. Copy `.env.example` → `.env` and add your Razorpay credentials.
 *   2. Run `npm install` in this directory.
 *   3. Run `npm run dev` (or `npm start` for production).
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const app = express();

// ── Middleware ────────────────────────────────────────────────
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    methods: ['POST', 'GET'],
  })
);

// ── Razorpay Instance ────────────────────────────────────────
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ── Health Check ─────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'greenahom-payment-server' });
});

// ── POST /api/payment/create-order ───────────────────────────
// Creates a Razorpay order so the frontend can open Checkout.
app.post('/api/payment/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, notes } = req.body;

    if (!amount || isNaN(amount) || amount < 1) {
      return res.status(400).json({ error: 'Invalid amount. Provide amount in rupees (minimum ₹1).' });
    }

    const options = {
      amount: Math.round(Number(amount) * 100), // Razorpay expects paise
      currency,
      receipt: receipt || `gaf_rcpt_${Date.now()}`,
      notes: notes || {},
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
    });
  } catch (err) {
    console.error('[Razorpay] Order creation failed:', err);
    return res.status(500).json({
      error: 'Failed to create Razorpay order.',
      details: err.message,
    });
  }
});

// ── POST /api/payment/verify ─────────────────────────────────
// Verifies the Razorpay payment signature to confirm authenticity.
app.post('/api/payment/verify', (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing required payment verification fields.' });
    }

    // Generate HMAC SHA256 digest
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // ✅ Payment is verified.
      // In production, save to database here (donor details, transaction, etc.)
      return res.status(200).json({
        success: true,
        message: 'Payment verified successfully.',
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Payment verification failed. Signature mismatch.',
      });
    }
  } catch (err) {
    console.error('[Razorpay] Verification error:', err);
    return res.status(500).json({
      error: 'Internal server error during verification.',
      details: err.message,
    });
  }
});

// ── Start Server ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🌿 Green Ahom Payment Server running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   CORS origin: ${process.env.CLIENT_ORIGIN || 'http://localhost:5173'}\n`);
});
