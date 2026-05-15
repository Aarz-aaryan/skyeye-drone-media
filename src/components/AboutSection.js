import React from 'react';
import styled from 'styled-components';

const AboutSectionWrapper = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #0a0f1a 0%, #1a2035 100%);
`;
const Container = styled.div`
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;
const DroneIcon = styled.div`
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
const FeatureItem = styled.div`
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px; padding: 1.25rem;
`;
const FeatureTitle = styled.h4`
  color: #ffffff; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.25rem;
`;
const FeatureDesc = styled.p`
  color: rgba(255,255,255,0.55); font-size: 0.8rem; line-height: 1.5;
`;

const features = [
  { title: 'Listing-ready edits', desc: 'MLS delivery with clean framing and dependable pacing.' },
  { title: 'Fast turnaround', desc: 'Most projects delivered in 24 to 48 hours.' },
  { title: 'Local expertise', desc: 'University City and greater Philadelphia coverage.' },
  { title: 'Licensed and insured', desc: 'Professional operation with commercial liability coverage.' },
];

const AboutSection = () => (
  <AboutSectionWrapper className="reveal">
    <Container>
      <DroneIcon>
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" alt="Philadelphia skyline and riverfront" />
      </DroneIcon>
      <div>
        <SectionTag>About SkyEye</SectionTag>
        <SectionTitle>Built for <span>Real Estate Marketing</span></SectionTitle>
        <SectionText>SkyEye Drone Media focuses on real estate. We understand listing timelines, MLS requirements, and the level of polish that moves buyers without feeling overproduced.</SectionText>
        <SectionText>We serve University City and greater Philadelphia with consistent visuals, including aerials, walkthroughs, and detail coverage that helps buyers understand a property quickly.</SectionText>
        <FeatureGrid>
          {features.map((f) => (
            <FeatureItem key={f.title}>
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
