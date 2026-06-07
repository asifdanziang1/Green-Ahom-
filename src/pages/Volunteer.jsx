import React, { useState, useEffect } from 'react';
import { useContent } from '../admin/hooks/useContent';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    skills: '',
    purpose: ''
  });
  const [status, setStatus] = useState('');

  const { getSection, isLoading } = useContent('volunteer');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, phone: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.role) return;

    setStatus('loading');

    const currentVolunteers = JSON.parse(localStorage.getItem('gaf_volunteers') || '[]');
    const newVolunteer = {
      id: 'vol_' + Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      skills: formData.skills,
      purpose: formData.purpose,
      date: new Date().toISOString(),
      status: 'Pending Review'
    };
    localStorage.setItem('gaf_volunteers', JSON.stringify([newVolunteer, ...currentVolunteers]));

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        skills: '',
        purpose: ''
      });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  const renderIcon = (name) => {
    switch (name) {
      case 'forest':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M12 2L2 22h20L12 2z" />
            <path d="M12 2v20" />
            <path d="M7 12h10" />
          </svg>
        );
      case 'artisan':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 6v12M6 12h12" />
          </svg>
        );
      case 'wetland':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M2 12h20M2 16h20M2 8h20" />
          </svg>
        );
      case 'digital':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (isLoading) return null;

  const heroSection = getSection('volunteer_hero');
  const rolesSection = getSection('volunteer_roles');
  const formInfoSection = getSection('volunteer_form_info');

  return (
    <div className="volunteer-page animate-fade-scale">
      {/* 1. HERO HEADER */}
      {heroSection && (
        <section className="hero-section-premium">
          <div className="container-custom">
            <span className="badge badge-gold">{heroSection.badge}</span>
            <h1 className="text-white mt-3">{heroSection.heading}</h1>
            <p className="vol-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
              {heroSection.subtitle}
            </p>
          </div>
        </section>
      )}

      {/* 2. ROLE PREVIEWS */}
      {rolesSection && (
        <section className="roles-section section-padding">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{rolesSection.badge}</span>
              <h2>{rolesSection.heading}</h2>
              <div className="gold-line margin-center" />
            </div>

            <div className="grid-responsive roles-grid mt-5">
              {(rolesSection.items || []).map((role) => (
                <div className="glass-card role-card" key={role.title}>
                  <div className="r-icon">{renderIcon(role.iconName)}</div>
                  <h3>{role.title}</h3>
                  <p className="r-desc">{role.desc}</p>
                  <div className="r-footer">
                    <span className="commitment-lbl text-teal">Commitment: {role.commitment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. REGISTRATION FORM */}
      <section className="reg-form-section section-padding bg-cream">
        <div className="container-custom form-wrapper">
          {formInfoSection && (
            <div className="form-text-col">
              <span className="badge">{formInfoSection.badge}</span>
              <h2>{formInfoSection.heading}</h2>
              <div className="gold-line" />
              <p className="mt-3" style={{ color: 'var(--muted)' }}>
                {formInfoSection.desc}
              </p>
              
              <div className="volunteer-induction-box mt-4">
                <h4>{formInfoSection.inductionHeading}</h4>
                <ul className="induct-list">
                  {(formInfoSection.inductionItems || []).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="form-card-col">
            <div className="glass-card reg-form-card">
              <h3>Volunteer Registration</h3>
              
              {status === 'success' ? (
                <div className="form-success-alert animate-fade-scale">
                  <div className="success-alert-badge-visual">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className="mt-3">Registration Received!</h4>
                  <p>Thank you for joining our movement. Our team will reach out to you at the email/phone provided shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-3">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Asif Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="10-digit number"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Volunteer Role</label>
                    <select
                      className="form-control"
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      required
                    >
                      <option value="">Select a Role</option>
                      <option value="Canopy Sower">Canopy Sower (Tree Planting)</option>
                      <option value="Heritage Ambassador">Heritage Ambassador (Weaving Co-op)</option>
                      <option value="Wetland Ranger">Wetland Ranger (Creek Cleaning)</option>
                      <option value="Digital Catalyst">Digital Catalyst (Content / Dev)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Relevant Skills & Experience</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Photography, botany student, social media, mapping"
                      value={formData.skills}
                      onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Statement of Purpose / Why do you want to join GAF?</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Share a brief note about what motivates you..."
                      value={formData.purpose}
                      onChange={(e) => setFormData(prev => ({ ...prev, purpose: e.target.value }))}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold w-100 mt-2"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`

        /* ROLES */
        .role-card {
          padding: 2.5rem;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .r-icon {
          margin-bottom: 1.5rem;
          width: 48px;
          height: 48px;
          background-color: rgba(217, 95, 67, 0.05);
          border: 1px solid rgba(217, 95, 67, 0.15);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .role-card:hover .r-icon {
          background-color: rgba(217, 95, 67, 0.12);
          border-color: rgba(217, 95, 67, 0.3);
          transform: scale(1.08) rotate(5deg);
        }

        .role-card h3 {
          margin-bottom: 10px;
          font-size: 1.25rem;
        }

        .r-desc {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .r-footer {
          border-top: 1px solid rgba(17, 63, 39, 0.08);
          padding-top: 1rem;
        }

        .commitment-lbl {
          font-size: 0.8rem;
          font-weight: 700;
          font-family: var(--font-body);
          text-transform: uppercase;
        }

        /* FORM */
        .form-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .form-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .volunteer-induction-box {
          background-color: var(--white);
          border: 1px dashed rgba(17, 63, 39, 0.15);
          border-radius: var(--radius-md);
          padding: 1.8rem;
        }

        .volunteer-induction-box h4 {
          margin-bottom: 12px;
          color: var(--teal);
        }

        .induct-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .induct-list li {
          font-size: 0.92rem;
          color: var(--muted);
          position: relative;
          padding-left: 20px;
        }

        .induct-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-weight: bold;
        }

        .reg-form-card {
          padding: 2.5rem;
          background-color: var(--white);
        }

        .reg-form-card h3 {
          color: var(--primary);
        }

        .form-success-alert {
          text-align: center;
          padding: 2.5rem 1rem;
        }

        .success-alert-badge-visual {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: rgba(51, 65, 85, 0.08);
          border: 1px solid rgba(51, 65, 85, 0.2);
          margin-bottom: 1rem;
        }

        .form-success-alert h4 {
          color: var(--teal);
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};

export default Volunteer;
