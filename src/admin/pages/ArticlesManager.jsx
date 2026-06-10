import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as store from '../contentStore';
import RichTextEditor from '../components/RichTextEditor';
import '../AdminStyles.css';

const ArticlesManager = () => {
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    loadArticles();
    if (location.search.includes('action=new')) {
      handleAddNew();
    }
  }, [location.search]);

  const loadArticles = () => {
    setArticles(store.getArticles() || []);
  };

  const handleAddNew = () => {
    setCurrentArticle({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: 'Admin',
      category: 'General',
      coverImage: '',
      status: 'draft'
    });
    setIsEditing(true);
  };

  const handleEdit = (article) => {
    setCurrentArticle({ ...article });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      store.deleteArticle(id);
      loadArticles();
      store.addAuditEntry({ action: 'delete', target: 'article', details: `Deleted article ID: ${id}` });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (currentArticle.id) {
      store.updateArticle(currentArticle.id, currentArticle);
      store.addAuditEntry({ action: 'update', target: 'article', details: `Updated article: ${currentArticle.title}` });
    } else {
      store.createArticle(currentArticle);
      store.addAuditEntry({ action: 'create', target: 'article', details: `Created article: ${currentArticle.title}` });
    }
    setIsEditing(false);
    setCurrentArticle(null);
    loadArticles();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentArticle(null);
  };

  const handleChange = (field, value) => {
    setCurrentArticle(prev => ({ ...prev, [field]: value }));
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    if (!currentArticle.id && (!currentArticle.slug || currentArticle.slug === currentArticle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))) {
      handleChange('title', title);
      handleChange('slug', title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    } else {
      handleChange('title', title);
    }
  };

  if (isEditing) {
    return (
      <div className="admin-page animate-fade-in">
        <div className="admin-page-header">
          <h2>{currentArticle.id ? 'Edit Article' : 'New Article'}</h2>
          <button className="admin-btn admin-btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>

        <div className="admin-card">
          <form onSubmit={handleSave}>
            <div className="admin-form-row">
              <div className="admin-form-group" style={{ flex: 2 }}>
                <label className="admin-label">Article Title *</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentArticle.title} 
                  onChange={handleTitleChange} 
                  required 
                />
              </div>
              <div className="admin-form-group" style={{ flex: 1 }}>
                <label className="admin-label">Status</label>
                <select 
                  className="admin-input" 
                  value={currentArticle.status} 
                  onChange={(e) => handleChange('status', e.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Slug (URL)</label>
              <input 
                type="text" 
                className="admin-input" 
                value={currentArticle.slug} 
                onChange={(e) => handleChange('slug', e.target.value)} 
                placeholder="e.g. governance-report-analysis"
              />
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Author</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentArticle.author} 
                  onChange={(e) => handleChange('author', e.target.value)} 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Category</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentArticle.category} 
                  onChange={(e) => handleChange('category', e.target.value)} 
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Cover Image URL</label>
              <input 
                type="text" 
                className="admin-input" 
                value={currentArticle.coverImage} 
                onChange={(e) => handleChange('coverImage', e.target.value)} 
                placeholder="/images/articles/cover.jpg"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Excerpt / Summary *</label>
              <textarea 
                className="admin-input" 
                rows="3"
                value={currentArticle.excerpt} 
                onChange={(e) => handleChange('excerpt', e.target.value)} 
                required 
              />
            </div>

            <div className="admin-form-group">
              <RichTextEditor 
                label="Content (Markdown or HTML) *"
                value={currentArticle.content} 
                onChange={(val) => handleChange('content', val)} 
                placeholder="Start writing the article details..."
              />
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button type="submit" className="admin-btn admin-btn-primary">Save Article</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page animate-fade-in">
      <div className="admin-page-header">
        <div>
          <h2>Articles Manager</h2>
          <p className="admin-text-muted mt-1">Manage corporate news, legal briefings, and updates</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={handleAddNew}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '6px', verticalAlign: 'text-bottom' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          New Article
        </button>
      </div>

      <div className="admin-card p-0">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 admin-text-muted">No articles found. Write your first article to get started.</td>
              </tr>
            ) : (
              articles.map(art => (
                <tr key={art.id}>
                  <td><strong>{art.title}</strong><br /><small className="admin-text-muted">{art.slug}</small></td>
                  <td><span className="admin-badge">{art.category}</span></td>
                  <td>{new Date(art.createdAt || Date.now()).toLocaleDateString('en-IN')}</td>
                  <td>
                    <span className={`admin-badge admin-badge-${art.status === 'published' ? 'published' : 'draft'}`}>
                      {art.status}
                    </span>
                  </td>
                  <td className="text-right">
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => handleEdit(art)}>Edit</button>
                      <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => handleDelete(art.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticlesManager;
