import React from 'react';
import styled from 'styled-components';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import OurSuccess from '../components/OurSuccess';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #0a0f1a 0%, #0f1829 100%);
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
`;

const HeroTag = styled.p`
  color: #00d4ff;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  span {
    background: linear-gradient(90deg, #00d4ff, #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSub = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #00d4ff, #00ff88);
  color: #0a0f1a;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0,212,255,0.4);
  }
`;

const SecondaryBtn = styled.a`
  padding: 1rem 2.5rem;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.2s;

  &:hover {
    border-color: #00d4ff;
    color: #00d4ff;
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.3);
  font-size: 0.8rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }
`;

const Home = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContent>
          <HeroTag>Aerial Videography — University City, Philadelphia</HeroTag>
          <HeroTitle>
            We Make Properties<br/><span>Unforgettable</span>
          </HeroTitle>
          <HeroSub>
            Cinematic drone footage and 360° tours that make buyers stop scrolling —
            and actually click on your listing.
          </HeroSub>
          <CTAGroup>
            <PrimaryBtn href="/contact">Get a Free Quote</PrimaryBtn>
            <SecondaryBtn href="/work">See Our Work</SecondaryBtn>
          </CTAGroup>
        </HeroContent>
        <ScrollHint>↓ scroll</ScrollHint>
      </HeroWrapper>
      <ServicesSection />
      <AboutSection />
      <OurSuccess />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Home;