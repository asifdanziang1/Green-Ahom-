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

  const renderCredIcon = (category) => {
    const cat = category ? category.toUpperCase() : '';
    if (cat.includes('INCORPORATION') || cat.includes('CIN')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M12 17v-6" />
        </svg>
      );
    } else if (cat.includes('TAX') || cat.includes('EXEMPTION') || cat.includes('PAN') || cat.includes('12A') || cat.includes('80G')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      );
    } else if (cat.includes('CSR') || cat.includes('ELIGIBILITY')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    } else {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    }
  };

  const renderContributionIcon = (idx) => {
    switch (idx) {
      case 0:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 1:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 2:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
      case 3:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-page animate-fade-scale">
      {/* 1. HEADER SECTION */}
      {heroSection && (
        <section className="hero-section-premium" id={heroSection.id}>
          <div className="container-custom">
            {heroSection.badge && <span className="badge badge-gold">{heroSection.badge}</span>}
            <h1 className="text-white mt-3">{heroSection.heading}</h1>
            <p className="hero-subtitle-premium">
              Restoring ecosystems, supporting education, and enabling sustainable grassroots development across Northeast India.
            </p>
            
            {/* Quick Stats Strip */}
            <div className="hero-stats-strip">
              <div className="hero-stat-item">
                <span className="hero-stat-value">₹1.97 Cr+</span>
                <span className="hero-stat-label">Funds Deployed</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <span className="hero-stat-value">364</span>
                <span className="hero-stat-label">Scholars Supported</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <span className="hero-stat-value">5 Districts</span>
                <span className="hero-stat-label">Field Coverage</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <span className="hero-stat-value">3 Years</span>
                <span className="hero-stat-label">Operational Record</span>
              </div>
            </div>
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
              
              <div className="legacy-body-content mt-4" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.7' }}>
                <p style={{ marginBottom: '1.2rem', fontWeight: '500' }}>
                  The historical legacy of the Ahom dynasty (1228–1826) represents one of the world's most sophisticated systems of community-led ecological governance. Rejecting centralized exploitation, the Ahom rulers established a network of decentralized wetlands, dykes (Garhs), and community-managed agricultural cooperatives that balanced hydrology with food security for six centuries.
                </p>
                
                <blockquote className="legacy-pullquote" style={{ borderLeft: '4px solid var(--gold)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--primary)', fontWeight: '600', fontSize: '1.1rem' }}>
                  "To build a sustainable future, we must look to the ancestors who tamed the hydrology of the Brahmaputra valley without destroying its soul."
                </blockquote>

                <h4 style={{ color: 'var(--primary)', fontFamily: 'var(--font-header)', fontWeight: '700', fontSize: '1.15rem', marginTop: '1.5rem', marginBottom: '0.8rem' }}>Decentralized Wetland Governance</h4>
                <p style={{ marginBottom: '1.2rem' }}>
                  Rather than damming the mighty Brahmaputra river, Ahom engineers utilized seasonal flood basins as natural water retention reservoirs. This dynamic hydrological planning protected villages from catastrophic monsoon floods while keeping agricultural soil rich in silts.
                </p>

                <h4 style={{ color: 'var(--primary)', fontFamily: 'var(--font-header)', fontWeight: '700', fontSize: '1.15rem', marginTop: '1.5rem', marginBottom: '0.8rem' }}>Community Ownership & Co-ops</h4>
                <p>
                  Today, the Green Ahom Federation revives this indigenous spirit. By merging ancient Ahom water management practices with modern environmental engineering, we empower grassroots communities to reclaim their ancestral role as ecological guardians of Assam.
                </p>
              </div>
            </div>
            
            <div className="legacy-visual-col">
              <div className="glass-card legacy-card-visual" style={{
                background: `linear-gradient(to bottom, rgba(17, 63, 39, 0.4) 0%, rgba(17, 63, 39, 0.9) 100%), url('/extracted_images/ANNUAL_REPORT_23-24_p7_img5.jpg') center/cover no-repeat`,
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <span className="badge badge-gold" style={{ width: 'fit-content', marginBottom: '12px' }}>Ahom Engineering</span>
                <h3 style={{ color: 'var(--white)', fontFamily: 'var(--font-header)', fontWeight: '700', fontSize: '1.4rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Historic Joysagar Hydrological Tank</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '0.9rem', marginTop: '6px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  A 300-year-old operational wetland ecosystem built by Ahom engineers to store rainwater and recharge local aquifers.
                </p>
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
                  <div className="statutory-badge-box premium-trust-box" style={{ 
                    border: '2px solid var(--teal)', 
                    borderRadius: 'var(--radius-lg)', 
                    padding: '2.5rem 2rem', 
                    textAlign: 'center', 
                    background: 'linear-gradient(180deg, rgba(17, 63, 39, 0.02) 0%, rgba(17, 63, 39, 0.05) 100%)',
                    position: 'relative'
                  }}>
                    <div className="trust-seal-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <div className="seal-checkmark-circle" style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: '#e6f3ee',
                        border: '2px solid var(--teal)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '10px'
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="statutory-seal" style={{ 
                        backgroundColor: 'var(--teal)', 
                        color: 'white', 
                        padding: '4px 12px', 
                        borderRadius: '30px', 
                        fontSize: '0.68rem', 
                        fontWeight: '800',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}>MCA CERTIFIED</span>
                    </div>

                    <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '700', fontFamily: 'var(--font-header)' }}>{complianceSection.cert_title}</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: '8px', lineHeight: '1.5' }}>{complianceSection.cert_desc}</p>
                    
                    <div className="statutory-divider" style={{ height: '1px', backgroundColor: 'rgba(17, 63, 39, 0.08)', margin: '1.5rem 0' }} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                      {complianceSection.cert_meta?.map((meta, idx) => (
                        <div className="statutory-meta-row" key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                          <span style={{ color: 'var(--muted)', fontWeight: '500' }}>{meta.label}</span>
                          <strong style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>{meta.value}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="compliance-downloads-pack">
                      <a 
                        href="/client_content/Altered INC-13 MOA OF GREEN AHOM.pdf" 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-gold w-100" 
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', height: '48px', fontSize: '0.85rem' }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Compliance Pack
                      </a>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '12px', fontSize: '0.75rem' }}>
                        <a href="/client_content/Altered INC-13 MOA OF GREEN AHOM.pdf" download className="text-teal" style={{ fontWeight: '600' }}>Download MOA</a>
                        <span style={{ color: 'rgba(17,63,39,0.2)' }}>|</span>
                        <a href="/client_content/Altered AOA OF GREEN AHOM.pdf" download className="text-teal" style={{ fontWeight: '600' }}>Download AOA</a>
                      </div>
                    </div>
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
                <div className="glass-card cred-card-rich" key={idx} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--white)', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.72rem', backgroundColor: 'var(--sand)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '4px', fontWeight: '800', letterSpacing: '0.5px' }}>{cred.category}</span>
                      <div className="cred-card-icon" style={{ opacity: 0.85 }}>{renderCredIcon(cred.category || cred.label)}</div>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginTop: '16px', lineHeight: '1.3', fontWeight: '700' }}>{cred.label}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '8px', lineHeight: '1.5' }}>{cred.desc}</p>
                  </div>
                  <div style={{ marginTop: '18px', borderTop: '1px solid rgba(17, 63, 39, 0.08)', paddingTop: '12px' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: '700', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Registration / ID No:</span>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--gold-hover)', fontFamily: 'monospace', wordBreak: 'break-all', display: 'block', marginTop: '4px', letterSpacing: '0.5px' }}>{cred.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. LEADERSHIP & GOVERNING BOARD */}
      {directorsSection && (
        <section className="directors-section section-padding bg-cream" id={directorsSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge badge-gold">Governing Board</span>
              <h2>Leadership &amp; Institutional Governance</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                GAF is governed by a professional board of Section 8 directors with background in finance, environmental planning, and social development.
              </p>
            </div>
            {/* Director Section: Shamil */}
            <div className="director-section-row mt-5">
              <div className="director-section-img">
                <img src="/client_content/Director_Images/Shamil.jpeg" alt="Shamil R. — Founder & Managing Director" />
                <span className="director-section-badge" style={{ background: 'var(--gold)' }}>Founder &amp; MD</span>
              </div>
              <div className="director-section-content">
                <h3>Shamil R.</h3>
                <span className="director-section-role">Managing Director</span>
                <p className="director-section-bio">
                  Shamil is the founding force behind the Green Ahom Federation. With dual qualifications in Engineering (B.Tech) and Business Administration (MBA Finance), he brings a rare combination of technical rigour and financial acumen to the nonprofit sector. Since incorporating GAF as a Section 8 company in 2022, Shamil has personally steered the organisation from a ₹3.5 Lakh seed deployment to a cumulative ₹1.97 Crore operation spanning five districts of Assam.
                </p>
                <p className="director-section-bio">
                  His core focus areas include institutional compliance — securing 12A, 80G, and CSR-1 registrations — corporate partnership development, and long-term financial planning. Shamil also architects GAF's CSR delivery framework, ensuring that every rupee of corporate funding is traceable from disbursement to field impact. Under his leadership, GAF has built a 55x growth trajectory in just three fiscal years.
                </p>
                <div className="director-section-tags">
                  <span>MBA (Finance) &amp; B.Tech</span>
                  <span>CSR Strategy</span>
                  <span>Institutional Compliance</span>
                  <span>Scale Operations</span>
                </div>
              </div>
            </div>

            {/* Director Section: Habiba (reversed) */}
            <div className="director-section-row director-section-reversed">
              <div className="director-section-img">
                <img src="/client_content/Director_Images/Habiba.png" alt="Habiba S. — Director of Social Programs" />
                <span className="director-section-badge" style={{ background: 'var(--primary)' }}>Board Director</span>
              </div>
              <div className="director-section-content">
                <h3>Habiba S.</h3>
                <span className="director-section-role">Director of Social Programs</span>
                <p className="director-section-bio">
                  Habiba leads GAF's social impact verticals with a deep understanding of rural Assam's educational and welfare landscape. Holding a Master's degree in Sociology, she brings academic depth to grassroots programme design — from scholarship frameworks for underprivileged students to women's self-help group formation in remote char (river island) communities.
                </p>
                <p className="director-section-bio">
                  She is the operational head of Ideal Academy, GAF's flagship rural school supporting 364 scholars, where she oversees curriculum alignment, teacher training, and community engagement. Habiba also manages GAF's gender empowerment initiatives and conducts due diligence for field-level partnerships. Her ability to bridge institutional processes with community trust has been instrumental in GAF's acceptance across tribal and minority populations in Lower Assam.
                </p>
                <div className="director-section-tags">
                  <span>M.A. Sociology</span>
                  <span>Rural Education</span>
                  <span>Gender Empowerment</span>
                  <span>Community Relations</span>
                </div>
              </div>
            </div>

            {/* Director Section: Rofik */}
            <div className="director-section-row">
              <div className="director-section-img">
                <img src="/client_content/Director_Images/Rofik.jpeg" alt="Rofik A. — Director of Field Operations" />
                <span className="director-section-badge" style={{ background: 'var(--primary)' }}>Board Director</span>
              </div>
              <div className="director-section-content">
                <h3>Rofik A.</h3>
                <span className="director-section-role">Director of Field Operations</span>
                <p className="director-section-bio">
                  Rofik is GAF's man on the ground. With a background in Agricultural Sciences (B.Sc.), he translates GAF's environmental vision into on-field reality — managing plantation drives, coordinating flood relief logistics, and supervising contractor execution across multiple districts simultaneously. His deep knowledge of Assam's soil ecology, native species selection, and seasonal planting cycles ensures that GAF's afforestation projects achieve high survival rates.
                </p>
                <p className="director-section-bio">
                  Beyond environmental campaigns, Rofik plays a critical role in GAF's disaster response operations, mobilising resources and relief material during Assam's annual flood crises. He verifies botanical specifications for all carbon-offset projects and maintains field documentation that supports GAF's audit-ready reporting standards. His hands-on leadership style and familiarity with rural terrain make him indispensable to GAF's field credibility.
                </p>
                <div className="director-section-tags">
                  <span>B.Sc. Agriculture</span>
                  <span>Environmental Campaigns</span>
                  <span>Flood Relief Logistics</span>
                  <span>Carbon Offset Projects</span>
                </div>
              </div>
            </div>

            {/* TIMELINE SUBSECTION */}
            <div className="growth-timeline-wrapper mt-5" style={{ background: 'var(--white)', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(17,63,39,0.06)' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="badge badge-gold">55X Growth Timeline</span>
                <h3 style={{ color: 'var(--primary)', fontFamily: 'var(--font-header)', fontWeight: '700', marginTop: '8px' }}>Our Journey of Institutional Trust</h3>
              </div>
              
              <div className="timeline-horizontal-flow" style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', flexWrap: 'wrap', position: 'relative' }}>
                
                {/* Year 1 */}
                <div className="timeline-year-card" style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem' }}>01</div>
                    <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-header)', fontWeight: '800', color: 'var(--gold)' }}>FY 2022–2023</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '700', marginTop: '12px' }}>Inception & Legal Charter</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.5' }}>
                    Incorporation as a Section 8 NPO, securing crucial tax exemptions (12A, 80G) and MCA CSR-1 registration. Initiated baseline deployments of ₹3.5 Lakh.
                  </p>
                </div>

                {/* Year 2 */}
                <div className="timeline-year-card" style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem' }}>02</div>
                    <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-header)', fontWeight: '800', color: 'var(--gold)' }}>FY 2023–2024</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '700', marginTop: '12px' }}>Operational Scale (5X)</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.5' }}>
                    Expanded operations to Hailakandi and Barpeta. Deployed ₹19.3 Lakh in carbon forestry and flood mitigation projects, establishing 5x growth.
                  </p>
                </div>

                {/* Year 3 */}
                <div className="timeline-year-card" style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem' }}>03</div>
                    <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-header)', fontWeight: '800', color: 'var(--gold)' }}>FY 2024–2025</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '700', marginTop: '12px' }}>Exponential Impact (55X)</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.5' }}>
                    Expanded field operations across 5 districts. Partnered with major PSUs (including ONGC) and corporate donors to deploy ₹1.97 Cr+ (55x total growth).
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* PARTNER LOGOS SECTION */}
      <section className="partners-section section-padding" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge badge-gold">Our Network</span>
            <h2>Trusted Partners &amp; Supporters</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              GAF's environmental and educational programmes are supported by leading public sector undertakings, government bodies, and corporate partners committed to sustainable development in Northeast India.
            </p>
          </div>

          <div className="partners-logo-grid mt-5">
            <div className="partner-logo-item">
              <img src="/client_content/Partner_Logos/ONGC.avif" alt="Oil and Natural Gas Corporation (ONGC)" />
              <span className="partner-logo-name">ONGC</span>
            </div>
            <div className="partner-logo-item">
              <img src="/client_content/Partner_Logos/NRL.jpg" alt="Numaligarh Refinery Limited (NRL)" />
              <span className="partner-logo-name">NRL</span>
            </div>
            <div className="partner-logo-item">
              <img src="/client_content/Partner_Logos/gaill.png" alt="GAIL India Limited" />
              <span className="partner-logo-name">GAIL</span>
            </div>
            <div className="partner-logo-item">
              <img src="/client_content/Partner_Logos/Assam Oil.png" alt="Assam Oil Company" />
              <span className="partner-logo-name">Assam Oil</span>
            </div>
            <div className="partner-logo-item">
              <img src="/client_content/Partner_Logos/ASSAM-GOVERNMENT.webp" alt="Government of Assam" />
              <span className="partner-logo-name">Govt. of Assam</span>
            </div>
          </div>
        </div>
      </section>

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
              <div className="glass-card school-info-card bg-primary text-white" style={{ position: 'relative', overflow: 'hidden' }}>
                <h3 className="text-white" style={{ color: 'var(--white)', fontWeight: '700' }}>Basic Information</h3>
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
                <h3 style={{ color: 'var(--primary)', fontWeight: '700' }}>Vision &amp; Educational Mission</h3>
                {academySection.content && (
                  <div className="content-html" dangerouslySetInnerHTML={{ __html: academySection.content }} />
                )}
              </div>
            </div>

            {/* Core Contributions */}
            {academySection.items && academySection.items.length > 0 && (
              <div className="academy-contributions-box glass-card mt-5" style={{ borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ color: 'var(--primary)', fontWeight: '700' }}>{academySection.contributions_heading || 'Major Contributions During the Last Year'}</h3>
                <div className="contributions-grid-inner mt-4">
                  {academySection.items.map((contrib, idx) => (
                    <div className="contrib-item" key={contrib.id || idx}>
                      <h5 className="contrib-item-header" style={{ display: 'flex', alignItems: 'center' }}>
                        {renderContributionIcon(idx)}
                        <span style={{ fontWeight: '700' }}>{contrib.title}</span>
                      </h5>
                      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.5', marginTop: '6px' }}>{contrib.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Gallery Strip */}
            <div className="school-gallery-strip mt-5" style={{ background: 'var(--white)', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(17,63,39,0.06)' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="badge badge-gold">Field Gallery</span>
                <h3 style={{ color: 'var(--primary)', fontFamily: 'var(--font-header)', fontWeight: '700', marginTop: '8px' }}>Life inside Ideal Academy</h3>
              </div>
              <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div className="gallery-item-wrapper" style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(17,63,39,0.08)', boxShadow: 'var(--shadow-sm)' }}>
                  <img src="/client_content/Images/WhatsApp Image 2026-06-08 at 11.54.04 (1).jpeg" alt="Ideal Academy Classrooms" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="gallery-item-wrapper" style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(17,63,39,0.08)', boxShadow: 'var(--shadow-sm)' }}>
                  <img src="/client_content/Images/WhatsApp Image 2026-06-08 at 11.54.04 (2).jpeg" alt="Inauguration Ceremony" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="gallery-item-wrapper" style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(17,63,39,0.08)', boxShadow: 'var(--shadow-sm)' }}>
                  <img src="/client_content/Images/WhatsApp Image 2026-06-08 at 11.54.05.jpeg" alt="Students Activity" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              
              <div className="academy-cta-box text-center mt-4" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
                <a href="/donate" className="btn btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.8rem 2.2rem', fontSize: '0.95rem' }}>
                  Support Ideal Academy Scholars
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 6. OUR WORKING APPROACH */}
      {workingApproachSection && (
        <section className="team-section section-padding bg-sand" id={workingApproachSection.id}>
          <div className="container-custom">
            <div className="section-header text-center">
              {workingApproachSection.badge && <span className="badge badge-gold">{workingApproachSection.badge}</span>}
              <h2>{workingApproachSection.heading}</h2>
              <div className="gold-line margin-center" />
              {workingApproachSection.subtitle && (
                <p className="section-subtitle mt-2">
                  {workingApproachSection.subtitle}
                </p>
              )}
            </div>

            <div className="approach-progression-flow mt-5" style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              gap: '24px', 
              flexWrap: 'wrap',
              position: 'relative'
            }}>
              {workingApproachSection.items?.map((approach, idx) => (
                <div className="approach-flow-step" key={approach.id || idx} style={{ 
                  flex: '1', 
                  minWidth: '220px', 
                  backgroundColor: 'var(--white)', 
                  padding: '2.5rem 2rem', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid rgba(17,63,39,0.06)',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}>
                  {/* Arrow/connector to next step (on desktops) */}
                  {idx < workingApproachSection.items.length - 1 && (
                    <div className="step-arrow-connector" style={{
                      position: 'absolute',
                      right: '-16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--white)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#e6f3ee',
                      color: 'var(--teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '0.9rem'
                    }}>0{idx + 1}</div>
                    <span className="badge badge-gold" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>Phase 0{idx + 1}</span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: '700', fontFamily: 'var(--font-header)' }}>{approach.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.6', marginTop: '10px' }}>{approach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. INSTITUTIONAL PARTNERS */}
      <section className="partners-bar-section section-padding bg-cream" style={{ borderTop: '1px solid rgba(17,63,39,0.06)' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-gold">Institutional Partners</span>
            <h3 style={{ color: 'var(--primary)', fontFamily: 'var(--font-header)', fontWeight: '700', marginTop: '8px' }}>Supported by Leading Corporate &amp; PSU CSR Initiatives</h3>
          </div>
          
          <div className="partners-grid-strip" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '50px', 
            flexWrap: 'wrap',
            opacity: 0.75
          }}>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-header)', color: 'var(--primary)', letterSpacing: '2px' }}>ONGC</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-header)', color: 'var(--primary)', letterSpacing: '2px' }}>ASSAM OIL</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-header)', color: 'var(--primary)', letterSpacing: '2px' }}>GOVERNMENT OF ASSAM</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-header)', color: 'var(--primary)', letterSpacing: '2px' }}>NRL</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-header)', color: 'var(--primary)', letterSpacing: '2px' }}>GAIL</div>
          </div>
        </div>
      </section>

      {/* 8. COMMUNITY VOICE (TESTIMONIALS) */}
      <section className="community-testimonials section-padding bg-sand">
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-gold">Community Testimonials</span>
            <h2 style={{ color: 'var(--primary)', fontFamily: 'var(--font-header)', fontWeight: '700', marginTop: '8px' }}>Empowering Local Villages &amp; Schools</h2>
            <div className="gold-line margin-center" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div className="glass-card quote-card" style={{ padding: '2.5rem', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(17,63,39,0.06)' }}>
              <span style={{ fontSize: '3rem', color: 'var(--gold)', lineHeight: 0.1, display: 'block', height: '20px', fontFamily: 'serif' }}>“</span>
              <p style={{ fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                "GAF's water retention tank restoration has recharged our agricultural wells. For the first time in a decade, we have year-round irrigation."
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <strong style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>Village Head (Gaonburha)</strong>
                <span style={{ color: 'var(--gold-hover)', fontSize: '0.8rem', fontWeight: '600' }}>Hailakandi District</span>
              </div>
            </div>

            <div className="glass-card quote-card" style={{ padding: '2.5rem', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(17,63,39,0.06)' }}>
              <span style={{ fontSize: '3rem', color: 'var(--gold)', lineHeight: 0.1, display: 'block', height: '20px', fontFamily: 'serif' }}>“</span>
              <p style={{ fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                "Ideal Academy provides high-quality education and nutritional support. GAF's computer lab has transformed how our children learn."
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <strong style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>School Administrator</strong>
                <span style={{ color: 'var(--gold-hover)', fontSize: '0.8rem', fontWeight: '600' }}>GAF Education Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CSR CALL-TO-ACTION BLOCK */}
      <section className="csr-cta-section section-padding text-white" style={{ 
        background: 'linear-gradient(135deg, rgba(7, 21, 14, 0.98) 0%, rgba(17, 63, 39, 0.96) 100%)', 
        textAlign: 'center',
        borderTop: '4px solid var(--gold)'
      }}>
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>CSR Partnership Portal</span>
          <h2 className="text-white mt-2" style={{ fontFamily: 'var(--font-header)', fontWeight: '800', fontSize: '2rem' }}>Partner with Green Ahom Federation for Audited CSR Delivery</h2>
          <p className="mt-3" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            We provide institutional corporate partners with monthly impact audits, legal compliance packs, and direct field inspections. Let's co-design a sustainable future for Northeast India.
          </p>
          
          <div className="csr-cta-btn-group mt-5" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="/client_content/Altered INC-13 MOA OF GREEN AHOM.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-gold" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.8rem 2rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Due Diligence Pack
            </a>
            <a href="/partners" className="btn btn-secondary-outline" style={{ border: '2px solid white', color: 'white', padding: '0.8rem 2rem' }}>
              Initiate Partnership Discussion
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* ===== HERO STATS STRIP ===== */
        .hero-stats-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-top: 3rem;
          padding: 1.8rem 2.5rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          flex-wrap: wrap;
        }

        .hero-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 1;
          min-width: 120px;
          padding: 0.5rem 1rem;
        }

        .hero-stat-value {
          font-family: var(--font-header);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--white);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-stat-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.3;
        }

        .hero-stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .hero-stats-strip {
            padding: 1.2rem 1rem;
            gap: 0;
          }
          .hero-stat-item {
            min-width: 0;
            flex-basis: 45%;
            padding: 0.6rem 0.5rem;
          }
          .hero-stat-value {
            font-size: 1.3rem;
          }
          .hero-stat-label {
            font-size: 0.68rem;
          }
          .hero-stat-divider {
            display: none;
          }
        }

        /* ===== DIRECTOR SECTION ROWS ===== */
        .director-section-row {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 4rem;
          align-items: center;
          padding: 3rem 0;
          border-bottom: 1px solid rgba(17, 63, 39, 0.06);
        }

        .director-section-row:last-of-type {
          border-bottom: none;
        }

        .director-section-reversed {
          direction: rtl;
        }

        .director-section-reversed > * {
          direction: ltr;
        }

        .director-section-img {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 3 / 4;
        }

        .director-section-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .director-section-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          color: white;
          padding: 5px 12px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 4px;
        }

        .director-section-content h3 {
          font-size: 1.6rem;
          color: var(--primary);
          font-weight: 800;
          font-family: var(--font-header);
          margin: 0 0 4px 0;
          line-height: 1.2;
        }

        .director-section-role {
          display: block;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--gold-hover);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .director-section-din {
          display: block;
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 600;
          margin-bottom: 1.2rem;
        }

        .director-section-bio {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--muted);
          margin: 0 0 1.5rem 0;
        }

        .director-section-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 1.5rem;
        }

        .director-section-tags span {
          font-size: 0.74rem;
          background-color: var(--sand);
          color: var(--primary);
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 700;
        }

        .director-section-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(17, 63, 39, 0.08);
          padding-top: 1rem;
          font-size: 0.78rem;
          color: var(--muted);
        }

        .director-section-footer strong {
          color: var(--primary);
          font-weight: 700;
        }

        @media (max-width: 991px) {
          .director-section-row {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2.5rem 0;
          }
          .director-section-reversed {
            direction: ltr;
          }
          .director-section-img {
            max-width: 360px;
            margin: 0 auto;
          }
          .director-section-content h3 {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 600px) {
          .director-section-row {
            padding: 2rem 0;
            gap: 1.5rem;
          }
          .director-section-img {
            max-width: 100%;
            aspect-ratio: 4 / 3;
          }
          .director-section-content h3 {
            font-size: 1.25rem;
          }
          .director-section-bio {
            font-size: 0.88rem;
            line-height: 1.65;
          }
        }

        /* ===== LEGACY STORY ===== */
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
          line-height: 1.6;
        }

        /* ===== COMPLIANCE SECTION ===== */
        .compliance-card-inner {
          padding: 3rem;
          background-color: var(--white);
        }

        .compliance-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 991px) {
          .compliance-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .comp-col h3 {
          color: var(--primary);
          line-height: 1.3;
        }

        .comp-col p {
          font-size: 0.95rem;
          line-height: 1.7;
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
          line-height: 1.5;
        }

        .statutory-meta-row span {
          color: var(--muted);
          opacity: 0.8;
        }

        .statutory-meta-row strong {
          color: var(--primary);
        }

        /* ===== IDEAL ACADEMY GRID ===== */
        .academy-grid-wrapper {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
          align-items: start;
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
          line-height: 1.4;
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
          line-height: 1.6;
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
          line-height: 1.7;
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
          font-size: 1.05rem;
          color: var(--primary) !important;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1.3;
        }

        .contrib-num {
          color: var(--gold);
        }

        .contrib-item p {
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--muted);
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

        /* ===== SECTION-LEVEL TEXT FIXES ===== */
        .about-page .section-header h2 {
          line-height: 1.25;
          margin-top: 0.5rem;
        }

        .about-page .section-subtitle {
          line-height: 1.65;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-page .hero-subtitle-premium {
          line-height: 1.7;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 1rem;
        }

        /* ===== PARTNER LOGOS ===== */
        .partners-logo-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .partner-logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 2rem 2.5rem;
          background: var(--white);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(17, 63, 39, 0.06);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-width: 140px;
        }

        .partner-logo-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .partner-logo-item img {
          height: 60px;
          width: auto;
          max-width: 120px;
          object-fit: contain;
          filter: grayscale(40%);
          transition: filter 0.3s ease;
        }

        .partner-logo-item:hover img {
          filter: grayscale(0%);
        }

        .partner-logo-name {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .partners-logo-grid {
            gap: 1rem;
          }
          .partner-logo-item {
            padding: 1.2rem 1.5rem;
            min-width: 110px;
            flex: 1 1 calc(33% - 1rem);
          }
          .partner-logo-item img {
            height: 45px;
            max-width: 90px;
          }
          .partner-logo-name {
            font-size: 0.68rem;
          }
        }

        /* ===== RESPONSIVE GRID OVERRIDES ===== */
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
            line-height: 1.5 !important;
          }
          .statutory-grid-mobile .glass-card strong {
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 991px) {
          .step-arrow-connector {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
