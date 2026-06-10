import React, { useState, useEffect } from 'react';
import * as store from '../contentStore';
import '../AdminStyles.css';

const PaymentsManager = () => {
  const [settings, setSettings] = useState(null);
  const [quickAmountsStr, setQuickAmountsStr] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    const rawSettings = store.getSettings() || {};
    setSettings(JSON.parse(JSON.stringify(rawSettings)));
    
    const quickArr = rawSettings.payment?.quick_amounts || [];
    setQuickAmountsStr(quickArr.join(', '));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!settings) return;

    // Parse comma-separated list of quick amounts
    const amounts = quickAmountsStr
      .split(',')
      .map(item => parseInt(item.trim(), 10))
      .filter(num => !isNaN(num) && num > 0);

    // Prepare updated settings object
    const updated = {
      ...settings,
      payment: {
        ...settings.payment,
        quick_amounts: amounts
      }
    };

    store.setSettings(updated);
    store.addAuditEntry({ action: 'update_settings', target: 'payment_config', details: `Updated payment settings: Gateway enabled - ${updated.payment.enabled}` });
    
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    loadSettings();
  };

  const handleFieldChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      payment: {
        ...prev.payment,
        [field]: value
      }
    }));
  };

  if (!settings) return <div>Loading Settings...</div>;

  const payment = settings.payment || {};

  return (
    <div className="admin-page animate-fade-in">
      <div className="admin-page-header">
        <div>
          <h2>Payment Settings</h2>
          <p className="admin-text-muted mt-1">Configure Razorpay payment gateway credentials and donation limits</p>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Razorpay Configuration</h3>
        </div>
        <div className="admin-card-body">
          <form onSubmit={handleSave}>
            <div className="admin-form-row" style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
              <div className="admin-form-group" style={{ flex: 1 }}>
                <label className="admin-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={payment.enabled} 
                    onChange={(e) => handleFieldChange('enabled', e.target.checked)} 
                  />
                  Enable Razorpay Gateway
                </label>
              </div>
              <div className="admin-form-group" style={{ flex: 1 }}>
                <label className="admin-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={payment.test_mode} 
                    onChange={(e) => handleFieldChange('test_mode', e.target.checked)} 
                  />
                  Sandbox / Test Mode Active
                </label>
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Razorpay Key ID</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={payment.razorpay_key_id || ''} 
                  onChange={(e) => handleFieldChange('razorpay_key_id', e.target.value)} 
                  placeholder="rzp_test_..." 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Razorpay Key Secret</label>
                <input 
                  type="password" 
                  className="admin-input" 
                  value={payment.razorpay_key_secret || ''} 
                  onChange={(e) => handleFieldChange('razorpay_key_secret', e.target.value)} 
                  placeholder="••••••••••••••••" 
                />
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Currency Code</label>
                <select 
                  className="admin-input" 
                  value={payment.currency || 'INR'} 
                  onChange={(e) => handleFieldChange('currency', e.target.value)}
                >
                  <option value="INR">INR (₹) — Indian Rupee</option>
                  <option value="USD">USD ($) — United States Dollar</option>
                  <option value="EUR">EUR (€) — Euro</option>
                  <option value="GBP">GBP (£) — British Pound</option>
                </select>
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Presets / Quick Select Amounts (Comma Separated)</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={quickAmountsStr} 
                  onChange={(e) => setQuickAmountsStr(e.target.value)} 
                  placeholder="e.g. 1500, 3000, 5000, 10000" 
                />
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Minimum Allowed Amount</label>
                <input 
                  type="number" 
                  className="admin-input" 
                  value={payment.min_amount || 500} 
                  onChange={(e) => handleFieldChange('min_amount', parseInt(e.target.value, 10))} 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Maximum Allowed Amount</label>
                <input 
                  type="number" 
                  className="admin-input" 
                  value={payment.max_amount || 25000} 
                  onChange={(e) => handleFieldChange('max_amount', parseInt(e.target.value, 10))} 
                />
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button type="submit" className="admin-btn admin-btn-primary">
                {saveSuccess ? 'Credentials Saved!' : 'Save Payment Configuration'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentsManager;
