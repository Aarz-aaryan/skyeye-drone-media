import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(0.5deg); }
`;

const AboutSectionWrapper = styled.section`
  padding: 10rem 2rem;
  background: 
    linear-gradient(180deg, #0a0f1a 0%, #0d1828 50%, #0a0f1a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    right: -20%;
    top: 50%;
    transform: translateY(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.05), transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const VisualSide = styled.div`
  position: relative;
  transform: translateX(${props => props.$scrollY * 0.08}px);
`;

const DroneIcon = styled.div`
  width: 100%;
  max-width: 480px;
  aspect-ratio: 4/5;
  background: linear-gradient(135deg, #141e30, #0a1320);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid rgba(0, 212, 255, 0.15);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.4),
    0 0 60px rgba(0, 212, 255, 0.08);
  overflow: hidden;
  position: relative;
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(180deg, rgba(0, 212, 255, 0.1) 0%, transparent 40%),
      linear-gradient(360deg, rgba(0, 255, 136, 0.05) 100%, transparent 60%);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%);
    z-index: 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }
`;

const VisualBadge = styled.div`
  position: absolute;
  bottom: -1.5rem;
  right: -1rem;
  background: rgba(0, 212, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  z-index: 3;

  @media (max-width: 900px) {
    right: 1rem;
    bottom: -1rem;
  }
`;

const BadgeTitle = styled.div`
  color: #00d4ff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`;

const BadgeValue = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ContentSide = styled.div`
  transform: translateX(${(props) => -props.$scrollY * 0.05}px);
`;

const SectionTag = styled.p`
  color: #00d4ff;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 1.25rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.75rem;
  line-height: 1.15;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionText = styled.p`
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.85;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 2rem;
`;

const FeatureItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(0, 212, 255, 0.25);
    background: rgba(0, 212, 255, 0.04);
    transform: translateY(-4px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureTitle = styled.h4`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

const FeatureDesc = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.85rem;
  line-height: 1.55;
`;

const features = [
  { title: 'Listing-ready edits', desc: 'MLS delivery with clean framing and dependable pacing.' },
  { title: 'Fast turnaround', desc: 'Most projects delivered in 24 to 48 hours.' },
  { title: 'Local expertise', desc: 'University City and greater Philadelphia coverage.' },
  { title: 'Licensed and insured', desc: 'Professional operation with commercial liability coverage.' },
];

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    document.querySelectorAll('.reveal, .slide-left, .slide-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AboutSectionWrapper className="reveal">
      <Container>
        <VisualSide className="slide-left" $scrollY={scrollY}>
          <DroneIcon>
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" alt="Philadelphia skyline and riverfront" />
          </DroneIcon>
          <VisualBadge>
            <BadgeTitle>Turnaround</BadgeTitle>
            <BadgeValue>24-48 HR</BadgeValue>
          </VisualBadge>
        </VisualSide>
        <ContentSide className="slide-right" $scrollY={scrollY}>
          <SectionTag>About SkyEye</SectionTag>
          <SectionTitle>Built for <span>Real Estate Marketing</span></SectionTitle>
          <SectionText>SkyEye Drone Media focuses on real estate. We understand listing timelines, MLS requirements, and the level of polish that moves buyers without feeling overproduced.</SectionText>
          <SectionText>We serve University City and greater Philadelphia with consistent visuals, including aerials, walkthroughs, and detail coverage that helps buyers understand a property quickly.</SectionText>
          <FeatureGrid>
            {features.map((f) => (
              <FeatureItem key={f.title} className="reveal">
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </ContentSide>
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutSection;