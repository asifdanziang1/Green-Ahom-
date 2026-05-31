import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workingApproaches = [
    {
      num: '01',
      title: 'Community-Based Interventions',
      desc: 'We work closely with local communities, volunteers, schools, healthcare workers, and grassroots leaders to understand real needs and ensure inclusive participation.'
    },
    {
      num: '02',
      title: 'Integrated Development Model',
      desc: 'Our programmes combine health, nutrition, livelihood, awareness, environmental sustainability, and humanitarian support to create long-term impact rather than short-term relief alone.'
    },
    {
      num: '03',
      title: 'Grassroots Outreach',
      desc: 'We implement field-based programmes in rural and underserved regions across Assam, especially in areas with limited access to services and opportunities.'
    },
    {
      num: '04',
      title: 'Sustainable Empowerment',
      desc: 'We focus on building local capacity through skill development, awareness, infrastructure support, and community ownership.'
    },
    {
      num: '05',
      title: 'Rapid Humanitarian Response',
      desc: 'During emergencies such as floods, food insecurity, or health crises, our teams mobilize quickly to support vulnerable populations with essential aid and relief services.'
    }
  ];

  const boardSubscribers = [
    {
      name: 'Shamil Emonar Rahman Laskar',
      role: 'Founder Director & Subscriber',
      shares: '360 Shares (36% Ratio)',
      address: '56/38(C), Silchar Road, Ward No.1, via Gudam Ghat Road, Hailakandi, Assam - 788151',
      background: 'A dedicated social activist and grassroots leader in the Barak Valley. Instrumental in coordinating GAF’s massive flood response and primary health campaigns.'
    },
    {
      name: 'Rofik Ahmed Barbhuiya',
      role: 'Director & Subscriber',
      shares: '340 Shares (34% Ratio)',
      address: 'Sahabad Pt 2, Hailakandi, Assam - 788163',
      background: 'Experienced community organizer focusing on youth mobilization, athletic programs, and municipal light logistics across Cachar and Hailakandi districts.'
    },
    {
      name: 'Habiba Khanam Barbhuiya',
      role: 'Director & Subscriber',
      shares: '300 Shares (30% Ratio)',
      address: 'H/No-53, Vill Nun Nagar, PO Katirail, Cachar, Assam - 788804',
      background: 'Passionate advocate for maternal nutrition and women empowerment. Spearheads GAF’s multi-district tailoring skill training and village handicraft programs.'
    }
  ];

  return (
    <div className="about-page animate-fade-scale">
      {/* 1. HEADER SECTION */}
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">ABOUT US</span>
          <h1 className="text-white mt-3">Green Ahom Federation</h1>
          <p className="about-hero-subtitle text-white-muted" style={{ maxWidth: '680px', margin: '1.5rem auto 0 auto', fontSize: '1.2rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
            Rooted in the ecological heritage of Assam. Working towards statutory compliance, human dignity, and sustainable grassroots empowerment.
          </p>
        </div>
      </section>

      {/* 2. THE HISTORICAL LEGACY OF AHOM WATER ENGINEERING */}
      <section className="legacy-section section-padding">
        <div className="container-custom legacy-wrapper">
          <div className="legacy-text-col">
            <span className="badge">PHILOSOPHICAL ANCHOR</span>
            <h2>The Legacy of Ahom Water Engineering</h2>
            <div className="gold-line" />
            <p className="mt-4 font-weight-600 text-dark" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--muted)' }}>
              Green Ahom Federation draws its profound philosophical and operational inspiration from the sophisticated water engineering, environmental resource management, and ecological heritage of the historic Ahom Kingdom.
            </p>
            <p className="mt-3" style={{ color: 'var(--muted)', fontSize: '0.96rem', lineHeight: '1.6' }}>
              For over six hundred years, the Ahom rulers demonstrated a flawless grasp of hydrology and ecological balance. They constructed massive earthen embankments (bunds) to tame the mighty Brahmaputra river system, and excavated grand historical reservoirs—such as Joysagar, Sivasagar, and Gaurisagar—which served as advanced rainwater harvesting hubs. These systems successfully prevented catastrophic flooding while supplying clean water to hundreds of agricultural settlements.
            </p>
            <p className="mt-3" style={{ color: 'var(--muted)', fontSize: '0.96rem', lineHeight: '1.6' }}>
              GAF aims to revive this historic ethos of ecological balance and community-driven water preservation in modern Northeast India. By implementing comprehensive school plantation drives, taming erosion through community action, and initiating rural street illumination, we honor our ancestors' sophisticated environmental engineering with direct grassroots action.
            </p>
          </div>
          
          <div className="legacy-visual-col">
            <div className="glass-card legacy-card-visual">
              <div className="visual-logo-container-about" style={{ marginBottom: '1.5rem', background: '#ffffff', padding: '10px 20px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <img src="/logo.png" alt="Green Ahom Federation Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <h3 style={{ color: 'var(--white)', fontFamily: 'var(--font-header)', fontWeight: '700' }}>Ahom Ecological Legacy</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Honoring 600 years of sophisticated water engineering, earth embankments, and sustainable community hydrology through local ecological action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATUTORY COMPLIANCE & LEGAL CHARTER CARD */}
      <section className="compliance-section section-padding bg-sand">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge badge-gold">STATUTORY INTEGRITY</span>
            <h2>Legal Framework &amp; Compliance</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Green Ahom Federation is bound by absolute compliance under Section 8 of the Indian Companies Act, 2013.
            </p>
          </div>

          <div className="glass-card compliance-card-inner mt-5">
            <div className="compliance-grid">
              <div className="comp-col">
                <h3>Non-Profit Constitutional Safeguards</h3>
                <p className="mt-3">
                  Under GAF's Altered Memorandum of Association (MOA) and Articles of Association (AOA) witnessed in Delhi on <strong>April 28, 2026</strong>, GAF operates under rigid Section 8 constitutional limits:
                </p>
                <ul className="bullet-checks-list mt-3">
                  <li><strong>Absolute Dividend Prohibition:</strong> 100% of profits or income are solely applied to the promotion of GAF’s public welfare and ecological objectives. No dividends or bonuses can be paid directly or indirectly to any subscriber or member.</li>
                  <li><strong>Limited Liability:</strong> The liability of the subscribers is limited strictly to the nominal value of their shares.</li>
                  <li><strong>Authorized Share Capital:</strong> ₹50,000 divided into 5,000 equity shares of ₹10 each.</li>
                  <li><strong>Certified CA Audit:</strong> All ledger transactions are fully verified by certified witness and accountant <strong>ACA Ashu Bhardwaj (M. No. 560437)</strong>.</li>
                </ul>
              </div>

              <div className="comp-col comp-visual-info">
                <div className="statutory-badge-box">
                  <span className="statutory-seal">CERTIFIED</span>
                  <h4>Ministry of Corporate Affairs</h4>
                  <p>Incorporated under the Indian Companies Act, 2013.</p>
                  <div className="statutory-divider" />
                  <div className="statutory-meta-row">
                    <span>ROC Oversight:</span>
                    <strong>ROC Shillong (State of Assam)</strong>
                  </div>
                  <div className="statutory-meta-row">
                    <span>Registration Type:</span>
                    <strong>Section 8 (Limited by Shares)</strong>
                  </div>
                  <div className="statutory-meta-row">
                    <span>CA Sign-off Date:</span>
                    <strong>28.04.2026</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOARD OF DIRECTORS & SUBSCRIBERS PROFILE GRID */}
      <section className="directors-section section-padding bg-cream">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">GOVERNANCE</span>
            <h2>Board of Subscriber-Directors</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Meet GAF's founding social activist subscribers, who hold direct stewardship over GAF's multi-district operations and compliance.
            </p>
          </div>

          <div className="grid-responsive directors-grid mt-5">
            {boardSubscribers.map((dir, idx) => (
              <div className="glass-card director-card" key={idx}>
                <div className="dir-card-top">
                  <span className="dir-badge">{dir.shares}</span>
                  <h3>{dir.name}</h3>
                  <span className="dir-role">{dir.role}</span>
                </div>
                <div className="dir-card-body mt-3">
                  <p className="dir-bg">{dir.background}</p>
                  <p className="dir-address mt-3"><strong>Registered Address:</strong><br />{dir.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FLAGSHIP INITIATIVE: IDEAL ACADEMY, HAILAKANDI */}
      <section className="ideal-academy-section section-padding">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge badge-gold">FLAGSHIP EDUCATIONAL PROGRAMME</span>
            <h2>Ideal Academy, Hailakandi</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              An Educational Initiative acquired in FY 2025–26, empowering rural children through intensive, conceptual, and affordable learning.
            </p>
          </div>

          <div className="academy-grid-wrapper mt-5">
            {/* School Info Board */}
            <div className="glass-card school-info-card bg-primary text-white">
              <h3 className="text-white" style={{ color: 'var(--white)' }}>Basic Information</h3>
              <div className="gold-line" />
              <div className="school-details-list mt-4">
                <div className="sch-detail-item"><span>School Name:</span><strong>Ideal Academy, Hailakandi</strong></div>
                <div className="sch-detail-item"><span>Managed By:</span><strong>Green Ahom Federation (GAF)</strong></div>
                <div className="sch-detail-item"><span>UDISE Code:</span><strong>18230124113</strong></div>
                <div className="sch-detail-item"><span>Location:</span><strong>Hailakandi, Assam</strong></div>
                <div className="sch-detail-item"><span>Academic Coverage:</span><strong>Nursery to Class X</strong></div>
                <div className="sch-detail-item"><span>Current Strength:</span><strong className="text-gold">364 Students</strong></div>
              </div>
            </div>

            {/* School Content */}
            <div className="academy-main-details-col">
              <h3>Vision &amp; Educational Mission</h3>
              <p className="mt-3" style={{ color: 'var(--muted)' }}>
                The primary objective behind GAF's statutory acquisition and reinforcement of Ideal Academy in FY 2025-26 was to establish a sustainable educational framework where rural children from marginalized families can receive quality conceptual education, moral guidance, and hostel support at an affordable cost.
              </p>
              <p className="mt-2" style={{ color: 'var(--muted)' }}>
                Green Ahom Federation believes that education is the ultimate accelerator for meaningful engagement. We tackle school dropout rates by actively counseling parents and supporting students with basic educational necessities.
              </p>
              <h4 className="mt-4">The institution specifically focuses on:</h4>
              <ul className="bullet-checks-list mt-2">
                <li>Providing quality and affordable education to rural and semi-urban students</li>
                <li>Ensuring inclusive education for SC, ST, OBC, MOBC, Minority, and economically backward communities</li>
                <li>Reducing school dropout rates in underserved regions</li>
                <li>Promoting conceptual and intensive learning methods</li>
                <li>Developing discipline, moral values, leadership, and social responsibility among students</li>
                <li>Supporting students with hostel and guided academic facilities</li>
                <li>Creating a safe and nurturing educational environment for first-generation learners</li>
              </ul>
            </div>
          </div>

          {/* Core Contributions */}
          <div className="academy-contributions-box glass-card mt-5">
            <h3>Major Contributions During the Last Year</h3>
            <div className="contributions-grid-inner mt-4">
              <div className="contrib-item">
                <h5 className="contrib-item-header"><span className="contrib-num">01.</span> Academic Strengthening</h5>
                <p>Improved classroom learning systems with conceptual teaching approaches. Enhanced student mentoring and regular academic monitoring. Introduced intensive learning support for weak and first-generation learners. Strengthened English, Science, Mathematics, and General Knowledge education.</p>
              </div>
              <div className="contrib-item">
                <h5 className="contrib-item-header"><span className="contrib-num">02.</span> Inclusion of Vulnerable Communities</h5>
                <p>Increased admission opportunities for students from economically weaker families. Encouraged enrollment of SC, ST, OBC, MOBC, and minority children. Reduced educational inequality by making affordable education accessible in rural areas.</p>
              </div>
              <div className="contrib-item">
                <h5 className="contrib-item-header"><span className="contrib-num">03.</span> Hostel &amp; Student Support</h5>
                <p>Expanded hostel-based learning support for students from distant rural villages. Provided a disciplined and secure academic atmosphere for children. Supported students with basic educational necessities and mentoring guidance.</p>
              </div>
              <div className="contrib-item">
                <h5 className="contrib-item-header"><span className="contrib-num">04.</span> Social &amp; Community Impact</h5>
                <p>Helped prevent school dropouts among financially vulnerable students. Encouraged parents from low-income households to continue children’s education. Generated educational awareness in underserved communities of Hailakandi District. Promoted girls’ education and equal learning opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR WORKING APPROACH */}
      <section className="team-section section-padding bg-cream">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">OPERATIONS</span>
            <h2>Our Working Approach</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              How GAF translates its sustainable mission into grassroot activities across Northeast India.
            </p>
          </div>

          <div className="grid-responsive team-grid mt-5">
            {workingApproaches.map((approach) => (
              <div className="glass-card value-card text-center" key={approach.title}>
                <div className="approach-num-icon">{approach.num}</div>
                <h3>{approach.title}</h3>
                <p className="mt-2" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>{approach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
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
          background: linear-gradient(to bottom, rgba(26, 45, 66, 0.85), rgba(26, 45, 66, 0.95)), 
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
        }

        .statutory-badge-box {
          background-color: var(--sand);
          border: 1px solid #eaeaea;
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
          background-color: #eaeaea;
          margin: 1.5rem 0;
        }

        .sub-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary) 0%, var(--gold) 100%);
          border-radius: 3px;
          animation: growWidth 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
          line-height: 1.55;
          color: var(--muted);
        }

        .dir-address {
          font-size: 0.8rem;
          line-height: 1.4;
          color: var(--muted);
          border-top: 1px solid #eaeaea;
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
      `}</style>
    </div>
  );
};

export default AboutUs;
