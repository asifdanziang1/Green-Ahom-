import React, { useState, useEffect } from 'react';
import * as store from '../contentStore';
import '../AdminStyles.css';

const UsersManager = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    setUsers(store.getUsers() || []);
  };

  const handleAddNew = () => {
    setCurrentUser({
      username: '',
      password: '',
      name: '',
      email: '',
      role: 'content_editor'
    });
    setIsEditing(true);
  };

  const handleEdit = (user) => {
    setCurrentUser({ ...user });
    setIsEditing(true);
  };

  const handleDelete = (id, username) => {
    if (id === 'user_superadmin' || username === 'admin') {
      alert('Cannot delete the root super administrator account.');
      return;
    }

    if (window.confirm(`Are you sure you want to delete administrator user "${username}"?`)) {
      store.deleteUser(id);
      loadUsers();
      store.addAuditEntry({ action: 'delete_user', target: username, details: `Deleted administrator user ID: ${id}` });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentUser.username || !currentUser.password || !currentUser.name || !currentUser.email) {
      alert('Please fill out all required fields.');
      return;
    }

    if (currentUser.id) {
      store.updateUser(currentUser.id, currentUser);
      store.addAuditEntry({ action: 'update_user', target: currentUser.username, details: `Updated admin profile/settings` });
    } else {
      // Check if username already exists
      const exists = users.some(u => u.username.toLowerCase() === currentUser.username.toLowerCase());
      if (exists) {
        alert(`Username "${currentUser.username}" is already taken.`);
        return;
      }
      store.createUser(currentUser);
      store.addAuditEntry({ action: 'create_user', target: currentUser.username, details: `Created new admin login role: ${currentUser.role}` });
    }
    setIsEditing(false);
    setCurrentUser(null);
    loadUsers();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentUser(null);
  };

  const handleChange = (field, value) => {
    setCurrentUser(prev => ({ ...prev, [field]: value }));
  };

  if (isEditing) {
    return (
      <div className="admin-page animate-fade-in">
        <div className="admin-page-header">
          <h2>{currentUser.id ? 'Edit User Credentials' : 'Create Admin Account'}</h2>
          <button className="admin-btn admin-btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>

        <div className="admin-card">
          <form onSubmit={handleSave} style={{ padding: '24px' }}>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Username (Sign In Code) *</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentUser.username} 
                  onChange={(e) => handleChange('username', e.target.value)} 
                  disabled={!!currentUser.id}
                  style={currentUser.id ? { backgroundColor: '#f3f4f6', cursor: 'not-allowed' } : {}}
                  placeholder="e.g. rofik_editor"
                  required 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Sign In Password *</label>
                <input 
                  type="password" 
                  className="admin-input" 
                  value={currentUser.password} 
                  onChange={(e) => handleChange('password', e.target.value)} 
                  placeholder="Enter security password"
                  required 
                />
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Full Name *</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentUser.name} 
                  onChange={(e) => handleChange('name', e.target.value)} 
                  placeholder="e.g. Rofik Ahmed Barbhuiya"
                  required 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Email Address *</label>
                <input 
                  type="email" 
                  className="admin-input" 
                  value={currentUser.email} 
                  onChange={(e) => handleChange('email', e.target.value)} 
                  placeholder="e.g. rofik@domain.com"
                  required 
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Administrative Role</label>
              <select 
                className="admin-input" 
                value={currentUser.role} 
                onChange={(e) => handleChange('role', e.target.value)}
                disabled={currentUser.username === 'admin'}
                style={currentUser.username === 'admin' ? { backgroundColor: '#f3f4f6', cursor: 'not-allowed' } : {}}
              >
                <option value="super_admin">Super Administrator (Full System Operations)</option>
                <option value="administrator">Administrator (Manage Sections &amp; Settings)</option>
                <option value="content_editor">Content Editor (Manage Blog &amp; Programs Only)</option>
              </select>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button type="submit" className="admin-btn admin-btn-primary">Save Account</button>
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
          <h2>Users &amp; Roles</h2>
          <p className="admin-text-muted mt-1">Configure user accounts and access levels for GAF administrators</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={handleAddNew}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '6px', verticalAlign: 'text-bottom' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Add Admin Account
        </button>
      </div>

      <div className="admin-card p-0">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td><strong>{u.name}</strong></td>
                <td><code style={{ background: '#faf9f6', padding: '2px 6px', borderRadius: '4px', border: '1px solid #e5e7eb' }}>{u.username}</code></td>
                <td>{u.email}</td>
                <td>
                  <span className={`admin-badge ${u.role === 'super_admin' ? 'admin-badge-published' : 'admin-badge-draft'}`}>
                    {u.role.replace('_', ' ')}
                  </span>
                </td>
                <td className="text-right">
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => handleEdit(u)}>Edit</button>
                    {u.username !== 'admin' && (
                      <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => handleDelete(u.id, u.username)}>Delete</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManager;
