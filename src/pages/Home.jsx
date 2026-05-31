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

      <style>{`
        /* HERO SECTION STYLING */
        .hero-section {
          position: relative;
          padding: 12rem 0 10rem 0;
          overflow: hidden;
          min-height: 85vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(26, 45, 66, 0.97) 0%, rgba(26, 45, 66, 0.88) 40%, rgba(217, 95, 67, 0.15) 100%), 
                      url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat !important;
        }

        @media (max-width: 991px) {
          .hero-section {
            background: linear-gradient(to bottom, rgba(26, 45, 66, 0.98) 0%, rgba(26, 45, 66, 0.85) 60%, rgba(26, 45, 66, 0.4) 100%), 
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
          margin-bottom: 2.5rem !important;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Stats section visual separator backdrop */
        .stats-section {
          background-color: #f4f3ef !important;
          border-top: 1px solid #e2dfd5 !important;
          border-bottom: 1px solid #e2dfd5 !important;
          padding: 5rem 0 !important;
        }

        /* STATS GRID OVERRIDES */
        .stats-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 2rem !important;
          width: 100% !important;
          justify-content: center !important;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            max-width: 320px !important;
            margin: 0 auto !important;
          }
        }

        /* INITIATIVES GRID OVERRIDES */
        .initiatives-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 1.5rem !important;
          width: 100% !important;
          max-width: 1240px !important;
          margin: 0 auto !important;
        }

        .initiative-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          aspect-ratio: 1 / 1 !important; /* Perfect square proportions */
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: var(--radius-md) !important; /* Softened organic corners matching system */
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
          background-color: var(--primary);
        }

        .card-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
          opacity: 0.25; /* Highly transparent background image */
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(26, 45, 66, 0.85) 0%, rgba(26, 45, 66, 0.6) 50%, rgba(26, 45, 66, 0.9) 100%);
          transition: background 0.4s ease;
          z-index: 2;
        }

        .initiative-card-content {
          position: relative;
          z-index: 3;
          padding: 2.2rem !important; /* Elegant generous padding */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          width: 100%;
        }

        .initiative-card:hover {
          border-color: var(--gold) !important;
          transform: translateY(-6px) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25) !important;
        }

        .initiative-card:hover .card-bg-image {
          transform: scale(1.1); /* Elegant background scale */
          opacity: 0.38; /* Make background image slightly clearer on hover */
        }

        .initiative-card:hover .card-overlay {
          background: linear-gradient(to bottom, rgba(26, 45, 66, 0.75) 0%, rgba(17, 24, 22, 0.5) 50%, rgba(26, 45, 66, 0.95) 100%);
        }

        .init-category {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.7rem;
          color: var(--gold);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .card-number {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--white);
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .initiative-card:hover .card-number {
          opacity: 0.9;
          color: var(--gold);
        }

        .initiative-card h3 {
          margin: 0.8rem 0 0.5rem 0 !important;
          font-size: 1.2rem !important;
          font-family: var(--font-header) !important;
          font-weight: 700 !important;
          color: var(--white) !important; /* Crisp high-contrast white */
          line-height: 1.35 !important;
        }

        .initiative-card p {
          font-size: 0.86rem !important;
          color: rgba(255, 255, 255, 0.75) !important; /* Crisp sand/white paragraphs */
          line-height: 1.55 !important;
          margin: 0 !important;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Clamp to exactly 3 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .init-footer {
          display: flex;
          justify-content: flex-start !important; /* Left-aligned footer */
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.12) !important;
          padding-top: 1rem !important;
          margin-top: 1rem;
          width: 100%;
        }

        .init-link {
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--white);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .initiative-card:hover .init-link {
          color: var(--gold);
          transform: translateX(4px); /* Shift link slightly on hover */
        }

        @media (max-width: 1200px) {
          .initiatives-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .initiative-card {
            aspect-ratio: auto !important;
            min-height: 300px !important;
          }
        }

        @media (max-width: 576px) {
          .initiatives-grid {
            grid-template-columns: 1fr !important;
            max-width: 340px !important;
            margin: 0 auto !important;
          }
          .initiative-card {
            aspect-ratio: auto !important;
            min-height: 280px !important;
          }
        }

        /* HIGHLIGHTS SECTION */
        .highlights-wrapper {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .highlights-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .text-white {
          color: var(--white);
        }

        .text-white-muted {
          color: rgba(250, 248, 244, 0.7);
          font-size: 1.05rem;
          margin: 1.5rem 0;
        }

        .highlight-quote {
          border-left: 4px solid var(--gold);
          padding: 1.5rem 2rem;
          margin: 2rem 0;
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }

        .highlight-quote p {
          font-family: var(--font-header);
          font-style: italic;
          color: var(--white);
          font-size: 1.15rem;
          line-height: 1.6;
        }

        .highlight-quote cite {
          display: block;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--gold);
          margin-top: 8px;
          font-style: normal;
        }

        /* HERO BACKGROUND PATTERNS */
        .hero-background-graphics {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .pattern-dots {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-cta-group .btn {
          font-family: var(--font-body) !important;
          font-weight: 600 !important;
          border-radius: var(--radius-sm) !important;
          text-transform: uppercase !important;
        }

        .hero-badge {
          background-color: rgba(217, 95, 67, 0.12);
          color: var(--gold);
          border: 1px solid rgba(217, 95, 67, 0.2);
        }

        .visual-card-premium {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 280px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .visual-card-premium:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(217, 95, 67, 0.3);
          transform: scale(1.02);
        }

        .visual-logo-container {
          padding: 2rem 3rem;
          background: var(--white);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-md);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .visual-card-premium:hover .visual-logo-container {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
      `}</style>
    </div>
  );
};

export default Home;
