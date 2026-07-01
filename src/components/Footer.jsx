import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // '', 'loading', 'success'
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    if (window.innerWidth <= 576) {
      setExpandedSection(expandedSection === section ? null : section);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section bg-dark">
      <div className="container-custom">
        <div className="footer-grid">
          {/* Column 1: Info & Badges */}
          <div className="footer-col-info">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-container">
                <img src="/logo.png" alt="Green Ahom Federation Logo" className="footer-logo-img" />
              </div>
            </Link>
            <p className="footer-desc">
              Dedicated to restoring Assam’s ecological heritage, protecting forest canopies, restoring vital wetlands, and fostering sustainable green livelihoods for local communities.
            </p>
            <div className="badges-row">
              <span className="compliance-badge" title="80G Registration: AADCG7297LG20241">80G Exempt</span>
              <span className="compliance-badge" title="CSR-1 Registration: CSR00029857">CSR Registered</span>
              <span className="compliance-badge" title="12A Registration: AADCG7297LF20241">12A Registered</span>
              <span className="compliance-badge" title="NITI Aayog NGO Darpan ID: AS/2022/0311876">NGO Darpan</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={`footer-col-links mobile-collapsible ${expandedSection === 'explore' ? 'expanded' : ''}`}>
            <h4 className="footer-heading text-gold" style={{ cursor: 'pointer' }} onClick={() => toggleSection('explore')}>
              Explore
              <span className="mobile-toggle-indicator" style={{ marginLeft: '8px' }}>{expandedSection === 'explore' ? '−' : '+'}</span>
            </h4>
            <div className="footer-links-list">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/work">Our Work</Link>
              <Link to="/impact">Impact Dashboard</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/partners">Partners</Link>
            </div>
          </div>

          {/* Column 3: Actions Links */}
          <div className={`footer-col-links mobile-collapsible ${expandedSection === 'involved' ? 'expanded' : ''}`}>
            <h4 className="footer-heading text-gold" style={{ cursor: 'pointer' }} onClick={() => toggleSection('involved')}>
              Get Involved
              <span className="mobile-toggle-indicator" style={{ marginLeft: '8px' }}>{expandedSection === 'involved' ? '−' : '+'}</span>
            </h4>
            <div className="footer-links-list">
              <Link to="/volunteer">Volunteer With Us</Link>
              <Link to="/donate">Donate / Support</Link>
              <Link to="/reports">Annual Reports</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className={`footer-col-newsletter mobile-collapsible ${expandedSection === 'newsletter' ? 'expanded' : ''}`}>
            <h4 className="footer-heading text-gold" style={{ cursor: 'pointer' }} onClick={() => toggleSection('newsletter')}>
              Newsletter
              <span className="mobile-toggle-indicator" style={{ marginLeft: '8px' }}>{expandedSection === 'newsletter' ? '−' : '+'}</span>
            </h4>
            <div className="newsletter-wrapper-mobile">
              <p className="newsletter-text">
                Subscribe to receive quarterly field updates, project reports, and stories of change from Assam.
              </p>
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="form-control newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    required
                  />
                  <button
                    type="submit"
                    className={`btn btn-gold newsletter-btn ${status === 'success' ? 'success' : ''}`}
                    disabled={status === 'loading' || status === 'success'}
                  >
                    {status === 'loading' ? (
                      <span className="loader-dot" />
                    ) : status === 'success' ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  </button>
                </div>
                {status === 'success' && (
                  <span className="newsletter-success-msg">Thank you! You have subscribed successfully.</span>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Green Ahom Federation. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="sep-dot">•</span>
            <a href="#terms">Terms & Conditions</a>
            <span className="sep-dot">•</span>
            <a href="#refund">Donation Refund Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: clamp(3.5rem, 5vw, 5.5rem) 0 24px 0;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 3.5rem;
        }

        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          margin: 0;
        }

        .footer-logo-container {
          background: rgba(255, 255, 255, 0.98);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-logo-container:hover {
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .footer-logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .footer-desc {
          font-size: 0.95rem;
          color: rgba(250, 248, 244, 0.65);
          margin: 16px 0;
          max-width: 380px;
        }

        .badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .compliance-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          font-family: var(--font-body);
          color: var(--gold);
          border: 1px solid rgba(217, 95, 67, 0.2);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          background: rgba(217, 95, 67, 0.05);
          cursor: help;
          transition: all 0.3s ease;
        }

        .compliance-badge:hover {
          border-color: var(--gold);
          background: rgba(217, 95, 67, 0.1);
        }

        .footer-heading {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 16px 0;
          letter-spacing: 0.5px;
        }

        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list a {
          font-size: 0.95rem;
          color: rgba(250, 248, 244, 0.65);
        }

        .footer-links-list a:hover {
          color: var(--gold);
          transform: translateX(4px);
        }

        .admin-footer-link {
          color: rgba(212, 175, 55, 0.6) !important;
          font-weight: 600;
          font-size: 0.85rem !important;
          margin-top: 10px;
        }

        .admin-footer-link:hover {
          color: var(--gold) !important;
        }

        .newsletter-text {
          font-size: 0.95rem;
          color: rgba(250, 248, 244, 0.65);
          margin-bottom: 1.2rem;
        }

        .footer-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .newsletter-input-group {
          display: flex;
          align-items: stretch;
          width: 100%;
          height: 44px;
        }

        .newsletter-input {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--sand);
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          padding: 0 16px;
          height: 100%;
          box-sizing: border-box;
        }

        .newsletter-input:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(217, 95, 67, 0.15);
        }

        .newsletter-btn {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          padding: 0 1.5rem;
          border: none;
          box-shadow: none;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .newsletter-btn.success {
          background-color: var(--teal);
          color: white;
        }

        .newsletter-success-msg {
          font-size: 0.8rem;
          color: var(--gold);
          margin-top: 4px;
        }

        .loader-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: var(--primary);
          border-radius: 50%;
          animation: dotPulse 1s infinite alternate;
        }

        @keyframes dotPulse {
          from { transform: scale(0.6); opacity: 0.4; }
          to { transform: scale(1.3); opacity: 1; }
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 40px 0 20px 0;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
        }

        .copyright-text {
          font-size: 0.88rem;
          color: rgba(250, 248, 244, 0.45);
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          color: rgba(250, 248, 244, 0.45);
        }

        .footer-bottom-links a:hover {
          color: var(--sand);
        }

        .sep-dot {
          color: rgba(255, 255, 255, 0.15);
          margin: 0 8px;
        }

        @media (max-width: 576px) {
          .footer-heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 0;
          }
          .mobile-toggle-indicator {
            display: inline-block !important;
            font-size: 1.25rem;
            color: var(--gold);
            line-height: 1;
          }
          .footer-links-list, .newsletter-wrapper-mobile {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
            opacity: 0;
          }
          .expanded .footer-links-list, 
          .expanded .newsletter-wrapper-mobile {
            max-height: 300px;
            opacity: 1;
            padding-top: 12px;
            padding-bottom: 16px;
          }
        }
        @media (min-width: 577px) {
          .mobile-toggle-indicator {
            display: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
