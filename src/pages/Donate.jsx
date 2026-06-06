import React, { useState, useEffect } from 'react';
import RazorpayModal from '../components/RazorpayModal';
import { useContent } from '../admin/hooks/useContent';

const Donate = () => {
  const { getSection, isLoading } = useContent('donate');
  const [donateAmount, setDonateAmount] = useState(2500);
  const [donorDetails, setDonorDetails] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
  });
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSliderChange = (e) => {
    setDonateAmount(parseInt(e.target.value));
  };

  const handleQuickSelect = (amt) => {
    setDonateAmount(amt);
  };

  const handlePayClick = (e) => {
    e.preventDefault();
    if (!donorDetails.name || !donorDetails.email || !donorDetails.phone) {
      alert('Please fill out your Name, Email, and Phone details first.');
      return;
    }
    setIsPayModalOpen(true);
  };

  // Get sections from CMS
  const heroSection = getSection('donate_hero');
  const calcSection = getSection('donate_calculator');

  // Math conversions for visual impact indicators mapped to client's actual programmes
  const metrics = calcSection?.metrics || [
    { id: 'education', iconName: 'education', label: 'Scholars', subLabel: 'Hailakandi Support / Month', divisor: 1500 },
    { id: 'health', iconName: 'health', label: 'TB Patients', subLabel: 'Nutrition Packs Funded', divisor: 500 },
    { id: 'relief', iconName: 'relief', label: 'Families', subLabel: 'Flood Dry Rations Distributed', divisor: 600 },
    { id: 'animal', iconName: 'animal', label: 'Strays', subLabel: 'Veterinary Medical Packs', divisor: 250 }
  ];

  const quickAmounts = calcSection?.quickAmounts || [1500, 3000, 5000, 10000];

  const renderIcon = (name) => {
    switch (name) {
      case 'education':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        );
      case 'health':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 'relief':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      case 'animal':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (isLoading) return null;

  return (
    <div className="donate-page animate-fade-scale">
      {/* 1. HERO HEADER */}
      {heroSection && (
        <section className="hero-section-premium">
          <div className="container-custom">
            <span className="badge badge-gold">{heroSection.badge}</span>
            <h1 className="text-white mt-3">{heroSection.heading}</h1>
            <p className="donate-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
              {heroSection.subtitle}
            </p>
          </div>
        </section>
      )}

      {/* 2. DYNAMIC IMPACT CALCULATOR */}
      {calcSection && (
        <section className="calculator-section section-padding">
          <div className="container-custom calc-wrapper-grid">
            
            {/* Left Column: Interactive Calculator */}
            <div className="calc-card-col">
              <div className="glass-card calculator-card">
                <h3>{calcSection.heading}</h3>
                <p className="calc-sub-desc">{calcSection.subtitle}</p>
              
              {/* SLIDER CONTROLS */}
              <div className="slider-control-box mt-4">
                <div className="slider-value-display text-teal">
                  ₹{donateAmount.toLocaleString('en-IN')}
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  className="impact-range-slider"
                  value={donateAmount}
                  onChange={handleSliderChange}
                />
                <div className="slider-limits">
                  <span>Min: ₹500</span>
                  <span>Max: ₹25,000</span>
                </div>
              </div>

              {/* QUICK SELECT BUTTONS */}
              <div className="quick-select-row mt-4">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`quick-amt-btn ${donateAmount === amt ? 'active' : ''}`}
                    onClick={() => handleQuickSelect(amt)}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              {/* DONOR INFO INPUTS */}
              <div className="donor-quick-inputs-box mt-4">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Asif Ahmed"
                    value={donorDetails.name}
                    onChange={(e) => setDonorDetails(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@domain.com"
                      value={donorDetails.email}
                      onChange={(e) => setDonorDetails(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="10-digit number"
                      maxLength="10"
                      value={donorDetails.phone}
                      onChange={(e) => setDonorDetails(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '') }))}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">PAN Card <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: '0.8rem' }}>(Optional — for 80G tax exemption)</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. ABCDE1234F"
                  maxLength="10"
                  style={{ textTransform: 'uppercase' }}
                  value={donorDetails.pan}
                  onChange={(e) => setDonorDetails(prev => ({ ...prev, pan: e.target.value }))}
                />
              </div>

              <button 
                className="btn btn-gold btn-rp-trigger mt-3 w-100"
                onClick={handlePayClick}
              >
                Proceed with Razorpay Secure
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Biological Metrics */}
          <div className="calc-metrics-col">
            <div className="section-header text-center">
              <span className="badge">{calcSection.outcomesBadge}</span>
              <h2>{calcSection.outcomesHeading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                {calcSection.outcomesSubtitle}
              </p>
            </div>

            <div className="grid-responsive outcomes-grid mt-4">
              {metrics.map(metric => (
                <div className="glass-card outcome-card" key={metric.id}>
                  <div className="o-icon">{renderIcon(metric.iconName)}</div>
                  <div className="o-data">
                    <strong className="text-teal">{Math.floor(donateAmount / metric.divisor)} {metric.label}</strong>
                    <span>{metric.subLabel}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="trust-exemption-note glass-card mt-4">
              <h4>{calcSection.trustHeading}</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.5' }}>
                {calcSection.trustText}
              </p>
            </div>
          </div>

        </div>
      </section>
      )}

      {/* RAZORPAY PAYMENT GATEWAY */}
      <RazorpayModal
        isOpen={isPayModalOpen}
        onClose={() => setIsPayModalOpen(false)}
        amount={donateAmount}
        donorName={donorDetails.name}
        donorEmail={donorDetails.email}
        donorPhone={donorDetails.phone}
        donorPan={donorDetails.pan}
        onPaymentSuccess={(newDonation) => {
          console.log('Payment verified:', newDonation.id);
        }}
      />

      <style>{`

        /* CALCULATOR LAYOUT */
        .calc-wrapper-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .calc-wrapper-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .calculator-card {
          padding: 2.5rem;
          background-color: var(--white);
        }

        .calculator-card h3 {
          color: var(--primary);
        }

        .calc-sub-desc {
          font-size: 0.9rem;
          color: var(--muted);
          margin-bottom: 20px;
        }

        /* DYNAMIC RANGE SLIDER */
        .slider-value-display {
          font-family: var(--font-header);
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 10px;
        }

        .impact-range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: rgba(26, 45, 66, 0.08);
          border-radius: 3px;
          outline: none;
          margin-bottom: 6px;
        }

        .impact-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: var(--gold);
          border: 2px solid var(--white);
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: transform 0.1s ease;
        }

        .impact-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        .slider-limits {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--muted);
        }

        /* QUICK SELECT BUTTONS */
        .quick-select-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .quick-amt-btn {
          padding: 10px;
          background-color: var(--cream);
          border: 1px solid rgba(26, 45, 66, 0.08);
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--primary-light);
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all 0.2s;
        }

        .quick-amt-btn:hover {
          border-color: var(--gold);
          color: var(--gold-hover);
        }

        .quick-amt-btn.active {
          background-color: var(--teal);
          color: var(--white);
          border-color: var(--teal);
        }

        .donor-quick-inputs-box {
          border-top: 1px solid rgba(26, 45, 66, 0.06);
          padding-top: 1.5rem;
        }

        /* BIOLOGICAL OUTCOME CARDS */
        .outcomes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .outcome-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 15px;
          background-color: var(--white);
        }

        .o-icon {
          width: 44px;
          height: 44px;
          background-color: rgba(217, 95, 67, 0.05);
          border: 1px solid rgba(217, 95, 67, 0.1);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .o-data {
          display: flex;
          flex-direction: column;
        }

        .o-data strong {
          font-family: var(--font-header);
          font-size: 1.15rem;
          line-height: 1.1;
        }

        .o-data span {
          font-size: 0.78rem;
          color: var(--muted);
          font-weight: 600;
          margin-top: 4px;
        }

        .trust-exemption-note {
          padding: 1.8rem;
          background-color: var(--cream);
          border-left: 4px solid var(--gold);
          border-radius: var(--radius-sm);
          border-top: 1px solid #eaeaea;
          border-right: 1px solid #eaeaea;
          border-bottom: 1px solid #eaeaea;
        }

        .trust-exemption-note h4 {
          color: var(--primary);
          margin-bottom: 6px;
        }

        .trust-exemption-note p {
          font-size: 0.88rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default Donate;
