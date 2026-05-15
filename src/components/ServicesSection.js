import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesWrapper = styled.section`
  padding: 8rem 2rem; background: #0a0f1a;
`;
const Container = styled.div`
  max-width: 1100px; margin: 0 auto;
`;
const Header = styled.div`
  text-align: center; margin-bottom: 4rem;
`;
const Tag = styled.p`
  color: #8fb3ff; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; font-size: 0.85rem; margin-bottom: 1rem;
`;
const Title = styled.h2`
  font-size: 2.5rem; font-weight: 800; color: #ffffff;
  span { background: linear-gradient(90deg, #7bdcff, #f1c16b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;
const ServicesGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;
`;
const ServiceCard = styled(motion.div)`
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 2.5rem; transition: all 0.3s;
  &:hover { border-color: rgba(123,220,255,0.4); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(123,220,255,0.1); }
`;
const IconBox = styled.div`
  width: 60px; height: 60px;
  background: linear-gradient(135deg, rgba(123,220,255,0.2), rgba(241,193,107,0.08));
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  font-size: 1.75rem; margin-bottom: 1.5rem;
`;
const ServiceTitle = styled.h3`
  font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem;
`;
const ServiceDesc = styled.p`
  color: rgba(255,255,255,0.65); line-height: 1.7; font-size: 0.95rem;
`;
const PriceTag = styled.div`
  margin-top: 1.5rem; padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  color: #7bdcff; font-weight: 700; font-size: 1.05rem;
`;

const services = [
  { icon: '🏠', title: 'Listing Drone Package', desc: 'Cinematic aerial coverage + ground-level establishing shots for MLS, Zillow, and social. Clean, stabilized edits with licensed music.', price: 'Standard: $175–$299' },
  { icon: '🎬', title: 'Walkthrough + Drone', desc: 'Full property story: exterior drone reveal, interior walkthrough, and neighborhood context shots. Perfect for featured listings.', price: 'From $299' },
  { icon: '🏢', title: 'Luxury & Commercial', desc: 'High-end exteriors, rooftops, and architectural details with cinematic pacing and custom color grade.', price: 'Luxury/Commercial: $350+' },
  { icon: '📸', title: 'Aerial Photo Set', desc: 'High-resolution aerial stills and angle options for listing cover images and marketing collateral.', price: 'From $175' },
  { icon: '🏗️', title: 'Construction Progress', desc: 'Monthly or milestone-based aerial documentation with consistent framing for developers.', price: 'Custom quote' },
];

const ServicesSection = () => (
  <ServicesWrapper>
    <Container>
      <Header>
        <Tag>Services</Tag>
        <Title>Drone Video That <span>Elevates Listings</span></Title>
      </Header>
      <ServicesGrid>
        {services.map((s, i) => (
          <ServiceCard key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
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
export default ServicesSection;
