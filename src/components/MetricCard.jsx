import React, { useState, useEffect, useRef } from 'react';

const MetricCard = ({ label, target, context, prefix = '', suffix = '', decimals = 0, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  // Defensive division logic if full numbers are passed to cards with Cr/Lakh suffixes (e.g. from localStorage or cached state)
  let adjustedTarget = Number(target);
  if (isNaN(adjustedTarget)) {
    adjustedTarget = 0;
  }
  
  if (suffix && suffix.includes('Cr') && adjustedTarget > 1000) {
    adjustedTarget = adjustedTarget / 10000000;
  } else if (suffix && suffix.includes('Lakh') && adjustedTarget > 1000) {
    adjustedTarget = adjustedTarget / 100000;
  }

  // Dynamically determine decimals if the target is a float to avoid cached decimals=0 bugs
  let resolvedDecimals = decimals;
  if (adjustedTarget % 1 !== 0) {
    resolvedDecimals = suffix && suffix.includes('Lakh') ? 1 : 2;
  }

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
  }, [adjustedTarget, duration]);

  const animateCount = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentCount = easeProgress * adjustedTarget;
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(adjustedTarget);
      }
    };
    window.requestAnimationFrame(step);
  };

  const formatValue = (val) => {
    if (resolvedDecimals === 0) {
      return Math.round(val).toLocaleString('en-IN');
    }
    const parts = val.toFixed(resolvedDecimals).split('.');
    const integerPart = parseInt(parts[0], 10).toLocaleString('en-IN');
    return parts[1] ? `${integerPart}.${parts[1]}` : integerPart;
  };

  return (
    <div className="metric-card" ref={cardRef}>
      <div className="metric-number">
        {prefix}
        {formatValue(count)}
        {suffix}
      </div>
      <div className="metric-label">{label}</div>
      <div className="metric-context">{context}</div>

      <style>{`
        .metric-card {
          background-color: var(--white);
          border: 1px solid rgba(26, 45, 66, 0.08);
          border-top: 3px solid var(--gold); /* Muted coral accent line */
          border-radius: 6px; /* Clean, crisp border radius */
          padding: 2.2rem 1.6rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 100%;
          box-shadow: none;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
          overflow: hidden; /* Prevent text overflow */
        }

        .metric-card:hover {
          transform: translateY(-4px);
          border-color: rgba(26, 45, 66, 0.15);
          box-shadow: 0 12px 30px rgba(26, 45, 66, 0.03);
        }

        .metric-number {
          font-family: var(--font-subheader);
          font-size: clamp(1.4rem, 2.5vw, 1.8rem); /* Elegant font sizes preventing card overflow */
          font-weight: 700;
          color: var(--primary); /* Navy typography */
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin-bottom: 0.85rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .metric-label {
          font-family: var(--font-subheader);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--primary); /* Navy typography */
          margin-bottom: 0.35rem;
          line-height: 1.35;
          text-transform: none; /* No all-caps labels */
          letter-spacing: normal;
        }

        .metric-context {
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: var(--muted);
          opacity: 0.8;
          line-height: 1.4;
          margin-top: auto; /* Push context to the bottom to align across cards of equal height */
          padding-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default MetricCard;
