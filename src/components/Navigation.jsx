import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Desktop Mega Menu Configuration
  const menuItems = [
    {
      name: 'About',
      type: 'dropdown',
      title: 'About GAF',
      desc: 'Green Ahom Federation is a registered Section 8 NPO working closely with marginalized communities, women, children, and disaster-affected populations across Assam.',
      columns: [
        {
          title: 'Who We Are',
          links: [
            { name: 'Our Organization', path: '/about' },
            { name: 'Board of Directors', path: '/about#board' },
            { name: 'Historical Legacy', path: '/about#history' },
          ]
        },
        {
          title: 'Community Life',
          links: [
            { name: 'Photo Gallery', path: '/gallery' },
            { name: 'Milestone Timeline', path: '/about#milestones' },
          ]
        }
      ],
      featured: {
        tag: 'OUR LEGACY',
        title: 'Water Engineering of Ahom Kingdom',
        desc: '"Drawing inspiration from ancient historical methods to solve modern community challenges."',
        path: '/about#history'
      }
    },
    {
      name: 'Our Work',
      type: 'dropdown',
      title: 'Our Programs',
      desc: 'We combine immediate humanitarian disaster relief with long-term conceptual capacity building, forestry, and sustainable livelihoods.',
      columns: [
        {
          title: 'Key Initiatives',
          links: [
            { name: 'Active Campaigns', path: '/work' },
            { name: 'Ideal Academy Hailakandi', path: '/work#education' },
            { name: 'Women Empowerment', path: '/work#livelihoods' },
          ]
        },
        {
          title: 'Proof & Metrics',
          links: [
            { name: 'Impact Dashboard', path: '/impact' },
            { name: 'Restoration Slider', path: '/impact#restoration' },
          ]
        }
      ],
      featured: {
        tag: 'FLAGSHIP PROJECT',
        title: '364 Children at Ideal Academy',
        desc: '"Conceptual and intensive affordable learning support for low-income communities in Hailakandi."',
        path: '/work'
      }
    },
    {
      name: 'Resources',
      type: 'dropdown',
      title: 'Statutory Desk',
      desc: 'Read about our audited financials, governance parameters, statutory credentials, and legal compliance structures.',
      columns: [
        {
          title: 'Compliance Docs',
          links: [
            { name: 'Annual Audit Reports', path: '/reports' },
            { name: 'AOA & MOA Files', path: '/reports#documents' },
          ]
        },
        {
          title: 'Legal Statutory',
          links: [
            { name: '12A & 80G Certificates', path: '/partners#credentials' },
            { name: 'CSR-1 Implementing Agency', path: '/partners#credentials' },
          ]
        }
      ],
      featured: {
        tag: 'TRANSPARENCY',
        title: 'CA Audited Statements',
        desc: '"A registered Section 8 non-profit with complete public compliance records."',
        path: '/reports'
      }
    },
    {
      name: 'Get Involved',
      type: 'dropdown',
      title: 'Act With Us',
      desc: 'From field rangers to corporate patrons, our community is active in making a real difference across the wetland ecosystems of Assam.',
      columns: [
        {
          title: 'Join GAF',
          links: [
            { name: 'Volunteer With Us', path: '/volunteer' },
            { name: 'Become a Partner', path: '/partners' },
          ]
        },
        {
          title: 'Contribute',
          links: [
            { name: 'Donate Funds', path: '/donate' },
            { name: 'Support an Outcome', path: '/donate#outcomes' },
          ]
        }
      ],
      featured: {
        tag: 'BECOME A MEMBER',
        title: 'Empower a Woman Weaver',
        desc: '"Help rural women become self-employed through vocational tailoring courses."',
        path: '/volunteer'
      }
    },
    {
      name: 'Contact',
      type: 'link',
      path: '/contact'
    }
  ];

  // Flat menu structure specifically optimized for mobile drawers
  const mobileMenuItems = [
    { name: 'Home', path: '/' },
    { name: 'About GAF', path: '/about' },
    { name: 'Our Campaigns', path: '/work' },
    { name: 'Impact Dashboard', path: '/impact' },
    { name: 'Annual Reports', path: '/reports' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Volunteer Portal', path: '/volunteer' },
    { name: 'Sponsors & CSR', path: '/partners' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed-nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Green Ahom Federation Logo" className="logo-img" />
        </Link>

        {/* DESKTOP MENU ITEMS WITH FULL-WIDTH MEGA MENUS */}
        <div className="nav-links">
          {menuItems.map((item) => {
            if (item.type === 'dropdown') {
              return (
                <div key={item.name} className="nav-link-dropdown-parent">
                  <button className="nav-link-item dropdown-toggle">
                    {item.name}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="dropdown-arrow-svg">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  
                  {/* MEGA MENU CONTAINER */}
                  <div className="mega-menu">
                    <div className="container-custom mega-menu-grid">
                      {/* Column 1: Descriptive text block */}
                      <div className="mega-desc-col">
                        <span className="badge">{item.name}</span>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                      
                      {/* Column 2 & 3: Structured sublinks lists */}
                      {item.columns.map((col, idx) => (
                        <div key={idx} className="mega-links-col">
                          <h4>{col.title}</h4>
                          <ul className="mega-links-list">
                            {col.links.map((link) => (
                              <li key={link.name}>
                                <Link to={link.path} className="mega-sublink">
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      
                      {/* Column 4: Elegant featured card block */}
                      <div className="mega-featured-col">
                        <div className="featured-border-box">
                          <span className="featured-tag">{item.featured.tag}</span>
                          <h5>{item.featured.title}</h5>
                          <p className="featured-quote">{item.featured.desc}</p>
                          <Link to={item.featured.path} className="featured-cta-link">
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Standard direct link item (e.g. Contact)
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link-item ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.name}
                {isActive(item.path) && <span className="active-dot" />}
              </Link>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="nav-actions">
          <Link to="/donate" className="btn btn-gold donate-btn">
            Donate Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </Link>
          
          {/* Burger Menu Button */}
          <button
            className={`burger-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-menu-content">
          {mobileMenuItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.name}
            </Link>
          ))}
          <div className="mobile-menu-divider" />
          <Link
            to="/donate"
            className="btn btn-gold mobile-donate-btn"
          >
            Donate Now
          </Link>
          <Link
            to="/admin"
            className="admin-login-link"
          >
            Admin Panel Login
          </Link>
        </div>
      </div>

      {/* STYLES SCOPED LOCALLY TO MINIMIZE DEPENDENCIES */}
      <style>{`
        .fixed-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.2rem 0;
          background: var(--white);
          border-bottom: 1px solid #eaeaea;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .nav-scrolled {
          padding: 0.8rem 0;
          background: var(--white);
          border-bottom: 1px solid #eaeaea;
          box-shadow: var(--shadow-sm);
        }

        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1001;
        }

        .logo-img {
          height: 48px;
          max-width: 240px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-scrolled .logo-img {
          height: 38px;
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 38px;
            max-width: 170px;
          }
          .nav-scrolled .logo-img {
            height: 34px;
          }
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(15px, 2.2vw, 36px);
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
        }

        .nav-link-dropdown-parent {
          position: static; /* Crucial: mega menu absolute position aligns with .fixed-nav full width */
        }

        .nav-link-item {
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--primary-light);
          position: relative;
          padding: 10px 0;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          transition: var(--transition-fast);
        }

        .dropdown-toggle {
          background: transparent;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link-item:hover, .dropdown-toggle:hover {
          color: var(--gold);
        }

        .nav-link-item.active {
          color: var(--primary);
        }

        .active-dot {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          background-color: var(--gold);
          border-radius: 50%;
        }

        .dropdown-arrow-svg {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: rgba(var(--primary-rgb), 0.5);
        }

        .nav-link-dropdown-parent:hover .dropdown-arrow-svg {
          transform: rotate(180deg);
          color: var(--gold);
        }

        .mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--cream);
          border-bottom: 1px solid #eaeaea;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          padding: 3.5rem 0;
          z-index: 99;
          opacity: 0;
          visibility: hidden;
          transform: translateY(4px);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        /* Invisible physical bridge to stabilize cursor hover transition across navbar gaps */
        .mega-menu::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 0;
          width: 100%;
          height: 40px;
          background: transparent;
          pointer-events: all;
        }

        .nav-link-dropdown-parent:hover .mega-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: all;
        }

        .mega-menu-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.4fr;
          gap: 3.5rem;
          align-items: start;
        }

        .mega-desc-col {
          display: flex;
          flex-direction: column;
        }

        .mega-desc-col h3 {
          font-family: var(--font-header);
          font-size: 1.5rem;
          color: var(--primary);
          margin: 1rem 0 0.6rem 0;
          font-weight: 700;
          line-height: 1.2;
        }

        .mega-desc-col p {
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .mega-links-col h4 {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 6px;
        }

        .mega-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mega-sublink {
          font-family: var(--font-body);
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--muted);
          transition: all 0.2s ease;
          display: inline-block;
        }

        .mega-sublink:hover {
          color: var(--gold);
          transform: translateX(5px);
        }

        /* FEATURED OUTLINE BOX */
        .featured-border-box {
          border: 1px solid #eaeaea;
          border-radius: 4px;
          padding: 1.5rem;
          background: var(--white);
          transition: all 0.3s ease;
        }

        .featured-border-box:hover {
          border-color: var(--gold);
          box-shadow: var(--shadow-sm);
        }

        .featured-tag {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--white);
          background-color: var(--gold);
          padding: 2px 8px;
          border-radius: 2px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 12px;
        }

        .featured-border-box h5 {
          font-family: var(--font-header);
          font-size: 1rem;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .featured-quote {
          font-family: var(--font-body);
          font-size: 0.84rem;
          color: var(--muted);
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .featured-cta-link {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--gold);
          transition: var(--transition-fast);
          display: inline-block;
        }

        .featured-cta-link:hover {
          color: var(--primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          z-index: 1001;
        }

        .donate-btn {
          padding: 0.65rem 1.4rem;
          font-size: 0.82rem;
        }

        @media (max-width: 500px) {
          .donate-btn {
            display: none;
          }
        }

        /* Burger Menu Button */
        .burger-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        @media (max-width: 1024px) {
          .burger-btn {
            display: flex;
          }
        }

        .burger-line {
          width: 100%;
          height: 2px;
          background-color: var(--primary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .burger-btn.open .burger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .burger-btn.open .burger-line:nth-child(2) {
          opacity: 0;
        }

        .burger-btn.open .burger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Drawer */
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--sand);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          pointer-events: none;
        }

        .drawer-open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }

        .mobile-nav-link {
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 1.35rem;
          color: var(--primary);
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .drawer-open .mobile-nav-link {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--gold);
        }

        .mobile-menu-divider {
          width: 60px;
          height: 2px;
          background-color: var(--border-glass);
          margin: 10px 0;
        }

        .mobile-donate-btn {
          width: 100%;
          padding: 1rem;
        }

        .admin-login-link {
          font-family: var(--font-header);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--muted);
          margin-top: 15px;
          letter-spacing: 0.5px;
        }

        .admin-login-link:hover {
          color: var(--primary);
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
