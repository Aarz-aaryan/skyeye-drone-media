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
  background: linear-gradient(90deg, #7bdcff, #f1c16b);
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
    border-color: rgba(123,220,255,0.4);
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
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const WorkInfo = styled.div`
  padding: 1.5rem;
`;

const WorkType = styled.span`
  color: #8fb3ff;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const WorkTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #ffffff;
`;

const WorkDesc = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const CTA = styled.div`
  margin-top: 3rem;
  text-align: center;
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  color: rgba(255,255,255,0.6);
`;

const projects = [
  { title: 'University City Townhome', type: 'Residential', desc: 'Aerial reveal and exterior coverage delivered MLS-ready within 24 hours.', image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Center City Office Building', type: 'Commercial', desc: 'Rooftop sweep and skyline context shots for leasing materials.', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80' },
  { title: 'West Philly New Construction', type: 'Development', desc: 'Progress capture and listing launch reel for the developer.', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Historic Rowhome', type: 'Residential', desc: 'Neighborhood context and walkability angles for buyer confidence.', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Luxury Renovation', type: 'Luxury', desc: 'Sunset exterior and establishing shots with controlled pacing.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Mixed-Use Retail', type: 'Commercial', desc: 'Street-level and aerial sweep to show traffic and access.', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80' },
];

const OurWork = () => (
  <PageWrapper>
    <Container>
      <Title className="reveal">Portfolio</Title>
      <Subtitle className="reveal">Recent-style work from listings across University City, Center City, and greater Philadelphia.</Subtitle>
      <WorkGrid className="reveal">
        {projects.map(p => (
          <WorkCard key={p.title}>
            <WorkImage><img src={p.image} alt={p.title} loading="lazy" /></WorkImage>
            <WorkInfo>
              <WorkType>{p.type}</WorkType>
              <WorkTitle>{p.title}</WorkTitle>
              <WorkDesc>{p.desc}</WorkDesc>
            </WorkInfo>
          </WorkCard>
        ))}
      </WorkGrid>
      <CTA className="reveal">
        Want to see full video deliverables? Email info@skyeyeaerial.com for the full portfolio link.
      </CTA>
    </Container>
    <Footer />
  </PageWrapper>
);

export default OurWork;
