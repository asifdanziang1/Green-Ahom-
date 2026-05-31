import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RazorpayModal from '../components/RazorpayModal';

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeYear, setActiveYear] = useState('ALL');
  const [projects, setProjects] = useState([]);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1500);
  const [selectedProjectName, setSelectedProjectName] = useState('');
  const navigate = useNavigate();

  const defaultProjects = [
    // --- FY 2024-2025 PROJECTS (10 Programs) ---
    {
      id: 'tb-nutri-25',
      year: 'FY 2024-2025',
      title: 'TB Patients Nutritional Food Packets',
      category: 'HEALTH',
      desc: 'Supplying nutrient-dense protein food kits to vulnerable tuberculosis patients undergoing continuous medical treatments to reinforce immune response and prevent treatment default.',
      location: 'Patharkandi Block, Karimganj District',
      budget: '₹14,45,000',
      metric: 'Treatment Adherence Supported',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p5_img1.jpg',
      iconName: 'health'
    },
    {
      id: 'eye-spec-25',
      year: 'FY 2024-2025',
      title: 'Eye Camp – Spectacles for Refractive Error',
      category: 'HEALTH',
      desc: 'Free vision screening and distribution of high-quality corrective spectacles for rural students and daily wage earners suffering from refractive vision barriers.',
      location: 'Lala Block, Hailakandi District',
      budget: '₹2,69,750',
      metric: 'Free Spectacles Distributed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p6_img4.jpg',
      iconName: 'health'
    },
    {
      id: 'eye-cataract-25',
      year: 'FY 2024-2025',
      title: 'ONGC CSR Cataract Surgery Support',
      category: 'HEALTH',
      desc: 'Surgical diagnostic screening and fully sponsored cataract operations to eliminate avoidable blindness in underserved rural elderly patients.',
      location: 'Lala, South Hailakandi & Algapur Blocks',
      budget: '₹1,59,590',
      metric: 'Cataract Referrals Completed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p7_img7.jpg',
      iconName: 'health'
    },
    {
      id: 'street-lights-25',
      year: 'FY 2024-2025',
      title: 'Rural Street Light Installation Campaign',
      category: 'INFRASTRUCTURE',
      desc: 'Installing energy-efficient illumination light poles in remote and unlit village paths to significantly improve security and mobility during night hours.',
      location: 'Dholai & Sonai Blocks, Cachar District',
      budget: '₹6,60,000',
      metric: 'Safety Lumination Units Placed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p8_img10.jpg',
      iconName: 'infrastructure'
    },
    {
      id: 'tailoring-25',
      year: 'FY 2024-2025',
      title: 'Women’s Tailoring & Stitching Livelihoods',
      category: 'LIVELIHOODS',
      desc: 'A large-scale vocational empowerment camp providing rural women with intensive tailoring training and fully equipped industrial stitching sewing machines.',
      location: 'Cachar, Hailakandi, Nagaon & NC Hills',
      budget: '₹32,82,000',
      metric: 'Tailoring Machines Gifted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p9_img13.jpg',
      iconName: 'livelihoods'
    },
    {
      id: 'plantation-25',
      year: 'FY 2024-2025',
      title: 'Schools Eco-Restoration Plantation Campaign',
      category: 'ENVIRONMENT',
      desc: 'World Environment Day community drives. Planted fruit-bearing, shade, and medicinal saplings inside educational institutions and block offices.',
      location: 'Hailakandi, Cachar & Karimganj Districts',
      budget: '₹3,28,000',
      metric: 'Survival Audited Saplings Placed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p10_img16.jpg',
      iconName: 'environment'
    },
    {
      id: 'hunger-25',
      year: 'FY 2024-2025',
      title: 'Food Security (Eliminating Hunger Initiative)',
      category: 'RELIEF',
      desc: 'Large-scale humanitarian dry ration kits mobilization (rice, pulses, oil, sugar) to low-income wage earners and widow-headed households.',
      location: 'Hailakandi, Cachar, Nalbari & NC Hills',
      budget: '₹46,06,060',
      metric: 'Vulnerable Households Fed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p11_img19.jpg',
      iconName: 'relief'
    },
    {
      id: 'animal-25',
      year: 'FY 2024-2025',
      title: 'Barak Valley Stray Animal Medical & Feed Care',
      category: 'ANIMAL CARE',
      desc: 'Humane compassionate treatment drives. Daily feeding routes for stray street dogs and emergency rescue of injured stray cows.',
      location: 'Barak Valley Districts (Assam)',
      budget: '₹35,41,090',
      metric: 'Daily Stray Feeds Provided',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p12_img21.jpg',
      iconName: 'animal'
    },
    {
      id: 'community-25',
      year: 'FY 2024-2025',
      title: 'Socio-Development Community Centre Construction',
      category: 'INFRASTRUCTURE',
      desc: 'Building permanent, durable brick-and-mortar community centres to host vocational classes, public meetings, and social gatherings.',
      location: 'Howli Barpeta (BH College), Borkhola Cachar, Algapur Hailakandi',
      budget: '₹42,37,000',
      metric: 'Welfare Hubs Completed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p13_img24.jpg',
      iconName: 'infrastructure'
    },
    {
      id: 'handicraft-25',
      year: 'FY 2024-2025',
      title: 'Traditional Handicraft Livelihoods Promotion',
      category: 'LIVELIHOODS',
      desc: 'Vocational training sessions in bamboo, cane, and traditional loom crafts, assisting local youths and women in establishing direct market linkages.',
      location: 'Chandipur Village (Algapur) & Lakhipur Cachar',
      budget: '₹12,68,000',
      metric: 'Rural Handicraft Artisans Empowered',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p14_img26.jpg',
      iconName: 'livelihoods'
    },

    // --- FY 2023-2024 PROJECTS (4 Programs) ---
    {
      id: 'tb-nutri-24',
      year: 'FY 2023-2024',
      title: 'TB Patients 935 Nutritional Packets (ONGC Silchar)',
      category: 'HEALTH',
      desc: 'A core CSR-supported public health drive in coordination with local clinics, distributing protein-rich supplements and dietary essentials to 935 registered TB patients.',
      location: 'Cachar & Hailakandi Districts',
      budget: '₹14,85,000',
      metric: '935 Registered TB Patients Fed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_23-24_p5_img1.jpg',
      iconName: 'health'
    },
    {
      id: 'eye-camp-24',
      year: 'FY 2023-2024',
      title: 'Ophthalmology camp & Spectacles Distribution',
      category: 'HEALTH',
      desc: 'Organized screening camps with qualified doctors, dispensing 500+ free custom corrective spectacles to rural students and agricultural workers.',
      location: 'Lala Block, Hailakandi District',
      budget: '₹11,17,500',
      metric: '500+ Patients Tested & Supported',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_23-24_p8_img6.jpg',
      iconName: 'health'
    },
    {
      id: 'rations-24',
      year: 'FY 2023-2024',
      title: 'Independence Day Wage Earners Rations Support',
      category: 'RELIEF',
      desc: 'Immediate food relief dry packets distributed to daily wage labourers and rickshaw pullers to cushion against inflation and unemployment.',
      location: 'Barak Valley Blocks',
      budget: '₹65,000',
      metric: 'Vulnerable Labourers Assisted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_23-24_p10_img11.jpg',
      iconName: 'relief'
    },
    {
      id: 'maternal-24',
      year: 'FY 2023-2024',
      title: 'Maternal & Infant Nutrition Packet Distribution',
      category: 'HEALTH',
      desc: 'Distributing custom nutritional kits to 1,200 pregnant women, lactating mothers, and young infants to combat local rural malnutrition.',
      location: 'Luairpoa Area, Karimganj District',
      budget: '₹10,47,900',
      metric: '1,200 Women & Infants Assisted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_23-24_p12_img15.jpg',
      iconName: 'health'
    },

    // --- FY 2022-2023 PROJECTS (6 Programs) ---
    {
      id: 'finance-lit-23',
      year: 'FY 2022-2023',
      title: 'ITI Srikona Silchar Financial Literacy Camp',
      category: 'EDUCATION',
      desc: 'Trained technical school trainees in personal financial planning, bank savings schemes, and digital banking to prevent banking fraud.',
      location: 'ITI Srikona Campus, Silchar, Cachar District',
      budget: '₹25,000',
      metric: 'Youth Trainees Graduated',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p4_img2.jpg',
      iconName: 'education'
    },
    {
      id: 'flood-relief-23',
      year: 'FY 2022-2023',
      title: 'Emergency Flood Relief Rations Deployment',
      category: 'RELIEF',
      desc: 'Dispatched emergency dry rations, dal, edible oil, and clean drinking water to remote villages submerged during the destructive Barak Valley floods.',
      location: 'Cachar, Hailakandi & Karimganj Flood Zones',
      budget: '₹1,27,000',
      metric: 'Flood-Displaced Households Rushed Aid',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p6_img4.jpg',
      iconName: 'relief'
    },
    {
      id: 'plantation-23',
      year: 'FY 2022-2023',
      title: 'World Environment Day Reforestation Drive',
      category: 'ENVIRONMENT',
      desc: 'Planting endemic and fruit saplings inside multiple educational institutions to cultivate green consciousness among youth.',
      location: 'Barak Valley Educational Institutes',
      budget: '₹56,000',
      metric: 'Eco-Saplings Planted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p7_img6.jpg',
      iconName: 'environment'
    },
    {
      id: 'child-labour-23',
      year: 'FY 2022-2023',
      title: 'Awareness Campaign Against Child Labour',
      category: 'COMMUNITY',
      desc: 'Community retainment meetings and interactive counseling with daily-wage parents, preventing school dropouts in rural brick-kilns.',
      location: 'Rural Primary Schools, Cachar',
      budget: '₹35,700',
      metric: 'Retention Counselling Sessions Completed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p9_img8.jpg',
      iconName: 'social'
    },
    {
      id: 'strays-23',
      year: 'FY 2022-2023',
      title: 'Stray Animals Rescue & Feeding Support',
      category: 'ANIMAL CARE',
      desc: 'Administered street feeding routes and emergency veterinary clinic operations for injured stray animals and cows.',
      location: 'Barak Valley Districts',
      budget: '₹15,000',
      metric: 'Injured Animal Rescues Assisted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p11_img12.jpg',
      iconName: 'animal'
    },
    {
      id: 'daily-wage-23',
      year: 'FY 2022-2023',
      title: 'Hailakandi Daily Wage Earners Dry Food Support',
      category: 'RELIEF',
      desc: 'Emergency dry food packets given to informal-sector workers and rickshaw pullers facing local economic closures.',
      location: 'Hailakandi District Settlements',
      budget: '₹1,00,000',
      metric: 'Informal Labour Households Supported',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p12_img14.jpg',
      iconName: 'relief'
    }
  ];

  useEffect(() => {
    localStorage.setItem('gaf_projects', JSON.stringify(defaultProjects));
    setProjects(defaultProjects);
    window.scrollTo(0, 0);
  }, []);

  const handleDonateTrigger = (projectName) => {
    setSelectedProjectName(projectName);
    setSelectedAmount(1500);
    setIsPayModalOpen(true);
  };

  const handleSuccessClose = () => {
    setIsPayModalOpen(false);
  };

  const categories = ['ALL', 'EDUCATION', 'HEALTH', 'LIVELIHOODS', 'RELIEF', 'ENVIRONMENT', 'INFRASTRUCTURE', 'COMMUNITY', 'ANIMAL CARE'];
  const years = ['ALL', 'FY 2024-2025', 'FY 2023-2024', 'FY 2022-2023'];

  // Compound Filter Logic
  const filteredProjects = projects.filter(p => {
    const categoryMatch = activeCategory === 'ALL' || p.category.toUpperCase() === activeCategory;
    const yearMatch = activeYear === 'ALL' || p.year === activeYear;
    return categoryMatch && yearMatch;
  });

  const renderIcon = (name) => {
    switch (name) {
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
      case 'livelihoods':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
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
      case 'environment':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-4-4-4-4-2 2.4-4 4-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
          </svg>
        );
      case 'infrastructure':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="10" x2="6" y2="14" />
            <line x1="18" y1="10" x2="18" y2="14" />
          </svg>
        );
      case 'social':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'animal':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="work-page animate-fade-scale">
      {/* 1. HEADER HERO */}
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">STATUTORY CAMPAIGNS DIRECTORY</span>
          <h1 className="text-white mt-3">Verified Operational Portfolio</h1>
          <p className="work-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
            Explore Green Ahom Federation's complete 3-year programmatic achievements. Filter by specific financial year or target category to trace audited grassroots disbursements.
          </p>
        </div>
      </section>

      {/* 2. FILTER BAR & LISTINGS */}
      <section className="listings-section section-padding">
        <div className="container-custom">
          
          {/* YEAR FILTERS */}
          <div className="year-filters-container">
            <span className="filter-label">Filter by Financial Year:</span>
            <div className="year-filters-row">
              {years.map((yr) => (
                <button
                  key={yr}
                  className={`year-filter-btn ${activeYear === yr ? 'active' : ''}`}
                  onClick={() => setActiveYear(yr)}
                >
                  {yr === 'ALL' ? 'Show All Years' : yr}
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="category-filters-container mt-4">
            <span className="filter-label">Filter by Program Category:</span>
            <div className="filter-controls-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT LIST GRID */}
          {filteredProjects.length > 0 ? (
            <div className="grid-responsive work-projects-grid mt-5">
              {filteredProjects.map((project, idx) => (
                <div 
                  className="glass-card work-project-card animate-reveal" 
                  key={project.id || idx}
                  style={{ animationDelay: `${idx * 0.04}s` }}
                >
                  <div className="proj-header-banner" style={{ background: `linear-gradient(to bottom, rgba(26, 45, 66, 0.4) 0%, rgba(26, 45, 66, 0.8) 100%), url(${project.imageUrl}) center/cover no-repeat` }}>
                    <div className="proj-banner-meta">
                      <span className="proj-badge-category">{project.category}</span>
                      <span className="proj-badge-year">{project.year}</span>
                    </div>
                    <span className="proj-badge-icon-wrapper">{renderIcon(project.iconName)}</span>
                  </div>
                  
                  <div className="proj-body-inner">
                    <h3>{project.title}</h3>
                    <p className="proj-location-badge">📍 {project.location}</p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.6', marginTop: '10px' }}>{project.desc}</p>
                    
                    <div className="proj-progress-section mt-3">
                      <div className="progress-labels">
                        <span>Status: <strong>Audited Complete</strong></span>
                        <strong className="text-gold">{project.budget} Allocation</strong>
                      </div>
                      <div className="progress-bar-track">
                        <div className="progress-bar-fill animate-grow-width" style={{ width: '100%' }} />
                      </div>
                      <div className="progress-goal-tag">Impact: {project.metric}</div>
                    </div>
                  </div>

                  <div className="proj-actions-footer">
                    <button 
                      className="btn btn-gold w-100"
                      onClick={() => handleDonateTrigger(project.title)}
                      style={{ width: '100%' }}
                    >
                      Sponsor a Similar Campaign
                    </button>
                    <button 
                      className="btn btn-outline w-100 mt-2"
                      onClick={() => navigate('/volunteer')}
                      style={{ width: '100%', marginTop: '8px' }}
                    >
                      Apply as Field Volunteer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-work-state text-center mt-5">
              <span className="empty-icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <h3 className="mt-3">No campaigns match these filters</h3>
              <p>We are constantly scaling GAF’s programs across Dima Hasao, Nagaon, Barpeta, Nalbari, Cachar, Hailakandi, and Karimganj districts. Modify your filters to explore alternative financial periods.</p>
            </div>
          )}
        </div>
      </section>

      {/* RAZORPAY DIALOG SIMULATION */}
      <RazorpayModal
        isOpen={isPayModalOpen}
        onClose={handleSuccessClose}
        amount={selectedAmount}
        donorName="Asif Ahmed"
        donorEmail="asif@domain.com"
        donorPhone="9876543210"
        onPaymentSuccess={(newDonation) => {
          console.log('Donation complete for:', selectedProjectName, newDonation);
        }}
      />

      <style>{`
        .work-project-card:hover .proj-badge-icon-wrapper {
          transform: scale(1.1) rotate(6deg);
          border-color: var(--gold);
        }

        /* FILTERS LAYOUT */
        .year-filters-container, .category-filters-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .filter-label {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .year-filters-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .year-filter-btn {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.8rem;
          padding: 0.5rem 1.2rem;
          border: 1px solid var(--border-glass);
          background-color: var(--white);
          border-radius: var(--radius-sm);
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .year-filter-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .year-filter-btn.active {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }

        /* FILTER CONTROLS */
        .filter-controls-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-sm);
          background-color: var(--white);
          border: 1px solid var(--border-glass);
          color: var(--primary-light);
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
        }

        .filter-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .filter-btn.active {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }

        /* PROJECT CARDS */
        .work-project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: var(--white);
        }

        .proj-header-banner {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 7rem 1.8rem 1.5rem 1.8rem;
          border-bottom: 1px solid #eaeaea;
          position: relative;
        }

        .proj-banner-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .proj-badge-category {
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 0.68rem;
          color: var(--white);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: rgba(26, 45, 66, 0.9);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: fit-content;
        }

        .proj-badge-year {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.68rem;
          color: var(--white);
          background-color: var(--gold);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        .proj-badge-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background-color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proj-body-inner {
          padding: 2rem 1.8rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .proj-location-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary-light);
          background-color: #faf9f6;
          border: 1px solid #eaeaea;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        .proj-body-inner h3 {
          margin-bottom: 8px;
          font-size: 1.2rem;
          line-height: 1.35;
          color: var(--primary);
        }

        .proj-body-inner p {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .proj-progress-section {
          background-color: #faf9f6;
          border: 1px solid #eaeaea;
          border-radius: var(--radius-sm);
          padding: 1.2rem;
          margin-top: auto;
        }

        .proj-progress-section .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: var(--primary);
          margin-bottom: 6px;
        }

        .proj-progress-section .progress-bar-track {
          height: 4px;
          background: rgba(26, 45, 66, 0.06);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .proj-progress-section .progress-bar-fill {
          height: 100%;
          background: var(--gold);
          border-radius: 2px;
        }

        .progress-goal-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .proj-actions-footer {
          padding: 0 1.8rem 2rem 1.8rem;
        }

        .w-100 {
          width: 100%;
        }

        /* EMPTY STATE */
        .empty-work-state {
          padding: 4rem 2rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .empty-work-state h3 {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};

export default OurWork;
