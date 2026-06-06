import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAdmin } from '../hooks/useAdmin';
import RichTextEditor from '../components/RichTextEditor';

const SectionEditor = () => {
  const { pageId } = useParams();
  const { content, updateSection, toggleVisibility } = useAdmin();
  
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [formData, setFormData] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const page = content?.[pageId];
  
  useEffect(() => {
    if (page && page.sections && page.sections.length > 0 && !activeSectionId) {
      setActiveSectionId(page.sections[0].id);
    }
  }, [page, activeSectionId]);

  useEffect(() => {
    if (page && activeSectionId) {
      const section = page.sections.find(s => s.id === activeSectionId);
      if (section) {
        setFormData(JSON.parse(JSON.stringify(section))); // Deep copy
      }
    }
  }, [activeSectionId, page]);

  if (!page) return <div>Loading...</div>;

  const handleSave = () => {
    if (formData && activeSectionId) {
      updateSection(pageId, activeSectionId, formData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
  };

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedFieldChange = (parentField, childField, value) => {
    setFormData(prev => ({
      ...prev,
      [parentField]: {
        ...(prev[parentField] || {}),
        [childField]: value
      }
    }));
  };

  const activeSection = page.sections?.find(s => s.id === activeSectionId);

  return (
    <div className="admin-section-editor">
      <div className="flex-between mb-4">
        <div>
          <Link to="/admin/sections" className="text-muted" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Pages
          </Link>
          <h2 style={{ margin: 0 }}>Editing: {page.meta?.title?.split('|')[0]?.trim()}</h2>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href={page.meta?.slug} target="_blank" rel="noreferrer" className="admin-btn admin-btn-secondary">
            View Live Page
          </a>
        </div>
      </div>

      <div className="admin-layout" style={{ minHeight: 'auto', gap: '24px' }}>
        
        {/* Sections Sidebar */}
        <div style={{ width: '280px', flexShrink: 0 }}>
          <div className="admin-card">
            <div className="admin-card-header">
              <h3 className="admin-card-title">Page Sections</h3>
            </div>
            <div style={{ padding: '8px 0' }}>
              {page.sections?.map(section => (
                <div 
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  style={{
                    padding: '12px 20px',
                    cursor: 'pointer',
                    borderLeft: activeSectionId === section.id ? '3px solid var(--admin-gold)' : '3px solid transparent',
                    backgroundColor: activeSectionId === section.id ? 'rgba(217, 95, 67, 0.05)' : 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ fontWeight: activeSectionId === section.id ? '600' : '400', color: activeSectionId === section.id ? 'var(--admin-primary)' : 'var(--admin-text)' }}>
                    {section.name}
                  </div>
                  {!section.visible && (
                    <span className="admin-status-badge badge-draft" style={{ fontSize: '0.65rem' }}>Hidden</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div style={{ flex: 1 }}>
          {formData ? (
            <div className="admin-card">
              <div className="admin-card-header flex-between">
                <div>
                  <h3 className="admin-card-title">{formData.name}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--admin-text-muted)', marginTop: '4px' }}>
                    Type: {formData.type} | ID: {formData.id}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>
                    <input 
                      type="checkbox" 
                      checked={formData.visible}
                      onChange={(e) => handleFieldChange('visible', e.target.checked)}
                    />
                    Visible on website
                  </label>
                  <button 
                    className="admin-btn admin-btn-primary" 
                    onClick={handleSave}
                  >
                    {saveSuccess ? 'Saved!' : 'Save Changes'}
                  </button>
                </div>
              </div>
              <div className="admin-card-body">
                
                {/* Dynamic Form Generation based on section fields */}
                <div className="admin-grid grid-cols-2">
                  
                  {formData.badge !== undefined && (
                    <div className="admin-form-group">
                      <label className="admin-label">Badge / Kicker Text</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={formData.badge} 
                        onChange={(e) => handleFieldChange('badge', e.target.value)} 
                      />
                    </div>
                  )}

                  {formData.heading !== undefined && (
                    <div className="admin-form-group" style={{ gridColumn: 'span 2' }}>
                      <label className="admin-label">Main Heading</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                        value={formData.heading} 
                        onChange={(e) => handleFieldChange('heading', e.target.value)} 
                      />
                    </div>
                  )}

                  {formData.subtitle !== undefined && (
                    <div className="admin-form-group" style={{ gridColumn: 'span 2' }}>
                      <label className="admin-label">Subtitle / Description</label>
                      <textarea 
                        className="admin-textarea" 
                        rows={3}
                        value={formData.subtitle} 
                        onChange={(e) => handleFieldChange('subtitle', e.target.value)} 
                      />
                    </div>
                  )}

                  {formData.content !== undefined && (
                    <div className="admin-form-group" style={{ gridColumn: 'span 2' }}>
                      <RichTextEditor 
                        label="Body Content"
                        value={formData.content} 
                        onChange={(val) => handleFieldChange('content', val)} 
                      />
                    </div>
                  )}

                  {formData.cta_primary !== undefined && (
                    <div className="admin-form-group" style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                      <label className="admin-label">Primary Call-to-Action</label>
                      <input 
                        type="text" 
                        className="admin-input mb-4" 
                        placeholder="Button Text"
                        value={formData.cta_primary.text || ''} 
                        onChange={(e) => handleNestedFieldChange('cta_primary', 'text', e.target.value)} 
                      />
                      <input 
                        type="text" 
                        className="admin-input" 
                        placeholder="Button Link URL"
                        value={formData.cta_primary.link || ''} 
                        onChange={(e) => handleNestedFieldChange('cta_primary', 'link', e.target.value)} 
                      />
                    </div>
                  )}

                  {formData.cta_secondary !== undefined && (
                    <div className="admin-form-group" style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                      <label className="admin-label">Secondary Call-to-Action</label>
                      <input 
                        type="text" 
                        className="admin-input mb-4" 
                        placeholder="Button Text"
                        value={formData.cta_secondary.text || ''} 
                        onChange={(e) => handleNestedFieldChange('cta_secondary', 'text', e.target.value)} 
                      />
                      <input 
                        type="text" 
                        className="admin-input" 
                        placeholder="Button Link URL"
                        value={formData.cta_secondary.link || ''} 
                        onChange={(e) => handleNestedFieldChange('cta_secondary', 'link', e.target.value)} 
                      />
                    </div>
                  )}
                  
                  {formData.quote !== undefined && (
                    <div className="admin-form-group" style={{ gridColumn: 'span 2' }}>
                      <label className="admin-label">Quote Text</label>
                      <textarea 
                        className="admin-textarea mb-4" 
                        rows={2}
                        value={formData.quote} 
                        onChange={(e) => handleFieldChange('quote', e.target.value)} 
                      />
                      <label className="admin-label">Quote Citation</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={formData.quote_cite || ''} 
                        onChange={(e) => handleFieldChange('quote_cite', e.target.value)} 
                      />
                    </div>
                  )}

                </div>

                {/* Array Data Handlers (Metrics, Items, etc.) */}
                {formData.metrics && (
                  <div style={{ marginTop: '32px' }}>
                    <h4 style={{ borderBottom: '1px solid var(--admin-border)', paddingBottom: '8px', marginBottom: '16px' }}>Data Metrics</h4>
                    <div className="admin-grid grid-cols-2">
                      {formData.metrics.map((metric, idx) => (
                        <div key={metric.id} style={{ border: '1px solid var(--admin-border)', borderRadius: '8px', padding: '16px' }}>
                          <input 
                            type="text" 
                            className="admin-input mb-4" 
                            style={{ fontWeight: 'bold' }}
                            value={metric.label}
                            onChange={(e) => {
                              const newMetrics = [...formData.metrics];
                              newMetrics[idx].label = e.target.value;
                              handleFieldChange('metrics', newMetrics);
                            }}
                          />
                          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                            <input 
                              type="text" 
                              className="admin-input" 
                              placeholder="Prefix"
                              value={metric.prefix || ''}
                              style={{ width: '60px' }}
                              onChange={(e) => {
                                const newMetrics = [...formData.metrics];
                                newMetrics[idx].prefix = e.target.value;
                                handleFieldChange('metrics', newMetrics);
                              }}
                            />
                            <input 
                              type="number" 
                              className="admin-input" 
                              value={metric.value}
                              onChange={(e) => {
                                const newMetrics = [...formData.metrics];
                                newMetrics[idx].value = Number(e.target.value);
                                handleFieldChange('metrics', newMetrics);
                              }}
                            />
                            <input 
                              type="text" 
                              className="admin-input" 
                              placeholder="Suffix"
                              value={metric.suffix || ''}
                              style={{ width: '80px' }}
                              onChange={(e) => {
                                const newMetrics = [...formData.metrics];
                                newMetrics[idx].suffix = e.target.value;
                                handleFieldChange('metrics', newMetrics);
                              }}
                            />
                          </div>
                          <input 
                            type="text" 
                            className="admin-input text-sm" 
                            placeholder="Context / Supporting Text"
                            value={metric.context || ''}
                            onChange={(e) => {
                              const newMetrics = [...formData.metrics];
                              newMetrics[idx].context = e.target.value;
                              handleFieldChange('metrics', newMetrics);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {formData.items && (
                  <div style={{ marginTop: '32px' }}>
                    <div className="flex-between mb-4" style={{ borderBottom: '1px solid var(--admin-border)', paddingBottom: '8px' }}>
                      <h4 style={{ margin: 0 }}>Content Items</h4>
                      <button className="admin-btn admin-btn-secondary text-sm">Add Item</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {formData.items.map((item, idx) => (
                        <div key={item.id} style={{ border: '1px solid var(--admin-border)', borderRadius: '8px', padding: '16px', background: '#f9fafb' }}>
                          <div className="flex-between mb-4">
                            <h5 style={{ margin: 0 }}>Item {idx + 1}</h5>
                            <button className="text-muted" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>Remove</button>
                          </div>
                          <div className="admin-grid grid-cols-2">
                            <div className="admin-form-group">
                              <label className="admin-label">Title</label>
                              <input 
                                type="text" 
                                className="admin-input" 
                                value={item.title || item.name || ''}
                                onChange={(e) => {
                                  const newItems = [...formData.items];
                                  if(newItems[idx].title !== undefined) newItems[idx].title = e.target.value;
                                  if(newItems[idx].name !== undefined) newItems[idx].name = e.target.value;
                                  handleFieldChange('items', newItems);
                                }}
                              />
                            </div>
                            {item.category !== undefined && (
                              <div className="admin-form-group">
                                <label className="admin-label">Category</label>
                                <input 
                                  type="text" 
                                  className="admin-input" 
                                  value={item.category}
                                  onChange={(e) => {
                                    const newItems = [...formData.items];
                                    newItems[idx].category = e.target.value;
                                    handleFieldChange('items', newItems);
                                  }}
                                />
                              </div>
                            )}
                            {(item.desc !== undefined || item.description !== undefined) && (
                              <div className="admin-form-group" style={{ gridColumn: 'span 2' }}>
                                <label className="admin-label">Description</label>
                                <textarea 
                                  className="admin-textarea" 
                                  rows={2}
                                  value={item.desc || item.description || ''}
                                  onChange={(e) => {
                                    const newItems = [...formData.items];
                                    if(newItems[idx].desc !== undefined) newItems[idx].desc = e.target.value;
                                    if(newItems[idx].description !== undefined) newItems[idx].description = e.target.value;
                                    handleFieldChange('items', newItems);
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ) : (
            <div className="admin-card text-center" style={{ padding: '60px 20px', color: 'var(--admin-text-muted)' }}>
              Select a section from the sidebar to edit its content.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionEditor;
