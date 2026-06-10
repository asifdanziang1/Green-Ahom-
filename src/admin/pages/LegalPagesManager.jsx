import React, { useState, useEffect } from 'react';
import * as store from '../contentStore';
import RichTextEditor from '../components/RichTextEditor';
import '../AdminStyles.css';

const LegalPagesManager = () => {
  const [activeSlug, setActiveSlug] = useState('terms-conditions');
  const [legalData, setLegalData] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    loadLegalPage();
  }, [activeSlug]);

  const loadLegalPage = () => {
    const pages = store.getLegalPages() || {};
    const page = pages[activeSlug] || {
      title: activeSlug === 'terms-conditions' ? 'Terms and Conditions' : activeSlug === 'privacy-policy' ? 'Privacy Policy' : 'Refund Policy',
      slug: activeSlug,
      content: '',
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    setLegalData(JSON.parse(JSON.stringify(page)));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!legalData) return;
    
    const updated = {
      ...legalData,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    store.updateLegalPage(activeSlug, updated);
    store.addAuditEntry({ action: 'update_legal', target: activeSlug, details: `Updated legal page: ${updated.title}` });
    
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleChange = (field, value) => {
    setLegalData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="admin-page animate-fade-in">
      <div className="admin-page-header">
        <div>
          <h2>Legal Pages Manager</h2>
          <p className="admin-text-muted mt-1">Manage public-facing policy charters and terms</p>
        </div>
      </div>

      <div className="admin-tab-row mb-4" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--admin-border)', paddingBottom: '1px' }}>
        <button 
          className={`admin-tab-btn ${activeSlug === 'terms-conditions' ? 'active' : ''}`}
          onClick={() => setActiveSlug('terms-conditions')}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            borderBottom: activeSlug === 'terms-conditions' ? '3px solid var(--admin-gold)' : '3px solid transparent',
            fontWeight: activeSlug === 'terms-conditions' ? '700' : '500',
            color: activeSlug === 'terms-conditions' ? 'var(--admin-primary)' : 'var(--admin-text-muted)'
          }}
        >
          Terms &amp; Conditions
        </button>
        <button 
          className={`admin-tab-btn ${activeSlug === 'privacy-policy' ? 'active' : ''}`}
          onClick={() => setActiveSlug('privacy-policy')}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            borderBottom: activeSlug === 'privacy-policy' ? '3px solid var(--admin-gold)' : '3px solid transparent',
            fontWeight: activeSlug === 'privacy-policy' ? '700' : '500',
            color: activeSlug === 'privacy-policy' ? 'var(--admin-primary)' : 'var(--admin-text-muted)'
          }}
        >
          Privacy Policy
        </button>
        <button 
          className={`admin-tab-btn ${activeSlug === 'refund-policy' ? 'active' : ''}`}
          onClick={() => setActiveSlug('refund-policy')}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            borderBottom: activeSlug === 'refund-policy' ? '3px solid var(--admin-gold)' : '3px solid transparent',
            fontWeight: activeSlug === 'refund-policy' ? '700' : '500',
            color: activeSlug === 'refund-policy' ? 'var(--admin-primary)' : 'var(--admin-text-muted)'
          }}
        >
          Refund &amp; Cancellation
        </button>
      </div>

      {legalData && (
        <div className="admin-card">
          <form onSubmit={handleSave} style={{ padding: '24px' }}>
            <div className="admin-form-group">
              <label className="admin-label">Page Title</label>
              <input 
                type="text" 
                className="admin-input" 
                value={legalData.title} 
                onChange={(e) => handleChange('title', e.target.value)} 
                required 
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">URL Slug (System Bound)</label>
              <input 
                type="text" 
                className="admin-input" 
                value={legalData.slug} 
                disabled 
                style={{ backgroundColor: '#f3f4f6', cursor: 'not-allowed' }}
              />
            </div>

            <div className="admin-form-group">
              <RichTextEditor 
                label="Document Content (Markdown or HTML) *"
                value={legalData.content} 
                onChange={(val) => handleChange('content', val)} 
                placeholder="Write the policy text..."
                minHeight={350}
              />
            </div>

            <div className="flex-between mt-4">
              <span className="admin-text-muted text-sm">Last Updated: {legalData.lastUpdated}</span>
              <button type="submit" className="admin-btn admin-btn-primary">
                {saveSuccess ? 'Changes Saved!' : 'Save Charter'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LegalPagesManager;
