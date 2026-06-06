import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../hooks/useAdmin';

const Dashboard = () => {
  const admin = useAdmin();

  // Compute stats
  const pageCount = admin.content ? Object.keys(admin.content).length : 0;
  const publishedSectionsCount = admin.content ? 
    Object.values(admin.content).reduce((acc, page) => 
      acc + (page.sections?.filter(s => s.status === 'published')?.length || 0)
    , 0) : 0;
  
  const draftSectionsCount = admin.content ? 
    Object.values(admin.content).reduce((acc, page) => 
      acc + (page.sections?.filter(s => s.status === 'draft')?.length || 0)
    , 0) : 0;

  const blogCount = admin.blogPosts?.length || 0;
  const articleCount = admin.articles?.length || 0;
  const programCount = admin.programs?.length || 0;

  const getRecentAudit = () => {
    return (admin.auditLog || []).slice(0, 5);
  };

  const formatDate = (isoString) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    } catch {
      return 'Recently';
    }
  };

  return (
    <div className="admin-dashboard">
      
      {/* Welcome Banner */}
      <div className="admin-card mb-4" style={{ background: 'linear-gradient(135deg, var(--admin-primary) 0%, var(--admin-primary-light) 100%)', color: 'white', border: 'none' }}>
        <div className="admin-card-body flex-between">
          <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '1.5rem', color: 'white' }}>Welcome back, {store.safeGet('gaf_admin_session', { name: 'Admin' }).name}</h2>
            <p style={{ margin: 0, opacity: 0.8 }}>Here's what's happening with your content today.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{new Date().toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
            <div style={{ opacity: 0.8 }}>System Status: All Systems Operational</div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="admin-grid grid-cols-4 mb-4">
        <div className="stat-card">
          <div className="stat-card-info">
            <h3>Website Pages</h3>
            <p className="value">{pageCount}</p>
          </div>
          <div className="stat-card-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
            </svg>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-card-info">
            <h3>Active Sections</h3>
            <p className="value">{publishedSectionsCount}</p>
          </div>
          <div className="stat-card-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-info">
            <h3>Blog / Articles</h3>
            <p className="value">{blogCount + articleCount}</p>
          </div>
          <div className="stat-card-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5m-4 3.5v-3.5m0 0H9m4 0H9" />
            </svg>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-info">
            <h3>Programs</h3>
            <p className="value">{programCount}</p>
          </div>
          <div className="stat-card-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="admin-grid grid-cols-3">
        
        {/* Quick Actions */}
        <div className="admin-card" style={{ gridColumn: 'span 2' }}>
          <div className="admin-card-header">
            <h3 className="admin-card-title">Quick Actions</h3>
          </div>
          <div className="admin-card-body">
            <div className="admin-grid grid-cols-3" style={{ gap: '16px' }}>
              <Link to="/admin/sections/home" className="admin-btn admin-btn-secondary" style={{ flexDirection: 'column', height: '100px', gap: '12px' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Edit Homepage
              </Link>
              <Link to="/admin/sections/about" className="admin-btn admin-btn-secondary" style={{ flexDirection: 'column', height: '100px', gap: '12px' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Edit About Us
              </Link>
              <Link to="/admin/programs/new" className="admin-btn admin-btn-secondary" style={{ flexDirection: 'column', height: '100px', gap: '12px' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                Add Program
              </Link>
              <Link to="/admin/blog/new" className="admin-btn admin-btn-secondary" style={{ flexDirection: 'column', height: '100px', gap: '12px' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                Write Post
              </Link>
              <Link to="/admin/media" className="admin-btn admin-btn-secondary" style={{ flexDirection: 'column', height: '100px', gap: '12px' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Upload Media
              </Link>
              <Link to="/admin/payments" className="admin-btn admin-btn-secondary" style={{ flexDirection: 'column', height: '100px', gap: '12px' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Payment Config
              </Link>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="admin-card">
          <div className="admin-card-header flex-between">
            <h3 className="admin-card-title">Recent Activity</h3>
            <span className="admin-status-badge badge-draft">{draftSectionsCount} Drafts</span>
          </div>
          <div className="admin-card-body" style={{ padding: '0' }}>
            {getRecentAudit().length > 0 ? (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {getRecentAudit().map((log, i) => (
                  <li key={i} style={{ padding: '16px 24px', borderBottom: '1px solid var(--admin-border)', display: 'flex', gap: '12px' }}>
                    <div style={{ marginTop: '2px', color: 'var(--admin-gold)' }}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '4px' }}>{log.action}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)', marginBottom: '4px' }}>{log.details}</div>
                      <div style={{ fontSize: '0.75rem', color: '#999' }}>{formatDate(log.timestamp)} by {log.user}</div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{ padding: '40px 24px', textAlign: 'center', color: 'var(--admin-text-muted)' }}>
                No recent activity to display.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

// Need to import store manually here since useAdmin doesn't expose safeGet directly
import * as store from '../contentStore';

export default Dashboard;
