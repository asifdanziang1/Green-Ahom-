import React, { useState, useRef, useEffect } from 'react';

const ImpactSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="impact-slider-outer">
      <div 
        className="impact-slider-container" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER STATE: LUSH GREEN CANOPY (BACKGROUND) */}
        <div className="slider-state after-state">
          <div className="state-content green-canopy-visual">
            <div className="visual-forest-bg" />
            <div className="foliage-element leaf-1" />
            <div className="foliage-element leaf-2" />
            <div className="foliage-element leaf-3" />
            <div className="wildlife-rhino-shadow" />
            <div className="visual-text after-label">
              <span>AFTER GAF CAMPAIGN</span>
              <h4>Thriving Rainforest Ecosystem</h4>
            </div>
          </div>
        </div>

        {/* BEFORE STATE: DEGRADED LAND (SLIDING OVERLAY) */}
        <div 
          className="slider-state before-state" 
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="state-content barren-land-visual">
            <div className="visual-barren-bg" />
            <div className="dry-crack crack-1" />
            <div className="dry-crack crack-2" />
            <div className="stump-element" />
            <div className="visual-text before-label">
              <span>BEFORE INTERVENTION</span>
              <h4>Soil Erosion & Barren Riverbanks</h4>
            </div>
          </div>
        </div>

        {/* THE SLIDER HANDLE */}
        <div 
          className="slider-handle" 
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="handle-bar" />
          <div className="handle-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="8 17 3 12 8 7" />
              <polyline points="16 17 21 12 16 7" />
            </svg>
          </div>
          <div className="handle-bar" />
        </div>
      </div>

      <div className="slider-caption">
        <p>
          <span className="text-teal">Drag the slider</span> to witness the 12-month transformation of the Brahmaputra River Basin near Tezpur, Assam, under our Community Reforestation Drive.
        </p>
      </div>

      <style>{`
        .impact-slider-outer {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .impact-slider-container {
          position: relative;
          width: 100%;
          height: 450px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-glass);
          cursor: ew-resize;
          user-select: none;
        }

        @media (max-width: 768px) {
          .impact-slider-container {
            height: 350px;
          }
        }

        .slider-state {
          position: absolute;
          top: 0;
          height: 100%;
          overflow: hidden;
        }

        .after-state {
          left: 0;
          width: 100%;
          z-index: 1;
        }

        .before-state {
          left: 0;
          z-index: 2;
          border-right: 1px solid rgba(255, 255, 255, 0.4);
        }

        .state-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 450px;
          display: flex;
          align-items: flex-end;
          padding: 2.5rem;
        }

        @media (max-width: 768px) {
          .state-content {
            height: 350px;
            padding: 1.5rem;
          }
        }

        /* VECTORS FOR LUSH CANOPY (AFTER) */
        .green-canopy-visual {
          background: linear-gradient(135deg, #1a2d42 0%, #253e59 50%, #344e68 100%);
        }

        .visual-forest-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 70% 30%, rgba(217, 95, 67, 0.1) 0%, transparent 60%);
          z-index: 1;
        }

        .foliage-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 50%;
          z-index: 1;
        }

        .leaf-1 { width: 300px; height: 300px; top: -50px; right: -50px; background: radial-gradient(circle, rgba(52, 78, 104, 0.4) 0%, transparent 70%); }
        .leaf-2 { width: 250px; height: 250px; bottom: -50px; left: 10%; background: radial-gradient(circle, rgba(26, 45, 66, 0.6) 0%, transparent 80%); }
        .leaf-3 { width: 150px; height: 150px; top: 15%; left: 30%; background: rgba(212, 175, 55, 0.05); }

        .wildlife-rhino-shadow {
          position: absolute;
          bottom: 40px;
          right: 80px;
          width: 120px;
          height: 70px;
          background-color: rgba(26, 45, 66, 0.35);
          clip-path: polygon(10% 80%, 15% 70%, 25% 65%, 40% 63%, 50% 65%, 65% 58%, 70% 50%, 75% 52%, 80% 58%, 85% 56%, 88% 62%, 92% 64%, 90% 75%, 85% 82%, 75% 82%, 72% 95%, 65% 95%, 68% 82%, 40% 82%, 37% 95%, 30% 95%, 32% 82%, 20% 82%);
          filter: blur(1px);
          z-index: 2;
          opacity: 0.7;
        }

        /* VECTORS FOR BARREN LAND (BEFORE) */
        .barren-land-visual {
          background: linear-gradient(135deg, #4d3a2b 0%, #7d5e46 60%, #9e7f67 100%);
        }

        .visual-barren-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
          z-index: 1;
        }

        .dry-crack {
          position: absolute;
          background-color: rgba(0, 0, 0, 0.15);
          height: 2px;
          z-index: 1;
        }

        .crack-1 {
          width: 200px;
          top: 40%;
          left: 10%;
          transform: rotate(25deg);
          clip-path: polygon(0% 50%, 20% 30%, 40% 70%, 60% 40%, 80% 80%, 100% 50%, 100% 60%, 80% 90%, 60% 50%, 40% 80%, 20% 40%, 0% 60%);
        }

        .crack-2 {
          width: 150px;
          bottom: 30%;
          left: 40%;
          transform: rotate(-15deg);
        }

        .stump-element {
          position: absolute;
          bottom: 50px;
          left: 80px;
          width: 60px;
          height: 45px;
          background-color: rgba(54, 40, 31, 0.6);
          clip-path: polygon(15% 100%, 25% 60%, 20% 30%, 30% 10%, 40% 30%, 45% 0%, 55% 30%, 65% 10%, 60% 50%, 80% 100%);
          z-index: 2;
        }

        /* TEXT LABELS */
        .visual-text {
          position: relative;
          z-index: 3;
          color: var(--white);
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          pointer-events: none;
          max-width: 320px;
        }

        .visual-text span {
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }

        .after-label span { color: var(--gold); }
        .before-label span { color: #f39c12; }

        .visual-text h4 {
          font-size: 1.35rem;
          color: var(--white);
          font-weight: 700;
        }

        /* HANDLE */
        .slider-handle {
          position: absolute;
          top: 0;
          height: 100%;
          width: 4px;
          background-color: var(--white);
          z-index: 10;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          pointer-events: none;
        }

        .handle-bar {
          flex: 1;
          width: 2px;
          background-color: rgba(255, 255, 255, 0.4);
        }

        .handle-button {
          width: 44px;
          height: 44px;
          background-color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          border: 2px solid var(--gold);
        }

        .slider-caption {
          margin-top: 1.2rem;
          text-align: center;
        }

        .slider-caption p {
          font-size: 0.95rem;
          color: var(--muted);
        }
      `}</style>
    </div>
  );
};

export default ImpactSlider;
