import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard';
import ImpactSlider from '../components/ImpactSlider';

const Home = () => {
  const [stats, setStats] = useState({
    beneficiaries: 2635,
    funds: 23870590,
    students: 364,
    strayBud: 3541090
  });

  useEffect(() => {
    localStorage.setItem('gaf_stats', JSON.stringify(stats));
    window.scrollTo(0, 0);
  }, []);

  const signatureProjects = [
    {
      id: 'education',
      title: 'Ideal Academy, Hailakandi',
      category: 'INCLUSIVE EDUCATION',
      desc: 'GAF acquired Ideal Academy (UDISE: 18230124113) in FY 2025-26 to provide quality, affordable conceptual learning (Nursery to Class X) and hostel support for 364 underprivileged rural children.',
      bgImage: '/extracted_images/ANNUAL_REPORT_2024-2025_p13_img24.jpg'
    },
    {
      id: 'health',
      title: 'Tuberculosis & Eye Care Camps',
      category: 'HEALTH & NUTRITION',
      desc: 'Partnered with ONGC Silchar CSR to distribute dense nutritional supplements to registered TB patients and fully sponsor refractive spectacles and cataract surgeries inside Hailakandi Blocks.',
      bgImage: '/extracted_images/ANNUAL_REPORT_2024-2025_p5_img1.jpg'
    },
    {
      id: 'livelihoods',
      title: 'Tailoring & Stitching for Women',
      category: 'WOMEN EMPOWERMENT',
      desc: 'Active vocational training campuses across Cachar, Hailakandi, Nagaon, and NC Hills, giving thousands of rural women stitching skills and equipped sewing machines to earn independent livelihoods.',
      bgImage: '/extracted_images/ANNUAL_REPORT_2024-2025_p9_img13.jpg'
    },
    {
      id: 'relief',
      title: 'Eliminating Hunger & Food Security',
      category: 'HUMANITARIAN AID',
      desc: 'Large-scale dry ration packets distribution drives (budgeting ₹46.06L in FY 2024-25 alone) to ежеднев daily wage earners, widows, and flood survivors in Assam.',
      bgImage: '/extracted_images/ANNUAL_REPORT_2024-2025_p11_img19.jpg'
    }
  ];

  return (
    <div className="home-page animate-fade-scale">
      {/* 1. HERO CANOPY HERO SECTION */}
      <section className="hero-section bg-primary">
        <div className="hero-background-graphics">
          <div className="pattern-dots" />
        </div>

        <div className="container-custom">
          <div className="hero-content">
            <span className="badge hero-badge">Grassroots Section 8 NPO</span>
            <h1 className="hero-heading">Nurturing Assam's Ecological Legacy &amp; Community Dignity</h1>
            <p className="hero-subtitle">
              From water engineering legacies inspired by the Ahom Kingdom to taming food insecurity, providing conceptual education at Ideal Academy, and empowering rural women—we build sustainable futures.
            </p>
            <div className="hero-cta-group">
              <Link to="/donate" className="btn btn-gold">
                Support a Campaign
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </Link>
              <Link to="/work" className="btn btn-outline-gold">
                Explore Our 20 Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC STATS DASHBOARD */}
      <section className="stats-section section-padding">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">LIVE TRACKER</span>
            <h2>Grassroots Operations Dashboard</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Our verified biological and social outcomes. Mapped, CA-audited, and publicly transparent.
            </p>
          </div>

          <div className="grid-responsive stats-grid">
            <MetricCard label="Ideal Academy Students" target={stats.students} suffix="" />
            <MetricCard label="CSR &amp; Exempt Funds Mobilized" target={stats.funds} prefix="₹" suffix="" />
            <MetricCard label="Health &amp; Nutrition Beneficiaries" target={stats.beneficiaries} suffix="+" />
            <MetricCard label="Stray Animals Care Budget (₹)" target={stats.strayBud} suffix="" />
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE INITIATIVES */}
      <section className="initiatives-section section-padding bg-cream">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">OUR INTERVENTIONS</span>
            <h2>Featured Grassroots Programmes</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              GAF combines immediate humanitarian disaster relief with long-term conceptual capacity building using actual cover assets.
            </p>
          </div>

          <div className="initiatives-grid">
            {signatureProjects.map((project, idx) => (
              <div className="initiative-card animate-reveal" key={project.id} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="card-bg-image" style={{ backgroundImage: `url(${project.bgImage})` }} />
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

      {/* 4. BEFORE/AFTER RESTORATION SHOWCASE */}
      <section className="slider-section section-padding">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">ENVIRONMENTAL ACTION</span>
            <h2>Witness Ecological Restoration</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Our community plantation and cleanout drives transform barren eroded soil into secure biological sanctuaries.
            </p>
          </div>

          <ImpactSlider />
        </div>
      </section>

      {/* 5. INDUCTIVE WORKING APPROACH DETAIL */}
      <section className="highlights-section section-padding bg-primary">
        <div className="container-custom">
          <div className="highlights-wrapper">
            <div className="highlights-text-col">
              <span className="badge badge-gold">WORKING APPROACH</span>
              <h2 className="text-white">Integrated Grassroots Development</h2>
              <div className="gold-line" />
              <p className="text-white-muted">
                Through community-led initiatives and local partnerships, we work to create sustainable and inclusive social development. Our programs are designed to combine urgent relief packages with capacity building, ensuring high community ownership.
              </p>
              <blockquote className="highlight-quote">
                <p>
                  "Our programs combine health, nutrition, livelihood, awareness, environmental sustainability, and humanitarian support to create long-term impact rather than short-term relief alone."
                </p>
                <cite>— Green Ahom Federation operational statement</cite>
              </blockquote>
              <Link to="/about" className="btn btn-gold">About Our Approach</Link>
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

      {/* 6. CALL TO ACTION SECTION */}
      <section className="cta-banner-section section-padding">
        <div className="container-custom text-center">
          <div className="glass-card cta-box-inner" style={{ padding: '3.5rem', maxWidth: '900px', margin: '0 auto', backgroundColor: 'var(--white)' }}>
            <span className="badge">GET INVOLVED</span>
            <h2>Support Grassroots Social Development</h2>
            <p className="mt-2" style={{ maxWidth: '580px', margin: '0 auto 2.5rem auto' }}>
              Sponsor education for children in Hailakandi District, support nutritional programs for TB patients, provide emergency flood dry rations, or rescue strays.
            </p>
            <div className="cta-inner-actions mt-4" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/donate" className="btn btn-primary">Donate to GAF</Link>
              <Link to="/volunteer" className="btn btn-outline">Apply to Volunteer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES MOVED TO INDEX.CSS */}
    </div>
  );
};

export default Home;
