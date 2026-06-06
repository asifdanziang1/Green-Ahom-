import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import * as store from './contentStore';
import './AdminStyles.css';

const AdminLayout = () => {
  const [session, setSession] = useState(store.safeGet('gaf_admin_session', null));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = store.authenticateUser(username, password);
    if (user) {
      store.safeSet('gaf_admin_session', user);
      setSession(user);
      store.addAuditEntry({ action: 'login', target: 'system', details: 'User logged in', user: user.username });
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    store.addAuditEntry({ action: 'logout', target: 'system', details: 'User logged out', user: session?.username });
    localStorage.removeItem('gaf_admin_session');
    setSession(null);
  };

  if (!session) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card">
          <div className="admin-login-logo">
            <img src="/logo.png" alt="GAF Logo" />
            <h1>CMS Workspace</h1>
          </div>
          <form onSubmit={handleLogin}>
            {error && <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center', fontSize: '14px' }}>{error}</div>}
            <div className="admin-form-group">
              <label className="admin-label">Username</label>
              <input 
                type="text" 
                className="admin-input" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Password</label>
              <input 
                type="password" 
                className="admin-input" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="admin-btn admin-btn-primary" style={{ width: '100%' }}>Sign In</button>
          </form>
          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
            Hint: admin / ahom-green-2026
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: 'Dashboard', path: '/admin', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: 'Website Sections', path: '/admin/sections', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { label: 'Programs', path: '/admin/programs', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Blog Posts', path: '/admin/blog', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
    { label: 'Articles', path: '/admin/articles', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { label: 'Legal Pages', path: '/admin/legal', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { label: 'Media Library', path: '/admin/media', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { label: 'Payment Settings', path: '/admin/payments', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { label: 'SEO Config', path: '/admin/seo', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
    { label: 'Users & Roles', path: '/admin/users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { label: 'Settings', path: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <div className="admin-body">
      <div className="admin-layout">
        
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="admin-sidebar-header">
            <h2>GAF Admin</h2>
          </div>
          <nav className="admin-sidebar-nav">
            {navItems.map(item => {
              const isActive = item.path === '/admin' ? location.pathname === '/admin' : location.pathname.startsWith(item.path);
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`admin-nav-item ${isActive ? 'active' : ''}`}
                >
                  <svg className="admin-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="admin-sidebar-footer">
            <button 
              onClick={handleLogout} 
              className="admin-btn admin-btn-secondary" 
              style={{ width: '100%', background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Log Out
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="admin-main">
          {/* Header */}
          <header className="admin-header">
            <h1 className="admin-header-title">
              {navItems.find(i => i.path === '/admin' ? location.pathname === '/admin' : location.pathname.startsWith(i.path))?.label || 'Dashboard'}
            </h1>
            <div className="admin-header-actions">
              <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--admin-text-muted)' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="admin-user-badge">
                <div className="admin-user-avatar">
                  {session.name.charAt(0)}
                </div>
                {session.name}
              </div>
            </div>
          </header>

          {/* Content Area */}
          <div className="admin-content">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
