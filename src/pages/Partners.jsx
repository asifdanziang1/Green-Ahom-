import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const institutionalPartners = [
    {
      name: 'Oil and Natural Gas Corporation (ONGC Silchar)',
      role: 'CSR Sponsorship Patron',
      desc: 'Generously sponsored GAF’s massive Nutritional Food Packet Distribution for 935 registered TB patients in Cachar and Hailakandi districts (FY 2023-24 CSR, budget ₹14,85,000), as well as GAF’s Cataract surgery support program (FY 2024-25, budget ₹1,59,590).',
      badge: 'ONGC SILCHAR',
      logoText: 'ONGC'
    },
    {
      name: 'ITI Srikona Campus (Silchar, Cachar District)',
      role: 'Educational Training Partner',
      desc: 'Collaborated with GAF in FY 2022-23 to host the intensive Skill Training Class on Financial Literacy & Management, enabling technical students and rural youth to master banking systems and UPI budgeting.',
      badge: 'ITI SRIKONA',
      logoText: 'ITI'
    },
    {
      name: 'BH College (Howli, Barpeta District)',
      role: 'Rural Infrastructure Collaborator',
      desc: 'Academic and logistical collaboration for GAF’s landmark Community Centre construction program inside Barpeta (FY 2024-25, total program budget ₹42,37,000), creating durable local development spaces.',
      badge: 'BH COLLEGE',
      logoText: 'BHC'
    },
    {
      name: 'Cachar Cancer Hospital',
      role: 'Humanitarian Health Partner',
      desc: 'Professional coordination partner for GAF’s voluntary Blood Donation Camps and emergency volunteer mobilization efforts, supporting critical oncology patient care systems.',
      badge: 'CACHAR CANCER',
      logoText: 'CCH'
    }
  ];

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
      default:
        return null;
    }
  };

  return (
    <div className="partners-page animate-fade-scale">
      {/* 1. HERO BANNER */}
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">COLLABORATION</span>
          <h1 className="text-white mt-3">CSR Partnerships &amp; Patrons</h1>
          <p className="partners-hero-subtitle text-white-muted" style={{ maxWidth: '680px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
            We collaborate with premier corporate entities, public administrations, and academic campuses to deploy verified social welfare programs across Northeast India.
          </p>
        </div>
      </section>

      {/* 2. CSR COMPLIANCE STATUTORY */}
      <section className="compliance-credentials-section section-padding bg-sand">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">TRUST FRAMEWORK</span>
            <h2>Our Statutory CSR Credentials</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Green Ahom Federation complies with all statutory non-profit regulations of the Ministry of Corporate Affairs, India.
            </p>
          </div>

          <div className="grid-responsive credentials-grid mt-5">
            {[
              { id: 'csr1', title: 'MCA CSR-1 Implementing Agency', desc: 'GAF is officially registered with the Ministry of Corporate Affairs to execute CSR projects under Section 135 of the Indian Companies Act, 2013.' },
              { id: '80g', title: '80G Tax Exemption Status', desc: 'Allows GAF’s corporate and individual patrons to claim 50% tax deductions on all charity donations under Section 80G.' },
              { id: '12a', title: '12A Non-Profit Registration', desc: 'Registered under Section 12A of the Income Tax Act, 1961, establishing GAF’s verified tax-free charity status.' },
              { id: 'companiesAct', title: 'Section 8 Constitutional Charter', desc: 'Strict dividend distribution prohibition, ensuring 100% of mobilized budgets directly support field projects.' }
            ].map((cred) => (
              <div className="glass-card credential-card" key={cred.id}>
                <div className="cred-icon-box">{renderCredIcon(cred.id)}</div>
                <h3>{cred.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.5', marginTop: '10px' }}>{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC INSTITUTIONAL CO-OPERATIONS */}
      <section className="tiers-section section-padding bg-cream">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">COLLABORATORS</span>
            <h2>Our Verified Institutional Patrons</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Detailing GAF's official partnerships with corporate CSR wings, technical institutions, and college districts.
            </p>
          </div>

          <div className="grid-responsive tiers-grid mt-5">
            {institutionalPartners.map((partner, idx) => (
              <div className="glass-card partner-card-inner" key={idx} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--white)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <span className="partner-badge-label" style={{ fontFamily: 'var(--font-body)', fontWeight: '800', fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '1px' }}>{partner.badge}</span>
                  <div className="partner-visual-logo" style={{ fontFamily: 'var(--font-header)', fontWeight: '800', fontSize: '1.1rem', color: 'var(--primary)', border: '1px solid #eaeaea', padding: '4px 10px', borderRadius: '4px', backgroundColor: '#faf9f6' }}>{partner.logoText}</div>
                </div>
                <h3>{partner.name}</h3>
                <span className="partner-role" style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px', display: 'block' }}>{partner.role}</span>
                <div style={{ height: '1px', backgroundColor: '#eaeaea', margin: '15px 0' }} />
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.6', flexGrow: '1' }}>{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CSR CALL TO ACTION */}
      <section className="impact-cta-section section-padding bg-primary text-center">
        <div className="container-custom">
          <div className="cta-box-wrapper-inner">
            <span className="badge badge-gold">CSR INTEGRATION</span>
            <h2 className="text-white mt-3" style={{ color: 'var(--white)' }}>Partner with Green Ahom Federation</h2>
            <p className="text-white-muted max-width-center mt-3" style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', lineHeight: '1.6' }}>
              We facilitate seamless CSR-1 project integration under Schedule VII of the Companies Act, providing GIS geo-tagged beneficiary logs, monthly progress sheets, and professional third-party audit dossiers.
            </p>
            <div className="cta-buttons-row mt-4" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/reports" className="btn btn-gold">Review Audited Ledgers</Link>
              <Link to="/contact" className="btn btn-outline-gold">Initiate CSR Proposal</Link>
            </div>
          </div>
        </div>
      </section>

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
