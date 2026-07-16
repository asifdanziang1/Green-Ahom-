import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isMobileGetInvolvedOpen, setIsMobileGetInvolvedOpen] = useState(false);
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

  // Close mobile menu and accordions on page transition asynchronously
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileWorkOpen(false);
      setIsMobileResourcesOpen(false);
      setIsMobileGetInvolvedOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  // Disable body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isMobileMenuOpen]);

  // Desktop Mega Menu Configuration
  const menuItems = [
    {
      name: 'Home',
      type: 'link',
      path: '/'
    },
    {
      name: 'About GAF',
      type: 'link',
      path: '/about'
    },
    {
      name: 'Our Work',
      type: 'dropdown',
      title: 'Our Key Programmatic Pillars',
      desc: 'Explore Green Ahom Federation’s 8 strategic focus areas serving communities, environment, and wildlife across Assam.',
      columns: [
        {
          title: 'Human Development & Relief',
          icon: '🤝',
          links: [
            { name: '1. Education', path: '/work/education', desc: 'Rural smart labs & school upgrades' },
            { name: '2. Health', path: '/work/health', desc: 'Mobile health clinics & maternal care' },
            { name: '3. Relief', path: '/work/relief', desc: 'Emergency flood rations & boat rescue' },
            { name: '4. Disaster Management', path: '/work/disaster-management', desc: 'Early warning sirens & bio-shields' }
          ]
        },
        {
          title: 'Empowerment & Environment',
          icon: '🌿',
          links: [
            { name: '5. Animal Care', path: '/work/animal-care', desc: 'Livestock fodder & veterinary camps' },
            { name: '6. Community Development', path: '/work/community-development', desc: 'Artisan micro-grants & clean water' },
            { name: '7. Women Empowerment', path: '/work/women-empowerment', desc: 'SHGs, tailoring & Project Suchita' },
            { name: '8. Environment Protection', path: '/work/environment-protection', desc: 'Afforestation, seed bombs & plastic recycling' }
          ]
        }
      ],
      featured: {
        tag: 'OPERATIONAL DIRECTORY',
        title: 'View All Audited Programs',
        desc: 'Filter 3-year verified campaign history by financial year and category.',
        path: '/work',
        ctaText: 'Explore All Work →'
      }
    },
    {
      name: 'Resources',
      type: 'dropdown',
      title: 'Resources Desk',
      desc: 'Access verified records, CA-audited financials, legal incorporation documents, and detailed field metrics.',
      columns: [
        {
          title: 'Impact & Transparency',
          icon: '📊',
          links: [
            { name: 'Impact Dashboard', path: '/impact', desc: 'Metrics, field stories, and geographic reach' }
          ]
        },
        {
          title: 'Documents & Compliance',
          icon: '📁',
          links: [
            { name: 'Governance & Financial Disclosures', path: '/reports', desc: 'Reports, AOA, MOA, CSR-1, 12A/80G, NITI Aayog' },
            { name: 'Request CSR Audit Dossier', path: '/reports#request', desc: 'Request official audit documentation' }
          ]
        },
        {
          title: 'Media & Stories',
          icon: '🖼️',
          links: [
            { name: 'Field Photo Gallery', path: '/gallery', desc: 'Forests, Wetlands, Artisans, Community' },
            { name: 'Field Stories', path: '/impact#stories', desc: 'Success testimonials & outcomes' }
          ]
        }
      ],
      featured: {
        tag: 'REQUEST ACCESS',
        title: 'Request CSR Audit Dossier',
        desc: 'Get the complete verified CA compliance dossier for corporate CSR evaluation.',
        path: '/reports#request',
        ctaText: 'Request Dossier',
        highlight: true
      }
    },
    {
      name: 'Get Involved',
      type: 'dropdown',
      title: 'Get Involved',
      desc: 'Join GAF in building sustainable livelihoods and protecting the ecological heritage of Assam.',
      columns: [
        {
          title: 'Partner With Us',
          icon: '🤝',
          links: [
            { name: 'Sponsors & CSR', path: '/partners', desc: 'CSR partnerships, corporate patrons, and MoUs' },
            { name: 'Donate Now', path: '/donate', desc: 'Support active field conservation campaigns' }
          ]
        },
        {
          title: 'Join Us',
          icon: '🙋',
          links: [
            { name: 'Volunteer Portal', path: '/volunteer', desc: 'Active field roles, registration, and training' },
            { name: 'Contact Us', path: '/contact', desc: 'Reach out to our Hailakandi & field units' }
          ]
        }
      ],
      featured: {
        tag: 'JOIN OUR MISSION',
        title: 'Become a Field Volunteer',
        desc: 'Join our sower squads or ranger teams in Hailakandi and Barpeta.',
        path: '/volunteer',
        ctaText: 'Register Now'
      }
    }
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
                    <div className="container-custom mega-menu-grid" style={{ gridTemplateColumns: item.columns.length === 3 ? '1fr 1fr 1fr 1.2fr' : '1.2fr 1.2fr 1.4fr' }}>
                      {/* Sublinks columns */}
                      {item.columns.map((col, idx) => (
                        <div key={idx} className="mega-links-col">
                          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {col.icon && <span style={{ fontSize: '1.1rem' }}>{col.icon}</span>}
                            <span>{col.title}</span>
                          </h4>
                          <ul className="mega-links-list">
                            {col.links.map((link) => (
                              <li key={link.name} className="mega-sublink-item" style={{ marginBottom: '14px' }}>
                                <Link to={link.path} className="mega-sublink" style={{ display: 'block' }}>
                                  <div className="sublink-title" style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.92rem', transition: 'color 0.2s' }}>{link.name}</div>
                                  {link.desc && <span className="sublink-desc" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '500', marginTop: '2px', lineHeight: '1.35' }}>{link.desc}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      
                      {/* Highlighted CTA card */}
                      {item.featured && (
                        <div className="mega-featured-col">
                          <div className={`featured-border-box ${item.featured.highlight ? 'featured-highlight-terracotta' : ''}`}>
                            <span className="featured-tag">{item.featured.tag}</span>
                            <h5>{item.featured.title}</h5>
                            <p className="featured-quote" style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '4px 0 12px 0', lineHeight: '1.4' }}>{item.featured.desc}</p>
                            <Link to={item.featured.path} className="btn btn-gold featured-cta-btn" style={{ fontSize: '0.75rem', padding: '6px 12px', borderRadius: '4px', textTransform: 'uppercase', fontWeight: '700' }}>
                              {item.featured.ctaText || 'Learn More →'}
                            </Link>
                          </div>
                        </div>
                      )}
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

      {/* MOBILE DRAWER OVERLAY */}
      <div 
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'visible' : ''}`} 
        onClick={() => setIsMobileMenuOpen(false)} 
      />

      {/* MOBILE DRAWER */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
        <button className="mobile-drawer-close-btn" onClick={() => setIsMobileMenuOpen(false)}>×</button>
        <div className="mobile-menu-content">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>About GAF</Link>
          
          {/* Our Work Mobile Accordion */}
          <div className="mobile-accordion-item">
            <button 
              className="mobile-accordion-toggle"
              onClick={() => setIsMobileWorkOpen(!isMobileWorkOpen)}
            >
              <span>Our Work</span>
              <span className={`accordion-icon ${isMobileWorkOpen ? 'open' : ''}`} style={{ transition: 'transform 0.2s', transform: isMobileWorkOpen ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div className={`mobile-accordion-content ${isMobileWorkOpen ? 'expanded' : ''}`}>
              <Link to="/work" className={`mobile-sub-nav-link ${isActive('/work') ? 'active' : ''}`} style={{ fontWeight: '700', color: 'var(--gold)' }}>📋 All Campaigns Overview</Link>
              <Link to="/work/education" className={`mobile-sub-nav-link ${isActive('/work/education') ? 'active' : ''}`}>1. Education</Link>
              <Link to="/work/health" className={`mobile-sub-nav-link ${isActive('/work/health') ? 'active' : ''}`}>2. Health</Link>
              <Link to="/work/relief" className={`mobile-sub-nav-link ${isActive('/work/relief') ? 'active' : ''}`}>3. Relief</Link>
              <Link to="/work/animal-care" className={`mobile-sub-nav-link ${isActive('/work/animal-care') ? 'active' : ''}`}>4. Animal Care</Link>
              <Link to="/work/community-development" className={`mobile-sub-nav-link ${isActive('/work/community-development') ? 'active' : ''}`}>5. Community Development</Link>
              <Link to="/work/women-empowerment" className={`mobile-sub-nav-link ${isActive('/work/women-empowerment') ? 'active' : ''}`}>6. Women Empowerment</Link>
              <Link to="/work/disaster-management" className={`mobile-sub-nav-link ${isActive('/work/disaster-management') ? 'active' : ''}`}>7. Disaster Management</Link>
              <Link to="/work/environment-protection" className={`mobile-sub-nav-link ${isActive('/work/environment-protection') ? 'active' : ''}`}>8. Environment Protection</Link>
            </div>
          </div>
          
          {/* Resources Mobile Accordion */}
          <div className="mobile-accordion-item">
            <button 
              className="mobile-accordion-toggle"
              onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
            >
              <span>Resources</span>
              <span className={`accordion-icon ${isMobileResourcesOpen ? 'open' : ''}`} style={{ transition: 'transform 0.2s', transform: isMobileResourcesOpen ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div className={`mobile-accordion-content ${isMobileResourcesOpen ? 'expanded' : ''}`}>
              <Link to="/impact" className={`mobile-sub-nav-link ${isActive('/impact') ? 'active' : ''}`}>Impact Dashboard</Link>
              <Link to="/reports" className={`mobile-sub-nav-link ${isActive('/reports') ? 'active' : ''}`}>Governance & Documents Hub</Link>
              <Link to="/gallery" className={`mobile-sub-nav-link ${isActive('/gallery') ? 'active' : ''}`}>Field Photo Gallery</Link>
            </div>
          </div>

          {/* Get Involved Mobile Accordion */}
          <div className="mobile-accordion-item">
            <button 
              className="mobile-accordion-toggle"
              onClick={() => setIsMobileGetInvolvedOpen(!isMobileGetInvolvedOpen)}
            >
              <span>Get Involved</span>
              <span className={`accordion-icon ${isMobileGetInvolvedOpen ? 'open' : ''}`} style={{ transition: 'transform 0.2s', transform: isMobileGetInvolvedOpen ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div className={`mobile-accordion-content ${isMobileGetInvolvedOpen ? 'expanded' : ''}`}>
              <Link to="/volunteer" className={`mobile-sub-nav-link ${isActive('/volunteer') ? 'active' : ''}`}>Volunteer Portal</Link>
              <Link to="/partners" className={`mobile-sub-nav-link ${isActive('/partners') ? 'active' : ''}`}>Sponsors & CSR</Link>
              <Link to="/donate" className={`mobile-sub-nav-link ${isActive('/donate') ? 'active' : ''}`}>Donate Now</Link>
              <Link to="/contact" className={`mobile-sub-nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
            </div>
          </div>

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
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 68px;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(17, 63, 39, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .nav-scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid rgba(17, 63, 39, 0.08);
          box-shadow: var(--shadow-sm);
        }

        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          width: 100%;
          gap: 40px;
        }
        
        @media (max-width: 1024px) {
          .nav-container {
            display: flex;
            justify-content: space-between;
          }
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1001;
        }

        .logo-img {
          height: 58px;
          max-width: 280px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-scrolled .logo-img {
          height: 46px;
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 48px;
            max-width: 190px;
          }
          .nav-scrolled .logo-img {
            height: 42px;
          }
        }

        @media (max-width: 576px) {
          .fixed-nav {
            height: 78px !important;
            box-shadow: 0 2px 10px rgba(17, 63, 39, 0.03) !important;
            border-bottom: 1px solid rgba(17, 63, 39, 0.08) !important;
            width: 100% !important;
            left: 0 !important;
          }
          .nav-scrolled {
            background: #ffffff !important;
            box-shadow: 0 2px 12px rgba(17, 63, 39, 0.05) !important;
          }
          .logo-img {
            height: 52px !important;
          }
          .nav-scrolled .logo-img {
            height: 46px !important;
          }
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
        }

        .nav-link-dropdown-parent {
          position: static; /* Crucial: mega menu absolute position aligns with .fixed-nav full width */
        }

        /* Invisible localized physical bridge to stabilize cursor hover transition across navbar gaps */
        .dropdown-toggle::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 25px;
          background: transparent;
        }

        .nav-link-item {
          font-family: var(--font-header);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary-light);
          position: relative;
          padding: 10px 0;
          letter-spacing: 0.3px;
          text-transform: capitalize;
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
          border-bottom: 1px solid rgba(17, 63, 39, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          padding: 3.5rem 0;
          z-index: 99;
          opacity: 0;
          visibility: hidden;
          transform: translateY(4px);
          transition: opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.15s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.15s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
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
          border-bottom: 1px solid rgba(17, 63, 39, 0.08);
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
          border: 1px solid rgba(17, 63, 39, 0.08);
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
          justify-self: end;
        }

        .donate-btn {
          padding: 0.7rem 1.8rem;
          font-size: 0.82rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-transform: uppercase;
          font-weight: 700;
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

        /* Mobile Drawer & Overlay Styles */
        .mobile-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(17, 63, 39, 0.4);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          opacity: 0;
          pointer-events: none;
          z-index: 999;
          transition: opacity 0.4s ease, visibility 0.4s ease;
          visibility: hidden;
        }
        
        .mobile-drawer-overlay.visible {
          opacity: 1;
          pointer-events: all;
          visibility: visible;
        }
 
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          right: 0;
          left: auto;
          width: 80vw;
          max-width: 320px;
          height: 100vh;
          background: var(--white);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          padding: 5rem 2rem 2rem 2rem;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s ease;
          pointer-events: none;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.05);
          overflow-y: auto;
          box-sizing: border-box;
          visibility: hidden;
        }
 
        .drawer-open {
          transform: translateX(0);
          pointer-events: all;
          visibility: visible;
        }

        .mobile-drawer-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 2.2rem;
          background: transparent;
          border: none;
          color: var(--primary);
          cursor: pointer;
          line-height: 1;
          display: block;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 16px;
          width: 100%;
        }

        .mobile-nav-link {
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 1.35rem;
          color: var(--primary);
          text-align: left;
          opacity: 1;
          transform: none;
          padding: 8px 12px;
          border-radius: 6px;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .mobile-nav-link:active {
          background-color: rgba(217, 95, 67, 0.08);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--gold);
        }

        .mobile-menu-divider {
          width: 100%;
          height: 1px;
          background-color: rgba(17, 63, 39, 0.08);
          margin: 10px 0;
        }

        .mobile-donate-btn {
          width: 100%;
          height: 48px !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .admin-login-link {
          font-family: var(--font-header);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--muted);
          margin-top: 15px;
          letter-spacing: 0.5px;
          text-align: center;
        }

        .admin-login-link:hover {
          color: var(--primary);
        }

        .featured-highlight-terracotta {
          background-color: #fff9f6 !important;
          border-color: var(--gold) !important;
        }

        .featured-highlight-terracotta h5 {
          color: var(--gold-hover) !important;
        }

        /* Mobile Accordion */
        .mobile-accordion-item {
          width: 100%;
        }

        .mobile-accordion-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 1.35rem;
          color: var(--primary);
          background: transparent;
          border: none;
          padding: 8px 0;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .mobile-accordion-toggle:hover {
          color: var(--gold);
        }

        .accordion-icon {
          font-size: 1.4rem;
          color: var(--gold);
          line-height: 1;
        }

        .mobile-accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
          opacity: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-left: 1.25rem;
          border-left: 2px solid rgba(217, 95, 67, 0.15);
          margin-top: 4px;
          text-align: left;
        }

        .mobile-accordion-content.expanded {
          max-height: 300px;
          opacity: 1;
          padding-top: 8px;
          padding-bottom: 12px;
        }

        .mobile-sub-nav-link {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 1rem;
          color: var(--muted);
          transition: color 0.2s ease;
          text-align: left;
        }

        .mobile-sub-nav-link:hover, .mobile-sub-nav-link.active {
          color: var(--gold);
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
