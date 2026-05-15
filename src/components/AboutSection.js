import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSectionWrapper = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #0a0f1a 0%, #1a2035 100%);
`;
const Container = styled.div`
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;
const DroneIcon = styled(motion.div)`
  width: 100%; max-width: 420px; aspect-ratio: 4/5;
  background: linear-gradient(135deg, #1a2a4a, #0a1525);
  border-radius: 24px; display: flex; align-items: center;
  justify-content: center; margin: 0 auto;
  border: 1px solid rgba(123,220,255,0.2);
  box-shadow: 0 20px 60px rgba(123,220,255,0.1);
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const SectionTag = styled.p`
  color: #8fb3ff; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; font-size: 0.85rem; margin-bottom: 1rem;
`;
const SectionTitle = styled.h2`
  font-size: 2.5rem; font-weight: 800; color: #ffffff; margin-bottom: 1.5rem; line-height: 1.2;
  span { background: linear-gradient(90deg, #7bdcff, #f1c16b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;
const SectionText = styled.p`
  color: rgba(255,255,255,0.7); line-height: 1.8; font-size: 1.05rem; margin-bottom: 1.5rem;
`;
const FeatureGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
`;
const FeatureItem = styled(motion.div)`
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px; padding: 1.25rem;
`;
const FeatureEmoji = styled.div`
  font-size: 1.5rem; margin-bottom: 0.5rem;
`;
const FeatureTitle = styled.h4`
  color: #ffffff; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.25rem;
`;
const FeatureDesc = styled.p`
  color: rgba(255,255,255,0.55); font-size: 0.8rem; line-height: 1.5;
`;

const features = [
  { emoji: '🎥', title: 'Listing-first edits', desc: 'MLS-ready delivery with clean framing and pacing.' },
  { emoji: '⚡', title: 'Fast turnaround', desc: 'Most projects delivered in 24–48 hours.' },
  { emoji: '📍', title: 'Local expertise', desc: 'University City + Philly neighborhoods.' },
  { emoji: '✅', title: 'Licensed + insured', desc: 'Professional operation and compliance.' },
];

const AboutSection = () => (
  <AboutSectionWrapper>
    <Container>
      <DroneIcon initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" alt="Philadelphia skyline and riverfront" />
      </DroneIcon>
      <div>
        <SectionTag>About SkyEye</SectionTag>
        <SectionTitle>Designed for <span>Real Estate Marketing</span></SectionTitle>
        <SectionText>SkyEye Drone Media focuses on real estate. That means we understand listing timelines, what agents need for MLS, and how to make properties feel premium without overproducing.</SectionText>
        <SectionText>We serve University City and greater Philadelphia with consistent, professional visuals — aerials, walkthroughs, and detail coverage that helps buyers understand a property fast.</SectionText>
        <FeatureGrid>
          {features.map((f, i) => (
            <FeatureItem key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <FeatureEmoji>{f.emoji}</FeatureEmoji>
              <FeatureTitle>{f.title}</FeatureTitle>
              <FeatureDesc>{f.desc}</FeatureDesc>
            </FeatureItem>
          ))}
        </FeatureGrid>
      </div>
    </Container>
  </AboutSectionWrapper>
);
export default AboutSection;
