import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard';
import ImpactSlider from '../components/ImpactSlider';
import { useContent } from '../admin/hooks/useContent';

const Home = () => {
  const { sections, getSectionByType, isLoading } = useContent('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary)' }}><div className="loader" style={{ color: 'white' }}>Loading...</div></div>;
  }

  // Get specific sections
  const heroSection = getSectionByType('hero');
  const statsSection = getSectionByType('stats');
  const initiativesSection = getSectionByType('initiatives');
  const sliderSection = getSectionByType('slider');
  const highlightsSection = getSectionByType('highlights');
  const ctaSection = getSectionByType('cta_banner');

  return (
    <div className="home-page animate-fade-scale">
      {/* 1. HERO CANOPY HERO SECTION */}
      {heroSection && (
        <section className="hero-section bg-primary" id={heroSection.id}>
          <div className="hero-background-graphics">
            <div className="pattern-dots" />
          </div>

          <div className="container-custom">
            <div className="hero-content">
              {heroSection.badge && <span className="badge hero-badge">{heroSection.badge}</span>}
              <h1 className="hero-heading" dangerouslySetInnerHTML={{ __html: heroSection.heading || "Green Ahom Federation" }} />
              {heroSection.subtitle && (
                <p className="hero-subtitle">
                  {heroSection.subtitle}
                </p>
              )}
              <div className="hero-cta-group">
                {heroSection.cta_primary?.text && (
                  <Link to={heroSection.cta_primary.link} className="btn btn-gold">
                    {heroSection.cta_primary.text}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </Link>
                )}
                {heroSection.cta_secondary?.text && (
                  <Link to={heroSection.cta_secondary.link} className="btn btn-outline-gold">
                    {heroSection.cta_secondary.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. DYNAMIC STATS DASHBOARD */}
      {statsSection && (
        <section className="stats-section section-padding" id={statsSection.id}>
          <div className="container-custom">
            <div className="stats-header">
              {statsSection.badge && <span className="badge">{statsSection.badge}</span>}
              <h2 className="stats-title">{statsSection.heading}</h2>
              {statsSection.subtitle && (
                <p className="section-subtitle">
                  {statsSection.subtitle}
                </p>
              )}
            </div>

            <div className="stats-grid">
              {statsSection.metrics?.map(metric => (
                <MetricCard 
                  key={metric.id}
                  label={metric.label} 
                  target={metric.transform === 'divide_10000000' ? metric.value / 10000000 : metric.transform === 'divide_100000' ? metric.value / 100000 : metric.value} 
                  context={metric.context}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals || 0} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. SIGNATURE INITIATIVES */}
      {initiativesSection && (
        <section className="initiatives-section section-padding bg-cream" id={initiativesSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              {initiativesSection.badge && <span className="badge">{initiativesSection.badge}</span>}
              <h2>{initiativesSection.heading}</h2>
              <div className="gold-line margin-center" />
              {initiativesSection.subtitle && (
                <p className="section-subtitle mt-2">
                  {initiativesSection.subtitle}
                </p>
              )}
            </div>

            <div className="initiatives-grid">
              {initiativesSection.items?.map((project, idx) => (
                <div className="initiative-card animate-reveal" key={project.id || idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="card-bg-image" style={{ backgroundImage: `url(${project.bgImage || ''})` }} />
                  <div className="card-overlay" />
                  <div className="initiative-card-content">
                    <div className="initiative-card-top">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <span className="init-category">{project.category}</span>
                        <span className="card-number">0{idx + 1}</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                    </div>
                    <div className="init-footer">
                      <Link to="/work" className="init-link">Read More ➔</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. BEFORE/AFTER RESTORATION SHOWCASE */}
      {sliderSection && (
        <section className="slider-section section-padding" id={sliderSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              {sliderSection.badge && <span className="badge">{sliderSection.badge}</span>}
              <h2>{sliderSection.heading}</h2>
              <div className="gold-line margin-center" />
              {sliderSection.subtitle && (
                <p className="section-subtitle mt-2">
                  {sliderSection.subtitle}
                </p>
              )}
            </div>

            <ImpactSlider />
          </div>
        </section>
      )}

      {/* 5. INDUCTIVE WORKING APPROACH DETAIL */}
      {highlightsSection && (
        <section className="highlights-section section-padding bg-primary" id={highlightsSection.id}>
          <div className="container-custom">
            <div className="highlights-wrapper">
              <div className="highlights-text-col">
                {highlightsSection.badge && <span className="badge badge-gold">{highlightsSection.badge}</span>}
                <h2 className="text-white">{highlightsSection.heading}</h2>
                <div className="gold-line" />
                <p className="text-white-muted" dangerouslySetInnerHTML={{ __html: highlightsSection.content }} />
                
                {highlightsSection.quote && (
                  <blockquote className="highlight-quote">
                    <p>{highlightsSection.quote}</p>
                    {highlightsSection.quote_cite && <cite>{highlightsSection.quote_cite}</cite>}
                  </blockquote>
                )}
                
                {highlightsSection.cta?.text && (
                  <Link to={highlightsSection.cta.link} className="btn btn-gold">{highlightsSection.cta.text}</Link>
                )}
              </div>
              <div className="highlights-visual-col">
                <div className="visual-card-premium">
                  <div className="visual-logo-container">
                    <img src="/logo.png" alt="Green Ahom Federation Logo" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. CALL TO ACTION SECTION */}
      {ctaSection && (
        <section className="cta-banner-section" id={ctaSection.id}>
          <div className="container-custom text-center">
            <div className="glass-card cta-box-inner" style={{ padding: '48px', maxWidth: '900px', margin: '0 auto', backgroundColor: 'var(--white)' }}>
              {ctaSection.badge && <span className="badge">{ctaSection.badge}</span>}
              <h2 className="cta-heading" style={{ maxWidth: '520px', margin: '0 auto' }}>{ctaSection.heading}</h2>
              <p className="cta-subtitle" style={{ maxWidth: '520px', margin: '14px auto 0 auto' }} dangerouslySetInnerHTML={{ __html: ctaSection.content }} />
              
              <div className="cta-inner-actions" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
                {ctaSection.cta_primary?.text && (
                  <Link to={ctaSection.cta_primary.link} className="btn btn-primary" style={{ height: '48px', boxSizing: 'border-box' }}>
                    {ctaSection.cta_primary.text}
                  </Link>
                )}
                {ctaSection.cta_secondary?.text && (
                  <Link to={ctaSection.cta_secondary.link} className="btn btn-outline" style={{ height: '48px', boxSizing: 'border-box' }}>
                    {ctaSection.cta_secondary.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Render any additional dynamically added sections at the bottom */}
      {sections.filter(s => !['hero', 'stats', 'initiatives', 'slider', 'highlights', 'cta_banner'].includes(s.type)).map(section => (
        <section key={section.id} className="section-padding" id={section.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              {section.badge && <span className="badge">{section.badge}</span>}
              <h2>{section.heading || section.name}</h2>
              <div className="gold-line margin-center" />
            </div>
            {section.content && (
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
          </div>
        </section>
      ))}

      <style>{`
        /* HERO SECTION STYLING */
        .hero-section {
          position: relative;
          padding: 12rem 0 10rem 0;
          overflow: hidden;
          min-height: 85vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(17, 63, 39, 0.97) 0%, rgba(17, 63, 39, 0.88) 40%, rgba(217, 95, 67, 0.15) 100%), 
                      url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat !important;
        }

        @media (max-width: 991px) {
          .hero-section {
            background: linear-gradient(to bottom, rgba(17, 63, 39, 0.98) 0%, rgba(17, 63, 39, 0.85) 60%, rgba(17, 63, 39, 0.4) 100%), 
                        url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat !important;
          }
        }

        .hero-heading {
          font-family: var(--font-header) !important;
          font-weight: 700 !important;
          color: var(--white);
          font-size: clamp(2.2rem, 4.8vw, 3.6rem) !important;
          line-height: 1.25 !important;
          letter-spacing: 0.5px !important;
          margin: 1.5rem 0;
          text-transform: none;
        }

        .hero-subtitle {
          font-family: var(--font-body) !important;
          color: rgba(255, 255, 255, 0.82) !important;
          font-size: 1.15rem !important;
          line-height: 1.7;
          max-width: 680px;
          margin-top: 20px !important;
          margin-bottom: 2.5rem !important;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        /* STATS SECTION STYLING */
        .stats-section {
          background-color: var(--sand) !important;
          border-top: 1px solid rgba(17, 63, 39, 0.05) !important;
          border-bottom: 1px solid rgba(17, 63, 39, 0.05) !important;
          padding: clamp(3rem, 5vw, 5rem) 0 !important;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stats-title {
          font-family: var(--font-header) !important;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem) !important;
          font-weight: 700 !important;
          color: var(--primary) !important;
          line-height: 1.25 !important;
          max-width: 800px;
          margin: var(--space-sm) auto 0 auto !important;
          text-align: center;
          letter-spacing: 0.2px !important;
        }



        /* STATS GRID OVERRIDES */
        .stats-grid {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          gap: 24px !important;
          width: 100% !important;
          justify-content: center !important;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }

        /* INITIATIVES STYLING */
        .initiatives-section {
          background-color: var(--cream);
          border-bottom: 1px solid rgba(17, 63, 39, 0.05);
        }

        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        @media (max-width: 991px) {
          .initiatives-grid {
            grid-template-columns: 1fr;
          }
        }

        .initiative-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          min-height: 420px;
          display: flex;
          align-items: flex-end;
          padding: 32px;
          color: white;
          group: inherit;
        }

        .card-bg-image {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
          z-index: 1;
        }

        .initiative-card:hover .card-bg-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to top, rgba(17, 63, 39, 0.95) 0%, rgba(17, 63, 39, 0.6) 50%, rgba(17, 63, 39, 0.2) 100%);
          z-index: 2;
        }

        .initiative-card-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          width: 100%;
        }

        .initiative-card-top h3 {
          font-family: var(--font-header);
          font-size: 1.7rem;
          margin: 16px 0;
          color: white;
        }

        .initiative-card-top p {
          color: rgba(255,255,255,0.85);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .init-category {
          background: rgba(217, 95, 67, 0.9);
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .card-number {
          font-family: var(--font-header);
          font-size: 1.2rem;
          color: rgba(255,255,255,0.4);
          font-weight: 700;
        }

        .init-footer {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.2);
        }

        .init-link {
          color: var(--gold);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .init-link:hover {
          color: white;
          transform: translateX(4px);
        }

        /* HIGHLIGHTS SECTION */
        .highlights-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        @media (max-width: 991px) {
          .highlights-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .highlight-quote {
          background: rgba(255,255,255,0.05);
          border-left: 3px solid var(--gold);
          padding: 24px;
          margin: 32px 0;
          border-radius: 0 8px 8px 0;
        }

        .highlight-quote p {
          font-size: 1.15rem;
          font-style: italic;
          color: white;
          margin-bottom: 12px;
          line-height: 1.6;
        }

        .highlight-quote cite {
          font-size: 0.9rem;
          color: var(--gold);
          font-style: normal;
          font-weight: 600;
        }

        .visual-card-premium {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .visual-logo-container {
          background: white;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          padding: 20px;
        }

        /* CTA BANNER */
        .cta-banner-section {
          padding: 100px 0;
          background: linear-gradient(135deg, rgba(17, 63, 39, 0.9) 0%, rgba(17, 63, 39, 0.95) 100%), 
                      url('/extracted_images/ANNUAL_REPORT_2024-2025_p1_img1.jpg') center/cover fixed;
          position: relative;
        }

        .cta-box-inner {
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
          border-radius: 16px;
          border: 1px solid rgba(17, 63, 39, 0.1);
        }


      `}</style>
    </div>
  );
};

export default Home;
