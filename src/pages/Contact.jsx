import React, { useState, useEffect } from 'react';
import { useContent } from '../admin/hooks/useContent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const { getSection, isLoading } = useContent('contact');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, phone: val }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setFormStatus('loading');

    const currentInquiries = JSON.parse(localStorage.getItem('gaf_inquiries') || '[]');
    const newInquiry = {
      id: 'inq_' + Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.subject,
      message: formData.message,
      date: new Date().toISOString(),
      status: 'Unread'
    };
    localStorage.setItem('gaf_inquiries', JSON.stringify([newInquiry, ...currentInquiries]));

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setFormStatus(''), 5000);
    }, 1500);
  };

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const renderContactIcon = (type) => {
    switch (type) {
      case 'map':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        );
      case 'mail':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case 'phone':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (isLoading) return null;

  const heroSection = getSection('contact_hero');
  const infoSection = getSection('contact_info');
  const faqSection = getSection('contact_faqs');

  return (
    <div className="contact-page animate-fade-scale">
      {/* 1. HERO HEADER */}
      {heroSection && (
        <section className="hero-section-premium">
          <div className="container-custom">
            <span className="badge badge-gold">{heroSection.badge}</span>
            <h1 className="text-white mt-3">{heroSection.heading}</h1>
            <p className="hero-subtitle-premium">
              {heroSection.subtitle}
            </p>
          </div>
        </section>
      )}

      {/* 2. CONTACT DETAILS & GLASS FORM */}
      {infoSection && (
        <section className="contact-main-section section-padding">
          <div className="container-custom contact-wrapper-grid">
            
            {/* Left Column: Form */}
            <div className="contact-form-col">
              <div className="glass-card contact-form-card-inner">
                <h3>{infoSection.formHeading}</h3>
                <p className="form-subtext">{infoSection.formSubtitle}</p>
              
              {formStatus === 'success' ? (
                <div className="form-success-alert animate-fade-scale">
                  <div className="success-alert-badge-visual">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className="mt-3">Message Sent Successfully!</h4>
                  <p>Thank you. Your message has been logged in GAF Secretariate. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-3">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Asif Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="10-digit number"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject / Purpose</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. CSR Sponsorship, volunteering, nursery inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message Details</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your detailed query here..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn btn-gold w-100 mt-2"
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

            {/* Right Column: Physical Details & Map */}
            <div className="contact-details-col">
              <div className="contact-details-header">
                <span className="badge">{infoSection.officeBadge}</span>
                <h2>{infoSection.officeHeading}</h2>
                <div className="gold-line" />
              </div>

              <div className="office-details-box mt-4">
                {(infoSection.locations || []).map((loc, idx) => (
                  <div className="detail-item-iconic" key={idx}>
                    <span className="d-icon">{renderContactIcon(loc.iconName)}</span>
                    <div className="d-text">
                      <strong>{loc.title}</strong>
                      <p>{loc.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* INTERACTIVE VECTOR SVG MAP */}
              <div className="glass-card interactive-vector-map-box mt-4">
                <h4>Assam Campaign Hubs</h4>
                <div className="map-svg-container mt-3">
                  <svg viewBox="0 0 400 150" className="assam-vector-map">
                    <path 
                      d="M 50,70 Q 100,50 150,60 T 250,75 T 320,60 T 380,45 Q 385,85 360,95 T 280,85 T 180,95 T 100,80 Z" 
                      fill="none" 
                      stroke="rgba(17, 63, 39, 0.12)" 
                      strokeWidth="3"
                      strokeDasharray="4 4"
                    />
                    
                    <circle cx="80" cy="72" r="6" fill="var(--primary)" className="map-node-pulse" />
                    <text x="75" y="90" className="map-lbl-node">Guwahati</text>
                    
                    <circle cx="180" cy="62" r="6" fill="#d95f43" className="map-node-pulse" />
                    <text x="175" y="50" className="map-lbl-node">Tezpur</text>
                    
                    <circle cx="280" cy="74" r="6" fill="var(--primary)" className="map-node-pulse" />
                    <text x="275" y="92" className="map-lbl-node">Majuli</text>
                    
                    <circle cx="320" cy="66" r="6" fill="var(--primary)" className="map-node-pulse" />
                    <text x="315" y="52" className="map-lbl-node">Jorhat</text>

                    <circle cx="110" cy="115" r="6" fill="#d95f43" className="map-node-pulse" />
                    <text x="100" y="132" className="map-lbl-node" style={{ fontWeight: '800' }}>Hailakandi (Ideal Academy)</text>
                  </svg>
                </div>
                <p className="map-caption">Terracotta nodes represent educational and primary hubs. Green nodes indicate active conservation &amp; relief zones.</p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 3. DYNAMIC FAQ ACCORDION */}
      {faqSection && (
        <section className="faq-section section-padding bg-cream">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{faqSection.badge}</span>
              <h2>{faqSection.heading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                {faqSection.subtitle}
              </p>
            </div>

            <div className="faq-accordion-box mt-5">
              {(faqSection.items || []).map((faq, index) => (
                <div 
                  className={`faq-item glass-card ${activeFaq === index ? 'active' : ''}`} 
                  key={index}
                >
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-toggle-icon">
                      {activeFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`

        /* GRID LAYOUT */
        .contact-wrapper-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .contact-wrapper-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .contact-form-card-inner {
          padding: 2.5rem;
          background-color: var(--white);
        }

        .contact-form-card-inner h3 {
          color: var(--primary);
        }

        .form-subtext {
          font-size: 0.9rem;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .form-success-alert {
          text-align: center;
          padding: 2.5rem 1rem;
        }

        .success-alert-badge-visual {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: rgba(17, 63, 39, 0.08);
          border: 1px solid rgba(17, 63, 39, 0.2);
          margin-bottom: 1rem;
        }

        .form-success-alert h4 {
          color: var(--teal);
          margin-bottom: 8px;
        }

        .contact-details-header {
          margin-bottom: 30px;
        }
        .contact-details-header h2 {
          color: var(--primary);
        }
        .contact-details-header .gold-line {
          margin-left: 0 !important;
          margin-right: auto !important;
        }

        /* PHYSICAL DETAILS */
        .office-details-box {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .detail-item-iconic {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .detail-item-iconic .d-icon {
          width: 44px;
          height: 44px;
          background-color: rgba(217, 95, 67, 0.05);
          border: 1px solid rgba(217, 95, 67, 0.15);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-item-iconic strong {
          font-family: var(--font-body);
          color: var(--primary);
          font-size: 0.95rem;
          display: block;
        }

        .detail-item-iconic p {
          font-size: 0.9rem;
          color: var(--muted);
          margin-top: 4px;
          line-height: 1.6;
        }

        /* VECTOR MAP STYLE */
        .interactive-vector-map-box {
          padding: 1.8rem;
          background-color: var(--white);
        }

        .interactive-vector-map-box h4 {
          color: var(--primary);
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .map-svg-container {
          background-color: #faf9f6;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(17, 63, 39, 0.08);
          padding: 10px;
        }

        .assam-vector-map {
          width: 100%;
          height: auto;
        }

        .map-lbl-node {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 8px;
          fill: var(--primary-light);
        }

        .map-node-pulse {
          animation: mapPulse 2s infinite;
        }

        @keyframes mapPulse {
          0% { r: 5px; opacity: 1; }
          50% { r: 9px; opacity: 0.5; }
          100% { r: 5px; opacity: 1; }
        }

        .map-caption {
          font-size: 0.72rem;
          color: var(--muted);
          margin-top: 8px;
          font-weight: 600;
        }

        /* FAQ ACCORDION */
        .faq-accordion-box {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .faq-item {
          border: 1px solid rgba(17, 63, 39, 0.08);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--white);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-left: 4px solid transparent;
        }

        .faq-item:hover {
          border-color: rgba(17, 63, 39, 0.15);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .faq-item.active {
          border-color: rgba(17, 63, 39, 0.15);
          border-left: 4px solid var(--gold);
          box-shadow: var(--shadow-md);
          background: var(--white);
        }

        .faq-question-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 1.5rem 1.8rem;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-header) !important;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary);
          transition: all 0.2s ease;
          gap: 16px;
        }

        .faq-question-btn:hover {
          color: var(--gold);
        }

        .faq-question-btn span:first-child {
          line-height: 1.4;
          flex-grow: 1;
        }

        .faq-toggle-icon {
          font-family: var(--font-header) !important;
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--muted);
          line-height: 1;
          transition: transform 0.3s ease, color 0.3s ease;
          flex-shrink: 0;
        }

        .faq-item.active .faq-toggle-icon {
          color: var(--gold);
          transform: rotate(180deg);
        }

        .faq-answer-pane {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
          padding: 0 1.8rem;
        }

        .faq-item.active .faq-answer-pane {
          max-height: 500px;
          opacity: 1;
          padding: 0 1.8rem 1.6rem 1.8rem;
          border-top: 1px solid rgba(17, 63, 39, 0.08);
          padding-top: 1.2rem;
          margin-top: -0.2rem;
        }

        .faq-answer-pane p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.65;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Contact;
