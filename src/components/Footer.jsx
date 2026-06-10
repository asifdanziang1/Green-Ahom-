import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // '', 'loading', 'success'

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
              <span className="compliance-badge" title="Tax Exemption under section 80G">80G Exempt</span>
              <span className="compliance-badge" title="CSR Registration Number">CSR Registered</span>
              <span className="compliance-badge" title="Foreign Contribution Regulation Act">FCRA Compliant</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col-links">
            <h4 className="footer-heading text-gold">Explore</h4>
            <div className="footer-links-list">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/work">Our Work</Link>
              <Link to="/impact">Impact Dashboard</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/partners">Partners & Supporters</Link>
            </div>
          </div>

          {/* Column 3: Actions Links */}
          <div className="footer-col-links">
            <h4 className="footer-heading text-gold">Get Involved</h4>
            <div className="footer-links-list">
              <Link to="/volunteer">Volunteer With Us</Link>
              <Link to="/donate">Donate / Support</Link>
              <Link to="/reports">Annual Reports</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/admin" className="admin-footer-link">Admin Dashboard</Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col-newsletter">
            <h4 className="footer-heading text-gold">Newsletter</h4>
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

      {/* STYLES MOVED TO INDEX.CSS */}
    </footer>
  );
};

export default Footer;
