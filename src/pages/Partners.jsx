import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../admin/hooks/useContent';

const Partners = () => {
  const { getSection, isLoading } = useContent('partners');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderCredIcon = (id) => {
    switch (id) {
      case '12a':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case '80g':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case 'csr1':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="9" y1="22" x2="9" y2="16" />
            <line x1="15" y1="22" x2="15" y2="16" />
            <line x1="9" y1="16" x2="15" y2="16" />
            <path d="M9 12h6M9 8h6M9 4h6" />
          </svg>
        );
      case 'companiesAct':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        );
      case 'darpan':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
          </svg>
        );
      case 'pan':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
            <line x1="7" y1="8" x2="17" y2="8" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="7" y1="16" x2="13" y2="16" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (isLoading) return null;

  const heroSection = getSection('partners_hero');
  const credentialsSection = getSection('partners_credentials');
  const institutionalSection = getSection('partners_institutional');
  const ctaSection = getSection('partners_cta');

  return (
    <div className="partners-page animate-fade-scale">
      {/* 1. HERO BANNER */}
      {heroSection && (
        <section className="hero-section-premium">
          <div className="container-custom">
            <span className="badge badge-gold">{heroSection.badge}</span>
            <h1 className="text-white mt-3">{heroSection.heading}</h1>
            <p className="hero-subtitle-premium">
              {heroSection.subtitle}
            </p>
          </div>
        </section>
      )}

      {/* 2. CSR COMPLIANCE STATUTORY */}
      {credentialsSection && (
        <section className="compliance-credentials-section section-padding bg-sand">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{credentialsSection.badge}</span>
              <h2>{credentialsSection.heading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                {credentialsSection.subtitle}
              </p>
            </div>

            <div className="grid-responsive credentials-grid mt-5">
              {(credentialsSection.items || []).map((cred) => (
                <div className="glass-card credential-card" key={cred.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', backgroundColor: 'var(--white)' }}>
                  <div>
                    <div className="cred-icon-box">{renderCredIcon(cred.id)}</div>
                    <h3>{cred.title}</h3>
                    <p style={{ marginTop: '10px', fontSize: '0.92rem', color: 'var(--muted)' }}>{cred.desc}</p>
                  </div>
                  {cred.regNo && (
                    <div style={{ marginTop: '16px', padding: '8px 12px', backgroundColor: 'var(--sand)', border: '1px solid rgba(17, 63, 39, 0.05)', borderRadius: '4px', fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--primary)', fontWeight: '700', wordBreak: 'break-all' }}>
                      REF NO: {cred.regNo}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. DYNAMIC INSTITUTIONAL CO-OPERATIONS */}
      {institutionalSection && (
        <section className="tiers-section section-padding bg-cream">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{institutionalSection.badge}</span>
              <h2>{institutionalSection.heading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                {institutionalSection.subtitle}
              </p>
            </div>

            <div className="grid-responsive tiers-grid mt-5">
              {(institutionalSection.items || []).map((partner, idx) => (
                <div className="glass-card partner-card-inner" key={idx} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--white)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span className="partner-badge-label" style={{ fontFamily: 'var(--font-body)', fontWeight: '800', fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '1px' }}>{partner.badge}</span>
                    <div className="partner-visual-logo" style={{ fontFamily: 'var(--font-header)', fontWeight: '800', fontSize: '1.1rem', color: 'var(--primary)', border: '1px solid rgba(17, 63, 39, 0.08)', padding: '4px 10px', borderRadius: '4px', backgroundColor: '#faf9f6' }}>{partner.logoText}</div>
                  </div>
                  <h3>{partner.name}</h3>
                  <span className="partner-role" style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px', display: 'block' }}>{partner.role}</span>
                  <div style={{ height: '1px', backgroundColor: 'rgba(17, 63, 39, 0.08)', margin: '15px 0' }} />
                  <p style={{ flexGrow: '1' }}>{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. CSR CALL TO ACTION */}
      {ctaSection && (
        <section className="impact-cta-section section-padding bg-primary text-center">
          <div className="container-custom">
            <div className="cta-box-wrapper-inner">
              <span className="badge badge-gold">{ctaSection.badge}</span>
              <h2 className="cta-heading text-white mt-3">{ctaSection.heading}</h2>
              <p className="cta-subtitle mt-3">
                {ctaSection.subtitle}
              </p>
              <div className="cta-buttons-row mt-4" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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

        /* CREDENTIALS */
        .credential-card {
          padding: 2.2rem;
          background-color: var(--white);
        }

        .cred-icon-box {
          margin-bottom: 1.2rem;
          width: 48px;
          height: 48px;
          background-color: rgba(217, 95, 67, 0.05);
          border: 1px solid rgba(217, 95, 67, 0.1);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .credential-card h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: var(--primary);
        }

        .partner-card-inner h3 {
          font-size: 1.2rem;
          color: var(--primary);
          line-height: 1.4;
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

export default Partners;
