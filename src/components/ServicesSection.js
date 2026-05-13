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
  color: #00d4ff; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; font-size: 0.85rem; margin-bottom: 1rem;
`;
const Title = styled.h2`
  font-size: 2.5rem; font-weight: 800; color: #ffffff;
  span { background: linear-gradient(90deg, #00d4ff, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;
const ServicesGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;
`;
const ServiceCard = styled(motion.div)`
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 2.5rem; transition: all 0.3s;
  &:hover { border-color: rgba(0,212,255,0.4); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,212,255,0.1); }
`;
const IconBox = styled.div`
  width: 60px; height: 60px;
  background: linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,255,136,0.1));
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  font-size: 1.75rem; margin-bottom: 1.5rem;
`;
const ServiceTitle = styled.h3`
  font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem;
`;
const ServiceDesc = styled.p`
  color: rgba(255,255,255,0.6); line-height: 1.7; font-size: 0.95rem;
`;
const PriceTag = styled.div`
  margin-top: 1.5rem; padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  color: #00d4ff; font-weight: 700; font-size: 1.1rem;
`;

const services = [
  { icon: '🏠', title: 'Residential Listing Video', desc: 'Cinematic aerial footage + ground tour for single-family homes and townhomes. Perfect for MLS listings and social media.', price: 'Starting at $199' },
  { icon: '🏢', title: 'Commercial Property Video', desc: 'Full aerial coverage of office buildings, retail centers, and multi-family complexes. Include 360° footage and rooftop shots.', price: 'Starting at $399' },
  { icon: '🌐', title: '360° Virtual Tour', desc: 'Immersive 360° camera footage for property walkthroughs. Compatible with Zillow, Realtor.com, and major listing platforms.', price: 'Starting at $149' },
  { icon: '📅', title: 'Construction Timelapse', desc: 'Ongoing drone monitoring of construction sites with monthly compiled video. Great for investors and developer marketing.', price: 'Starting at $299/mo' },
];

const ServicesSection = () => (
  <ServicesWrapper>
    <Container>
      <Header>
        <Tag>Our Services</Tag>
        <Title>Drone Video That <span>Sells Properties</span></Title>
      </Header>
      <ServicesGrid>
        {services.map((s, i) => (
          <ServiceCard key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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