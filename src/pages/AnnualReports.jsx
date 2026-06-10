import React, { useState, useEffect } from 'react';

const AnnualReports = () => {
  const [reports, setReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFiscalYear, setActiveFiscalYear] = useState('2024-2025');
  const [csrForm, setCsrForm] = useState({
    name: '',
    company: '',
    email: '',
    purpose: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const defaultReports = [
    {
      year: '2025',
      title: 'Annual Report 2024-2025',
      summary: 'Statutory Operational and Financial Audit for the period ending March 31, 2025. Detail sheets outlining multi-district women tailoring training, Karimganj Patharkandi block TB patient nutrition support, Hailakandi block cataract surgeries (ONGC Silchar CSR), Sonai/Dholai street lights, stray rescues, and Howli Barpeta community center construction.',
      metrics: '₹1,97,96,490 Expenditures | 10 Programs | Multi-District Assam',
      fileUrl: '/client_content/ANNUAL REPORT 2024-2025.pdf',
      size: '3.3 MB',
      type: 'Statutory Audit'
    },
    {
      year: '2024',
      title: 'Annual Report 2023-2024',
      summary: 'Audited financial balance sheets and comprehensive field logs for the period ending March 31, 2024. Details public health interventions, ONGC Silchar sponsored TB nutrition kits, Hailakandi Lala block eye care screening, Independence Day daily wage earners rations, and Karimganj Luairpoa maternal and child nutrition programs.',
      metrics: '₹37,15,400 Expenditures | 4 Programs | 935 TB Patients',
      fileUrl: '/client_content/ANNUAL REPORT 23-24.pdf',
      size: '2.0 MB',
      type: 'Financial Audit'
    },
    {
      year: '2023',
      title: 'Annual Report 2022-2023',
      summary: 'Grassroots operational log and financial ledger detailing the second-year expansion progress. Outlines Srikona ITI Silchar financial literacy courses, emergency flood relief dry ration distributions across Barak Valley, World Environment Day afforestation, child labour retention counseling, and stray animal welfare activities.',
      metrics: '₹3,58,700 Expenditures | 6 Programs | Barak Valley Relief',
      fileUrl: '/client_content/ANNUAL REPORT 2022-23.pdf',
      size: '2.1 MB',
      type: 'General Audit'
    },
    {
      year: 'AOA',
      title: 'Altered Articles of Association (AOA)',
      summary: 'Official constitutional charter outlining Green Ahom Federation’s strict non-profit status, absolute dividend prohibition, membership guidelines, shares structures, and governing board code of conduct under Section 8 of the Companies Act, 2013.',
      metrics: 'Articles of Association | Section 8 Constitutional | Assam ROC',
      fileUrl: '/client_content/Altered AOA OF GREEN AHOM.pdf',
      size: '1.0 MB',
      type: 'Constitutional Charter'
    },
    {
      year: 'MOA',
      title: 'Altered Memorandum of Association (MOA)',
      summary: 'Registered constitutional memorandum defining the main statutory objectives: promoting conceptual education (acquiring Ideal Academy, Hailakandi), healthcare clinics, CSR collaborations, rural street lights, sports programs, and emergency humanitarian relief services.',
      metrics: 'Memorandum of Association | INC-13 Official | Delhi CA Witnessed',
      fileUrl: '/client_content/Altered INC-13 MOA OF GREEN AHOM.pdf',
      size: '0.7 MB',
      type: 'Statutory Objective'
    }
  ];

  useEffect(() => {
    localStorage.setItem('gaf_reports', JSON.stringify(defaultReports));
    setReports(defaultReports);
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

  const filteredReports = reports.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fiscalData = {
    '2024-2025': {
      expenditure: '₹1,97,96,490',
      description: 'The financial year 2024–25 represented a massive phase of institutional scaling for Green Ahom Federation. Backed by private philanthropy, CSR partnerships, and community stakeholders, GAF successfully completed 10 large-scale programs spanning 7 districts (Cachar, Hailakandi, Karimganj, Barpeta, Nalbari, Nagaon, and Dima Hasao). This year marked the construction of 3 community centres, multi-district tailoring courses for women, and public health cataract screenings.',
      programs: [
        { name: 'Nutritional Food Packets Distribution to TB Patients', location: 'Patharkandi Block, Karimganj District', budget: '₹14,45,000', impact: 'Substantial nutrition for TB patients undergoing prolonged treatment.' },
        { name: 'Eye Camp – Spectacles Purchase (Refractive Error)', location: 'Lala Block, Hailakandi District', budget: '₹2,69,750', impact: 'Corrective vision support to rural low-income families.' },
        { name: 'Eye Camp – Cataract Surgery Support (ONGC CSR)', location: 'Lala, South Hailakandi & Algapur Blocks', budget: '₹1,59,590', impact: 'Avoidable blindness elimination and surgical management.' },
        { name: 'Street Light Distribution Programme', location: 'Dholai & Sonai Blocks, Cachar District', budget: '₹6,60,000', impact: 'Safety and mobility illumination in remote rural paths.' },
        { name: 'Skill Training Programme for Women (Tailoring)', location: 'Cachar, Hailakandi, Nagaon & NC Hills', budget: '₹32,82,000', impact: 'Vocational training and tailoring kits for financial independence.' },
        { name: 'Plantation Drive Programme', location: 'Hailakandi, Cachar & Karimganj Districts', budget: '₹3,28,000', impact: 'Afforestation saplings in schools and public premises.' },
        { name: 'Food Distribution Programme for Eliminating Hunger', location: 'Hailakandi, Cachar, Nalbari & NC Hills', budget: '₹46,06,060', impact: 'Food security dry rations for vulnerable daily wage earners.' },
        { name: 'Animal Feeding & Medical Support Programme', location: 'Barak Valley Districts', budget: '₹35,41,090', impact: 'Veterinary aid and daily street stray feeding campaigns.' },
        { name: 'Community Centre Construction Work', location: 'Howli Barpeta (BH College), Borkhola Cachar, Algapur Hailakandi', budget: '₹42,37,000', impact: 'Constructed three durable socio-development hubs.' },
        { name: 'Skill Training on Handicraft Programme', location: 'Chandipur Village (Algapur), Lakhipur Cachar', budget: '₹12,68,000', impact: 'Preservation of traditional crafts and rural livelihood creation.' }
      ]
    },
    '2023-2024': {
      expenditure: '₹37,15,400',
      description: 'During FY 2023–24, GAF refined its programmatic approach, establishing key strategic partnerships to optimize outcomes. A highlight of the fiscal year was our public health collaboration with Oil and Natural Gas Corporation (ONGC Silchar CSR) to distribute specialized protein-dense food packets to 935 registered TB patients. The year also integrated deep ophthalmology screenings and maternal health coverage in remote blocks.',
      programs: [
        { name: 'Nutritional Food Packet Distribution to 935 TB Patients (ONGC Silchar)', location: 'Cachar & Hailakandi Districts', budget: '₹14,85,000', impact: 'Supported treatment adherence, recovery, and immunity levels.' },
        { name: 'Eye Camp, Spectacle Distribution & Cataract Identification', location: 'Lala Block, Hailakandi District', budget: '₹11,17,500', impact: 'Screened 500 patients, distributed free corrective spectacles.' },
        { name: 'Dry Ration Distribution to Daily Wage Earners', location: 'Barak Valley District Blocks', budget: '₹65,000', impact: 'Independence Day humanitarian support to low-income families.' },
        { name: 'Nutritional Food Packet Distribution for Pregnant Women & Children', location: 'Luairpoa Area, Karimganj District', budget: '₹10,47,900', impact: 'Maternal and infant nutrition kits distributed to 1,200 beneficiaries.' }
      ]
    },
    '2022-2023': {
      expenditure: '₹3,58,700',
      description: 'The financial year 2022–23 represented a pivotal grassroots phase for GAF, following a massive flood disaster that paralyzed Northeast India. GAF mobilized a dedicated local volunteer network to deploy essential food security kits, while establishing initial training blocks in financial literacy to combat youth unemployment.',
      programs: [
        { name: 'Skill Training Class on Financial Literacy & Management', location: 'ITI Srikona Campus, Silchar, Cachar District', budget: '₹25,000', impact: 'Trained youth in personal savings, budgeting, and digital banking.' },
        { name: 'Flood Relief Dry Ration Distribution Programme', location: 'Cachar, Hailakandi, Karimganj Districts', budget: '₹1,27,000', impact: 'Distributed immediate dry ration kits to flood-displaced families.' },
        { name: 'Plantation Drive on World Environment Day', location: 'Various Educational Institutions, Barak Valley', budget: '₹56,000', impact: 'Planted fruit-bearing and medicinal saplings in rural schools.' },
        { name: 'Awareness Campaign Against Child Labour', location: 'Rural Primary Schools & Wage Settlements', budget: '₹35,700', impact: 'Motivational school retention counseling for parents and children.' },
        { name: 'Animal Welfare stray Feeding & Injuries Rescue', location: 'Barak Valley Urban Margins', budget: '₹15,000', impact: 'Rescued injured stray cows and established daily feeding routes.' },
        { name: 'Dry Ration Distribution to Daily Wage Earners', location: 'Hailakandi District Settlements', budget: '₹1,00,000', impact: 'Essential food security kits distributed to rickshaw pullers and labourers.' }
      ]
    }
  };

  return (
    <div className="reports-page animate-fade-scale">
      {/* 1. HERO BANNER */}
      <section className="hero-section-premium">
        <div className="container-custom">
          <span className="badge badge-gold">STATUTORY AUDIT &amp; COMPLIANCE</span>
          <h1 className="text-white mt-3">Governance &amp; Financial Disclosures</h1>
          <p className="reports-hero-subtitle text-white-muted" style={{ maxWidth: '780px', margin: '1.5rem auto 0 auto', fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
            Green Ahom Federation operates under absolute public transparency. Review our official Section 8 INC-13 constitutional charters, certified ROC filings, and multi-year CA-audited ledger sheets.
          </p>
        </div>
      </section>

      {/* 2. STATUTORY CORPORATE GOVERNANCE SUMMARY */}
      <section className="governance-summary-section section-padding bg-cream">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">GOVERNING BOARD</span>
            <h2>Section 8 Corporate Structure &amp; Registry</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Statutory details of Green Ahom Federation as incorporated under Section 8 of the Indian Companies Act, 2013 (situated in the State of Assam).
            </p>
          </div>

          <div className="grid-responsive governance-grid mt-5">
            <div className="glass-card gov-card">
              <div className="gov-header">
                <span className="gov-icon">⚖️</span>
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
                <span className="gov-icon">👥</span>
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

      {/* 3. INTERACTIVE 3-YEAR AUDITED FINANCIAL DASHBOARD */}
      <section className="financial-dashboard-section section-padding">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">FINANCIAL TRACKER</span>
            <h2>Multi-Year Audited Expenditure Ledger</h2>
            <div className="gold-line margin-center" />
            <p className="section-subtitle mt-2">
              Explore the complete 3-year grassroots expenditure progression of Green Ahom Federation. Select a financial year below to review block locations, budgets, and outcomes.
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
          <div className="glass-card active-fiscal-panel mt-4">
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

      {/* 4. SEARCH & DIRECTORY */}
      <section className="directory-section section-padding bg-cream">
        <div className="container-custom">
          <div className="section-header text-center">
            <span className="badge">REPOSITORIES</span>
            <h2>Document Downloads Directory</h2>
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
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--muted)' }}>{report.summary}</p>
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
            <div className="empty-reports text-center mt-5">
              <span className="empty-icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </span>
              <h3 className="mt-3">No disclosures matching "{searchQuery}"</h3>
              <p>Try searching for "AOA", "MOA", "2024", or district names to find specific regulatory documents.</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. CSR AUDIT REQUEST */}
      <section className="csr-request-section section-padding bg-sand">
        <div className="container-custom csr-wrapper">
          <div className="csr-text-col">
            <span className="badge">CSR PARTNERS</span>
            <h2>Need Detailed Audit Packets?</h2>
            <div className="gold-line" />
            <p className="mt-3">
              Green Ahom Federation complies with all Section 135 CSR regulations of the Companies Act, 2013. We are a verified MCA CSR-1 Implementing Agency. We provide our corporate sponsors with:
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

      <style>{`

        /* GOVERNANCE CARDS */
        .gov-card {
          padding: 2.2rem;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .gov-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .gov-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-subtle);
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
          line-height: 1.5;
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
          font-size: 0.92rem;
        }

        .sub-share {
          color: var(--gold);
          font-weight: 700;
        }

        .sub-meta {
          font-size: 0.76rem;
          color: var(--muted);
          opacity: 0.8;
        }

        .sub-bar-container {
          height: 6px;
          background-color: var(--border-subtle);
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
          border: 1px solid var(--border-subtle);
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
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 576px) {
          .active-fiscal-panel {
            padding: 1.5rem;
          }
        }

        .fiscal-panel-header {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 2rem;
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
          background-color: var(--surface-sand);
          color: var(--primary);
          font-family: var(--font-header);
          font-weight: 700;
          padding: 1rem 1.2rem;
          border-bottom: 2px solid var(--border-strong);
        }

        .fiscal-table td {
          padding: 1rem 1.2rem;
          border-bottom: 1px solid var(--border-subtle);
          color: var(--muted);
          vertical-align: top;
        }

        .fiscal-table tr:hover td {
          background-color: var(--surface-default);
        }

        .prog-name-td {
          max-width: 250px;
          color: var(--primary) !important;
        }

        .location-tag {
          display: inline-block;
          padding: 2px 8px;
          background-color: var(--border-subtle);
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
          font-size: 0.88rem;
          line-height: 1.4;
        }

        /* SEARCH BAR */
        .search-bar-row {
          max-width: 700px;
          margin: 0 auto 3rem auto;
        }

        .search-input {
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
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
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .report-card-box:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
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
          border-right: 1px solid var(--border-subtle);
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
          background-color: var(--surface-default);
          border: 1px solid var(--border-subtle);
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
          border-top: 1px solid var(--border-subtle);
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
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        .csr-form-card h3 {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default AnnualReports;
