import React, { useState, useEffect, useRef } from 'react';
import * as store from '../contentStore';
import '../AdminStyles.css';

const MediaLibrary = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const fileInputRef = useRef(null);

  // Upload Form Fields
  const [name, setName] = useState('');
  const [type, setType] = useState('image');
  const [urlMode, setUrlMode] = useState('file'); // 'file' or 'url'
  const [url, setUrl] = useState('');
  const [fileBase64, setFileBase64] = useState('');
  const [fileSize, setFileSize] = useState('');

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = () => {
    setMediaItems(store.getMediaItems() || []);
  };

  const handleCopyUrl = (urlText, id) => {
    navigator.clipboard.writeText(urlText)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this media item?')) {
      store.deleteMediaItem(id);
      loadMedia();
      store.addAuditEntry({ action: 'delete_media', target: 'media_library', details: `Deleted media ID: ${id}` });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Convert file size to readable format
    const sizeKB = (file.size / 1024).toFixed(1);
    setFileSize(sizeKB + ' KB');
    
    if (!name) {
      setName(file.name.split('.')[0]);
    }
    setType(file.type.split('/')[0] || 'file');

    const reader = new FileReader();
    reader.onload = (event) => {
      setFileBase64(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let targetUrl = '';
    if (urlMode === 'url') {
      if (!url) {
        alert('Please enter a URL');
        return;
      }
      targetUrl = url;
    } else {
      if (!fileBase64) {
        alert('Please select a file to upload');
        return;
      }
      targetUrl = fileBase64;
    }

    const newItem = {
      title: name || 'Unnamed Asset',
      url: targetUrl,
      type: type,
      size: urlMode === 'url' ? 'External link' : fileSize,
    };

    store.addMediaItem(newItem);
    store.addAuditEntry({ action: 'upload_media', target: 'media_library', details: `Uploaded media: ${newItem.title}` });
    
    // Reset form
    setName('');
    setUrl('');
    setFileBase64('');
    setFileSize('');
    setShowAddForm(false);
    if (fileInputRef.current) fileInputRef.current.value = '';

    loadMedia();
  };

  return (
    <div className="admin-page animate-fade-in">
      <div className="admin-page-header">
        <div>
          <h2>Media Library</h2>
          <p className="admin-text-muted mt-1">Upload and manage visual assets, maps, and document PDFs</p>
        </div>
        <button 
          className="admin-btn admin-btn-primary" 
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Close Form' : 'Add New Media'}
        </button>
      </div>

      {showAddForm && (
        <div className="admin-card">
          <div className="admin-card-header">
            <h3 className="admin-card-title">Upload Asset</h3>
          </div>
          <div className="admin-card-body">
            <form onSubmit={handleSubmit}>
              <div className="admin-form-group">
                <label className="admin-label">Upload Mode</label>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
                  <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input 
                      type="radio" 
                      name="urlMode" 
                      value="file" 
                      checked={urlMode === 'file'} 
                      onChange={() => setUrlMode('file')} 
                    />
                    Upload Local File (reads to local storage)
                  </label>
                  <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input 
                      type="radio" 
                      name="urlMode" 
                      value="url" 
                      checked={urlMode === 'url'} 
                      onChange={() => setUrlMode('url')} 
                    />
                    Register Remote URL (link image/file)
                  </label>
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Asset Title / Tag Name</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="e.g. Nursery Restoration Photo"
                  required 
                />
              </div>

              {urlMode === 'file' ? (
                <div className="admin-form-group">
                  <label className="admin-label">Select File *</label>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    className="admin-input" 
                    onChange={handleFileChange}
                    accept="image/*,application/pdf"
                    required={urlMode === 'file'}
                  />
                  {fileSize && <span className="admin-text-muted text-sm mt-1" style={{ display: 'block' }}>Detected Size: {fileSize}</span>}
                </div>
              ) : (
                <div className="admin-form-group">
                  <label className="admin-label">External URL *</label>
                  <input 
                    type="url" 
                    className="admin-input" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder="https://images.unsplash.com/photo-..."
                    required={urlMode === 'url'}
                  />
                </div>
              )}

              <div className="admin-form-group">
                <label className="admin-label">Asset Type</label>
                <select 
                  className="admin-input" 
                  value={type} 
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="image">Image / Graphic</option>
                  <option value="pdf">PDF / Document</option>
                  <option value="icon">Icon / Vector</option>
                  <option value="other">Other Asset</option>
                </select>
              </div>

              <button type="submit" className="admin-btn admin-btn-primary mt-2">
                {urlMode === 'file' ? 'Upload and Register' : 'Register Link'}
              </button>
            </form>
          </div>
        </div>
      )}

      {mediaItems.length === 0 ? (
        <div className="admin-card text-center" style={{ padding: '60px 20px', color: 'var(--admin-text-muted)' }}>
          No media registered yet. Upload some files or register some URLs to get started.
        </div>
      ) : (
        <div className="media-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
          {mediaItems.map((item) => (
            <div className="admin-card p-0 media-card-box" key={item.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div 
                className="media-preview" 
                style={{ 
                  height: '140px', 
                  backgroundColor: '#f3f4f6', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                  borderBottom: '1px solid var(--admin-border)'
                }}
              >
                {item.type === 'image' || item.url.startsWith('data:image/') ? (
                  <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--admin-text-muted)' }}>
                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm font-semibold">{item.type.toUpperCase()} File</span>
                  </div>
                )}
                <span 
                  className="admin-badge" 
                  style={{ 
                    position: 'absolute', 
                    top: '8px', 
                    right: '8px',
                    fontSize: '0.65rem',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {item.size}
                </span>
              </div>
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '0.95rem', color: 'var(--admin-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={item.title}>
                  {item.title}
                </h4>
                <span className="admin-text-muted text-sm" style={{ fontSize: '0.75rem' }}>
                  Uploaded: {new Date(item.uploadedAt || Date.now()).toLocaleDateString()}
                </span>
                
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  <button 
                    className="admin-btn admin-btn-secondary admin-btn-sm" 
                    onClick={() => handleCopyUrl(item.url, item.id)}
                    style={{ flex: 1, padding: '6px 10px', fontSize: '0.8rem' }}
                  >
                    {copiedId === item.id ? 'Copied!' : 'Copy URL'}
                  </button>
                  <button 
                    className="admin-btn admin-btn-danger admin-btn-sm" 
                    onClick={() => handleDelete(item.id)}
                    style={{ padding: '6px 10px', color: '#dc2626' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;
