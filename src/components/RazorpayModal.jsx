import React, { useState, useCallback } from 'react';

/**
 * RazorpayModal — Production Razorpay Checkout Integration
 * =========================================================
 * This component:
 *   1. Calls the backend to create a Razorpay order
 *   2. Loads the official Razorpay Checkout.js script
 *   3. Opens the native Razorpay payment dialog
 *   4. Sends the payment response to backend for verification
 *   5. Shows a success screen with receipt download on verification
 *
 * Props:
 *   - isOpen (bool)         : Whether to trigger the payment flow
 *   - onClose (fn)          : Callback to close / reset parent state
 *   - amount (number)       : Donation amount in ₹ (rupees)
 *   - donorName (string)    : Pre-filled donor name
 *   - donorEmail (string)   : Pre-filled donor email
 *   - donorPhone (string)   : Pre-filled donor phone
 *   - donorPan (string)     : PAN for 80G receipt (optional)
 *   - onPaymentSuccess (fn) : Callback with donation record on success
 *
 * Environment:
 *   - VITE_RAZORPAY_KEY_ID      : Razorpay public key (in .env)
 *   - VITE_PAYMENT_API_URL      : Backend base URL (defaults to http://localhost:5000)
 */

// ── Configuration ────────────────────────────────────────────
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID || '';
const API_BASE = import.meta.env.VITE_PAYMENT_API_URL || 'http://localhost:5000';

// ── Razorpay Script Loader (singleton) ───────────────────────
let razorpayScriptLoaded = false;
const loadRazorpayScript = () => {
  return new Promise((resolve, reject) => {
    if (razorpayScriptLoaded || window.Razorpay) {
      razorpayScriptLoaded = true;
      return resolve(true);
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      razorpayScriptLoaded = true;
      resolve(true);
    };
    script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
    document.body.appendChild(script);
  });
};

const RazorpayModal = ({
  isOpen,
  onClose,
  amount,
  donorName = '',
  donorEmail = '',
  donorPhone = '',
  donorPan = '',
  onPaymentSuccess,
}) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [txData, setTxData] = useState(null); // { paymentId, orderId }

  // ── Receipt Printer ──────────────────────────────────────
  const printReceipt = useCallback(() => {
    if (!txData) return;
    const printWindow = window.open('', '_blank');
    const receiptHtml = `
      <html>
        <head>
          <title>Donation Receipt - Green Ahom Federation</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; color: #333; }
            .receipt-box { max-width: 800px; margin: auto; border: 1px solid #eee; padding: 30px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #1a2d42; padding-bottom: 20px; margin-bottom: 30px; }
            .logo { font-weight: 800; font-size: 24px; color: #1a2d42; }
            .org-details { text-align: right; font-size: 12px; line-height: 1.5; }
            .title { text-align: center; text-transform: uppercase; margin-bottom: 30px; color: #1a2d42; }
            .row { display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #f9f9f9; padding-bottom: 8px; }
            .label { font-weight: 600; color: #555; }
            .value { text-align: right; }
            .exempt { background-color: #fcfbfa; border-left: 4px solid #d95f43; padding: 15px; margin: 30px 0; font-size: 13px; line-height: 1.6; border-top: 1px solid #eee; border-right: 1px solid #eee; border-bottom: 1px solid #eee; }
            .footer { border-top: 1px solid #eee; margin-top: 50px; padding-top: 20px; font-size: 11px; text-align: center; color: #777; }
            .signature { margin-top: 40px; text-align: right; }
            .sig-line { width: 200px; border-top: 1px solid #777; display: inline-block; margin-top: 40px; }
          </style>
        </head>
        <body>
          <div class="receipt-box">
            <div class="header">
              <div class="logo">
                GREEN AHOM FEDERATION
                <div style="font-size: 10px; color: #d95f43; letter-spacing: 2px;">ECOLOGICAL RENAISSANCE OF ASSAM</div>
              </div>
              <div class="org-details">
                GAF Secretariat, Zoo Road Tiniali<br/>
                Guwahati, Assam - 781024<br/>
                info@greenahom.org | GAF80GExempt
              </div>
            </div>
            
            <h2 class="title">Official Donation Receipt</h2>
            
            <div class="row"><span class="label">Receipt Number:</span><span class="value">GAF-${txData.paymentId}</span></div>
            <div class="row"><span class="label">Date of Transaction:</span><span class="value">${new Date().toLocaleDateString('en-IN')}</span></div>
            <div class="row"><span class="label">Donor Name:</span><span class="value">${donorName}</span></div>
            <div class="row"><span class="label">Donor Phone:</span><span class="value">${donorPhone}</span></div>
            <div class="row"><span class="label">Donor Email:</span><span class="value">${donorEmail}</span></div>
            ${donorPan ? `<div class="row"><span class="label">Donor PAN:</span><span class="value">${donorPan.toUpperCase()}</span></div>` : ''}
            <div class="row" style="font-size: 18px; border-bottom: 2px solid #eee; padding-bottom: 12px; margin-top: 20px;">
              <span class="label" style="color: #1a2d42;">Donation Amount:</span>
              <span class="value" style="font-weight: bold; color: #1a2d42;">₹${parseFloat(amount).toLocaleString('en-IN')}.00</span>
            </div>
            
            <div class="exempt">
              <strong>TAX BENEFIT STATUS: Exemption Allowed</strong><br/>
              Donations to Green Ahom Federation are exempted from income tax under Section 80G of the Income Tax Act, 1961 (Registration No. GAF/80G/2024/7984). Exemption benefit will be automatically calculated on your declared PAN details.
            </div>
            
            <div class="signature">
              <br/><br/>
              <div class="sig-line"></div><br/>
              <strong>Authorized Signatory</strong><br/>
              Green Ahom Federation
            </div>
            
            <div class="footer">
              This is a computer-generated tax document and does not require physical signature.<br/>
              Thank you for sowing the seeds of conservation in Assam. Your support directly funds our forest restoration drives.
            </div>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `;
    printWindow.document.write(receiptHtml);
    printWindow.document.close();
  }, [txData, donorName, donorEmail, donorPhone, donorPan, amount]);

  // ── Payment Flow ─────────────────────────────────────────
  const initiatePayment = useCallback(async () => {
    setStatus('loading');
    setErrorMsg('');

    try {
      // 1. Load Razorpay script
      await loadRazorpayScript();

      // 2. Create order on backend
      const orderRes = await fetch(`${API_BASE}/api/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Number(amount),
          currency: 'INR',
          receipt: `gaf_donation_${Date.now()}`,
          notes: {
            donorName,
            donorEmail,
            donorPhone,
            donorPan: donorPan || 'N/A',
            purpose: 'Donation to Green Ahom Federation',
          },
        }),
      });

      if (!orderRes.ok) {
        const errData = await orderRes.json().catch(() => ({}));
        throw new Error(errData.error || `Server responded with ${orderRes.status}`);
      }

      const orderData = await orderRes.json();

      if (!orderData.success || !orderData.order?.id) {
        throw new Error('Invalid order response from server.');
      }

      // 3. Open Razorpay Checkout
      const options = {
        key: RAZORPAY_KEY,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: 'Green Ahom Federation',
        description: 'Donation — Ecological Renaissance of Assam',
        image: '/logo.png',
        order_id: orderData.order.id,
        prefill: {
          name: donorName,
          email: donorEmail,
          contact: donorPhone,
        },
        notes: {
          pan: donorPan || 'N/A',
        },
        theme: {
          color: '#1a2d42',
          backdrop_color: 'rgba(26, 45, 66, 0.5)',
        },
        modal: {
          ondismiss: () => {
            setStatus('idle');
          },
        },
        handler: async (response) => {
          // 4. Verify payment on backend
          try {
            const verifyRes = await fetch(`${API_BASE}/api/payment/verify`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              const paymentId = response.razorpay_payment_id;
              const orderId = response.razorpay_order_id;

              setTxData({ paymentId, orderId });
              setStatus('success');

              // Save donation record to localStorage for the Admin Dashboard
              const currentDonations = JSON.parse(localStorage.getItem('gaf_donations') || '[]');
              const newDonation = {
                id: paymentId,
                orderId: orderId,
                donorName,
                donorEmail,
                donorPhone,
                pan: (donorPan || '').toUpperCase(),
                amount: parseFloat(amount),
                date: new Date().toISOString(),
                method: 'Razorpay',
                status: 'Success',
              };
              localStorage.setItem('gaf_donations', JSON.stringify([newDonation, ...currentDonations]));

              // Increment stats
              const currentStats = JSON.parse(
                localStorage.getItem('gaf_stats') || '{"trees": 154820, "funds": 4820500, "weavers": 340, "wetlands": 12}'
              );
              currentStats.funds += parseFloat(amount);
              const treesPlanted = Math.floor(amount / 250);
              currentStats.trees += treesPlanted;
              localStorage.setItem('gaf_stats', JSON.stringify(currentStats));

              if (onPaymentSuccess) onPaymentSuccess(newDonation);
            } else {
              throw new Error(verifyData.error || 'Verification failed');
            }
          } catch (verifyErr) {
            console.error('Payment verification error:', verifyErr);
            setErrorMsg('Payment was processed but verification failed. Please contact support with your transaction details.');
            setStatus('error');
          }
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on('payment.failed', (response) => {
        console.error('Payment failed:', response.error);
        setErrorMsg(
          response.error?.description ||
            'Payment failed. Please try again or use a different payment method.'
        );
        setStatus('error');
      });

      rzp.open();
      setStatus('idle'); // The Razorpay modal is now open (external)
    } catch (err) {
      console.error('Payment initiation error:', err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }, [amount, donorName, donorEmail, donorPhone, donorPan, onPaymentSuccess]);

  // ── Trigger on open ──────────────────────────────────────
  React.useEffect(() => {
    if (isOpen && status === 'idle') {
      initiatePayment();
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Reset on close ───────────────────────────────────────
  const handleClose = () => {
    setStatus('idle');
    setTxData(null);
    setErrorMsg('');
    onClose();
  };

  // Don't render anything if not open and no success/error to show
  if (!isOpen && status !== 'success' && status !== 'error') return null;

  // ── Loading State ────────────────────────────────────────
  if (status === 'loading') {
    return (
      <div className="razorpay-overlay">
        <div className="razorpay-modal-box">
          <div className="razorpay-modal-header">
            <div className="merchant-details">
              <div className="merchant-text">
                <h5>Green Ahom Federation</h5>
                <p>Preparing secure checkout…</p>
              </div>
            </div>
            <div className="amount-display">
              <span className="amt-label">AMOUNT</span>
              <span className="amt-val">₹{parseFloat(amount).toLocaleString('en-IN')}.00</span>
            </div>
          </div>
          <div className="razorpay-modal-body">
            <div className="rp-status-screen text-center">
              <div className="rp-spinner" />
              <h4 className="body-title mt-4">Connecting to Razorpay</h4>
              <p className="body-desc">Setting up your secure payment session. Please wait…</p>
            </div>
          </div>
          <div className="razorpay-modal-footer">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              PCI-DSS Compliant Secure Payment
            </span>
            <span>Powered by <strong>Razorpay</strong></span>
          </div>
        </div>
      </div>
    );
  }

  // ── Error State ──────────────────────────────────────────
  if (status === 'error') {
    return (
      <div className="razorpay-overlay">
        <div className="razorpay-modal-box">
          <div className="razorpay-modal-header">
            <div className="merchant-details">
              <div className="merchant-text">
                <h5>Green Ahom Federation</h5>
                <p>Payment Issue</p>
              </div>
            </div>
            <div className="amount-display">
              <span className="amt-label">AMOUNT</span>
              <span className="amt-val">₹{parseFloat(amount).toLocaleString('en-IN')}.00</span>
            </div>
            <button className="modal-close-x" onClick={handleClose}>×</button>
          </div>
          <div className="razorpay-modal-body">
            <div className="rp-status-screen text-center">
              <div className="error-icon-wrapper">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h4 className="body-title mt-4" style={{ color: '#e74c3c' }}>Payment Failed</h4>
              <p className="body-desc">{errorMsg}</p>
              <div className="success-actions" style={{ marginTop: '24px' }}>
                <button className="btn btn-gold" onClick={() => { setStatus('idle'); initiatePayment(); }} style={{ width: '100%', padding: '12px' }}>
                  Try Again
                </button>
                <button className="btn btn-outline close-success-btn" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="razorpay-modal-footer">
            <span>Need help? Contact info@greenahom.org</span>
            <span>Powered by <strong>Razorpay</strong></span>
          </div>
        </div>
      </div>
    );
  }

  // ── Success State ────────────────────────────────────────
  if (status === 'success' && txData) {
    return (
      <div className="razorpay-overlay">
        <div className="razorpay-modal-box">
          <div className="razorpay-modal-header">
            <div className="merchant-details">
              <div className="merchant-text">
                <h5>Green Ahom Federation</h5>
                <p>Payment Complete</p>
              </div>
            </div>
            <div className="amount-display">
              <span className="amt-label">AMOUNT</span>
              <span className="amt-val">₹{parseFloat(amount).toLocaleString('en-IN')}.00</span>
            </div>
          </div>
          <div className="razorpay-modal-body">
            <div className="rp-status-screen success-screen text-center animate-fade-scale">
              <div className="success-icon-wrapper">
                <svg className="checkmark-svg" viewBox="0 0 52 52">
                  <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
              <h3 className="success-title text-teal">Payment Successful!</h3>
              <p className="success-desc">
                Thank you, <strong>{donorName}</strong>! Your donation of <strong>₹{parseFloat(amount).toLocaleString('en-IN')}</strong> has been received by GAF.
              </p>

              <div className="tx-details-box text-left">
                <div className="tx-row"><span>PAYMENT ID</span><strong>{txData.paymentId}</strong></div>
                <div className="tx-row"><span>ORDER ID</span><strong>{txData.orderId}</strong></div>
                <div className="tx-row"><span>STATUS</span><span className="badge-tx-success">VERIFIED</span></div>
                <div className="tx-row"><span>BENEFIT</span><strong>80G Tax Exemption Eligible</strong></div>
              </div>

              <div className="success-actions">
                <button className="btn btn-gold btn-receipt-dl" onClick={printReceipt}>
                  Download 80G Receipt
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
                <button className="btn btn-outline close-success-btn" onClick={handleClose}>
                  Done / Close Window
                </button>
              </div>
            </div>
          </div>
          <div className="razorpay-modal-footer">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              Payment Verified via Razorpay
            </span>
            <span>Powered by <strong>Razorpay</strong></span>
          </div>
        </div>

        <style>{`
          .razorpay-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(26, 45, 66, 0.45);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }

          .razorpay-modal-box {
            width: 100%;
            max-width: 480px;
            background-color: var(--white);
            border-radius: var(--radius-md);
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
            border: var(--border-flat);
            display: flex;
            flex-direction: column;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif;
            animation: modalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes modalEnter {
            from { opacity: 0; transform: translateY(40px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          .razorpay-modal-header {
            background-color: var(--primary);
            color: var(--white);
            padding: 20px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            border-bottom: 2px solid var(--gold);
          }

          .merchant-details {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .merchant-text h5 {
            color: var(--white);
            margin: 0;
            font-size: 14px;
            font-weight: 700;
          }

          .merchant-text p {
            color: rgba(255, 255, 255, 0.6);
            margin: 0;
            font-size: 10px;
          }

          .amount-display {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

          .amt-label {
            font-size: 9px;
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: 0.5px;
          }

          .amt-val {
            font-size: 18px;
            font-weight: bold;
            color: var(--gold);
          }

          .modal-close-x {
            position: absolute;
            top: 10px;
            right: 10px;
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.4);
            font-size: 24px;
            cursor: pointer;
            line-height: 1;
          }

          .modal-close-x:hover {
            color: var(--white);
          }

          .razorpay-modal-body {
            padding: 24px;
            background-color: #faf9f6;
            min-height: 280px;
            max-height: 480px;
            overflow-y: auto;
          }

          .body-title {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 6px;
            color: var(--primary);
          }

          .body-desc {
            font-size: 12px;
            color: var(--muted);
            margin-bottom: 20px;
            line-height: 1.5;
          }

          .rp-status-screen {
            padding: 40px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .rp-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(26, 45, 66, 0.06);
            border-left-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .error-icon-wrapper {
            margin-bottom: 16px;
          }

          /* SUCCESS SCREEN */
          .success-icon-wrapper {
            width: 80px;
            height: 80px;
            margin-bottom: 15px;
          }

          .checkmark-svg {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: block;
            stroke-width: 2;
            stroke: var(--gold);
            stroke-miterlimit: 10;
            box-shadow: inset 0px 0px 0px var(--gold);
            animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out 0s forwards;
          }

          .checkmark-circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 2;
            stroke-miterlimit: 10;
            stroke: var(--gold);
            fill: none;
            animation: stroke .6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
          }

          .checkmark-check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: stroke .3s cubic-bezier(0.65, 0, 0.45, 1) .8s forwards;
          }

          @keyframes stroke {
            to { stroke-dashoffset: 0; }
          }

          @keyframes scale {
            0%, 100% { transform: none; }
            50% { transform: scale3d(1.1, 1.1, 1); }
          }

          @keyframes fill {
            to { box-shadow: inset 0px 0px 0px 40px rgba(217, 95, 67, 0.05); }
          }

          .success-title {
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 8px;
          }

          .success-desc {
            font-size: 13px;
            color: var(--muted);
            line-height: 1.5;
            margin-bottom: 24px;
          }

          .tx-details-box {
            background-color: var(--white);
            border: 1px solid rgba(26, 45, 66, 0.06);
            border-radius: var(--radius-md);
            padding: 14px;
            width: 100%;
            margin-bottom: 24px;
          }

          .tx-row {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            margin-bottom: 8px;
          }

          .tx-row:last-child {
            margin-bottom: 0;
          }

          .tx-row span {
            color: var(--muted);
            font-weight: 600;
          }

          .tx-row strong {
            color: var(--primary);
          }

          .badge-tx-success {
            background-color: rgba(217, 95, 67, 0.08);
            border: 1px solid rgba(217, 95, 67, 0.2);
            color: var(--gold);
            padding: 2px 6px;
            border-radius: var(--radius-sm);
            font-weight: 700;
          }

          .success-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }

          .btn-receipt-dl {
            width: 100%;
            padding: 12px;
            font-size: 13px;
          }

          .close-success-btn {
            width: 100%;
            padding: 10px;
            font-size: 12px;
            border-color: rgba(0,0,0,0.1);
          }

          .razorpay-modal-footer {
            padding: 14px 24px;
            background-color: #f0eff0;
            border-top: 1px solid #e2e1e2;
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            color: #888;
          }

          .razorpay-modal-footer strong {
            color: #555;
          }
        `}</style>
      </div>
    );
  }

  // Default: nothing visible (Razorpay's own modal handles the UI)
  return null;
};

export default RazorpayModal;
