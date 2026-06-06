import React, { useState, useEffect } from 'react';
import { useContent } from '../admin/hooks/useContent';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const { getSection, isLoading } = useContent('gallery');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return null;

  const heroSection = getSection('gallery_hero');
  const gridSection = getSection('gallery_grid');

  const galleryItems = gridSection?.items || [];
  const categories = gridSection?.categories || ['ALL'];

  const filteredItems = activeFilter === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category.toUpperCase() === activeFilter);

  const openLightbox = (item) => {
    setActiveLightboxItem(item);
  };

  const closeLightbox = () => {
    setActiveLightboxItem(null);
  };

  const renderIcon = (name, size = 56) => {
    switch (name) {
      case 'forest':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
            <path d="M12 2L2 22h20L12 2z" />
            <path d="M12 2v20" />
            <path d="M7 12h10" />
            <path d="M5 17h14" />
          </svg>
        );
      case 'artisan':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 6v12M6 12h12" />
          </svg>
        );
      case 'wetland':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
            <path d="M2 12h20M2 16h20M2 8h20" />
          </svg>
        );
      case 'seed':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-4-4-4-4-2 2.4-4 4-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
          </svg>
        );
      case 'craft':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
            <path d="M12 22V8M5 12h14M2 17h20" />
          </svg>
        );
      case 'community':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="gallery-page animate-fade-scale">
      {/* 1. HERO BANNER */}
      {heroSection && (
        <section className="hero-section-premium">
          <div className="container-custom">
            <span className="badge badge-gold">{heroSection.badge}</span>
            <h1 className="text-white mt-3">{heroSection.heading}</h1>
            <p className="gallery-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
              {heroSection.subtitle}
            </p>
          </div>
        </section>
      )}

      {/* 2. FILTER CONTROLS & PHOTO GRID */}
      <section className="gallery-grid-section section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="filter-controls-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <div className="gallery-masonry-grid mt-5">
              {filteredItems.map((item, idx) => (
                <div 
                  className="gallery-item-wrapper glass-card animate-reveal" 
                  key={item.id || idx}
                  onClick={() => openLightbox(item)}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="gallery-item-image" style={{ background: `linear-gradient(to bottom, rgba(26, 45, 66, 0.35), rgba(26, 45, 66, 0.75)), url(${item.imageUrl}) center/cover no-repeat` }}>
                    <div className="item-symbol-decor">{renderIcon(item.iconName, 56)}</div>
                    <div className="item-hover-metadata">
                      <span className="meta-category">{item.category}</span>
                      <h4>{item.title}</h4>
                      <p className="meta-location">Location: {item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-gallery text-center mt-5">
              <span className="empty-icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                  <path d="M23 19a6 6 0 1 0-12 0M12 13V2M6 8h12M9 5h6" />
                </svg>
              </span>
              <h3 className="mt-3">No photo records in this category</h3>
              <p>Our field units upload weekly updates. Check back soon for brand-new visual logs!</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. LIGHTBOX VIEWER MODAL */}
      {activeLightboxItem && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox}>×</button>
            
            <div className="lightbox-layout-grid">
              <div className="lightbox-image-side" style={{ background: `linear-gradient(to bottom, rgba(26, 45, 66, 0.35), rgba(26, 45, 66, 0.75)), url(${activeLightboxItem.imageUrl}) center/cover no-repeat` }}>
                <span className="lightbox-symbol">{renderIcon(activeLightboxItem.iconName, 100)}</span>
              </div>
              
              <div className="lightbox-details-side">
                <span className="badge">{activeLightboxItem.category}</span>
                <h3 className="mt-3">{activeLightboxItem.title}</h3>
                <span className="lightbox-location-lbl text-teal">Location: {activeLightboxItem.location}</span>
                <div className="lightbox-divider" />
                <p className="lightbox-desc-txt">{activeLightboxItem.desc}</p>
                <div className="lightbox-footer-note" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  Verified GAF Conservation Action Record
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`

        /* FILTERS */
        .filter-controls-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 2rem;
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
        }

        .filter-btn.active {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }

        /* MASONRY GRID */
        .gallery-masonry-grid {
          column-count: 3;
          column-gap: 24px;
          width: 100%;
        }

        @media (max-width: 991px) {
          .gallery-masonry-grid {
            column-count: 2;
          }
        }

        @media (max-width: 576px) {
          .gallery-masonry-grid {
            column-count: 1;
          }
        }

        .gallery-item-wrapper {
          break-inside: avoid;
          margin-bottom: 24px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .gallery-item-image {
          height: 280px;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Masonry asymmetric heights */
        .gallery-item-wrapper:nth-child(2n) .gallery-item-image {
          height: 340px;
        }

        .gallery-item-wrapper:nth-child(3n) .gallery-item-image {
          height: 260px;
        }

        .item-symbol-decor {
          color: white;
          transition: transform 0.4s ease;
        }

        .gallery-item-wrapper:hover .item-symbol-decor {
          transform: scale(1.15);
        }

        .item-hover-metadata {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(26, 45, 66, 0.95) 0%, rgba(26, 45, 66, 0.25) 100%);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-item-wrapper:hover .item-hover-metadata {
          opacity: 1;
        }

        .meta-category {
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 0.7rem;
          color: var(--gold);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .item-hover-metadata h4 {
          color: var(--white);
          font-size: 1.1rem;
          margin-top: 5px;
          line-height: 1.35;
        }

        .meta-location {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.75);
          margin-top: 4px;
        }

        /* LIGHTBOX MODAL */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(26, 45, 66, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        @media (max-width: 576px) {
          .lightbox-overlay {
            padding: 1rem;
          }
        }

        .lightbox-content-box {
          background-color: var(--white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          width: 100%;
          max-width: 850px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          border: var(--border-flat);
          position: relative;
          animation: zoomIn 0.3s ease forwards;
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        .lightbox-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 38px;
          height: 38px;
          background-color: var(--sand);
          border: 1px solid rgba(26, 45, 66, 0.08);
          border-radius: 50%;
          font-size: 22px;
          color: var(--muted);
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--shadow-sm);
        }

        .lightbox-close-btn:hover {
          background-color: var(--gold);
          color: var(--white);
          border-color: var(--gold);
          transform: rotate(90deg);
        }

        .lightbox-layout-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          min-height: 400px;
        }

        @media (max-width: 768px) {
          .lightbox-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        .lightbox-image-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          border-right: 1px solid #eaeaea;
        }

        @media (max-width: 768px) {
          .lightbox-image-side {
            padding: 2.5rem;
            border-right: none;
            border-bottom: 1px solid #eaeaea;
          }
        }

        .lightbox-symbol {
          color: white;
        }

        .lightbox-details-side {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .lightbox-details-side {
            padding: 2rem;
          }
        }

        .lightbox-location-lbl {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.85rem;
          margin-top: 8px;
          display: block;
        }

        .lightbox-divider {
          height: 1px;
          background-color: #eaeaea;
          margin: 1.5rem 0;
        }

        .lightbox-desc-txt {
          font-size: 0.98rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .lightbox-footer-note {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(26, 45, 66, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
