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
  width: 100%; max-width: 400px; aspect-ratio: 1;
  background: linear-gradient(135deg, #1a2a4a, #0a1525);
  border-radius: 24px; display: flex; align-items: center;
  justify-content: center; font-size: 8rem; margin: 0 auto;
  border: 1px solid rgba(0,212,255,0.2);
  box-shadow: 0 20px 60px rgba(0,212,255,0.1);
`;
const SectionTag = styled.p`
  color: #00d4ff; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; font-size: 0.85rem; margin-bottom: 1rem;
`;
const SectionTitle = styled.h2`
  font-size: 2.5rem; font-weight: 800; color: #ffffff; margin-bottom: 1.5rem; line-height: 1.2;
  span { background: linear-gradient(90deg, #00d4ff, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
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
  color: rgba(255,255,255,0.5); font-size: 0.8rem; line-height: 1.5;
`;

const features = [
  { emoji: '📹', title: '4K Drone Footage', desc: 'Cinematic quality at 60fps' },
  { emoji: '🌐', title: '360° Cameras', desc: 'Full immersive tours' },
  { emoji: '⚡', title: '24hr Turnaround', desc: 'Fast delivery guaranteed' },
  { emoji: '📍', title: 'Philly Based', desc: 'Locally familiar crew' },
];

const AboutSection = () => (
  <AboutSectionWrapper>
    <Container>
      <DroneIcon initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>🚁</DroneIcon>
      <div>
        <SectionTag>About Us</SectionTag>
        <SectionTitle>We Make Properties <span>Unforgettable</span></SectionTitle>
        <SectionText>SkyEye Drone Media brings cinematic aerial footage to Philadelphia's real estate market. We combine cutting-edge drone technology with an eye for composition — so every property we film looks like a million dollars.</SectionText>
        <SectionText>Whether you're listing a $300K townhome or a $5M commercial property, aerial video is what makes buyers stop scrolling and actually click.</SectionText>
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