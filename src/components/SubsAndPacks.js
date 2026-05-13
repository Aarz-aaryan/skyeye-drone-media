import React from 'react';
import styled from 'styled-components';

const SubsWrapper = styled.section`
  padding: 8rem 2rem;
  background: #0a0f1a;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
  span { background: linear-gradient(90deg, #00d4ff, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const PricingCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s;

  ${props => props.featured && `
    border-color: #00d4ff;
    background: rgba(0,212,255,0.05);
  `}

  &:hover {
    border-color: rgba(0,212,255,0.4);
  }
`;

const PackName = styled.h3`
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const PackPrice = styled.div`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(90deg, #00d4ff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25rem;
`;

const PackPeriod = styled.span`
  color: rgba(255,255,255,0.4);
  font-size: 0.9rem;
`;

const PackDesc = styled.p`
  color: rgba(255,255,255,0.6);
  margin: 1.5rem 0;
  font-size: 0.95rem;
`;

const PackFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;
`;

const PackFeature = styled.li`
  color: rgba(255,255,255,0.7);
  padding: 0.5rem 0;
  font-size: 0.9rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  &::before { content: '✓'; color: #00ff88; margin-right: 0.75rem; font-weight: bold; }
`;

const SubscribeBtn = styled.a`
  display: block;
  width: 100%;
  padding: 1rem;
  background: ${props => props.primary ? 'linear-gradient(135deg, #00d4ff, #00ff88)' : 'transparent'};
  color: ${props => props.primary ? '#0a0f1a' : '#00d4ff'};
  font-weight: 700;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  border: ${props => props.primary ? 'none' : '2px solid #00d4ff'};
  transition: all 0.2s;
  &:hover { transform: translateY(-2px); }
`;

const packs = [
  { name: 'Starter', price: '$199', desc: 'Perfect for single-family home listings', features: ['1 aerial video (2-3 min)', 'Ground-level walkthrough', '24hr turnaround', '2 revision rounds', 'Social media clip'], btn: 'Get Started', primary: false },
  { name: 'Professional', price: '$399', desc: 'For agents serious about listings', features: ['Full aerial coverage', '360° camera tour', '48hr turnaround', 'Unlimited revisions', 'Raw footage included', 'Zillow-ready format'], btn: 'Get Started', primary: true, featured: true },
  { name: 'Commercial', price: '$799', desc: 'For commercial and luxury properties', features: ['Cinematic aerial package', 'Multi-property coverage', 'Same-day turnaround option', 'Full raw footage', 'HDR color grading', '360° virtual tour'], btn: 'Contact Us', primary: false },
];

const SubsAndPacks = () => (
  <SubsWrapper>
    <Container>
      <Title>Pricing <span>Packages</span></Title>
      <CardsGrid>
        {packs.map(p => (
          <PricingCard key={p.name} featured={p.featured}>
            <PackName>{p.name}</PackName>
            <PackPrice>{p.price}</PackPrice>
            <PackPeriod>per project</PackPeriod>
            <PackDesc>{p.desc}</PackDesc>
            <PackFeatures>
              {p.features.map(f => <PackFeature key={f}>{f}</PackFeature>)}
            </PackFeatures>
            <SubscribeBtn href="/contact" primary={p.primary}>{p.btn}</SubscribeBtn>
          </PricingCard>
        ))}
      </CardsGrid>
    </Container>
  </SubsWrapper>
);

export default SubsAndPacks;