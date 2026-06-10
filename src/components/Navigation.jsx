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
      {/* STYLES MOVED TO INDEX.CSS */}
    </nav>
  );
};

export default Navigation;
