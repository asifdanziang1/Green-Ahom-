import React, { useState, useEffect } from 'react';
import * as store from '../contentStore';
import '../AdminStyles.css';

const SettingsManager = () => {
  const [settings, setSettings] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    const rawSettings = store.getSettings() || {};
    setSettings(JSON.parse(JSON.stringify(rawSettings)));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!settings) return;

    store.setSettings(settings);
    store.addAuditEntry({ action: 'update_settings', target: 'site_config', details: `Updated global site settings: ${settings.site?.name}` });

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    loadSettings();
  };

  const handleFieldChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      site: {
        ...prev.site,
        [field]: value
      }
    }));
  };

  if (!settings) return <div>Loading Site Settings...</div>;

  const site = settings.site || {};

  return (
    <div className="admin-page animate-fade-in">
      <div className="admin-page-header">
        <div>
          <h2>System Settings</h2>
          <p className="admin-text-muted mt-1">Configure global institutional identities, contact numbers, and address registers</p>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Site Identity &amp; Contact</h3>
        </div>
        <div className="admin-card-body">
          <form onSubmit={handleSave}>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Organization Name</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={site.name || ''} 
                  onChange={(e) => handleFieldChange('name', e.target.value)} 
                  placeholder="e.g. Green Ahom Federation" 
                  required
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Slogan / Branding Tagline</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={site.tagline || ''} 
                  onChange={(e) => handleFieldChange('tagline', e.target.value)} 
                  placeholder="e.g. Ecological Renaissance of Assam" 
                  required
                />
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Contact Email Address</label>
                <input 
                  type="email" 
                  className="admin-input" 
                  value={site.email || ''} 
                  onChange={(e) => handleFieldChange('email', e.target.value)} 
                  placeholder="e.g. info@greenahom.org" 
                  required
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Official Phone Number</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={site.phone || ''} 
                  onChange={(e) => handleFieldChange('phone', e.target.value)} 
                  placeholder="e.g. +91 6002 XXXXXX" 
                  required
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Registered Office Address</label>
              <textarea 
                className="admin-input" 
                rows="3"
                value={site.address || ''} 
                onChange={(e) => handleFieldChange('address', e.target.value)} 
                placeholder="Full physical office address" 
                required
              />
            </div>

            <div style={{ marginTop: '24px' }}>
              <button type="submit" className="admin-btn admin-btn-primary">
                {saveSuccess ? 'Settings Saved!' : 'Save System Settings'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsManager;
