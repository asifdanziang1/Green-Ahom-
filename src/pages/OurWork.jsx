import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RazorpayModal from '../components/RazorpayModal';
import { usePrograms } from '../admin/hooks/useContent';

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeYear, setActiveYear] = useState('ALL');
  const programs = usePrograms();
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1500);
  const [selectedProjectName, setSelectedProjectName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDonateTrigger = (projectName) => {
    setSelectedProjectName(projectName);
    setSelectedAmount(1500);
    setIsPayModalOpen(true);
  };

  const handleSuccessClose = () => {
    setIsPayModalOpen(false);
  };

  const categories = ['ALL', 'EDUCATION', 'HEALTH', 'LIVELIHOODS', 'RELIEF', 'ENVIRONMENT', 'INFRASTRUCTURE', 'COMMUNITY', 'ANIMAL CARE'];
  const years = ['ALL', 'FY 2024-2025', 'FY 2023-2024', 'FY 2022-2023'];

  // Compound Filter Logic
  const filteredProjects = programs.filter(p => {
    const categoryMatch = activeCategory === 'ALL' || p.category.toUpperCase() === activeCategory;
    const yearMatch = activeYear === 'ALL' || p.year === activeYear;
    return categoryMatch && yearMatch;
  });

  const renderIcon = (name) => {
    switch (name) {
      case 'education':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        );
      case 'health':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 'livelihoods':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case 'relief':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      case 'environment':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-4-4-4-4-2 2.4-4 4-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
          </svg>
        );
      case 'infrastructure':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="10" x2="6" y2="14" />
            <line x1="18" y1="10" x2="18" y2="14" />
          </svg>
        );
      case 'social':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'animal':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="work-page animate-fade-scale">
      {/* 1. HEADER HERO */}
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">STATUTORY CAMPAIGNS DIRECTORY</span>
          <h1 className="text-white mt-3">Verified Operational Portfolio</h1>
          <p className="hero-subtitle-premium">
            Explore Green Ahom Federation's complete 3-year programmatic achievements. Filter by specific financial year or target category to trace audited grassroots disbursements.
          </p>
        </div>
      </section>

      {/* 2. FILTER BAR & LISTINGS */}
      <section className="listings-section section-padding">
        <div className="container-custom">
          
          {/* YEAR FILTERS */}
          <div className="year-filters-container">
            <span className="filter-label">Filter by Financial Year:</span>
            <div className="year-filters-row">
              {years.map((yr) => (
                <button
                  key={yr}
                  className={`year-filter-btn ${activeYear === yr ? 'active' : ''}`}
                  onClick={() => setActiveYear(yr)}
                >
                  {yr === 'ALL' ? 'Show All Years' : yr}
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="category-filters-container mt-4">
            <span className="filter-label">Filter by Program Category:</span>
            <div className="filter-controls-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT LIST GRID */}
          {filteredProjects.length > 0 ? (
            <div className="grid-responsive work-projects-grid mt-5">
              {filteredProjects.map((project, idx) => (
                <div 
                  className="glass-card work-project-card animate-reveal" 
                  key={project.id || idx}
                  style={{ animationDelay: `${idx * 0.04}s` }}
                >
                  <div className="proj-header-banner" style={{ background: `linear-gradient(to bottom, rgba(17, 63, 39, 0.4) 0%, rgba(17, 63, 39, 0.8) 100%), url(${project.imageUrl}) center/cover no-repeat` }}>
                    <div className="proj-banner-meta">
                      <span className="proj-badge-category">{project.category}</span>
                      <span className="proj-badge-year">{project.year}</span>
                    </div>
                    <span className="proj-badge-icon-wrapper">{renderIcon(project.iconName)}</span>
                  </div>
                  
                  <div className="proj-body-inner">
                    <h3>{project.title}</h3>
                    <p className="proj-location-badge">📍 {project.location}</p>
                    <p style={{ marginTop: '10px' }}>{project.desc}</p>
                    
                    <div className="proj-progress-section mt-3">
                      <div className="progress-labels">
                        <span>Status: <strong>Audited Complete</strong></span>
                        <strong className="text-gold">{project.budget} Allocation</strong>
                      </div>
                      <div className="progress-bar-track">
                        <div className="progress-bar-fill animate-grow-width" style={{ width: '100%' }} />
                      </div>
                      <div className="progress-goal-tag">Impact: {project.metric}</div>
                    </div>
                  </div>

                  <div className="proj-actions-footer">
                    <button 
                      className="btn btn-gold w-100"
                      onClick={() => handleDonateTrigger(project.title)}
                      style={{ width: '100%' }}
                    >
                      Sponsor a Similar Campaign
                    </button>
                    <button 
                      className="btn btn-outline w-100 mt-2"
                      onClick={() => navigate('/volunteer')}
                      style={{ width: '100%', marginTop: '8px' }}
                    >
                      Apply as Field Volunteer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-work-state text-center mt-5">
              <span className="empty-icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <h3 className="mt-3">No campaigns match these filters</h3>
              <p>We are constantly scaling GAF’s programs across Dima Hasao, Nagaon, Barpeta, Nalbari, Cachar, Hailakandi, and Karimganj districts. Modify your filters to explore alternative financial periods.</p>
            </div>
          )}
        </div>
      </section>

      {/* RAZORPAY DIALOG SIMULATION */}
      <RazorpayModal
        isOpen={isPayModalOpen}
        onClose={handleSuccessClose}
        amount={selectedAmount}
        donorName="Asif Ahmed"
        donorEmail="asif@domain.com"
        donorPhone="9876543210"
        onPaymentSuccess={(newDonation) => {
          console.log('Donation complete for:', selectedProjectName, newDonation);
        }}
      />

      <style>{`
        .work-project-card:hover .proj-badge-icon-wrapper {
          transform: scale(1.1) rotate(6deg);
          border-color: var(--gold);
        }

        /* FILTERS LAYOUT */
        .year-filters-container, .category-filters-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .filter-label {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .year-filters-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .year-filter-btn {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.8rem;
          padding: 0.5rem 1.2rem;
          border: 1px solid var(--border-glass);
          background-color: var(--white);
          border-radius: var(--radius-sm);
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .year-filter-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .year-filter-btn.active {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }

        /* FILTER CONTROLS */
        .filter-controls-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-sm);
          background-color: var(--white);
          border: 1px solid var(--border-glass);
          color: var(--primary-light);
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
        }

        .filter-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .filter-btn.active {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }

        /* PROJECT CARDS */
        .work-project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: var(--white);
        }

        .proj-header-banner {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 7rem 1.8rem 1.5rem 1.8rem;
          border-bottom: 1px solid rgba(17, 63, 39, 0.08);
          position: relative;
        }

        .proj-banner-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .proj-badge-category {
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 0.68rem;
          color: var(--white);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: rgba(17, 63, 39, 0.9);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: fit-content;
        }

        .proj-badge-year {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.68rem;
          color: var(--white);
          background-color: var(--gold);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        .proj-badge-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background-color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proj-body-inner {
          padding: 2rem 1.8rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .proj-location-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary-light);
          background-color: #faf9f6;
          border: 1px solid rgba(17, 63, 39, 0.08);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        .proj-body-inner h3 {
          margin-bottom: 8px;
          font-size: 1.2rem;
          line-height: 1.35;
          color: var(--primary);
        }

        .proj-body-inner p {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .proj-progress-section {
          background-color: #faf9f6;
          border: 1px solid rgba(17, 63, 39, 0.08);
          border-radius: var(--radius-sm);
          padding: 1.2rem;
          margin-top: auto;
        }

        .proj-progress-section .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: var(--primary);
          margin-bottom: 6px;
        }

        .proj-progress-section .progress-bar-track {
          height: 4px;
          background: rgba(17, 63, 39, 0.06);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .proj-progress-section .progress-bar-fill {
          height: 100%;
          background: var(--gold);
          border-radius: 2px;
        }

        .progress-goal-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .proj-actions-footer {
          padding: 0 1.8rem 2rem 1.8rem;
        }

        .w-100 {
          width: 100%;
        }

        /* EMPTY STATE */
        .empty-work-state {
          padding: 4rem 2rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .empty-work-state h3 {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};

export default OurWork;
