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
  const complianceSection = getSectionByType('compliance');
  const directorsSection = getSectionByType('directors');

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

      {/* 2. ABOUT THE ORGANISATION — replaces the old legacy/water engineering section */}
      <section className="legacy-section section-padding" id="about-organisation">
        <div className="container-custom legacy-wrapper">
          <div className="legacy-text-col">
            <span className="badge">WHO WE ARE</span>
            <h2>About Green Ahom Federation</h2>
            <div className="gold-line" />
            
            <div className="legacy-body-content mt-4" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.7' }}>
              <p style={{ marginBottom: '1.2rem', fontWeight: '500' }}>
                Green Ahom Federation (GAF) is a registered Section 8 non-profit organisation working towards 
                sustainable development, human dignity, and community empowerment across Assam. Since our 
                incorporation in September 2022, we have grown from a small initiative into a multi-district 
                operation reaching thousands of beneficiaries.
              </p>

              <p style={{ marginBottom: '1.2rem' }}>
                We work across healthcare, education, women empowerment, environmental conservation, 
                humanitarian relief, and animal welfare — reaching vulnerable populations including TB patients, 
                economically weaker households, women, children, elderly citizens, and rural communities.
              </p>

              <p>
                Our flagship educational initiative, Ideal Academy in Hailakandi, supports 364 underprivileged 
                students from nursery to Class X. We also partner with public sector undertakings like ONGC 
                to deliver healthcare and nutrition programmes in underserved districts.
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
              <span className="badge badge-gold" style={{ width: 'fit-content', marginBottom: '12px' }}>Our Mission</span>
              <h3 style={{ color: 'var(--white)', fontFamily: 'var(--font-header)', fontWeight: '700', fontSize: '1.4rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Working Towards Sustainable Development</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '0.9rem', marginTop: '6px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                Healthcare, education, and rural empowerment across 7 districts of Assam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REGISTRATION & TRUST — simplified compliance section */}
      <section className="compliance-section section-padding bg-sand" id="registration-trust">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge badge-gold">Registered Organisation</span>
            <h2>Registration & Trust</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Green Ahom Federation is a government-registered non-profit under the Indian Companies Act, 2013.
            </p>
          </div>

          <div className="glass-card compliance-card-inner mt-5">
            <div className="compliance-grid">
              <div className="comp-col">
                <h3>Section 8 Non-Profit Company</h3>
                <p style={{ marginTop: '1rem' }}>
                  GAF is incorporated as a Section 8 company, meaning 100% of our income goes towards our 
                  social welfare objectives. No dividends or profits are distributed to any member or director.
                </p>
                <p>
                  All financial transactions are independently audited by a Chartered Accountant, and our 
                  annual reports are publicly available for transparency.
                </p>

                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Key Registrations</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '8px 0', borderBottom: '1px solid rgba(17,63,39,0.06)' }}>
                      <span style={{ color: 'var(--muted)', fontWeight: '500' }}>CIN</span>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '0.85rem' }}>U85300AS2022NPL022387</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '8px 0', borderBottom: '1px solid rgba(17,63,39,0.06)' }}>
                      <span style={{ color: 'var(--muted)', fontWeight: '500' }}>12A & 80G</span>
                      <strong style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>Tax Exemption Certified</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '8px 0', borderBottom: '1px solid rgba(17,63,39,0.06)' }}>
                      <span style={{ color: 'var(--muted)', fontWeight: '500' }}>CSR-1</span>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '0.85rem' }}>CSR00029857</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '8px 0' }}>
                      <span style={{ color: 'var(--muted)', fontWeight: '500' }}>Incorporated</span>
                      <strong style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>14th September, 2022</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comp-col comp-visual-info">
                <div className="statutory-badge-box" style={{ 
                  border: '1px solid rgba(17, 63, 39, 0.1)', 
                  borderRadius: 'var(--radius-lg)', 
                  padding: '2.5rem 2rem', 
                  textAlign: 'center', 
                  background: 'linear-gradient(180deg, rgba(17, 63, 39, 0.02) 0%, rgba(17, 63, 39, 0.05) 100%)',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#e6f3ee',
                      border: '2px solid var(--teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: '700', fontFamily: 'var(--font-header)' }}>Verified & Compliant</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: '8px', lineHeight: '1.5' }}>
                      Registered with the Ministry of Corporate Affairs, NITI Aayog, and Income Tax Department.
                    </p>
                  </div>
                  
                  <div style={{ height: '1px', backgroundColor: 'rgba(17, 63, 39, 0.08)', margin: '1.5rem 0' }} />
                  
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
                      Download Legal Documents
                    </a>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '12px', fontSize: '0.75rem' }}>
                      <a href="/client_content/Altered INC-13 MOA OF GREEN AHOM.pdf" download className="text-teal" style={{ fontWeight: '600' }}>MOA</a>
                      <span style={{ color: 'rgba(17,63,39,0.2)' }}>|</span>
                      <a href="/client_content/Altered AOA OF GREEN AHOM.pdf" download className="text-teal" style={{ fontWeight: '600' }}>AOA</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  His core focus areas include institutional compliance — securing 12A, 80G, and CSR-1 registrations — corporate partnership development, and long-term financial planning. Under his leadership, GAF has built strong partnerships with PSUs like ONGC and expanded operations to cover healthcare, education, environmental conservation, and humanitarian relief across multiple districts.
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

            {/* OUR JOURNEY TIMELINE — replaces the old "55X Growth" section */}
            <div className="growth-timeline-wrapper mt-5" style={{ background: 'var(--white)', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(17,63,39,0.06)' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="badge badge-gold">Our Journey</span>
                <h3 style={{ color: 'var(--primary)', fontFamily: 'var(--font-header)', fontWeight: '700', marginTop: '8px' }}>Three Years of Grassroots Impact</h3>
              </div>
              
              <div className="timeline-horizontal-flow" style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', flexWrap: 'wrap', position: 'relative' }}>
                
                {/* Year 1 */}
                <div className="timeline-year-card" style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem' }}>01</div>
                    <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-header)', fontWeight: '800', color: 'var(--gold)' }}>FY 2022–2023</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '700', marginTop: '12px' }}>Getting Started</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.5' }}>
                    Incorporated as a Section 8 non-profit. Began with community health camps, winter clothing drives, and our first environmental plantation projects in Hailakandi and Cachar.
                  </p>
                </div>

                {/* Year 2 */}
                <div className="timeline-year-card" style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem' }}>02</div>
                    <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-header)', fontWeight: '800', color: 'var(--gold)' }}>FY 2023–2024</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '700', marginTop: '12px' }}>Expanding Our Reach</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.5' }}>
                    Extended operations to Barpeta and Nalbari districts. Launched women's skill training programmes, maternal nutrition initiatives, and school infrastructure projects.
                  </p>
                </div>

                {/* Year 3 */}
                <div className="timeline-year-card" style={{ flex: '1', minWidth: '220px', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem' }}>03</div>
                    <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-header)', fontWeight: '800', color: 'var(--gold)' }}>FY 2024–2025</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '700', marginTop: '12px' }}>Deepening Impact</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.5' }}>
                    Partnered with ONGC for TB nutrition and eye care programmes. Acquired Ideal Academy to support 364 students. Reached 7 districts with healthcare, education, and flood relief operations.
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

      {/* COMMUNITY VOICE (TESTIMONIALS) */}
      <section className="community-testimonials section-padding bg-sand">
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-gold">Community Testimonials</span>
            <h2 style={{ color: 'var(--primary)', fontFamily: 'var(--font-header)', fontWeight: '700', marginTop: '8px' }}>Empowering Local Villages &amp; Schools</h2>
            <div className="gold-line margin-center" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div className="glass-card quote-card" style={{ padding: '2.5rem', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(17,63,39,0.06)' }}>
              <span style={{ fontSize: '3rem', color: 'var(--gold)', lineHeight: 0.1, display: 'block', height: '20px', fontFamily: 'serif' }}>&ldquo;</span>
              <p style={{ fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                "GAF's water retention tank restoration has recharged our agricultural wells. For the first time in a decade, we have year-round irrigation."
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <strong style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>Village Head (Gaonburha)</strong>
                <span style={{ color: 'var(--gold-hover)', fontSize: '0.8rem', fontWeight: '600' }}>Hailakandi District</span>
              </div>
            </div>

            <div className="glass-card quote-card" style={{ padding: '2.5rem', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(17,63,39,0.06)' }}>
              <span style={{ fontSize: '3rem', color: 'var(--gold)', lineHeight: 0.1, display: 'block', height: '20px', fontFamily: 'serif' }}>&ldquo;</span>
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

      {/* SUPPORT / PARTNERSHIP CTA — replaces the old "CSR Partnership Portal" */}
      <section className="csr-cta-section section-padding text-white" style={{ 
        background: 'linear-gradient(135deg, rgba(7, 21, 14, 0.98) 0%, rgba(17, 63, 39, 0.96) 100%)', 
        textAlign: 'center',
        borderTop: '4px solid var(--gold)'
      }}>
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Get Involved</span>
          <h2 className="text-white mt-2" style={{ fontFamily: 'var(--font-header)', fontWeight: '800', fontSize: '2rem' }}>Support Our Work Across Assam</h2>
          <p className="mt-3" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Whether you're an individual donor, a corporate partner, or a volunteer — there are many ways to contribute to sustainable grassroots development in Northeast India. Every contribution directly funds education, healthcare, and community welfare programmes.
          </p>
          
          <div className="csr-cta-btn-group mt-5" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/donate" className="btn btn-gold" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.8rem 2rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Donate Now
            </a>
            <a href="/partners" className="btn btn-secondary-outline" style={{ border: '2px solid white', color: 'white', padding: '0.8rem 2rem' }}>
              Partner With Us
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

        /* ===== LEGACY / ABOUT STORY ===== */
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
