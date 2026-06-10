import React, { useState, useEffect } from 'react';
import * as store from '../contentStore';
import '../AdminStyles.css';

const SeoManager = () => {
  const [activePage, setActivePage] = useState('home');
  const [seoData, setSeoData] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const pagesList = [
    { id: 'home', title: 'Homepage' },
    { id: 'about', title: 'About Us' },
    { id: 'work', title: 'Our Work / Portfolio' },
    { id: 'impact', title: 'Grassroots Impact' },
    { id: 'reports', title: 'Statutory Reports' },
    { id: 'gallery', title: 'Field Photo Gallery' },
    { id: 'partners', title: 'Institutional Partners' },
    { id: 'volunteer', title: 'Volunteer Registration' },
    { id: 'donate', title: 'Donate Campaigns' },
    { id: 'contact', title: 'Contact Us & FAQs' }
  ];

  useEffect(() => {
    loadSeoSettings();
  }, [activePage]);

  const loadSeoSettings = () => {
    const allSeo = store.getSeoSettings() || {};
    const pageSeo = allSeo[activePage] || {
      title: activePage.charAt(0).toUpperCase() + activePage.slice(1) + ' | Green Ahom Federation',
      description: 'Green Ahom Federation Section 8 Non-Profit organization in Assam, India.',
      ogImage: '/logo.png',
      ogTitle: '',
      ogDescription: ''
    };
    setSeoData(JSON.parse(JSON.stringify(pageSeo)));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!seoData) return;

    store.updatePageSeo(activePage, seoData);
    store.addAuditEntry({ action: 'update_seo', target: activePage, details: `Updated SEO metadata: ${seoData.title}` });

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleChange = (field, value) => {
    setSeoData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="admin-page animate-fade-in">
      <div className="admin-page-header">
        <div>
          <h2>SEO Configuration</h2>
          <p className="admin-text-muted mt-1">Configure HTML meta title tags, page descriptions, and OG preview images for search indexing and social shares</p>
        </div>
      </div>

      <div className="admin-layout" style={{ minHeight: 'auto', gap: '24px' }}>
        
        {/* Left Side: Pages Select */}
        <div style={{ width: '260px', flexShrink: 0 }}>
          <div className="admin-card">
            <div className="admin-card-header">
              <h3 className="admin-card-title">Pages Directory</h3>
            </div>
            <div style={{ padding: '8px 0' }}>
              {pagesList.map(page => (
                <div 
                  key={page.id}
                  onClick={() => setActivePage(page.id)}
                  style={{
                    padding: '12px 20px',
                    cursor: 'pointer',
                    borderLeft: activePage === page.id ? '3px solid var(--admin-gold)' : '3px solid transparent',
                    backgroundColor: activePage === page.id ? 'rgba(217, 95, 67, 0.05)' : 'transparent',
                    fontWeight: activePage === page.id ? '600' : '400',
                    color: activePage === page.id ? 'var(--admin-primary)' : 'var(--admin-text)'
                  }}
                >
                  {page.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: SEO Form */}
        <div style={{ flex: 1 }}>
          {seoData && (
            <div className="admin-card">
              <div className="admin-card-header flex-between">
                <h3 className="admin-card-title">Metadata Settings — {pagesList.find(p => p.id === activePage)?.title}</h3>
                <button 
                  className="admin-btn admin-btn-primary" 
                  onClick={handleSave}
                >
                  {saveSuccess ? 'SEO Saved!' : 'Save SEO'}
                </button>
              </div>
              <div className="admin-card-body">
                <form onSubmit={handleSave}>
                  <div className="admin-form-group">
                    <label className="admin-label">Meta HTML Title *</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={seoData.title} 
                      onChange={(e) => handleChange('title', e.target.value)} 
                      maxLength="70"
                      required 
                    />
                    <small className="admin-text-muted text-sm" style={{ display: 'block', marginTop: '4px' }}>
                      Recommended: under 60 characters. Current length: {seoData.title?.length || 0}
                    </small>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Meta Description *</label>
                    <textarea 
                      className="admin-input" 
                      rows="3"
                      value={seoData.description} 
                      onChange={(e) => handleChange('description', e.target.value)} 
                      maxLength="160"
                      required 
                    />
                    <small className="admin-text-muted text-sm" style={{ display: 'block', marginTop: '4px' }}>
                      Recommended: under 155 characters. Current length: {seoData.description?.length || 0}
                    </small>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">OG Share Image URL</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={seoData.ogImage || ''} 
                      onChange={(e) => handleChange('ogImage', e.target.value)} 
                      placeholder="e.g. /images/seo/home-og.jpg"
                    />
                    <small className="admin-text-muted text-sm" style={{ display: 'block', marginTop: '4px' }}>
                      Pasted URL or Media Library link representing this page when shared on WhatsApp, Facebook, or Twitter.
                    </small>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">OpenGraph Social Title (Optional)</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={seoData.ogTitle || ''} 
                      onChange={(e) => handleChange('ogTitle', e.target.value)} 
                      placeholder="Overrides Meta HTML Title on social platforms if set"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">OpenGraph Social Description (Optional)</label>
                    <textarea 
                      className="admin-input" 
                      rows="2"
                      value={seoData.ogDescription || ''} 
                      onChange={(e) => handleChange('ogDescription', e.target.value)} 
                      placeholder="Overrides Meta Description on social platforms if set"
                    />
                  </div>

                </form>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SeoManager;
