import React, { useState, useEffect } from 'react';
import * as store from '../contentStore';
import '../AdminStyles.css';

const BlogManager = () => {
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    setPosts(store.getBlogPosts() || []);
  };

  const handleAddNew = () => {
    setCurrentPost({
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

  const handleEdit = (post) => {
    setCurrentPost({ ...post });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      store.deleteBlogPost(id);
      loadPosts();
      store.addAuditEntry({ action: 'delete', target: 'blog', details: `Deleted post ID: ${id}` });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (currentPost.id) {
      store.updateBlogPost(currentPost.id, currentPost);
      store.addAuditEntry({ action: 'update', target: 'blog', details: `Updated blog post: ${currentPost.title}` });
    } else {
      store.createBlogPost(currentPost);
      store.addAuditEntry({ action: 'create', target: 'blog', details: `Created blog post: ${currentPost.title}` });
    }
    setIsEditing(false);
    setCurrentPost(null);
    loadPosts();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentPost(null);
  };

  const handleChange = (field, value) => {
    setCurrentPost(prev => ({ ...prev, [field]: value }));
  };

  // Basic auto-slug generator
  const handleTitleChange = (e) => {
    const title = e.target.value;
    // Only auto-generate slug for new posts if user hasn't typed a custom slug
    if (!currentPost.id && (!currentPost.slug || currentPost.slug === currentPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))) {
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
          <h2>{currentPost.id ? 'Edit Blog Post' : 'New Blog Post'}</h2>
          <button className="admin-btn admin-btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>

        <div className="admin-card">
          <form onSubmit={handleSave}>
            <div className="admin-form-row">
              <div className="admin-form-group" style={{ flex: 2 }}>
                <label className="admin-label">Post Title *</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentPost.title} 
                  onChange={handleTitleChange} 
                  required 
                />
              </div>
              <div className="admin-form-group" style={{ flex: 1 }}>
                <label className="admin-label">Status</label>
                <select 
                  className="admin-input" 
                  value={currentPost.status} 
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
                value={currentPost.slug} 
                onChange={(e) => handleChange('slug', e.target.value)} 
                placeholder="e.g. green-ahom-federation-news"
              />
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Author</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentPost.author} 
                  onChange={(e) => handleChange('author', e.target.value)} 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Category</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentPost.category} 
                  onChange={(e) => handleChange('category', e.target.value)} 
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Cover Image URL</label>
              <input 
                type="text" 
                className="admin-input" 
                value={currentPost.coverImage} 
                onChange={(e) => handleChange('coverImage', e.target.value)} 
                placeholder="/images/blog/cover.jpg"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Excerpt / Summary *</label>
              <textarea 
                className="admin-input" 
                rows="3"
                value={currentPost.excerpt} 
                onChange={(e) => handleChange('excerpt', e.target.value)} 
                required 
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Content (Markdown or HTML) *</label>
              <textarea 
                className="admin-input" 
                rows="15"
                style={{ fontFamily: 'monospace' }}
                value={currentPost.content} 
                onChange={(e) => handleChange('content', e.target.value)} 
                required 
              />
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button type="submit" className="admin-btn admin-btn-primary">Save Post</button>
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
          <h2>Blog Manager</h2>
          <p className="admin-text-muted mt-1">Manage news, articles, and blog posts</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={handleAddNew}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '6px', verticalAlign: 'text-bottom' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Write New Post
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
            {posts.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 admin-text-muted">No blog posts found. Write your first post to get started.</td>
              </tr>
            ) : (
              posts.map(post => (
                <tr key={post.id}>
                  <td><strong>{post.title}</strong><br /><small className="admin-text-muted">{post.slug}</small></td>
                  <td><span className="admin-badge">{post.category}</span></td>
                  <td>{new Date(post.createdAt || Date.now()).toLocaleDateString()}</td>
                  <td>
                    <span className={`admin-badge admin-badge-${post.status === 'published' ? 'published' : 'draft'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="text-right">
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => handleEdit(post)}>Edit</button>
                      <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => handleDelete(post.id)}>Delete</button>
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

export default BlogManager;
