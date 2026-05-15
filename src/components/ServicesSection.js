import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.section`
  padding: 9rem 2rem;
  background: 
    linear-gradient(180deg, #0a0f1a 0%, #0d1525 50%, #0a0f1a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse at center, rgba(0, 212, 255, 0.06), transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const Tag = styled.p`
  color: #00d4ff;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 1.25rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.75rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 255, 136, 0.1));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent);
    transform: scaleX(0);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 212, 255, 0.2);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.3),
      0 0 50px rgba(0, 212, 255, 0.08);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const IconBox = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 255, 136, 0.05));
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #00d4ff;
  margin-bottom: 1.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 212, 255, 0.2);

  ${ServiceCard}:hover & {
    transform: scale(1.1);
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.25), rgba(0, 255, 136, 0.1));
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.85rem;
  letter-spacing: -0.01em;
`;

const ServiceDesc = styled.p`
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  font-size: 0.95rem;
`;

const PriceTag = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #00d4ff;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, #00d4ff, #00ff88);
    border-radius: 1px;
  }
`;

const services = [
  { icon: 'MLS', title: 'Listing Drone Package', desc: 'Aerial coverage and ground-level establishing shots for MLS, Zillow, and marketing. Stabilized edits with licensed music.', price: 'Standard: $175 to $299' },
  { icon: 'TOUR', title: 'Walkthrough and Drone', desc: 'Exterior drone reveal, interior walkthrough, and neighborhood context for featured listings.', price: 'From $299' },
  { icon: 'LUX', title: 'Luxury and Commercial', desc: 'High-end exteriors, rooftops, and architectural details with controlled pacing and refined color.', price: 'Luxury and commercial: $350 and up' },
  { icon: 'STILLS', title: 'Aerial Photo Set', desc: 'High-resolution aerial stills and angle options for listing cover images and collateral.', price: 'From $175' },
  { icon: 'PROGRESS', title: 'Construction Progress', desc: 'Monthly or milestone-based aerial documentation with consistent framing for developers.', price: 'Custom quote' },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ServicesWrapper ref={sectionRef}>
      <Container>
        <Header className="reveal">
          <Tag>Services</Tag>
          <Title>Drone Media That <span>Elevates Listings</span></Title>
        </Header>
        <ServicesGrid>
          {services.map((s, i) => (
            <ServiceCard 
              key={s.title} 
              className={`reveal reveal-delay-${i + 1}`}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.setProperty('--hover-x', `${e.offsetX}px`);
                card.style.setProperty('--hover-y', `${e.offsetY}px`);
              }}
            >
              <IconBox>{s.icon}</IconBox>
              <ServiceTitle>{s.title}</ServiceTitle>
              <ServiceDesc>{s.desc}</ServiceDesc>
              <PriceTag>{s.price}</PriceTag>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesWrapper>
  );
};

export default ServicesSection;