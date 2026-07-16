import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RazorpayModal from './RazorpayModal';

const ProgramPageLayout = ({ programData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const navigate = useNavigate();

  const {
    title,
    subtitle,
    badgeText = "VERIFIED INITIATIVE",
    heroImages = [],
    whySection = {},
    approach = [],
    impactSection = {},
    stats = [],
    stories = [],
    videos = []
  } = programData;

  // Auto slide banner
  useEffect(() => {
    if (!heroImages || heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="program-page animate-fade-scale">
      {/* 1. BANNER WITH 2-3 IMAGE SLIDER & SINGLE PERSISTENT TEXT HEADER */}
      <section className="program-hero-slider-section">
        <div className="slider-bg-container">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`slide-img-layer ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="slider-overlay-gradient" />
        </div>

        {/* SINGLE TEXT HEADER - PERSISTENT OVER ALL SLIDES */}
        <div className="container-custom hero-content-wrapper">
          <div className="hero-text-card animate-reveal">
            <span className="badge badge-gold mb-3">{badgeText}</span>
            <h1 className="hero-title text-white">{title}</h1>
            <p className="hero-subtitle text-white-80">{subtitle}</p>
            <div className="hero-actions mt-4">
              <button 
                className="btn btn-gold shadow-lg"
                onClick={() => setIsPayModalOpen(true)}
              >
                Sponsor This Program
              </button>
              <button 
                className="btn btn-outline-white"
                onClick={() => navigate('/volunteer')}
              >
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>

        {/* SLIDER CONTROLS */}
        {heroImages.length > 1 && (
          <div className="slider-controls-wrapper">
            <button className="slider-arrow prev" onClick={handlePrevSlide} aria-label="Previous Slide">
              ‹
            </button>
            <div className="slider-dots">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button className="slider-arrow next" onClick={handleNextSlide} aria-label="Next Slide">
              ›
            </button>
          </div>
        )}
      </section>

      {/* 2. WHY THAT PROGRAM & PURPOSE */}
      <section className="section-padding why-program-section">
        <div className="container-custom">
          <div className="grid-2-col align-center">
            <div className="why-content-col">
              <span className="badge badge-teal">PROGRAM PURPOSE</span>
              <h2 className="section-title mt-2">{whySection.heading || `Why ${title}?`}</h2>
              <p className="lead-text mt-3">{whySection.leadText}</p>
              <div className="why-paragraphs mt-4">
                {whySection.descriptionPoints?.map((pt, idx) => (
                  <div key={idx} className="why-point-item mb-3">
                    <div className="point-icon">✓</div>
                    <div>
                      <h4 className="point-title">{pt.title}</h4>
                      <p className="point-desc">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-image-col">
              <div className="why-image-card-wrapper">
                <img 
                  src={whySection.image || heroImages[0]} 
                  alt={`Why ${title}`} 
                  className="why-featured-img shadow-xl"
                />
                <div className="why-floating-stat glass-card">
                  <span className="stat-num">{whySection.highlightStat || "100%"}</span>
                  <span className="stat-label">{whySection.highlightLabel || "Audited Field Implementation"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPROACH (HOW THEY DO IT) */}
      <section className="section-padding approach-section bg-cream">
        <div className="container-custom">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge badge-gold">STRATEGIC METHODOLOGY</span>
            <h2 className="section-title mt-2">Our Execution Approach</h2>
            <p className="section-subtitle">How Green Ahom Federation converts community needs into sustainable, verifiable field outcomes across Assam.</p>
          </div>

          <div className="grid-responsive approach-grid">
            {approach.map((step, idx) => (
              <div key={idx} className="glass-card approach-card animate-reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="approach-header">
                  <span className="step-number">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="approach-icon">{step.icon || "⚙️"}</span>
                </div>
                <h3 className="approach-title">{step.title}</h3>
                <p className="approach-desc">{step.desc}</p>
                {step.points && (
                  <ul className="approach-subpoints">
                    {step.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE IMPACT OF THAT PARTICULAR PROGRAM */}
      <section className="section-padding impact-detail-section">
        <div className="container-custom">
          <div className="grid-2-col align-center">
            <div className="impact-image-col order-mobile-2">
              <div className="impact-image-grid">
                <img 
                  src={impactSection.image1 || (heroImages[1] || heroImages[0])} 
                  alt="Impact Focus" 
                  className="impact-img-main shadow-lg"
                />
                <img 
                  src={impactSection.image2 || (heroImages[2] || heroImages[0])} 
                  alt="Field Work" 
                  className="impact-img-sub shadow-md"
                />
              </div>
            </div>

            <div className="impact-content-col order-mobile-1">
              <span className="badge badge-teal">MEASURABLE OUTCOMES</span>
              <h2 className="section-title mt-2">{impactSection.heading || `Transformational Impact of ${title}`}</h2>
              <p className="lead-text mt-3">{impactSection.summary}</p>
              
              <div className="impact-highlights-list mt-4">
                {impactSection.highlights?.map((item, idx) => (
                  <div key={idx} className="impact-card-mini">
                    <div className="mini-icon">{item.icon || "🌟"}</div>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPACT IN NUMBERS */}
      <section className="section-padding stats-section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge badge-gold">BY THE NUMBERS</span>
            <h2 className="text-white mt-2">Grassroots Footprint & Beneficiaries</h2>
            <p className="text-white-80">Quantifiable impact recorded in verified CA audit reports and field logs across Assam.</p>
          </div>

          <div className="grid-4-col stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-box-card text-center animate-reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="stat-number-display">{stat.number}</div>
                <div className="stat-title-label">{stat.label}</div>
                <p className="stat-subdetail">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STORIES OF CHANGE & VIDEOS SHOWING IMPACT */}
      <section className="section-padding stories-videos-section bg-cream">
        <div className="container-custom">
          
          {/* STORIES OF CHANGE */}
          {stories && stories.length > 0 && (
            <div className="stories-block mb-5">
              <div className="text-center max-w-700 mx-auto mb-5">
                <span className="badge badge-teal">FIELD TESTIMONIALS</span>
                <h2 className="section-title mt-2">Stories of Change</h2>
                <p className="section-subtitle">Real voices and lives transformed through active ground execution.</p>
              </div>

              <div className="grid-responsive stories-grid">
                {stories.map((story, idx) => (
                  <div key={idx} className="glass-card story-card">
                    <div className="story-image-header" style={{ backgroundImage: `url(${story.image})` }}>
                      <span className="story-location-tag">📍 {story.location}</span>
                    </div>
                    <div className="story-body">
                      <h4 className="story-person">{story.name}</h4>
                      <span className="story-role">{story.role}</span>
                      <blockquote className="story-quote">"{story.quote}"</blockquote>
                      <p className="story-detail">{story.fullStory}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* IMPACT VIDEOS */}
          {videos && videos.length > 0 && (
            <div className="videos-block mt-5">
              <div className="text-center max-w-700 mx-auto mb-4">
                <span className="badge badge-gold">FIELD DOCUMENTARIES</span>
                <h2 className="section-title mt-2">Impact In Motion</h2>
                <p className="section-subtitle">Watch verified field recordings and video logs from our project teams.</p>
              </div>

              <div className="grid-responsive videos-grid">
                {videos.map((vid, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card video-card"
                    onClick={() => setSelectedVideoUrl(vid.videoUrl || vid.embedUrl)}
                  >
                    <div className="video-thumbnail-container" style={{ backgroundImage: `url(${vid.thumbnail})` }}>
                      <div className="play-button-overlay">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                      <span className="video-duration">{vid.duration || "2:45"}</span>
                    </div>
                    <div className="video-info">
                      <h4>{vid.title}</h4>
                      <p>{vid.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="section-padding cta-bottom-banner">
        <div className="container-custom">
          <div className="cta-box-inner text-center glass-card">
            <span className="badge badge-gold mb-3">TAKE ACTION TODAY</span>
            <h2>Be Part of {title}'s Mission</h2>
            <p className="max-w-700 mx-auto mt-2">
              Your support enables Green Ahom Federation to scale grassroots outreach in Assam with 100% financial transparency.
            </p>
            <div className="d-flex justify-center gap-3 mt-4 flex-wrap">
              <button 
                className="btn btn-gold btn-lg"
                onClick={() => setIsPayModalOpen(true)}
              >
                Sponsor {title} Campaign
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => navigate('/volunteer')}
              >
                Join Field Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RAZORPAY DONATION MODAL */}
      <RazorpayModal
        isOpen={isPayModalOpen}
        onClose={() => setIsPayModalOpen(false)}
        amount={1500}
        donorName="Supporter"
        donorEmail="supporter@greenahom.org"
        donorPhone="9876543210"
        onPaymentSuccess={(newDonation) => {
          console.log(`Donation complete for ${title}:`, newDonation);
        }}
      />

      {/* VIDEO MODAL LIGHTBOX */}
      {selectedVideoUrl && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideoUrl(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={() => setSelectedVideoUrl(null)}>×</button>
            {selectedVideoUrl.includes('youtube.com') || selectedVideoUrl.includes('youtu.be') ? (
              <iframe 
                src={selectedVideoUrl} 
                title="Impact Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            ) : (
              <video controls autoPlay src={selectedVideoUrl} className="modal-video-element">
                Your browser does not support HTML video playback.
              </video>
            )}
          </div>
        </div>
      )}

      {/* SCOPED COMPONENT STYLES */}
      <style>{`
        /* ========================================
           MISSING UTILITY CLASSES
           (Used in JSX but never defined)
           ======================================== */

        /* TEXT ALIGNMENT */
        .program-page .text-center {
          text-align: center !important;
        }

        /* BADGE VARIANTS */
        .program-page .badge-teal {
          background-color: rgba(26, 59, 43, 0.1);
          color: var(--teal, #1a3b2b);
          border-color: rgba(26, 59, 43, 0.18);
        }

        .program-page .badge-gold {
          background-color: rgba(217, 95, 67, 0.1);
          color: var(--gold, #d95f43);
          border-color: rgba(217, 95, 67, 0.18);
        }

        /* SECTION TITLE & SUBTITLE */
        .program-page .section-title {
          font-family: var(--font-header);
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: var(--primary);
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .program-page .stats-section .section-title,
        .program-page .stats-section h2 {
          color: white !important;
        }

        /* BACKGROUND HELPERS */
        .program-page .bg-cream {
          background-color: #faf9f6;
        }

        /* SPACING UTILITIES */
        .program-page .mb-3 { margin-bottom: 1rem; }
        .program-page .mb-4 { margin-bottom: 1.5rem; }
        .program-page .mb-5 { margin-bottom: 2.5rem; }
        .program-page .mt-2 { margin-top: 0.75rem; }
        .program-page .mt-3 { margin-top: 1rem; }
        .program-page .mt-4 { margin-top: 1.5rem; }
        .program-page .mt-5 { margin-top: 2.5rem; }

        /* FLEXBOX UTILITIES */
        .program-page .d-flex {
          display: flex !important;
        }

        .program-page .justify-center {
          justify-content: center !important;
        }

        .program-page .gap-3 {
          gap: 1rem !important;
        }

        .program-page .flex-wrap {
          flex-wrap: wrap !important;
        }

        /* BUTTON SIZE VARIANT */
        .program-page .btn-lg {
          padding: 1rem 2.2rem !important;
          font-size: 1.05rem !important;
        }

        /* SHADOW UTILITY CLASSES */
        .program-page .shadow-lg {
          box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,0.08));
        }

        .program-page .shadow-md {
          box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0,0,0,0.06));
        }

        .program-page .shadow-xl {
          box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0,0,0,0.08));
        }


        /* ========================================
           BANNER SLIDER
           ======================================== */
        .program-hero-slider-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0d281a;
          padding: 8rem 0 6rem 0;
        }

        .slider-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .slide-img-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 1.2s ease-in-out, transform 1.8s ease-out;
        }

        .slide-img-layer.active {
          opacity: 1;
          transform: scale(1);
        }

        .slider-overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg, 
            rgba(13, 40, 26, 0.75) 0%, 
            rgba(13, 40, 26, 0.85) 60%,
            rgba(13, 40, 26, 0.95) 100%
          );
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 2;
        }

        .hero-text-card {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-family: var(--font-header);
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-top: 1.2rem;
        }

        .text-white-80 {
          color: rgba(255, 255, 255, 0.85) !important;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .btn-outline-white {
          border: 2px solid rgba(255, 255, 255, 0.4);
          color: white;
          background: transparent;
          font-weight: 700;
          padding: 0.8rem 1.8rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .btn-outline-white:hover {
          background: white;
          color: var(--primary);
          border-color: white;
        }

        /* ========================================
           SLIDER CONTROLS
           ======================================== */
        .slider-controls-wrapper {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .slider-arrow {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          line-height: 1;
        }

        .slider-arrow:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: white;
        }

        .slider-dots {
          display: flex;
          gap: 8px;
        }

        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          background: var(--gold);
          transform: scale(1.3);
          width: 28px;
          border-radius: 6px;
        }

        /* ========================================
           WHY SECTION
           ======================================== */
        .why-program-section {
          background: white;
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .align-center {
          align-items: center;
        }

        .lead-text {
          font-size: 1.15rem;
          line-height: 1.65;
          color: var(--primary-light);
          font-weight: 500;
        }

        .why-point-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .why-point-item:last-child {
          margin-bottom: 0;
        }

        .point-icon {
          width: 28px;
          height: 28px;
          background: rgba(217, 95, 67, 0.12);
          color: var(--gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .point-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .point-desc {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.5;
          margin: 0;
        }

        .why-image-card-wrapper {
          position: relative;
        }

        .why-featured-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid rgba(17, 63, 39, 0.08);
          box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0,0,0,0.08));
        }

        .why-floating-stat {
          position: absolute;
          bottom: -20px;
          left: -20px;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          border: 1px solid rgba(17, 63, 39, 0.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-family: var(--font-header);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--gold);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        /* ========================================
           APPROACH SECTION
           ======================================== */
        .approach-section {
          border-bottom: 1px solid rgba(17, 63, 39, 0.06);
        }

        .approach-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .approach-card {
          padding: 2.2rem;
          background: white;
          border-radius: 10px;
          border: 1px solid rgba(17, 63, 39, 0.08);
          transition: all 0.3s ease;
        }

        .approach-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--gold);
        }

        .approach-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.2rem;
        }

        .step-number {
          font-family: var(--font-header);
          font-size: 1.8rem;
          font-weight: 800;
          color: rgba(17, 63, 39, 0.2);
        }

        .approach-icon {
          font-size: 2rem;
        }

        .approach-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.6rem;
        }

        .approach-desc {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.6;
          margin: 0;
        }

        .approach-subpoints {
          margin-top: 1rem;
          padding-left: 1.2rem;
          font-size: 0.85rem;
          color: var(--primary-light);
          line-height: 1.6;
        }

        .approach-subpoints li {
          margin-bottom: 0.25rem;
        }

        /* ========================================
           IMPACT DETAIL SECTION
           ======================================== */
        .impact-detail-section {
          background: white;
        }

        .impact-image-grid {
          position: relative;
          padding-bottom: 30px; /* room for offset sub-image */
        }

        .impact-img-main {
          width: 85%;
          height: 380px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,0.08));
        }

        .impact-img-sub {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 55%;
          height: 240px;
          object-fit: cover;
          border-radius: 10px;
          border: 4px solid white;
          box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0,0,0,0.06));
        }

        .impact-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .impact-card-mini {
          display: flex;
          gap: 16px;
          padding: 1.2rem;
          background: #faf9f6;
          border-radius: 8px;
          border: 1px solid rgba(17, 63, 39, 0.06);
          align-items: flex-start;
        }

        .mini-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
          line-height: 1;
        }

        .impact-card-mini h5 {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .impact-card-mini p {
          font-size: 0.88rem;
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
        }

        /* ========================================
           STATS SECTION (IMPACT IN NUMBERS)
           ======================================== */
        .stats-section {
          background: var(--primary, #113f27);
          color: white;
        }

        .stats-section h2,
        .stats-section p,
        .stats-section .stat-title-label {
          color: white;
        }

        .grid-4-col {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-box-card {
          padding: 2.2rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          backdrop-filter: blur(8px);
          text-align: center;
        }

        .stat-number-display {
          font-family: var(--font-header);
          font-size: 3rem;
          font-weight: 800;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-title-label {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: white;
        }

        /* FIX: class name mismatch — JSX uses stat-subdetail, CSS had stat-subtext */
        .stat-subdetail,
        .stat-subtext {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.4;
        }

        /* ========================================
           STORIES & VIDEOS SECTION
           ======================================== */
        .stories-videos-section {
          background: #faf9f6;
        }

        .stories-grid, .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .story-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(17, 63, 39, 0.08);
          display: flex;
          flex-direction: column;
        }

        .story-image-header {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          padding: 1rem;
        }

        .story-location-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(17, 63, 39, 0.85);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .story-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .story-person {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 2px;
        }

        .story-role {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
        }

        .story-quote {
          font-style: italic;
          color: var(--primary-light);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          border-left: 3px solid var(--gold);
          padding-left: 12px;
        }

        .story-detail {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.6;
          margin: 0;
        }

        /* ========================================
           VIDEO CARDS
           ======================================== */
        .video-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(17, 63, 39, 0.08);
          transition: all 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--gold);
        }

        .video-thumbnail-container {
          height: 210px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-button-overlay {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(217, 95, 67, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background 0.2s ease;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .video-card:hover .play-button-overlay {
          transform: scale(1.15);
          background: var(--gold);
        }

        .video-duration {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.75);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .video-info {
          padding: 1.2rem 1.5rem;
        }

        .video-info h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 6px;
        }

        .video-info p {
          font-size: 0.85rem;
          color: var(--muted);
          margin: 0;
          line-height: 1.4;
        }

        /* ========================================
           VIDEO MODAL LIGHTBOX
           ======================================== */
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .video-modal-content {
          position: relative;
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16/9;
          background: black;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .video-modal-content iframe, .modal-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-close-btn {
          position: absolute;
          top: 12px;
          right: 16px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 2rem;
          line-height: 1;
          cursor: pointer;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .video-close-btn:hover {
          background: var(--gold);
        }

        /* ========================================
           CTA BOTTOM BANNER
           ======================================== */
        .cta-bottom-banner {
          background: white;
        }

        .cta-box-inner {
          padding: 4rem 2.5rem;
          background: linear-gradient(135deg, rgba(17, 63, 39, 0.03) 0%, rgba(217, 95, 67, 0.05) 100%);
          border-radius: 16px;
          border: 1px solid rgba(17, 63, 39, 0.1);
          text-align: center;
        }

        .cta-box-inner h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          color: var(--primary);
          margin-top: 0.5rem;
        }

        .cta-box-inner p {
          margin-top: 0.75rem;
          color: var(--muted);
        }

        .cta-box-inner .d-flex {
          margin-top: 1.5rem;
        }

        /* MAX-WIDTH UTILITY */
        .max-w-700 {
          max-width: 700px;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        /* ========================================
           RESPONSIVE BREAKPOINTS
           ======================================== */
        @media (max-width: 900px) {
          .grid-4-col {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .grid-2-col {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .order-mobile-1 {
            order: 1;
          }

          .order-mobile-2 {
            order: 2;
          }

          .why-featured-img {
            height: 320px;
          }

          .why-floating-stat {
            position: relative;
            bottom: 0;
            left: 0;
            margin-top: 15px;
          }

          .impact-img-main {
            width: 100%;
            height: 280px;
          }

          .impact-img-sub {
            display: none;
          }

          .impact-image-grid {
            padding-bottom: 0;
          }

          .cta-box-inner {
            padding: 2.5rem 1.5rem;
          }

          .stories-grid, .videos-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .grid-4-col {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .stat-box-card {
            padding: 1.5rem 1rem;
          }

          .stat-number-display {
            font-size: 2.2rem;
          }

          .approach-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgramPageLayout;
