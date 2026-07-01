import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bottom-nav-bar">
      <Link to="/" className={`bottom-nav-item ${isActive('/') ? 'active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <span>Home</span>
      </Link>

      <Link to="/work" className={`bottom-nav-item ${isActive('/work') ? 'active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <span>Our Work</span>
      </Link>

      <Link to="/donate" className={`bottom-nav-item ${isActive('/donate') ? 'active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span>Donate</span>
      </Link>

      <Link to="/contact" className={`bottom-nav-item ${isActive('/contact') ? 'active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>Contact</span>
      </Link>

      <style>{`
        .bottom-nav-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 64px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(17, 63, 39, 0.08);
          display: none;
          justify-content: space-around;
          align-items: center;
          z-index: 999;
          box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.04);
          padding-bottom: env(safe-area-inset-bottom);
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          text-decoration: none;
          flex: 1;
          height: 100%;
          gap: 4px;
          transition: all 0.2s ease;
          position: relative;
        }

        .bottom-nav-item span {
          font-size: 0.7rem;
          font-weight: 700;
          font-family: var(--font-body);
          letter-spacing: 0.2px;
        }

        .bottom-nav-item svg {
          transition: transform 0.2s ease;
        }

        .bottom-nav-item:active svg {
          transform: scale(0.85);
        }

        .bottom-nav-item.active {
          color: var(--gold-hover);
        }

        @media (max-width: 576px) {
          .bottom-nav-bar {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};

export default BottomNavigation;
