import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImpactSlider from '../components/ImpactSlider';
import { useContent } from '../admin/hooks/useContent';

const Impact = () => {
  const { getSection, getSectionByType, isLoading } = useContent('impact');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderIcon = (name) => {
    switch (name) {
      case 'funds':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
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
      case 'relief':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (isLoading) return null;

  const heroSection = getSection('impact_hero');
  const metricsSection = getSection('impact_metrics');
  const sliderSection = getSection('impact_slider');
  const storiesSection = getSection('impact_stories');
  const ctaSection = getSection('impact_cta');

  return (
    <div className="impact-page animate-fade-scale">
      {/* 1. HERO HEADER */}
      {heroSection && (
        <section className="hero-section-premium">
          <div className="container-custom">
            <span className="badge badge-gold">{heroSection.badge}</span>
            <h1 className="text-white mt-3">{heroSection.heading}</h1>
            <p className="impact-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
              {heroSection.subtitle}
            </p>
          </div>
        </section>
      )}

      {/* 2. SPECIFIC AUDITED METRICS */}
      {metricsSection && (
        <section className="metrics-dashboard-section section-padding">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{metricsSection.badge}</span>
              <h2>{metricsSection.heading}</h2>
              <div className="gold-line margin-center" />
            </div>

            <div className="grid-responsive metrics-grid mt-5">
              {(metricsSection.items || []).map((metric) => (
                <div className="glass-card metric-impact-card" key={metric.title}>
                  <div className="m-icon-box">{renderIcon(metric.iconName || metric.id)}</div>
                  <h3>{metric.title}</h3>
                  <div className="m-big-stat text-gold">
                    <strong>{metric.val}</strong>
                    <span style={{ fontSize: '0.85rem' }}>{metric.suffix}</span>
                  </div>
                  <div className="m-divider-line" />
                  <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: '1.5' }}>{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. VISUAL BEFORE/AFTER TRANSFORM */}
      {sliderSection && (
        <section className="transformation-slider-section section-padding bg-cream">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{sliderSection.badge}</span>
              <h2>{sliderSection.heading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                {sliderSection.subtitle}
              </p>
            </div>

            <ImpactSlider />
          </div>
        </section>
      )}

      {/* 4. FIELD STORIES - VOICES FROM THE SOIL */}
      {storiesSection && (
        <section className="field-stories-section section-padding">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{storiesSection.badge}</span>
              <h2>{storiesSection.heading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                {storiesSection.subtitle}
              </p>
            </div>

            <div className="grid-responsive stories-grid mt-5">
              {(storiesSection.items || []).map((story) => (
                <div className="glass-card story-card-premium" key={story.id}>
                  <div className="story-badge-icon">{renderIcon(story.iconName)}</div>
                  <h3>{story.title}</h3>
                  <blockquote className="story-quote-body">
                    <p>"{story.quote}"</p>
                  </blockquote>
                  <div className="story-author-details">
                    <strong>{story.author}</strong>
                    <span>Verified grassroots Beneficiary</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CALL TO ACTION AREA */}
      {ctaSection && (
        <section className="impact-cta-section section-padding bg-primary text-center">
          <div className="container-custom">
            <div className="cta-box-wrapper-inner">
              <span className="badge badge-gold">{ctaSection.badge}</span>
              <h2 className="text-white mt-3" style={{ color: 'var(--white)' }}>{ctaSection.heading}</h2>
              <p className="text-white-muted max-width-center mt-3" style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.75)' }}>
                {ctaSection.subtitle}
              </p>
              <div className="cta-buttons-row mt-4">
                {ctaSection.cta_primary && (
                  <Link to={ctaSection.cta_primary.link} className="btn btn-gold">{ctaSection.cta_primary.text}</Link>
                )}
                {ctaSection.cta_secondary && (
                  <Link to={ctaSection.cta_secondary.link} className="btn btn-outline-gold">{ctaSection.cta_secondary.text}</Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <style>{`

        .metric-impact-card {
          padding: 2.2rem 1.8rem;
          background-color: var(--white);
          height: 100%;
        }

        .m-icon-box {
          margin-bottom: 1.2rem;
          width: 52px;
          height: 52px;
          background-color: rgba(17, 63, 39, 0.05);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(17, 63, 39, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-impact-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--primary);
        }

        .m-big-stat {
          margin-bottom: 1.5rem;
          font-family: var(--font-header);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .m-big-stat strong {
          font-size: clamp(1.8rem, 3.2vw, 2.4rem);
          font-weight: 800;
          display: block;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--gold);
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .m-big-stat span {
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--muted);
        }

        .m-divider-line {
          height: 1px;
          background-color: rgba(17, 63, 39, 0.08);
          margin-bottom: 1.5rem;
        }

        .metric-impact-card p {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* STORIES CARDS */
        .story-card-premium {
          padding: 2.5rem 2rem;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .story-badge-icon {
          margin-bottom: 1.5rem;
          width: 48px;
          height: 48px;
          background-color: rgba(217, 95, 67, 0.05);
          border: 1px solid rgba(217, 95, 67, 0.1);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-card-premium h3 {
          font-size: 1.25rem;
          margin-bottom: 15px;
          color: var(--primary);
        }

        .story-quote-body {
          font-style: italic;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.65;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .story-author-details {
          border-top: 1px solid rgba(17, 63, 39, 0.08);
          padding-top: 1.2rem;
          display: flex;
          flex-direction: column;
        }

        .story-author-details strong {
          color: var(--primary);
          font-size: 0.95rem;
        }

        .story-author-details span {
          font-size: 0.78rem;
          color: var(--gold-hover);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 3px;
        }

        /* IMPACT CTA Banner */
        .max-width-center {
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons-row {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default Impact;
