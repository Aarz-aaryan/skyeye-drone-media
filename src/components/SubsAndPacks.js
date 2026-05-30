import React, { useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SubsWrapper = styled.section`
  padding: 10rem 2rem;
  background: 
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 212, 255, 0.06), transparent 60%),
    #0a0f1a;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 400px;
    background: linear-gradient(to top, rgba(0, 212, 255, 0.03), transparent);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  max-width: 650px;
  margin: 0 auto 4rem;
  line-height: 1.75;
  font-size: 1.1rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.75rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: ${props => props.featured 
      ? 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)'
      : 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: ${props => props.featured ? 1 : 0.5};
    transition: opacity 0.4s ease;
  }

  ${props => props.featured && `
    &::after {
      content: 'Best Value';
      position: absolute;
      top: 1.25rem;
      right: -2rem;
      background: linear-gradient(135deg, #f1c16b, #ff9f43);
      color: #0a0f1a;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 0.4rem 2.5rem;
      transform: rotate(45deg);
      box-shadow: 0 4px 20px rgba(241, 193, 107, 0.4);
    }
  `}

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.3),
      0 0 50px rgba(0, 212, 255, 0.1);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const PackName = styled.h3`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
  font-weight: 700;
`;

const PackPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.35rem;
`;

const WasPrice = styled.span`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.35);
  text-decoration: line-through;
  font-weight: 500;
`;

const PackPrice = styled.div`
  font-size: 3.25rem;
  font-weight: 800;
  background: ${props => props.featured
    ? 'linear-gradient(135deg, #00d4ff, #00ff88)'
    : 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: ${props => (props.featured ? css`${shimmer} 4s linear infinite` : 'none')};
`;

const SaveBadge = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  border-radius: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
`;

const BestValueBadge = styled.div`
  position: absolute;
  top: 1.25rem;
  left: -2rem;
  background: linear-gradient(135deg, #f1c16b 0%, #ff9f43 100%);
  color: #0a0f1a;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.4rem 2.5rem;
  transform: rotate(-45deg);
  box-shadow: 0 4px 20px rgba(241, 193, 107, 0.4);
`;

const PackPeriod = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
`;

const PackDesc = styled.p`
  color: rgba(255, 255, 255, 0.6);
  margin: 1.75rem 0;
  font-size: 0.95rem;
  line-height: 1.65;
`;

const PackFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
  text-align: left;
`;

const PackFeature = styled.li`
  color: rgba(255, 255, 255, 0.75);
  padding: 0.75rem 0;
  font-size: 0.9rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;

  &::before {
    content: '→';
    color: #00d4ff;
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
`;

const SubscribeBtn = styled.a`
  display: block;
  width: 100%;
  padding: 1.1rem;
  background: ${props => props.primary 
    ? 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)' 
    : 'transparent'};
  color: ${props => props.primary ? '#0a0f1a' : '#00d4ff'};
  font-weight: 700;
  border-radius: 14px;
  text-decoration: none;
  text-align: center;
  border: ${props => props.primary ? 'none' : '2px solid rgba(0, 212, 255, 0.4)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 212, 255, 0.25);
    border-color: #00d4ff;
  }

  &:hover::before {
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const packs = [
  { 
    name: 'Standard', 
    wasPrice: '$175',
    price: '$149',
    savePercent: 15,
    desc: 'Essentials for single-family listings and condos.', 
    features: [
      'Aerial highlight reel (60 to 90 seconds)',
      '6 to 10 edited aerial stills',
      'Delivery in 24 to 48 hours',
      'MLS-ready export'
    ], 
    btn: 'Book Standard', 
    primary: false,
    featured: false 
  },
  { 
    name: 'Listing Plus', 
    wasPrice: '$299',
    price: '$249',
    savePercent: 17,
    desc: 'Most popular package for featured listings.', 
    features: [
      'Aerial and ground walkthrough',
      '2 to 3 minute cinematic edit',
      'Social media cutdown',
      'Color grade and licensed music',
      'One revision round'
    ], 
    btn: 'Book Listing Plus', 
    primary: true,
    featured: true 
  },
  { 
    name: 'Luxury & Commercial', 
    wasPrice: '$350',
    price: '$299',
    savePercent: 15,
    desc: 'Custom production for high-end or commercial properties.', 
    features: [
      'Extended aerial coverage',
      'Detail shots and skyline context',
      'Advanced color grade',
      'Custom shot list and planning'
    ], 
    btn: 'Request Quote', 
    primary: false,
    featured: false 
  },
];

const SubsAndPacks = () => {
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
    <SubsWrapper ref={sectionRef} className="reveal">
      <Container>
        <Title>Pricing <span>Packages</span></Title>
        <Subtitle>Clear pricing for real estate listings in University City and greater Philadelphia. No hidden fees, dependable delivery.</Subtitle>
        <CardsGrid>
          {packs.map((p, i) => (
            <PricingCard 
              key={p.name} 
              featured={p.featured}
              className={`reveal reveal-delay-${i + 1}`}
            >
              {p.featured && <BestValueBadge>Best Value</BestValueBadge>}
              <PackName>{p.name}</PackName>
              <PackPriceWrapper>
                <WasPrice>Was {p.wasPrice}</WasPrice>
                <PackPrice featured={p.featured}>{p.price}</PackPrice>
              </PackPriceWrapper>
              <SaveBadge>Save {p.savePercent}%</SaveBadge>
              <PackPeriod>per project</PackPeriod>
              <PackDesc>{p.desc}</PackDesc>
              <PackFeatures>
                {p.features.map(f => <PackFeature key={f}>{f}</PackFeature>)}
              </PackFeatures>
              <SubscribeBtn href="/contact" primary={p.primary}>
                <span>{p.btn}</span>
              </SubscribeBtn>
            </PricingCard>
          ))}
        </CardsGrid>
      </Container>
    </SubsWrapper>
  );
};

export default SubsAndPacks;
