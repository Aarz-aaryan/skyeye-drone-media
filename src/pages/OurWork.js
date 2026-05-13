import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0f1a;
  padding: 8rem 2rem 4rem;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #00d4ff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const WorkCard = styled.div`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0,212,255,0.4);
  }
`;

const WorkImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #1a2035, #2a3050);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const WorkInfo = styled.div`
  padding: 1.5rem;
`;

const WorkType = styled.span`
  color: #00d4ff;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const WorkTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const WorkDesc = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ComingSoon = styled.div`
  text-align: center;
  padding: 4rem;
  background: rgba(255,255,255,0.03);
  border: 1px dashed rgba(255,255,255,0.15);
  border-radius: 16px;
  color: rgba(255,255,255,0.4);
`;

const projects = [
  { title: 'University City Townhome', type: 'Residential', desc: 'Aerial sweep + interior tour. Property sold 3 weeks faster.', icon: '🏠' },
  { title: 'Center City Office Building', type: 'Commercial', desc: 'Full perimeter aerial + 360° rooftop footage.', icon: '🏢' },
  { title: 'West Philly New Construction', type: 'Development', desc: 'Monthly timelapse documenting construction progress.', icon: '🌆' },
];

const OurWork = () => (
  <PageWrapper>
    <Container>
      <Title>Our Work</Title>
      <Subtitle>Aerial drone footage from properties across Philadelphia</Subtitle>
      <WorkGrid>
        {projects.map(p => (
          <WorkCard key={p.title}>
            <WorkImage>{p.icon}</WorkImage>
            <WorkInfo>
              <WorkType>{p.type}</WorkType>
              <WorkTitle>{p.title}</WorkTitle>
              <WorkDesc>{p.desc}</WorkDesc>
            </WorkInfo>
          </WorkCard>
        ))}
        <ComingSoon>
          📹 More projects coming soon — contact us to see our portfolio!
        </ComingSoon>
      </WorkGrid>
    </Container>
    <Footer />
  </PageWrapper>
);

export default OurWork;