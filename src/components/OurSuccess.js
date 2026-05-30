import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SuccessWrapper = styled.section`
  padding: 8rem 2rem;
  background: 
    radial-gradient(ellipse 100% 80% at 50% 100%, rgba(0, 212, 255, 0.08), transparent 60%),
    linear-gradient(180deg, #0a0f1a 0%, #0d1828 50%, #0a0f1a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.04) 0%, transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.04) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatBox = styled.div`
  padding: 2.5rem 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent);
  }
`;

const StatNumber = styled.div`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: ${gradientShift} 4s ease infinite;
  margin-bottom: 0.75rem;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
`;

const stats = [
  { number: '24', label: 'Hour Turnaround' },
  { number: '4K', label: 'Video Delivery', suffix: '' },
  { number: '100%', label: 'MLS Ready', suffix: '' },
  { number: '100+', label: 'Properties Covered', suffix: '' },
];

const OurSuccess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters(stats.map((s) => {
        const target = parseFloat(s.number.replace(/[^0-9.]/g, '')) || 100;
        const current = (target * step) / steps;
        return current;
      }));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SuccessWrapper ref={sectionRef} className="reveal">
      <Container>
        <Title>What You Can <span>Expect</span></Title>
        <StatsGrid>
          {stats.map((s, i) => (
            <StatBox key={s.label} className={`reveal reveal-delay-${i + 1}`}>
              <StatNumber>
                {isVisible ? (
                  <>
                    {Math.round(counters[i])}
                    {s.suffix}
                  </>
                ) : '0'}
              </StatNumber>
              <StatLabel>{s.label}</StatLabel>
            </StatBox>
          ))}
        </StatsGrid>
      </Container>
    </SuccessWrapper>
  );
};

export default OurSuccess;