import { useEffect } from 'react';
import { useContent } from '../admin/hooks/useContent';

const AboutUs = () => {
  const { getSectionByType, isLoading } = useContent('about');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary)' }}><div className="loader" style={{ color: 'white' }}>Loading...</div></div>;
  }

  const heroSection = getSectionByType('hero');
  const legacySection = getSectionByType('legacy');
  const complianceSection = getSectionByType('compliance');
  const statutoryCredentialsSection = getSectionByType('statutory_credentials');
  const directorsSection = getSectionByType('directors');
  const founderSection = getSectionByType('founder_profile');
  const academySection = getSectionByType('academy');
  const workingApproachSection = getSectionByType('working_approach');

  return (
    <div className="about-page animate-fade-scale">
      {/* 1. HEADER SECTION */}
      {heroSection && (
        <section className="hero-section-premium" id={heroSection.id}>
          <div className="container-custom">
            {heroSection.badge && <span className="badge badge-gold">{heroSection.badge}</span>}
            <h1 className="text-white mt-3">{heroSection.heading}</h1>
            {heroSection.subtitle && (
              <p className="hero-subtitle-premium">
                {heroSection.subtitle}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 2. THE HISTORICAL LEGACY */}
      {legacySection && (
        <section className="legacy-section section-padding" id={legacySection.id}>
          <div className="container-custom legacy-wrapper">
            <div className="legacy-text-col">
              {legacySection.badge && <span className="badge">{legacySection.badge}</span>}
              <h2>{legacySection.heading}</h2>
              <div className="gold-line" />
              {legacySection.content && (
                <div 
                  className="mt-4 font-weight-600" 
                  style={{ color: 'var(--muted)' }}
                  dangerouslySetInnerHTML={{ __html: legacySection.content }}
                />
              )}
            </div>
            
            <div className="legacy-visual-col">
              <div className="glass-card legacy-card-visual">
                <div className="visual-logo-container-about" style={{ marginBottom: '1.5rem', background: '#ffffff', padding: '10px 20px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <img src="/logo.png" alt="Green Ahom Federation Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
                </div>
                <h3 style={{ color: 'var(--white)', fontFamily: 'var(--font-header)', fontWeight: '700' }}>{legacySection.visual_title || "Ahom Ecological Legacy"}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{legacySection.visual_desc}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. STATUTORY COMPLIANCE & LEGAL CHARTER CARD */}
      {complianceSection && (
        <section className="compliance-section section-padding bg-sand" id={complianceSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              {complianceSection.badge && <span className="badge badge-gold">{complianceSection.badge}</span>}
              <h2>{complianceSection.heading}</h2>
              <div className="gold-line margin-center" />
              {complianceSection.subtitle && (
                <p className="section-subtitle mt-2">
                  {complianceSection.subtitle}
                </p>
              )}
            </div>

            <div className="glass-card compliance-card-inner mt-5">
              <div className="compliance-grid">
                <div className="comp-col">
                  {complianceSection.content && (
                    <div dangerouslySetInnerHTML={{ __html: complianceSection.content }} />
                  )}
                </div>

                <div className="comp-col comp-visual-info">
                  <div className="statutory-badge-box">
                    <span className="statutory-seal">CERTIFIED</span>
                    <h4>{complianceSection.cert_title}</h4>
                    <p>{complianceSection.cert_desc}</p>
                    <div className="statutory-divider" />
                    {complianceSection.cert_meta?.map((meta, idx) => (
                      <div className="statutory-meta-row" key={idx}>
                        <span>{meta.label}</span>
                        <strong>{meta.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STATUTORY REGISTRATIONS SECTION */}
      {statutoryCredentialsSection && (
        <section className="statutory-credentials-section section-padding bg-cream" id={statutoryCredentialsSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge badge-gold">{statutoryCredentialsSection.badge}</span>
              <h2>{statutoryCredentialsSection.heading}</h2>
              <div className="gold-line margin-center" />
              {statutoryCredentialsSection.subtitle && (
                <p className="section-subtitle mt-2">
                  {statutoryCredentialsSection.subtitle}
                </p>
              )}
            </div>

            <div className="statutory-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginTop: '3rem' }}>
              {statutoryCredentialsSection.items?.map((cred, idx) => (
                <div className="glass-card" key={idx} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--white)' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', backgroundColor: 'var(--sand)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '4px', fontWeight: '800', letterSpacing: '0.5px' }}>{cred.category}</span>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginTop: '12px', lineHeight: '1.3' }}>{cred.label}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px' }}>{cred.desc}</p>
                  </div>
                  <div style={{ marginTop: '16px', borderTop: '1px solid rgba(17, 63, 39, 0.08)', paddingTop: '12px' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '600', display: 'block' }}>REGISTRATION NUMBER:</span>
                    <strong style={{ fontSize: '1rem', color: 'var(--gold)', fontFamily: 'monospace', wordBreak: 'break-all', display: 'block', marginTop: '2px' }}>{cred.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. BOARD OF DIRECTORS */}
      {directorsSection && (
        <section className="directors-section section-padding bg-cream" id={directorsSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              {directorsSection.badge && <span className="badge">{directorsSection.badge}</span>}
              <h2>{directorsSection.heading}</h2>
              <div className="gold-line margin-center" />
              {directorsSection.subtitle && (
                <p className="section-subtitle mt-2">
                  {directorsSection.subtitle}
                </p>
              )}
            </div>

            <div className="grid-responsive directors-grid mt-5">
              {directorsSection.items?.map((dir, idx) => (
                <div className="glass-card director-card" key={idx} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', backgroundColor: 'var(--white)' }}>
                  <div className="dir-card-top">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      {dir.shares && <span className="dir-badge">{dir.shares}</span>}
                      {dir.din && <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '700', opacity: 0.8 }}>DIN: {dir.din}</span>}
                    </div>
                    <h3 className="mt-2">{dir.name}</h3>
                    <span className="dir-role">{dir.role}</span>
                  </div>
                  <div className="dir-card-body mt-3" style={{ flexGrow: 1 }}>
                    {dir.qualification && (
                      <p className="dir-qualification" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '10px' }}>
                        <strong>Education:</strong> {dir.qualification}
                      </p>
                    )}
                    <p className="dir-bg">{dir.background || dir.desc}</p>
                    {dir.experience && (
                      <p className="dir-experience mt-3" style={{ fontSize: '0.9rem', color: 'var(--muted)', borderLeft: '3px solid var(--gold)', paddingLeft: '10px', fontStyle: 'italic', lineHeight: '1.5' }}>
                        {dir.experience}
                      </p>
                    )}
                    {dir.expertise && dir.expertise.length > 0 && (
                      <div className="dir-expertise mt-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                        {dir.expertise.map((exp, eIdx) => (
                          <span key={eIdx} style={{ fontSize: '0.72rem', backgroundColor: 'var(--sand)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>
                            {exp}
                          </span>
                        ))}
                      </div>
                    )}
                    {dir.address && <p className="dir-address mt-3"><strong>Registered Address:</strong><br />{dir.address}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOUNDER PROFILE SECTION */}
      {founderSection && (
        <section className="founder-section section-padding bg-sand" id={founderSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge badge-gold">{founderSection.badge}</span>
              <h2>{founderSection.heading}</h2>
              <div className="gold-line margin-center" />
            </div>

            <div className="glass-card mt-5" style={{ padding: '3rem', backgroundColor: 'var(--white)' }}>
              <div className="founder-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
                {/* Left side: Bio Card */}
                <div style={{ backgroundColor: 'var(--sand)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(17, 63, 39, 0.08)' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem auto', fontFamily: 'var(--font-header)' }}>
                    SR
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', textAlign: 'center' }}>{founderSection.name_display}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: '700', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>{founderSection.designation}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', textAlign: 'center', marginTop: '2px', fontWeight: '600' }}>{founderSection.din}</p>
                  
                  <div style={{ height: '1px', backgroundColor: 'rgba(17, 63, 39, 0.08)', margin: '1.5rem 0' }} />
                  
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '8px' }}>Credentials & Qualifications</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {founderSection.qualifications?.map((q, idx) => (
                      <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--muted)', paddingLeft: '14px', position: 'relative', marginBottom: '6px' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>•</span> {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right side: Detailed Bio & Achievements */}
                <div>
                  <h3 style={{ color: 'var(--primary)' }}>Founder's Vision & Strategy</h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--muted)', marginTop: '1rem' }}>{founderSection.bio}</p>
                  
                  <div className="founder-details-subgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2.5rem' }}>
                    <div>
                      <h4 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--sand)', paddingBottom: '6px', fontSize: '1.05rem' }}>Key Milestones Achieved</h4>
                      <ul className="bullet-checks-list mt-3">
                        {founderSection.achievements?.map((ach, idx) => (
                          <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--sand)', paddingBottom: '6px', fontSize: '1.05rem' }}>CSR Delivery Competencies</h4>
                      <ul className="bullet-checks-list mt-3">
                        {founderSection.csr_experience?.map((exp, idx) => (
                          <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. FLAGSHIP INITIATIVE: IDEAL ACADEMY */}
      {academySection && (
        <section className="ideal-academy-section section-padding" id={academySection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              {academySection.badge && <span className="badge badge-gold">{academySection.badge}</span>}
              <h2>{academySection.heading}</h2>
              <div className="gold-line margin-center" />
              {academySection.subtitle && (
                <p className="section-subtitle mt-2">
                  {academySection.subtitle}
                </p>
              )}
            </div>

            <div className="academy-grid-wrapper mt-5">
              {/* School Info Board */}
              <div className="glass-card school-info-card bg-primary text-white">
                <h3 className="text-white" style={{ color: 'var(--white)' }}>Basic Information</h3>
                <div className="gold-line" />
                <div className="school-details-list mt-4">
                  {academySection.school_info?.map((info, idx) => (
                    <div className="sch-detail-item" key={idx}>
                      <span>{info.label}</span>
                      <strong className={info.isGold ? 'text-gold' : ''}>{info.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* School Content */}
              <div className="academy-main-details-col">
                <h3>Vision &amp; Educational Mission</h3>
                {academySection.content && (
                  <div className="content-html" dangerouslySetInnerHTML={{ __html: academySection.content }} />
                )}
              </div>
            </div>

            {/* Core Contributions */}
            {academySection.items && academySection.items.length > 0 && (
              <div className="academy-contributions-box glass-card mt-5">
                <h3>{academySection.contributions_heading || 'Major Contributions During the Last Year'}</h3>
                <div className="contributions-grid-inner mt-4">
                  {academySection.items.map((contrib, idx) => (
                    <div className="contrib-item" key={contrib.id || idx}>
                      <h5 className="contrib-item-header">
                        <span className="contrib-num">0{idx + 1}.</span> {contrib.title}
                      </h5>
                      <p>{contrib.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. OUR WORKING APPROACH */}
      {workingApproachSection && (
        <section className="team-section section-padding bg-cream" id={workingApproachSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              {workingApproachSection.badge && <span className="badge">{workingApproachSection.badge}</span>}
              <h2>{workingApproachSection.heading}</h2>
              <div className="gold-line margin-center" />
              {workingApproachSection.subtitle && (
                <p className="section-subtitle mt-2">
                  {workingApproachSection.subtitle}
                </p>
              )}
            </div>

            <div className="grid-responsive team-grid mt-5">
              {workingApproachSection.items?.map((approach, idx) => (
                <div className="glass-card value-card text-center" key={approach.id || idx}>
                  <div className="approach-num-icon">0{idx + 1}</div>
                  <h3>{approach.title}</h3>
                  <p className="mt-2">{approach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        /* FOUNDER PROFILE */
        @media (max-width: 991px) {
          .founder-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .founder-details-subgrid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }

        /* LEGACY STORY */
        .legacy-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .legacy-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .legacy-text-col .content-html p {
          margin-top: 1rem;
        }

        .legacy-card-visual {
          padding: 3.5rem 2rem;
          text-align: center;
          color: var(--white);
          border-color: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, rgba(17, 63, 39, 0.85), rgba(17, 63, 39, 0.95)), 
                      url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80') center/cover no-repeat !important;
        }

        .legacy-card-visual h3 {
          margin-bottom: 10px;
        }

        .legacy-card-visual p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }

        /* COMPLIANCE SECTION */
        .compliance-card-inner {
          padding: 3rem;
          background-color: var(--white);
        }

        .compliance-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .compliance-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .comp-col h3 {
          color: var(--primary);
        }

        .comp-col p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--muted);
          margin-top: 1rem;
        }

        .statutory-badge-box {
          background-color: var(--sand);
          border: 1px solid rgba(17, 63, 39, 0.08);
          border-radius: var(--radius-md);
          padding: 2rem;
          text-align: center;
        }

        .statutory-seal {
          display: inline-block;
          padding: 4px 10px;
          background-color: rgba(217, 95, 67, 0.12);
          color: var(--gold);
          font-weight: 700;
          font-size: 0.7rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(217, 95, 67, 0.2);
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .statutory-divider {
          height: 1px;
          background-color: rgba(17, 63, 39, 0.08);
          margin: 1.5rem 0;
        }

        .statutory-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          margin-bottom: 8px;
        }

        .statutory-meta-row span {
          color: var(--muted);
          opacity: 0.8;
        }

        .statutory-meta-row strong {
          color: var(--primary);
        }

        /* DIRECTORS GRID */
        .director-card {
          padding: 2.2rem;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dir-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--gold);
          background-color: rgba(217, 95, 67, 0.08);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          margin-bottom: 8px;
        }

        .dir-role {
          font-size: 0.85rem;
          color: var(--muted);
          font-weight: 600;
          opacity: 0.8;
          display: block;
        }

        .dir-bg {
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--muted);
        }

        .dir-address {
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--muted);
          border-top: 1px solid rgba(17, 63, 39, 0.08);
          padding-top: 12px;
        }

        /* IDEAL ACADEMY GRID */
        .academy-grid-wrapper {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .academy-grid-wrapper {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .school-info-card {
          padding: 2.5rem;
          border-radius: var(--radius-lg);
        }

        .school-details-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .sch-detail-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 8px;
          font-size: 0.95rem;
        }

        .sch-detail-item span {
          color: rgba(255, 255, 255, 0.7);
        }

        .sch-detail-item strong {
          text-align: right;
        }

        .bullet-checks-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-left: 0;
        }

        .bullet-checks-list li {
          position: relative;
          padding-left: 24px;
          font-size: 0.95rem;
          color: var(--muted);
        }

        .bullet-checks-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          width: 12px;
          height: 12px;
          background-color: var(--gold);
          mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") no-repeat center / contain;
          -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") no-repeat center / contain;
        }

        .academy-main-details-col .content-html p {
          margin-top: 1rem;
          color: var(--muted);
        }

        .academy-contributions-box {
          padding: 3rem;
          background-color: var(--white);
        }

        .contributions-grid-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .contributions-grid-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .contrib-item-header {
          font-size: 1.1rem;
          color: var(--primary) !important;
          margin-bottom: 8px;
          display: flex;
          gap: 6px;
        }

        .contrib-num {
          color: var(--gold);
        }

        .contrib-item p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .value-card {
          padding: 2.5rem 1.8rem;
          background-color: var(--white);
        }

        .approach-num-icon {
          font-family: var(--font-header);
          font-size: 2rem;
          color: var(--gold);
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .font-weight-600 {
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .statutory-grid-mobile {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 12px !important;
            margin-top: 2rem !important;
          }
          .statutory-grid-mobile .glass-card {
            padding: 1.25rem 1rem !important;
          }
          .statutory-grid-mobile .glass-card h3 {
            font-size: 0.95rem !important;
            margin-top: 8px !important;
          }
          .statutory-grid-mobile .glass-card p {
            font-size: 0.8rem !important;
          }
          .statutory-grid-mobile .glass-card strong {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
