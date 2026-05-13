import React from 'react';
import styled from 'styled-components';
import AboutSection from '../components/AboutSection';
import OurSuccess from '../components/OurSuccess';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0f1a;
`;

const Header = styled.div`
  padding: 10rem 2rem 4rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  span { background: linear-gradient(90deg, #00d4ff, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;

const Subtitle = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const AboutUs = () => (
  <PageWrapper>
    <Header>
      <Title>About <span>SkyEye</span></Title>
      <Subtitle>We are a Philadelphia-based drone videography company focused entirely on real estate. Our mission: make every property we film impossible to ignore.</Subtitle>
    </Header>
    <AboutSection />
    <OurSuccess />
    <Footer />
  </PageWrapper>
);

export default AboutUs;