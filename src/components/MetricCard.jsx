import React, { useState, useEffect, useRef } from 'react';

const MetricCard = ({ label, target, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [target, duration]);

  const animateCount = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  };

  const formatNumber = (num) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <div className="metric-card glass-card" ref={cardRef}>
      <div className="metric-number-wrapper">
        <span className="metric-prefix text-gold">{prefix}</span>
        <span className="metric-number text-gold">{formatNumber(count)}</span>
        <span className="metric-suffix text-gold">{suffix}</span>
      </div>
      <div className="metric-label">{label}</div>
      <div className="metric-line" />
      <style>{`
        .metric-card {
          padding: 2.2rem 2rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .metric-number-wrapper {
          display: flex;
          align-items: baseline;
          justify-content: center;
          font-family: var(--font-header);
          font-weight: 800;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          line-height: 1;
          margin-bottom: 0.8rem;
        }

        .metric-prefix, .metric-suffix {
          font-size: 0.65em;
          font-weight: 700;
        }

        .metric-prefix {
          margin-right: 4px;
        }

        .metric-suffix {
          margin-left: 2px;
        }

        .metric-label {
          font-family: var(--font-header);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--primary-light);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .metric-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 3px;
          width: 0;
          background-color: var(--gold);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .metric-card:hover .metric-line {
          width: 80px;
        }
      `}</style>
    </div>
  );
};

export default MetricCard;
