import React from 'react';
import styled from 'styled-components';

const SubsWrapper = styled.section`
  padding: 8rem 2rem;
  background: #0a0f1a;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
  span { background: linear-gradient(90deg, #7bdcff, #f1c16b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;

const Subtitle = styled.p`
  color: rgba(255,255,255,0.65);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
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
    border-color: #7bdcff;
    background: rgba(123,220,255,0.08);
  `}

  &:hover {
    border-color: rgba(123,220,255,0.4);
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
  background: linear-gradient(90deg, #7bdcff, #f1c16b);
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
  &::before { content: '•'; color: #f1c16b; margin-right: 0.75rem; font-weight: bold; }
`;

const SubscribeBtn = styled.a`
  display: block;
  width: 100%;
  padding: 1rem;
  background: ${props => props.primary ? 'linear-gradient(135deg, #7bdcff, #f1c16b)' : 'transparent'};
  color: ${props => props.primary ? '#0a0f1a' : '#7bdcff'};
  font-weight: 700;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  border: ${props => props.primary ? 'none' : '2px solid #7bdcff'};
  transition: all 0.2s;
  &:hover { transform: translateY(-2px); }
`;

const packs = [
  { name: 'Standard', price: '$175', desc: 'Essentials for single-family listings and condos.', features: ['Aerial highlight reel (60 to 90 seconds)', '6 to 10 edited aerial stills', 'Delivery in 24 to 48 hours', 'MLS-ready export'], btn: 'Book Standard', primary: false },
  { name: 'Listing Plus', price: '$299', desc: 'Most popular package for featured listings.', features: ['Aerial and ground walkthrough', '2 to 3 minute cinematic edit', 'Social media cutdown', 'Color grade and licensed music', 'One revision round'], btn: 'Book Listing Plus', primary: true, featured: true },
  { name: 'Luxury and Commercial', price: '$350 and up', desc: 'Custom production for high-end or commercial properties.', features: ['Extended aerial coverage', 'Detail shots and skyline context', 'Advanced color grade', 'Custom shot list and planning'], btn: 'Request Luxury Quote', primary: false },
];

const SubsAndPacks = () => (
  <SubsWrapper className="reveal">
    <Container>
      <Title>Pricing <span>Packages</span></Title>
      <Subtitle>Clear pricing for real estate listings in University City and greater Philadelphia. No hidden fees, dependable delivery.</Subtitle>
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
