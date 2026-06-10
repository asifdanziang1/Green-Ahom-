import React, { useState, useEffect } from 'react';
import RazorpayModal from '../components/RazorpayModal';

const Donate = () => {
  const [donateAmount, setDonateAmount] = useState(2500);
  const [donorDetails, setDonorDetails] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
  });
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [window.location.hash]);

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

  // Math conversions for visual impact indicators mapped to client's actual programmes
  const tbNutritionKits = Math.floor(donateAmount / 500);         // ₹500 per month for a TB patient
  const academyScholars = Math.floor(donateAmount / 1500);       // ₹1500 per month for an Ideal Academy student
  const disasterRationKits = Math.floor(donateAmount / 600);     // ₹600 per emergency dry ration kit
  const strayVeterinaryPacks = Math.floor(donateAmount / 250);   // ₹250 per stray animal vet pack

  const quickAmounts = [1500, 3000, 5000, 10000];

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

  return (
    <div className="donate-page animate-fade-scale">
      {/* 1. HERO HEADER */}
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">SUPPORT GAF</span>
          <h1 className="text-white mt-3">Sow the Seeds of Community Hope</h1>
          <p className="donate-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
            Sponsor conceptual education in Hailakandi, monthly nutrition packs for tuberculosis patients, emergency flood dry rations, or stray animal veterinary rescues.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC IMPACT CALCULATOR */}
      <section className="calculator-section section-padding">
        <div className="container-custom calc-wrapper-grid">
          
          {/* Left Column: Interactive Calculator */}
          <div className="calc-card-col">
            <div className="glass-card calculator-card">
              <h3>Dynamic Impact Calculator</h3>
              <p className="calc-sub-desc">Drag the slider to customize your contribution and see your specific grassroots output instantly.</p>
              
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
          <div className="calc-metrics-col" id="outcomes">
            <div className="section-header text-center">
              <span className="badge">HUMANITARIAN OUTCOMES</span>
              <h2>Your Grassroots Social Outcome</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                At Green Ahom Federation, we ensure direct field utilization. Here is exactly what your contribution funds:
              </p>
            </div>

            <div className="grid-responsive outcomes-grid mt-4">
              <div className="glass-card outcome-card">
                <div className="o-icon">{renderIcon('education')}</div>
                <div className="o-data">
                  <strong className="text-teal">{academyScholars} Scholars</strong>
                  <span>Hailakandi Support / Month</span>
                </div>
              </div>

              <div className="glass-card outcome-card">
                <div className="o-icon">{renderIcon('health')}</div>
                <div className="o-data">
                  <strong className="text-teal">{tbNutritionKits} TB Patients</strong>
                  <span>Nutrition Packs Funded</span>
                </div>
              </div>

              <div className="glass-card outcome-card">
                <div className="o-icon">{renderIcon('relief')}</div>
                <div className="o-data">
                  <strong className="text-teal">{disasterRationKits} Families</strong>
                  <span>Flood Dry Rations Distributed</span>
                </div>
              </div>

              <div className="glass-card outcome-card">
                <div className="o-icon">{renderIcon('animal')}</div>
                <div className="o-data">
                  <strong className="text-teal">{strayVeterinaryPacks} Strays</strong>
                  <span>Veterinary Medical Packs</span>
                </div>
              </div>
            </div>

            <div className="trust-exemption-note glass-card mt-4">
              <h4>Guaranteed Exemption under Section 80G</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.5' }}>
                Green Ahom Federation is a legally registered Section 8 NPO with active statutory tax approvals. All contributions generate CA-audited secure receipt certificates instantly.
              </p>
            </div>
          </div>

        </div>
      </section>

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

      {/* STYLES MOVED TO INDEX.CSS */}
    </div>
  );
};

export default Donate;
