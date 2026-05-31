import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: 'Are my donations eligible for income tax exemptions?',
      a: 'Yes, absolutely. Green Ahom Federation is a registered public NPO with valid Section 80G credentials. Indian tax payers are eligible to claim a 50% tax deduction on all donations. Your tax receipt is generated instantly upon payment.'
    },
    {
      q: 'How are sowed saplings tracked and monitored?',
      a: 'We map every sapling with geographical coordination logs (GIS tags). Our Field Rangers conduct physical growth audits twice a year. Donors receive bi-annual growth and survival index reports directly mapped to their sponsored corridor.'
    },
    {
      q: 'Can I volunteer if I reside outside of Assam?',
      a: 'Yes! We have a highly active Remote Squad under our Digital Catalyst role. You can assist with software development, GIS mapping, writing, or promoting ecological awareness online from anywhere in the world.'
    },
    {
      q: 'Does GAF support physical corporate CSR site visits?',
      a: 'Absolutely. For our Platinum and Diamond corporate patrons, we coordinate guided site visits to our Majuli som plantations and Tezpur nursery banks to witness audited CSR utilization firsthand.'
    }
  ];

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

  return (
    <div className="contact-page animate-fade-scale">
      {/* 1. HERO HEADER */}
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">GET IN TOUCH</span>
          <h1 className="text-white mt-3">Connect With GAF</h1>
          <p className="contact-hero-subtitle text-white-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
            Have questions about CSR sponsorships, volunteering logistics, or our biological seeds vault? Drop us a message or visit our Secretariat.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & GLASS FORM */}
      <section className="contact-main-section section-padding">
        <div className="container-custom contact-wrapper-grid">
          
          {/* Left Column: Form */}
          <div className="contact-form-col">
            <div className="glass-card contact-form-card-inner">
              <h3>Send a Message</h3>
              <p className="form-subtext">We monitor inboxes 24/7 and reply to standard inquiries in 24 hours.</p>
              
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
            <div className="section-header text-center">
              <span className="badge">OFFICES</span>
              <h2>GAF Secretariat</h2>
              <div className="gold-line margin-center" />
            </div>

            <div className="office-details-box mt-4">
              <div className="detail-item-iconic">
                <span className="d-icon">{renderContactIcon('map')}</span>
                <div className="d-text">
                  <strong>Headquarters Secretariat</strong>
                  <p>GAF Secretariat, Zoo Road Tiniali, Guwahati, Assam - 781024</p>
                </div>
              </div>

              <div className="detail-item-iconic">
                <span className="d-icon">{renderContactIcon('mail')}</span>
                <div className="d-text">
                  <strong>Direct Email Support</strong>
                  <p>info@greenahom.org | csr@greenahom.org</p>
                </div>
              </div>

              <div className="detail-item-iconic">
                <span className="d-icon">{renderContactIcon('phone')}</span>
                <div className="d-text">
                  <strong>Help Desk Hotlines</strong>
                  <p>+91 (0361) 2938-1200 | +91 98450-AHOM-12</p>
                </div>
              </div>
            </div>

            {/* INTERACTIVE VECTOR SVG MAP */}
            <div className="glass-card interactive-vector-map-box mt-4">
              <h4>Assam Campaign Hubs</h4>
              <div className="map-svg-container mt-3">
                <svg viewBox="0 0 400 150" className="assam-vector-map">
                  <path 
                    d="M 50,70 Q 100,50 150,60 T 250,75 T 320,60 T 380,45 Q 385,85 360,95 T 280,85 T 180,95 T 100,80 Z" 
                    fill="none" 
                    stroke="rgba(26, 45, 66, 0.12)" 
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                  
                  <circle cx="80" cy="72" r="6" fill="#344e68" className="map-node-pulse" />
                  <text x="75" y="90" className="map-lbl-node">Guwahati</text>
                  
                  <circle cx="180" cy="62" r="6" fill="#d95f43" className="map-node-pulse" />
                  <text x="175" y="50" className="map-lbl-node">Tezpur</text>
                  
                  <circle cx="280" cy="74" r="6" fill="#344e68" className="map-node-pulse" />
                  <text x="275" y="92" className="map-lbl-node">Majuli</text>
                  
                  <circle cx="320" cy="66" r="6" fill="#344e68" className="map-node-pulse" />
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

      {/* 3. DYNAMIC FAQ ACCORDION */}
      <section className="faq-section section-padding bg-cream">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">FAQS</span>
            <h2>Common Inquiries Answered</h2>
            <div className="gold-line margin-center" />
          </div>

          <div className="faq-accordion-container mt-5">
            {faqs.map((faq, idx) => (
              <div 
                className={`glass-card faq-card-accordion ${activeFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
                key={idx}
              >
                <div className="faq-header-trigger">
                  <h4>{faq.q}</h4>
                  <span className="faq-arrow">{activeFaq === idx ? '−' : '+'}</span>
                </div>
                {activeFaq === idx && (
                  <div className="faq-body-content animate-fade-scale">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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
          background-color: rgba(52, 78, 104, 0.08);
          border: 1px solid rgba(52, 78, 104, 0.2);
          margin-bottom: 1rem;
        }

        .form-success-alert h4 {
          color: var(--teal);
          margin-bottom: 8px;
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
          line-height: 1.4;
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
          border: 1px solid #eaeaea;
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
        .faq-accordion-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-card-accordion {
          padding: 1.5rem 1.8rem;
          background-color: var(--white);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-left: 4px solid transparent;
        }

        .faq-card-accordion:hover {
          border-color: var(--gold);
          border-left-color: var(--gold-hover);
        }

        .faq-card-accordion.open {
          background-color: var(--cream);
          border-color: var(--border-flat);
          border-left: 4px solid var(--gold);
          box-shadow: var(--shadow-md);
        }

        .faq-header-trigger {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-header-trigger h4 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
        }

        .faq-arrow {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--muted);
          line-height: 1;
        }

        .faq-card-accordion.open .faq-arrow {
          color: var(--teal);
        }

        .faq-body-content {
          border-top: 1px solid #eaeaea;
          padding-top: 1rem;
          margin-top: 1rem;
        }

        .faq-body-content p {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Contact;
