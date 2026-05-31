import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImpactSlider from '../components/ImpactSlider';

const Impact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    {
      id: 'funds',
      title: 'Aggregated Operations',
      val: '₹2.38Cr',
      suffix: ' Audited Expenditure',
      desc: 'GAF successfully scaled its grassroots programmatic disbursements from ₹3.58L in FY 2022-23 to ₹37.15L in FY 2023-24, reaching ₹1.97Cr in FY 2024-25.'
    },
    {
      id: 'education',
      title: 'Ideal Academy Students',
      val: '364',
      suffix: ' Enrolled Children',
      desc: 'Providing intensive, quality conceptual Nursery to Class X learning and Hostel support inside Ideal Academy, Hailakandi (UDISE: 18230124113).'
    },
    {
      id: 'health',
      title: 'Public Health Care',
      val: '2,635+',
      suffix: ' Patients Supported',
      desc: 'Delivering nutritional support kits to 935 registered TB patients (ONGC Silchar sponsored), 1,200 pregnant women and children (Luairpoa Karimganj), and 500+ eye care screening patients.'
    },
    {
      id: 'relief',
      title: 'Dry Rations & Relief',
      val: '₹48.3L',
      suffix: ' Hunger Elimination Aid',
      desc: 'Direct food security dry rations mobilized across Nalbari, NC Hills, Cachar, Hailakandi, and Karimganj districts to support daily wage earners and flood survivors.'
    }
  ];

  const fieldStories = [
    {
      id: 'story-1',
      title: 'A Ray of Hope in Hailakandi',
      author: 'Dilip Namasudra, Parent (Daily Wage Earner)',
      quote: 'My children were dropping out of school because I could not afford standard tuition fees. GAF’s acquisition of Ideal Academy was a blessing. Today, my daughter studies in Class VIII with high-quality conceptual learning and hostel support, dreaming of becoming a doctor.',
      iconName: 'education'
    },
    {
      id: 'story-2',
      title: 'ONGC CSR TB Patient Recovery',
      author: 'Anjali Gogoi, Health Worker Outreach',
      quote: 'Medical treatment alone is not enough to cure tuberculosis; rich nutritional care is critical. The high-protein ration packs that GAF distributes directly to our patient cohorts with ONGC Silchar support have successfully improved treatment success rates by providing human dignity.',
      iconName: 'health'
    },
    {
      id: 'story-3',
      title: 'Luairpoa Maternal Nutrition Campaign',
      author: 'Rina Begum, Lactating Mother (Karimganj)',
      quote: 'GAF distributed highly nutritious food supplements directly to 1,200 pregnant women and young children below three years in our Luairpoa area. It helped ensure healthy pregnancy outcomes and basic infant immunity during deep financial hardship.',
      iconName: 'health'
    }
  ];

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

  return (
    <div className="impact-page animate-fade-scale">
      {/* 1. HERO HEADER */}
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">VERIFIED Biological &amp; Social Outcomes</span>
          <h1 className="text-white mt-3">Grassroots Impact Dashboard</h1>
          <p className="impact-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
            We translate community contributions into audited grassroots actions across Assam. Explore our verified indicators and direct field testimonies.
          </p>
        </div>
      </section>

      {/* 2. SPECIFIC AUDITED METRICS */}
      <section className="metrics-dashboard-section section-padding">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">VERIFIABLE OUTCOMES</span>
            <h2>Ecological &amp; Humanitarian Indicators</h2>
            <div className="gold-line margin-center" />
          </div>

          <div className="grid-responsive metrics-grid mt-5">
            {metrics.map((metric) => (
              <div className="glass-card metric-impact-card" key={metric.title}>
                <div className="m-icon-box">{renderIcon(metric.id)}</div>
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

      {/* 3. VISUAL BEFORE/AFTER TRANSFORM */}
      <section className="transformation-slider-section section-padding bg-cream">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">ENVIRONMENTAL TRANSFORMATION</span>
            <h2>Witness Ecological Reforestation</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              See the visual before/after changes that GAF community-led tree plantation and green awareness drives make inside educational institutions and public zones.
            </p>
          </div>

          <ImpactSlider />
        </div>
      </section>

      {/* 4. FIELD STORIES - VOICES FROM THE SOIL */}
      <section className="field-stories-section section-padding">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">VOICES FROM THE SOIL</span>
            <h2>Grassroots Stories of Change</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Read the real testimonies of parents, healthcare workers, and disaster relief coordinators whose lives are directly touched by GAF.
            </p>
          </div>

          <div className="grid-responsive stories-grid mt-5">
            {fieldStories.map((story) => (
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

      {/* 5. CALL TO ACTION AREA */}
      <section className="impact-cta-section section-padding bg-primary text-center">
        <div className="container-custom">
          <div className="cta-box-wrapper-inner">
            <span className="badge badge-gold">CREATE AN OUTCOME</span>
            <h2 className="text-white mt-3" style={{ color: 'var(--white)' }}>Be a Catalyst for Human Dignity</h2>
            <p className="text-white-muted max-width-center mt-3" style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.75)' }}>
              Your support directly funds monthly tuberculosis nutrition packs, disaster dry rations, student hostel mentoring, street light installations, and stray animal veterinary supplies.
            </p>
            <div className="cta-buttons-row mt-4">
              <Link to="/donate" className="btn btn-gold">Donate to a Campaign</Link>
              <Link to="/work" className="btn btn-outline-gold">View Our 20 Programs</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`

        /* METRIC CARDS */
        .metric-impact-card {
          padding: 2.5rem;
          background-color: var(--white);
          height: 100%;
        }

        .m-icon-box {
          margin-bottom: 1.2rem;
          width: 52px;
          height: 52px;
          background-color: rgba(52, 78, 104, 0.05);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(52, 78, 104, 0.1);
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
        }

        .m-big-stat strong {
          font-size: 3rem;
          font-weight: 700;
          display: block;
          line-height: 1.1;
        }

        .m-big-stat span {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .m-divider-line {
          height: 1px;
          background-color: #eaeaea;
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
          border-top: 1px solid #eaeaea;
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
