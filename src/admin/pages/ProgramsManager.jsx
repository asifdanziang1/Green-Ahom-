import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as store from '../contentStore';
import '../AdminStyles.css';

const ProgramsManager = () => {
  const location = useLocation();
  const [programs, setPrograms] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(null);

  // Load programs on mount
  useEffect(() => {
    loadPrograms();
    if (location.search.includes('action=new')) {
      handleAddNew();
    }
  }, [location.search]);

  const loadPrograms = () => {
    // If empty in store, try to initialize from schema if needed? 
    // contentStore getPrograms usually returns what's in localstorage
    let data = store.getPrograms();
    if (!data || data.length === 0) {
      // It might be uninitialized, let's just show an empty list
      data = [];
    }
    setPrograms(data);
  };

  const handleAddNew = () => {
    setCurrentProgram({
      title: '',
      year: new Date().getFullYear().toString(),
      category: '',
      desc: '',
      location: '',
      budget: '',
      metric: '',
      progress: 0,
      imageUrl: '',
      iconName: 'health',
      status: 'draft'
    });
    setIsEditing(true);
  };

  const handleEdit = (prog) => {
    setCurrentProgram({ ...prog });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      store.deleteProgram(id);
      loadPrograms();
      store.addAuditEntry({ action: 'delete', target: 'program', details: `Deleted program ID: ${id}` });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (currentProgram.id) {
      store.updateProgram(currentProgram.id, currentProgram);
      store.addAuditEntry({ action: 'update', target: 'program', details: `Updated program: ${currentProgram.title}` });
    } else {
      store.createProgram(currentProgram);
      store.addAuditEntry({ action: 'create', target: 'program', details: `Created program: ${currentProgram.title}` });
    }
    setIsEditing(false);
    setCurrentProgram(null);
    loadPrograms();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentProgram(null);
  };

  const handleChange = (field, value) => {
    setCurrentProgram(prev => ({ ...prev, [field]: value }));
  };

  if (isEditing) {
    return (
      <div className="admin-page animate-fade-in">
        <div className="admin-page-header">
          <h2>{currentProgram.id ? 'Edit Program' : 'New Program'}</h2>
          <button className="admin-btn admin-btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>

        <div className="admin-card">
          <form onSubmit={handleSave}>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Program Title *</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentProgram.title} 
                  onChange={(e) => handleChange('title', e.target.value)} 
                  required 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Status</label>
                <select 
                  className="admin-input" 
                  value={currentProgram.status} 
                  onChange={(e) => handleChange('status', e.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Year / Period</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentProgram.year} 
                  onChange={(e) => handleChange('year', e.target.value)} 
                  placeholder="e.g. FY 2024-2025" 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Category</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentProgram.category} 
                  onChange={(e) => handleChange('category', e.target.value)} 
                  placeholder="e.g. HEALTH, EDUCATION" 
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Description *</label>
              <textarea 
                className="admin-input" 
                rows="4"
                value={currentProgram.desc} 
                onChange={(e) => handleChange('desc', e.target.value)} 
                required 
              />
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Location</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentProgram.location} 
                  onChange={(e) => handleChange('location', e.target.value)} 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Budget</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentProgram.budget} 
                  onChange={(e) => handleChange('budget', e.target.value)} 
                />
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Metric Summary</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentProgram.metric} 
                  onChange={(e) => handleChange('metric', e.target.value)} 
                  placeholder="e.g. Treatment Adherence Supported"
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Progress (%)</label>
                <input 
                  type="number" 
                  className="admin-input" 
                  min="0" max="100"
                  value={currentProgram.progress} 
                  onChange={(e) => handleChange('progress', Number(e.target.value))} 
                />
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label className="admin-label">Image URL</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={currentProgram.imageUrl} 
                  onChange={(e) => handleChange('imageUrl', e.target.value)} 
                  placeholder="/images/example.jpg"
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Icon Name</label>
                <select 
                  className="admin-input" 
                  value={currentProgram.iconName} 
                  onChange={(e) => handleChange('iconName', e.target.value)}
                >
                  <option value="health">Health</option>
                  <option value="education">Education</option>
                  <option value="environment">Environment</option>
                  <option value="relief">Relief</option>
                  <option value="animal">Animal</option>
                  <option value="water">Water/Sanitation</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button type="submit" className="admin-btn admin-btn-primary">Save Program</button>
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
          <h2>Programs Manager</h2>
          <p className="admin-text-muted mt-1">Manage ongoing and completed field programs</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={handleAddNew}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '6px', verticalAlign: 'text-bottom' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Program
        </button>
      </div>

      <div className="admin-card p-0">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Year</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {programs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 admin-text-muted">No programs found. Create one to get started.</td>
              </tr>
            ) : (
              programs.map(prog => (
                <tr key={prog.id}>
                  <td><strong>{prog.title}</strong></td>
                  <td><span className="admin-badge">{prog.category}</span></td>
                  <td>{prog.year}</td>
                  <td>
                    <span className={`admin-badge admin-badge-${prog.status === 'published' ? 'published' : 'draft'}`}>
                      {prog.status}
                    </span>
                  </td>
                  <td className="text-right">
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => handleEdit(prog)}>Edit</button>
                      <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => handleDelete(prog.id)}>Delete</button>
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

export default ProgramsManager;
