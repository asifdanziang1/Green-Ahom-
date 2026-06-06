import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../hooks/useAdmin';

const SectionsManager = () => {
  const { content } = useAdmin();

  if (!content) return <div>Loading...</div>;

  const pages = Object.keys(content).map(pageId => ({
    id: pageId,
    ...content[pageId]
  })).filter(page => page.meta && page.id !== 'navigation' && page.id !== 'footer');

  return (
    <div className="admin-sections-manager">
      <div className="flex-between mb-4">
        <h2>Website Sections Manager</h2>
        <Link to="/admin/sections/navigation" className="admin-btn admin-btn-secondary">
          Edit Global Navigation
        </Link>
      </div>
      
      <p className="text-muted mb-4">
        Select a page below to edit its content, manage its sections, and update its layout.
      </p>

      <div className="admin-grid grid-cols-3">
        {pages.map(page => {
          const publishedSections = page.sections?.filter(s => s.status === 'published')?.length || 0;
          const totalSections = page.sections?.length || 0;

          return (
            <div key={page.id} className="admin-card" style={{ marginBottom: 0 }}>
              <div className="admin-card-body">
                <div className="flex-between mb-4">
                  <h3 style={{ margin: 0 }}>{page.meta.title.split('|')[0].trim()}</h3>
                  <span className="admin-status-badge badge-published">Active</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--admin-text-muted)', marginBottom: '16px' }}>
                  Path: {page.meta.slug}
                </div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{totalSections}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>Total Sections</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{publishedSections}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>Published</div>
                  </div>
                </div>
                <Link to={`/admin/sections/${page.id}`} className="admin-btn admin-btn-primary" style={{ width: '100%' }}>
                  Edit Page Content
                </Link>
              </div>
            </div>
          );
        })}

        <div className="admin-card" style={{ marginBottom: 0 }}>
          <div className="admin-card-body text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '220px' }}>
            <div style={{ color: 'var(--admin-text-muted)', marginBottom: '16px' }}>
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 style={{ margin: '0 0 8px 0' }}>Add New Page</h3>
            <p className="text-muted text-sm" style={{ marginBottom: '16px' }}>Create a new custom landing page or content section.</p>
            <button className="admin-btn admin-btn-secondary" disabled>Coming Soon</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionsManager;
