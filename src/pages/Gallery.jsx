import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const defaultGallery = [
    {
      id: 'gal-1',
      title: 'Majuli Canopy Plantation',
      category: 'FORESTS',
      location: 'Tezpur Embankments, Sonitpur',
      desc: 'Local youth squads working alongside field rangers to plant deep-rooted native saplings to prevent Brahmaputra riverbed erosion.',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      iconName: 'forest'
    },
    {
      id: 'gal-2',
      title: 'Muga Silk Thread Weaving',
      category: 'ARTISANS',
      location: 'Weaving Co-op, Majuli Island',
      desc: 'Artisan leaders reeling organic gold-tinted silk yarn from Som-fed silkworms using modern solar-powered spinning kits.',
      imageUrl: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80',
      iconName: 'artisan'
    },
    {
      id: 'gal-3',
      title: 'Deepor Beel Bird Sanctuary',
      category: 'WETLANDS',
      location: 'Deepor Beel Wetland, Guwahati',
      desc: 'Migratory waterfowl returning to local waters after GAF volunteers successfully cleared invasive green hyacinth stalks.',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      iconName: 'wetland'
    },
    {
      id: 'gal-4',
      title: 'Botanical Seed Preservation Drive',
      category: 'FORESTS',
      location: 'GAF Organic Seed Nursery, Tezpur',
      desc: 'Assamese botanists cataloguing endangered seed structures collected from deep tropical forests for germination vaulting.',
      imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
      iconName: 'seed'
    },
    {
      id: 'gal-5',
      title: 'Bamboo Craft Workshop',
      category: 'ARTISANS',
      location: 'Eco-Craft Secretariat, Jorhat',
      desc: 'Young community craftsmen carving premium, sustainable bamboo housewares as part of our green livelihood campaign.',
      imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
      iconName: 'craft'
    },
    {
      id: 'gal-6',
      title: 'Youth Squad Training',
      category: 'COMMUNITY',
      location: 'GAF Field Camp, Tezpur',
      desc: 'A vibrant group of 40+ local college volunteers holding endemic forest saplings before deploying on the riverbanks.',
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      iconName: 'community'
    }
  ];

  useEffect(() => {
    const savedGallery = localStorage.getItem('gaf_gallery');
    if (savedGallery) {
      setGalleryItems(JSON.parse(savedGallery));
    } else {
      localStorage.setItem('gaf_gallery', JSON.stringify(defaultGallery));
      setGalleryItems(defaultGallery);
    }
    
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [window.location.hash]);

  const categories = ['ALL', 'FORESTS', 'WETLANDS', 'ARTISANS', 'COMMUNITY'];

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
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">VISUAL ARCHIVE</span>
          <h1 className="text-white mt-3">GAF Field Gallery</h1>
          <p className="gallery-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
            Explore photos capturing our community work, reforestation drives, weaving co-operatives, and returning wildlife in Assam.
          </p>
        </div>
      </section>

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
                  <div className="gallery-item-image" style={{ background: `linear-gradient(to bottom, rgba(15, 29, 25, 0.35), rgba(15, 29, 25, 0.75)), url(${item.imageUrl}) center/cover no-repeat` }}>
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
              <div className="lightbox-image-side" style={{ background: `linear-gradient(to bottom, rgba(15, 29, 25, 0.35), rgba(15, 29, 25, 0.75)), url(${activeLightboxItem.imageUrl}) center/cover no-repeat` }}>
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

      {/* STYLES MOVED TO INDEX.CSS */}
    </div>
  );
};

export default Gallery;
