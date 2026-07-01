import { useState, useEffect } from 'react';
import { useContent } from '../admin/hooks/useContent';

const AnnualReports = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFiscalYear, setActiveFiscalYear] = useState('2024-2025');
  const [csrForm, setCsrForm] = useState({
    name: '',
    company: '',
    email: '',
    purpose: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const { getSection, isLoading } = useContent('reports');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = (fileUrl, title) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCsrSubmit = (e) => {
    e.preventDefault();
    if (!csrForm.email) return;
    setFormStatus('loading');
    
    const currentInquiries = JSON.parse(localStorage.getItem('gaf_inquiries') || '[]');
    const newInquiry = {
      id: 'csr_' + Math.random().toString(36).substr(2, 9),
      name: csrForm.name,
      email: csrForm.email,
      company: csrForm.company,
      message: `CSR DOSSIER REQUEST: Purpose - ${csrForm.purpose}`,
      date: new Date().toISOString(),
      status: 'Unread'
    };
    localStorage.setItem('gaf_inquiries', JSON.stringify([newInquiry, ...currentInquiries]));

    setTimeout(() => {
      setFormStatus('success');
      setCsrForm({ name: '', company: '', email: '', purpose: '' });
      setTimeout(() => setFormStatus(''), 4000);
    }, 1200);
  };

  if (isLoading) return null;

  const heroSection = getSection('reports_hero');
  const govSection = getSection('reports_governance');
  const fiscalSection = getSection('reports_fiscal');
  const downloadsSection = getSection('reports_downloads');
  const ctaSection = getSection('reports_cta');

  const fiscalData = fiscalSection?.data || {};
  const reportsList = downloadsSection?.items || [];

  const filteredReports = reportsList.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="reports-page animate-fade-scale">
      {/* 1. HERO BANNER */}
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

      {/* 2. STATUTORY CORPORATE GOVERNANCE SUMMARY */}
      {govSection && (
        <section className="governance-summary-section section-padding bg-cream">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{govSection.badge}</span>
              <h2>{govSection.heading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                {govSection.subtitle}
              </p>
            </div>

          <div className="grid-responsive governance-grid mt-5">
            <div className="glass-card gov-card">
              <div className="gov-header">
                <span className="gov-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="5" y1="7" x2="19" y2="7" />
                    <path d="M5 7l2 10h6l2-10" />
                  </svg>
                </span>
                <h3>Corporate Registration</h3>
              </div>
              <div className="gov-body mt-3">
                <ul className="gov-details-list">
                  <li><strong>Entity Name:</strong> GREEN AHOM FEDERATION (GAF)</li>
                  <li><strong>Status:</strong> Section 8 Non-Profit Company (Limited by Shares)</li>
                  <li><strong>Authorized Share Capital:</strong> ₹50,000 (divided into 5,000 shares of ₹10 each)</li>
                  <li><strong>Registered Office:</strong> Hailakandi, Assam, India</li>
                  <li><strong>Witness of Incorporation:</strong> ACA Ashu Bhardwaj (M. No. 560437), Delhi</li>
                  <li><strong>Incorporation Date:</strong> April 28, 2026 (Delhi witnessed)</li>
                </ul>
              </div>
            </div>

            <div className="glass-card gov-card">
              <div className="gov-header">
                <span className="gov-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <h3>Board of Directors &amp; Subscribers</h3>
              </div>
              <div className="gov-body mt-3">
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '15px' }}>
                  The company capital is subscribed in the ratio of <strong>36:34:30</strong> by the following founding subscriber-directors:
                </p>
                <div className="subscriber-bars">
                  <div className="subscriber-bar-row">
                    <div className="sub-info">
                      <strong>1. Shamil Emonar Rahman Laskar</strong>
                      <span className="sub-share">360 Shares (36%)</span>
                    </div>
                    <div className="sub-meta">Social Activist, 56/38(C), Silchar Road, Hailakandi, Assam</div>
                    <div className="sub-bar-container"><div className="sub-bar-fill" style={{ width: '36%' }} /></div>
                  </div>

                  <div className="subscriber-bar-row mt-3">
                    <div className="sub-info">
                      <strong>2. Rofik Ahmed Barbhuiya</strong>
                      <span className="sub-share">340 Shares (34%)</span>
                    </div>
                    <div className="sub-meta">Social Activist, Sahabad Pt 2, Hailakandi, Assam</div>
                    <div className="sub-bar-container"><div className="sub-bar-fill" style={{ width: '34%' }} /></div>
                  </div>

                  <div className="subscriber-bar-row mt-3">
                    <div className="sub-info">
                      <strong>3. Habiba Khanam Barbhuiya</strong>
                      <span className="sub-share">300 Shares (30%)</span>
                    </div>
                    <div className="sub-meta">Social Activist, Vill Nun Nagar, Nun Nagar, Cachar, Assam</div>
                    <div className="sub-bar-container"><div className="sub-bar-fill" style={{ width: '30%' }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 3. INTERACTIVE 3-YEAR AUDITED FINANCIAL DASHBOARD */}
      {fiscalSection && (
        <section className="financial-dashboard-section section-padding">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{fiscalSection.badge}</span>
              <h2>{fiscalSection.heading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                {fiscalSection.subtitle}
              </p>
            </div>

          {/* Interactive Years Tabs */}
          <div className="fiscal-tabs-container">
            {Object.keys(fiscalData).map((year) => (
              <button
                key={year}
                className={`fiscal-tab-btn ${activeFiscalYear === year ? 'active' : ''}`}
                onClick={() => setActiveFiscalYear(year)}
              >
                Financial Year {year}
                <span className="tab-amount">{fiscalData[year].expenditure}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="glass-card active-fiscal-panel animate-reveal mt-4" key={activeFiscalYear}>
            <div className="fiscal-panel-header">
              <div className="fiscal-tot-col">
                <span className="fiscal-panel-badge">AUDITED TOTAL DISCLOSURE</span>
                <h2>Total Annual Expenditure: <span className="text-gold">{fiscalData[activeFiscalYear].expenditure}</span></h2>
              </div>
              <p className="fiscal-desc mt-3">{fiscalData[activeFiscalYear].description}</p>
            </div>

            <div className="fiscal-table-container mt-4">
              <table className="fiscal-table">
                <thead>
                  <tr>
                    <th>Programme Name</th>
                    <th>Target Area / Location</th>
                    <th>Budget Allocation</th>
                    <th>Grassroots Impact / Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {fiscalData[activeFiscalYear].programs.map((prog, index) => (
                    <tr key={index}>
                      <td className="prog-name-td"><strong>{prog.name}</strong></td>
                      <td><span className="location-tag">{prog.location}</span></td>
                      <td className="budget-td">{prog.budget}</td>
                      <td className="impact-td">{prog.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. SEARCH & DIRECTORY */}
      {downloadsSection && (
        <section className="directory-section section-padding bg-cream">
          <div className="container-custom">
            <div className="section-header text-center">
              <span className="badge">{downloadsSection.badge}</span>
              <h2>{downloadsSection.heading}</h2>
              <div className="gold-line margin-center" />
              <p className="section-subtitle mt-2">
                Search and download raw PDF scans of GAF's legal incorporation deeds and full annual audits.
              </p>
            </div>

          <div className="search-bar-row">
            <input
              type="text"
              placeholder="Search documents by year, AOA, MOA, or keyword..."
              className="form-control search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredReports.length > 0 ? (
            <div className="grid-responsive reports-list-grid mt-5">
              {filteredReports.map((report, idx) => (
                <div className="glass-card report-card-box animate-reveal" key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="pdf-decor-visual">
                    <span className="pdf-label">FILE</span>
                    <span className="pdf-year">{report.year}</span>
                  </div>
                  <div className="report-details-inner">
                    <span className="report-badge-type">{report.type}</span>
                    <h3>{report.title}</h3>
                    <p>{report.summary}</p>
                    <div className="report-meta-metrics text-teal">
                      ♦ {report.metrics}
                    </div>
                    <div className="report-footer">
                      <span className="pdf-file-size">Size: {report.size}</span>
                      <button 
                        className="btn btn-gold btn-download-pdf"
                        onClick={() => handleDownload(report.fileUrl, report.title)}
                      >
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-reports-found text-center mt-4">
              <p>No documents found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>
      )}

      {/* 5. CSR AUDIT REQUEST */}
      {ctaSection && (
        <section className="csr-request-section section-padding bg-sand">
          <div className="container-custom csr-wrapper">
            <div className="csr-text-col">
              <span className="badge">{ctaSection.badge}</span>
              <h2>{ctaSection.heading}</h2>
              <div className="gold-line" />
              <p className="mt-3">
                {ctaSection.subtitle}
              </p>
              <ul className="csr-perks-list">
                <li>Detailed geo-tagged beneficiary logs and clinic outcomes.</li>
                <li>Official Section 80G tax exemption donation certificates.</li>
                <li>Independent third-party medical and social audit transcripts.</li>
                <li>Comprehensive physical balance sheets audited by certified CA firms.</li>
              </ul>
            </div>

          <div className="csr-form-col">
            <div className="glass-card csr-form-card">
              <h3>Request Audit Dossier</h3>
              <form onSubmit={handleCsrSubmit} className="mt-3">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Priyam Baruah"
                    value={csrForm.name}
                    onChange={(e) => setCsrForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Corporate Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@company.com"
                    value={csrForm.email}
                    onChange={(e) => setCsrForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group-row" style={{ display: 'flex', gap: '15px' }}>
                  <div className="form-group" style={{ flex: '1' }}>
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Assam Tea Corp"
                      value={csrForm.company}
                      onChange={(e) => setCsrForm(prev => ({ ...prev, company: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="form-group" style={{ flex: '1' }}>
                    <label className="form-label">Purpose</label>
                    <select
                      className="form-control"
                      value={csrForm.purpose}
                      onChange={(e) => setCsrForm(prev => ({ ...prev, purpose: e.target.value }))}
                      required
                    >
                      <option value="">Select Purpose</option>
                      <option value="CSR Sponsorship Audit">CSR Board Review</option>
                      <option value="Tax Return Audits">Tax Return Exemption</option>
                      <option value="General Information">General Due Diligence</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-gold w-100 mt-2"
                  disabled={formStatus === 'loading' || formStatus === 'success'}
                  style={{ width: '100%' }}
                >
                  {formStatus === 'loading' ? 'Submitting request...' : formStatus === 'success' ? 'Request Sent Successfully!' : 'Request Dossier'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      )}

      <style>{`

        /* GOVERNANCE CARDS */
        .gov-card {
          padding: 2.2rem;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
        }

        .gov-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(17, 63, 39, 0.08);
          padding-bottom: 1rem;
        }

        .gov-icon {
          font-size: 1.6rem;
        }

        .gov-details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gov-details-list li {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.65;
          margin-bottom: 8px;
        }
        .gov-details-list li:last-child {
          margin-bottom: 0;
        }

        .subscriber-bars {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .subscriber-bar-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sub-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
        }

        .sub-share {
          color: var(--gold);
          font-weight: 700;
        }

        .sub-meta {
          font-size: 0.82rem;
          color: var(--muted);
          opacity: 0.9;
          line-height: 1.4;
        }

        .sub-bar-container {
          height: 6px;
          background-color: rgba(17, 63, 39, 0.08);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 4px;
        }

        .sub-bar-fill {
          height: 100%;
          background-color: var(--primary);
          border-radius: 3px;
        }

        /* FINANCIAL DASHBOARD */
        .fiscal-tabs-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .fiscal-tabs-container {
            grid-template-columns: 1fr;
          }
        }

        .fiscal-tab-btn {
          background-color: var(--white);
          border: 1px solid rgba(17, 63, 39, 0.08);
          padding: 1.2rem;
          cursor: pointer;
          font-family: var(--font-header);
          font-size: 1rem;
          font-weight: 700;
          color: var(--primary);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          border-radius: var(--radius-md);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fiscal-tab-btn:hover {
          border-color: var(--gold);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .fiscal-tab-btn.active {
          background-color: var(--primary);
          color: var(--white);
          border-color: var(--primary);
        }

        .tab-amount {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--gold);
          font-weight: 800;
        }

        .fiscal-tab-btn.active .tab-amount {
          color: #ffb8a8;
        }

        .active-fiscal-panel {
          padding: 3rem;
          background-color: var(--white);
        }

        @media (max-width: 576px) {
          .active-fiscal-panel {
            padding: 1.5rem;
          }
        }

        .fiscal-panel-header {
          border-bottom: 1px solid rgba(17, 63, 39, 0.08);
          padding-bottom: 2rem;
        }

        .fiscal-tot-col h2 {
          font-size: clamp(1.4rem, 2.8vw, 1.8rem) !important;
          font-weight: 700 !important;
          line-height: 1.3 !important;
          color: var(--primary) !important;
          margin-top: 6px;
        }

        .fiscal-panel-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .fiscal-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--muted);
        }

        .fiscal-table-container {
          overflow-x: auto;
        }

        .fiscal-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.92rem;
        }

        .fiscal-table th {
          background-color: #fcfbf8;
          color: var(--primary);
          font-family: var(--font-header);
          font-weight: 700;
          padding: 1rem 1.2rem;
          border-bottom: 2px solid rgba(17, 63, 39, 0.12);
        }

        .fiscal-table td {
          padding: 1rem 1.2rem;
          border-bottom: 1px solid rgba(17, 63, 39, 0.08);
          color: var(--muted);
          vertical-align: top;
        }

        .fiscal-table tr:hover td {
          background-color: #faf9f6;
        }

        .prog-name-td {
          max-width: 250px;
          color: var(--primary) !important;
        }

        .location-tag {
          display: inline-block;
          padding: 2px 8px;
          background-color: rgba(17, 63, 39, 0.08);
          font-size: 0.76rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          color: var(--primary);
        }

        .budget-td {
          font-family: var(--font-body);
          font-weight: 700;
          color: var(--gold);
          white-space: nowrap;
        }

        .impact-td {
          font-size: 0.9rem;
          line-height: 1.55;
        }

        /* SEARCH BAR */
        .search-bar-row {
          max-width: 700px;
          margin: 0 auto 3rem auto;
        }

        .search-input {
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(17, 63, 39, 0.08);
          box-shadow: var(--shadow-sm);
        }

        .search-input:focus {
          border-color: var(--gold);
        }

        /* REPORT CARD */
        .report-card-box {
          display: flex;
          background-color: var(--white);
          overflow: hidden;
        }

        @media (max-width: 576px) {
          .report-card-box {
            flex-direction: column;
          }
        }

        .pdf-decor-visual {
          width: 110px;
          background: var(--primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--white);
          padding: 2rem 1rem;
          font-family: var(--font-header);
          font-weight: 700;
          border-right: 1px solid rgba(17, 63, 39, 0.08);
        }

        @media (max-width: 576px) {
          .pdf-decor-visual {
            width: 100%;
            padding: 1rem;
            flex-direction: row;
            gap: 10px;
          }
        }

        .pdf-label {
          font-size: 0.72rem;
          letter-spacing: 2px;
          opacity: 0.6;
        }

        .pdf-year {
          font-size: 1.8rem;
          line-height: 1.1;
          color: var(--gold);
        }

        .report-details-inner {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .report-badge-type {
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 0.7rem;
          color: var(--gold-hover);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
          display: block;
        }

        .report-details-inner h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: var(--primary);
          line-height: 1.4;
        }

        .report-details-inner p {
          font-size: 0.92rem;
          line-height: 1.5;
          margin-bottom: 15px;
          flex-grow: 1;
        }

        .report-meta-metrics {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.78rem;
          background-color: #faf9f6;
          border: 1px solid rgba(17, 63, 39, 0.08);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          margin-bottom: 20px;
          width: fit-content;
        }

        .report-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          border-top: 1px solid rgba(17, 63, 39, 0.08);
          padding-top: 1.2rem;
        }

        .pdf-file-size {
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 600;
        }

        .btn-download-pdf {
          padding: 0.5rem 1.2rem;
          font-size: 0.82rem;
        }

        /* CSR WRAPPER */
        .csr-wrapper {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .csr-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .csr-perks-list {
          list-style: none;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .csr-perks-list li {
          font-size: 0.98rem;
          color: var(--muted);
          position: relative;
          padding-left: 25px;
        }

        .csr-perks-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--gold);
          font-weight: 800;
        }

        .csr-form-card {
          padding: 2.5rem;
          background-color: var(--white);
        }

        .csr-form-card h3 {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default AnnualReports;
