import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('cms'); // 'cms', 'projects', 'donations', 'volunteers', 'inquiries'

  // Dynamic state stores
  const [stats, setStats] = useState({ trees: 154820, funds: 4820500, weavers: 340, wetlands: 12 });
  const [projects, setProjects] = useState([]);
  const [donations, setDonations] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  // Project Editor Form State
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'FOREST',
    desc: '',
    metric: '',
    progress: 50,
    goal: '',
    iconName: 'forest'
  });

  // Verify auth on mount
  useEffect(() => {
    const loggedIn = sessionStorage.getItem('gaf_admin_logged_in') === 'true';
    if (loggedIn) {
      setIsAuthenticated(true);
    }
    loadAllDatabases();
    window.scrollTo(0, 0);
  }, []);

  const loadAllDatabases = () => {
    const savedStats = localStorage.getItem('gaf_stats');
    if (savedStats) setStats(JSON.parse(savedStats));

    const savedProjects = localStorage.getItem('gaf_projects');
    if (savedProjects) setProjects(JSON.parse(savedProjects));

    const savedDonations = localStorage.getItem('gaf_donations');
    if (savedDonations) setDonations(JSON.parse(savedDonations));

    const savedVolunteers = localStorage.getItem('gaf_volunteers');
    if (savedVolunteers) setVolunteers(JSON.parse(savedVolunteers));

    const savedInquiries = localStorage.getItem('gaf_inquiries');
    if (savedInquiries) setInquiries(JSON.parse(savedInquiries));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'ahom-green-2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('gaf_admin_logged_in', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid Username or Password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('gaf_admin_logged_in');
    setUsername('');
    setPassword('');
  };

  // CMS Content Update
  const handleStatsChange = (key, val) => {
    const updated = { ...stats, [key]: parseInt(val) || 0 };
    setStats(updated);
    localStorage.setItem('gaf_stats', JSON.stringify(updated));
  };

  // PROJECT CRUD HANDLERS
  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.desc || !newProject.goal) return;

    const projectToAdd = {
      ...newProject,
      id: 'proj_' + Math.random().toString(36).substr(2, 9),
      progress: parseInt(newProject.progress)
    };

    const updatedProjects = [projectToAdd, ...projects];
    setProjects(updatedProjects);
    localStorage.setItem('gaf_projects', JSON.stringify(updatedProjects));
    
    // Clear Form
    setNewProject({
      title: '',
      category: 'FOREST',
      desc: '',
      metric: '',
      progress: 50,
      goal: '',
      iconName: 'forest'
    });
    alert('Project created successfully!');
  };

  const handleDeleteProject = (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem('gaf_projects', JSON.stringify(updated));
  };

  // VOLUNTEER STATUS UPDATES
  const handleVolunteerStatusToggle = (id, currentStatus) => {
    const nextStatus = currentStatus === 'Pending Review' ? 'Contacted' : currentStatus === 'Contacted' ? 'Inducted' : 'Pending Review';
    const updated = volunteers.map(vol => {
      if (vol.id === id) {
        return { ...vol, status: nextStatus };
      }
      return vol;
    });
    setVolunteers(updated);
    localStorage.setItem('gaf_volunteers', JSON.stringify(updated));
  };

  // INQUIRIES STATUS UPDATES
  const handleInquiryReadToggle = (id) => {
    const updated = inquiries.map(inq => {
      if (inq.id === id) {
        return { ...inq, status: inq.status === 'Read' ? 'Unread' : 'Read' };
      }
      return inq;
    });
    setInquiries(updated);
    localStorage.setItem('gaf_inquiries', JSON.stringify(updated));
  };

  const handleDeleteInquiry = (id) => {
    if (!window.confirm('Delete this message?')) return;
    const updated = inquiries.filter(i => i.id !== id);
    setInquiries(updated);
    localStorage.setItem('gaf_inquiries', JSON.stringify(updated));
  };

  const renderTabIcon = (name) => {
    switch (name) {
      case 'cms':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case 'projects':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 22 22 22" />
          </svg>
        );
      case 'donations':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        );
      case 'volunteers':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        );
      case 'inquiries':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderIcon = (name) => {
    switch (name) {
      case 'education':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '6px' }}>
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        );
      case 'health':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '6px' }}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 'livelihoods':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '6px' }}>
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          </svg>
        );
      case 'relief':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '6px' }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </svg>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '6px' }}>
            <polygon points="12 2 2 22 22 22" />
          </svg>
        );
    }
  };

  return (
    <div className="admin-page-outer animate-fade-scale">
      {/* 1. LOGIN GATEWAY */}
      {!isAuthenticated ? (
        <div className="admin-login-overlay">
          <div className="glass-card login-card-box">
            <div className="login-logo-header text-center">
              <span className="logo-title">GREEN AHOM</span>
              <span className="logo-subtitle text-teal">CMS PANEL</span>
            </div>
            
            <h3 className="mt-4 text-center">Administrator Security</h3>
            <p className="text-center text-muted fs-12">Authorized GAF secretariate personnel only.</p>
            
            {loginError && <div className="login-error-alert">{loginError}</div>}

            <form onSubmit={handleLoginSubmit} className="mt-3">
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-gold w-100 mt-2">Unlock Dashboard</button>
            </form>
          </div>
        </div>
      ) : (
        /* 2. CMS WORKSPACE */
        <div className="admin-workspace-container">
          {/* Sidebar */}
          <aside className="admin-sidebar bg-primary">
            <div className="sidebar-header">
              <span className="logo-title text-white" style={{ color: 'var(--white)' }}>GAF ADMIN</span>
              <span className="logo-subtitle text-gold">WORKSPACE</span>
            </div>
            
            <nav className="sidebar-nav mt-4">
              <button className={`nav-tab-btn ${activeTab === 'cms' ? 'active' : ''}`} onClick={() => setActiveTab('cms')}>
                {renderTabIcon('cms')} Content CMS
              </button>
              <button className={`nav-tab-btn ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
                {renderTabIcon('projects')} Project Manager
              </button>
              <button className={`nav-tab-btn ${activeTab === 'donations' ? 'active' : ''}`} onClick={() => setActiveTab('donations')}>
                {renderTabIcon('donations')} Donations Tracker
              </button>
              <button className={`nav-tab-btn ${activeTab === 'volunteers' ? 'active' : ''}`} onClick={() => setActiveTab('volunteers')}>
                {renderTabIcon('volunteers')} Volunteers ({volunteers.length})
              </button>
              <button className={`nav-tab-btn ${activeTab === 'inquiries' ? 'active' : ''}`} onClick={() => setActiveTab('inquiries')}>
                {renderTabIcon('inquiries')} Messages ({inquiries.length})
              </button>
            </nav>

            <button className="btn-admin-logout" onClick={handleLogout}>Log Out Securely ➔</button>
          </aside>

          {/* Main Panel Content */}
          <main className="admin-main-panel">
            
            {/* TAB 1: CONTENT CMS */}
            {activeTab === 'cms' && (
              <div className="panel-tab-content animate-reveal">
                <h2>Content CMS Engine</h2>
                <p className="tab-desc">Edit key statistical numbers dynamically across all landing pages.</p>
                
                <div className="glass-card stat-editor-grid mt-4">
                  <h3>Verified Canopy Stats</h3>
                  <div className="form-group-row mt-3">
                    <div className="form-group">
                      <label className="form-label">Ideal Academy Students</label>
                      <input
                        type="number"
                        className="form-control"
                        value={stats.trees}
                        onChange={(e) => handleStatsChange('trees', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Funds Mobilized (INR)</label>
                      <input
                        type="number"
                        className="form-control"
                        value={stats.funds}
                        onChange={(e) => handleStatsChange('funds', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group-row mt-3">
                    <div className="form-group">
                      <label className="form-label">Weavers & Farmers Supported</label>
                      <input
                        type="number"
                        className="form-control"
                        value={stats.weavers}
                        onChange={(e) => handleStatsChange('weavers', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Wetlands Protected</label>
                      <input
                        type="number"
                        className="form-control"
                        value={stats.wetlands}
                        onChange={(e) => handleStatsChange('wetlands', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="cms-success-tip mt-3 text-teal">
                    Stats automatically saved to browser database and updated on landing pages.
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROJECTS CRUD */}
            {activeTab === 'projects' && (
              <div className="panel-tab-content animate-reveal">
                <h2>Project Campaign Manager</h2>
                <p className="tab-desc">Create or remove GAF conservation programs dynamically under "Our Work".</p>

                <div className="project-crud-layout mt-4">
                  {/* Create Project Form */}
                  <div className="glass-card proj-form-card">
                    <h3>Add New Program</h3>
                    <form onSubmit={handleCreateProject} className="mt-3">
                      <div className="form-group">
                        <label className="form-label">Campaign Title</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. Majuli Riverbank Reforestation"
                          value={newProject.title}
                          onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="form-group-row">
                        <div className="form-group">
                          <label className="form-label">Category</label>
                          <select
                            className="form-control"
                            value={newProject.category}
                            onChange={(e) => setNewProject(prev => ({ ...prev, category: e.target.value }))}
                          >
                            <option value="EDUCATION">Education (Ideal Academy)</option>
                            <option value="HEALTH">Health &amp; Nutrition</option>
                            <option value="LIVELIHOODS">Sustainable Livelihoods</option>
                            <option value="RELIEF">Disaster Relief</option>
                            <option value="ENVIRONMENT">Environment &amp; Climate</option>
                            <option value="INFRASTRUCTURE">Rural Development</option>
                            <option value="COMMUNITY">Social Empowerment</option>
                            <option value="ANIMAL CARE">Animal Welfare</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Icon Type</label>
                          <select
                            className="form-control"
                            value={newProject.iconName}
                            onChange={(e) => setNewProject(prev => ({ ...prev, iconName: e.target.value }))}
                          >
                            <option value="education">Education Icon</option>
                            <option value="health">Health Icon</option>
                            <option value="livelihoods">Livelihood Icon</option>
                            <option value="relief">Relief Icon</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Description Copy</label>
                        <textarea
                          className="form-control"
                          rows="2"
                          placeholder="Rich copy describing on the ground outcomes..."
                          value={newProject.desc}
                          onChange={(e) => setNewProject(prev => ({ ...prev, desc: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="form-group-row">
                        <div className="form-group">
                          <label className="form-label">Progress Goal Tag</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. 50,000 saplings sowed"
                            value={newProject.metric}
                            onChange={(e) => setNewProject(prev => ({ ...prev, metric: e.target.value }))}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Target Metric</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. 100,000 saplings"
                            value={newProject.goal}
                            onChange={(e) => setNewProject(prev => ({ ...prev, goal: e.target.value }))}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Initial Progress Indicator (%)</label>
                        <input
                          type="number"
                          className="form-control"
                          min="0"
                          max="100"
                          value={newProject.progress}
                          onChange={(e) => setNewProject(prev => ({ ...prev, progress: e.target.value }))}
                        />
                      </div>

                      <button type="submit" className="btn btn-gold w-100 mt-2">Publish Campaign</button>
                    </form>
                  </div>

                  {/* Existing Campaigns List */}
                  <div className="existing-projects-list">
                    <h3>Active Programs ({projects.length})</h3>
                    <div className="proj-list-cards-scroll mt-3">
                      {projects.map((proj) => (
                        <div className="glass-card proj-card-list-item" key={proj.id}>
                          <div className="proj-list-header">
                            <strong>{renderIcon(proj.iconName)}{proj.title}</strong>
                            <span className="badge">{proj.category}</span>
                          </div>
                          <p className="fs-12 text-muted mt-2">{proj.desc}</p>
                          <div className="proj-list-footer mt-3">
                            <span className="fs-11 font-weight-bold">Target: {proj.goal}</span>
                            <button className="btn-proj-delete" onClick={() => handleDeleteProject(proj.id)}>Delete</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DONATION TRACKER */}
            {activeTab === 'donations' && (
              <div className="panel-tab-content animate-reveal">
                <h2>Razorpay Donation Ledger</h2>
                <p className="tab-desc">Verifies payment logs executed through our checkout modal simulator.</p>

                {donations.length > 0 ? (
                  <div className="glass-card ledger-box mt-4">
                    <div className="table-responsive">
                      <table className="ledger-table">
                        <thead>
                          <tr>
                            <th>Transaction ID</th>
                            <th>Donor Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Exemption Exemption</th>
                            <th>Date</th>
                            <th>Method</th>
                          </tr>
                        </thead>
                        <tbody>
                          {donations.map((tx) => (
                            <tr key={tx.id}>
                              <td><code>{tx.id}</code></td>
                              <td><strong>{tx.donorName}</strong></td>
                              <td>{tx.donorEmail}</td>
                              <td className="text-teal font-weight-bold">₹{tx.amount.toLocaleString('en-IN')}</td>
                              <td>{tx.pan ? <code className="pan-code-badge">{tx.pan}</code> : 'None'}</td>
                              <td>{new Date(tx.date).toLocaleDateString('en-IN')}</td>
                              <td><span className="method-label-pill">{tx.method}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="glass-card empty-ledger text-center mt-4">
                    <span className="empty-ic">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ margin: '0 auto' }}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <line x1="12" y1="18" x2="12" y2="6" />
                        <path d="M16 8h-4a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5h-4" />
                      </svg>
                    </span>
                    <h3 className="mt-3">No donation transactions sowed yet</h3>
                    <p>Trigger the simulated Razorpay Modal on the Donate page to test end-to-end ledger logging!</p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: VOLUNTEERS */}
            {activeTab === 'volunteers' && (
              <div className="panel-tab-content animate-reveal">
                <h2>Volunteer Registration Inboxes</h2>
                <p className="tab-desc">Review recruitment applications submitted via our public portal.</p>

                {volunteers.length > 0 ? (
                  <div className="inbox-cards-grid mt-4">
                    {volunteers.map((vol) => (
                      <div className="glass-card inbox-item-card" key={vol.id}>
                        <div className="inbox-item-header">
                          <strong>{vol.name}</strong>
                          <span className={`status-pill ${vol.status.toLowerCase().replace(' ', '-')}`}>
                            {vol.status}
                          </span>
                        </div>
                        <div className="inbox-item-contact fs-12 mt-1">
                          Email: {vol.email} | Phone: {vol.phone}
                        </div>
                        <div className="inbox-item-role text-teal mt-2">
                          Preferred Role: <strong>{vol.role}</strong>
                        </div>
                        {vol.skills && <div className="inbox-item-skills fs-12 mt-2">Skills: {vol.skills}</div>}
                        <div className="inbox-item-purpose mt-3">
                          <p>"{vol.purpose}"</p>
                        </div>
                        <div className="inbox-item-footer mt-3">
                          <span className="date-tag">Received: {new Date(vol.date).toLocaleDateString('en-IN')}</span>
                          <button 
                            className="btn-status-toggle"
                            onClick={() => handleVolunteerStatusToggle(vol.id, vol.status)}
                          >
                            Toggle Status
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="glass-card empty-ledger text-center mt-4">
                    <span className="empty-ic">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ margin: '0 auto' }}>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                    </span>
                    <h3 className="mt-3">Volunteer squad inbox is empty</h3>
                    <p>Applications sowed via our public registration form appear here immediately.</p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: INQUIRIES */}
            {activeTab === 'inquiries' && (
              <div className="panel-tab-content animate-reveal">
                <h2>Contact & Inquiry Secretariat Inboxes</h2>
                <p className="tab-desc">Read messages submitted via our public contact form.</p>

                {inquiries.length > 0 ? (
                  <div className="inbox-cards-grid mt-4">
                    {inquiries.map((inq) => (
                      <div className="glass-card inbox-item-card" key={inq.id}>
                        <div className="inbox-item-header">
                          <strong>{inq.name}</strong>
                          <span className={`status-pill ${inq.status.toLowerCase()}`}>
                            {inq.status}
                          </span>
                        </div>
                        <div className="inbox-item-contact fs-12 mt-1">
                          Email: {inq.email} {inq.phone ? `| Phone: ${inq.phone}` : ''}
                        </div>
                        <div className="inbox-item-role text-teal mt-2">
                          Subject/Company: <strong>{inq.company}</strong>
                        </div>
                        <div className="inbox-item-purpose mt-3">
                          <p>"{inq.message}"</p>
                        </div>
                        <div className="inbox-item-footer mt-3">
                          <span className="date-tag">Received: {new Date(inq.date).toLocaleDateString('en-IN')}</span>
                          <div className="actions-row-inbox">
                            <button 
                              className="btn-status-toggle"
                              onClick={() => handleInquiryReadToggle(inq.id)}
                            >
                              {inq.status === 'Read' ? 'Mark Unread' : 'Mark Read'}
                            </button>
                            <button 
                              className="btn-delete-inq"
                              onClick={() => handleDeleteInquiry(inq.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="glass-card empty-ledger text-center mt-4">
                    <span className="empty-ic">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ margin: '0 auto' }}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <h3 className="mt-3">Inquiry inbox is empty</h3>
                    <p>Inquiries received from the Contact page are logged here in real time.</p>
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      )}

      <style>{`
        /* LOGIN DIALOG */
        .admin-login-overlay {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .login-card-box {
          width: 100%;
          max-width: 400px;
          padding: 3rem 2.2rem;
          background-color: var(--white);
        }

        .login-logo-header {
          display: flex;
          flex-direction: column;
        }

        .login-error-alert {
          background-color: rgba(231, 76, 60, 0.1);
          color: #c0392b;
          border: 1px solid rgba(231, 76, 60, 0.2);
          border-radius: var(--radius-sm);
          padding: 10px;
          font-size: 12px;
          margin-top: 15px;
          text-align: center;
          font-weight: 600;
        }

        /* WORKSPACE LAYOUT */
        .admin-workspace-container {
          display: flex;
          min-height: 100vh;
          background-color: #f9f9f6;
        }

        @media (max-width: 768px) {
          .admin-workspace-container {
            flex-direction: column;
          }
        }

        .admin-sidebar {
          width: 280px;
          border-right: 1px solid var(--border-glass);
          padding: 2.5rem 1.8rem;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .admin-sidebar {
            width: 100%;
            padding: 2rem;
          }
        }

        .sidebar-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-tab-btn {
          width: 100%;
          background: transparent;
          border: none;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          text-align: left;
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-tab-btn:hover {
          color: var(--white);
          background-color: rgba(255,255,255,0.06);
        }

        .nav-tab-btn.active {
          color: var(--white);
          background-color: var(--gold);
        }

        .btn-admin-logout {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.45);
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          text-align: left;
          padding: 8px 16px;
          margin-top: 2rem;
        }

        .btn-admin-logout:hover {
          color: var(--gold);
        }

        /* MAIN PANEL */
        .admin-main-panel {
          flex: 1;
          padding: 3rem clamp(1.5rem, 4vw, 4rem);
          overflow-y: auto;
        }

        .panel-tab-content h2 {
          color: var(--primary);
        }

        .tab-desc {
          font-size: 0.95rem;
          color: var(--muted);
          margin-bottom: 2rem;
        }

        /* TAB 1: STATS EDITOR */
        .stat-editor-grid {
          padding: 2.5rem;
          background-color: var(--white);
          max-width: 700px;
        }

        .stat-editor-grid h3 {
          margin-bottom: 20px;
        }

        .cms-success-tip {
          font-size: 0.85rem;
          font-weight: 700;
        }

        /* TAB 2: PROJECTS CRUD LAYOUT */
        .project-crud-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: flex-start;
        }

        @media (max-width: 991px) {
          .project-crud-layout {
            grid-template-columns: 1fr;
          }
        }

        .proj-form-card {
          padding: 2rem;
          background-color: var(--white);
        }

        .proj-list-cards-scroll {
          display: flex;
          flex-direction: column;
          gap: 15px;
          max-height: 550px;
          overflow-y: auto;
          padding-right: 8px;
        }

        .proj-card-list-item {
          padding: 1.5rem;
          background-color: var(--white);
        }

        .proj-list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .proj-list-header strong {
          color: var(--primary);
          font-size: 0.95rem;
          display: flex;
          align-items: center;
        }

        .proj-list-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eaeaea;
          padding-top: 10px;
        }

        .btn-proj-delete {
          background: transparent;
          border: none;
          color: #e74c3c;
          font-family: var(--font-body);
          font-weight: bold;
          font-size: 11px;
          cursor: pointer;
        }

        /* TAB 3: LEDGER TABLE */
        .ledger-box {
          background-color: var(--white);
          padding: 1.5rem;
        }

        .table-responsive {
          overflow-x: auto;
        }

        .ledger-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13px;
        }

        .ledger-table th {
          padding: 12px 16px;
          border-bottom: 2px solid #eaeaea;
          color: var(--primary);
          font-family: var(--font-body);
          font-weight: 700;
        }

        .ledger-table td {
          padding: 12px 16px;
          border-bottom: 1px solid #eaeaea;
        }

        .pan-code-badge {
          background-color: #faf9f6;
          border: 1px solid #eaeaea;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          font-size: 11px;
          font-weight: bold;
        }

        .method-label-pill {
          background-color: rgba(26, 45, 66, 0.05);
          border: 1px solid rgba(26, 45, 66, 0.1);
          color: var(--primary);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 10px;
          font-weight: bold;
        }

        .empty-ledger {
          padding: 4rem 2rem;
        }

        .empty-ic {
          display: block;
          margin-bottom: 1rem;
        }

        /* VOLUNTEER & INQUIRY INBOX CARDS */
        .inbox-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .inbox-item-card {
          padding: 1.8rem;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
        }

        .inbox-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .inbox-item-header strong {
          font-family: var(--font-header);
          font-size: 1.15rem;
          color: var(--primary);
        }

        .status-pill {
          font-size: 9px;
          font-weight: bold;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-pill.pending-review, .status-pill.unread {
          background-color: rgba(217, 95, 67, 0.08);
          border: 1px solid rgba(217, 95, 67, 0.15);
          color: var(--gold);
        }

        .status-pill.contacted, .status-pill.read {
          background-color: rgba(52, 78, 104, 0.05);
          border: 1px solid rgba(52, 78, 104, 0.1);
          color: var(--teal);
        }

        .status-pill.inducted {
          background-color: rgba(217, 95, 67, 0.08);
          border: 1px solid rgba(217, 95, 67, 0.2);
          color: var(--gold);
        }

        .inbox-item-contact {
          color: var(--muted);
          font-weight: 500;
        }

        .inbox-item-role {
          font-size: 0.85rem;
        }

        .inbox-item-skills {
          background-color: #faf9f6;
          border: 1px solid #eaeaea;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          color: var(--muted);
        }

        .inbox-item-purpose {
          background-color: #faf9f6;
          padding: 12px;
          border-radius: var(--radius-sm);
          border: 1px solid #eaeaea;
          font-style: italic;
          font-size: 0.88rem;
          color: var(--muted);
          flex-grow: 1;
        }

        .inbox-item-purpose p {
          margin: 0;
          line-height: 1.5;
        }

        .inbox-item-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eaeaea;
          padding-top: 12px;
        }

        .date-tag {
          font-size: 11px;
          color: var(--muted);
          font-weight: bold;
        }

        .btn-status-toggle {
          background-color: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
        }

        .btn-status-toggle:hover {
          background-color: var(--primary);
          color: var(--white);
        }

        .actions-row-inbox {
          display: flex;
          gap: 8px;
        }

        .btn-delete-inq {
          background-color: transparent;
          border: 1px solid #e74c3c;
          color: #e74c3c;
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
        }

        .btn-delete-inq:hover {
          background-color: #e74c3c;
          color: var(--white);
        }
      `}</style>
    </div>
  );
};

export default Admin;
