import React from 'react';
import styled from 'styled-components';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import OurSuccess from '../components/OurSuccess';
import FaqSection from '../components/FaqSection';
import SubsAndPacks from '../components/SubsAndPacks';
import Footer from '../components/Footer';

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: radial-gradient(1200px 600px at 20% 20%, rgba(78,124,255,0.18), transparent 60%),
    linear-gradient(180deg, #0a0f1a 0%, #0f1829 100%);
  padding: 7rem 2rem 5rem;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 900px;
  z-index: 1;
`;

const HeroTag = styled.p`
  color: #8fb3ff;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.05;
  margin-bottom: 1.25rem;

  span {
    background: linear-gradient(90deg, #7bdcff, #f1c16b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSub = styled.p`
  color: rgba(255,255,255,0.68);
  font-size: 1.15rem;
  line-height: 1.75;
  margin-bottom: 2.25rem;
  max-width: 720px;
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
  background: linear-gradient(135deg, #7bdcff, #f1c16b);
  color: #0a0f1a;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(123,220,255,0.25);
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
    border-color: #7bdcff;
    color: #7bdcff;
  }
`;

const HeroMeta = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  color: rgba(255,255,255,0.6);
  font-size: 0.95rem;
`;

const MetaItem = styled.div`
  padding: 0.9rem 1rem;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
`;

const Section = styled.section`
  padding: 7rem 2rem;
  background: #0a0f1a;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const SectionTag = styled.p`
  color: #8fb3ff;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  span {
    background: linear-gradient(90deg, #7bdcff, #f1c16b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SectionSub = styled.p`
  color: rgba(255,255,255,0.65);
  font-size: 1.05rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const PortfolioCard = styled.div`
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
`;

const SplitVisual = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 160px;
`;

const SplitSide = styled.div`
  background: ${props => props.variant === 'before'
    ? 'linear-gradient(135deg, #1c2435, #0f1524)'
    : 'linear-gradient(135deg, #243a5c, #3a2c17)'};
  position: relative;
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SplitLabel = styled.span`
  position: absolute;
  bottom: 0.6rem;
  left: 0.7rem;
  font-size: 0.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
`;

const CardBody = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
`;

const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
`;

const CardMeta = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Portfolio = [
  { title: 'University City Townhome', detail: 'Aerial reveal and exterior coverage delivered MLS-ready within 24 hours.' },
  { title: 'Center City Office', detail: 'Rooftop sweep and skyline context shots for a commercial listing.' },
  { title: 'West Philly New Build', detail: 'Progress capture and listing launch reel for the developer.' },
  { title: 'Historic Rowhome', detail: 'Ground and drone pairing to show the block and walkability.' },
  { title: 'Campus Adjacent Condo', detail: 'Highlighting proximity to Penn and Drexel with a focused aerial approach.' },
  { title: 'Luxury Renovation', detail: 'Sunset exterior and establishing shots with controlled pacing.' }
];

const Home = () => {
  return (
    <>
      <HeroWrapper className="reveal">
        <HeroContent>
          <HeroTag>University City, Philadelphia</HeroTag>
          <HeroTitle>
            Drone Media That<br />
            <span>Elevates Property Marketing</span>
          </HeroTitle>
          <HeroSub>
            SkyEye Drone Media creates crisp aerial footage and listing-ready edits for agents, brokers, and developers.
            Expect clean composition, reliable turnaround, and visuals that help buyers focus on the property.
          </HeroSub>
          <CTAGroup>
            <PrimaryBtn href="/contact">Schedule a Shoot</PrimaryBtn>
            <SecondaryBtn href="/work">View Portfolio</SecondaryBtn>
          </CTAGroup>
          <HeroMeta>
            <MetaItem>Standard packages: $175 to $299</MetaItem>
            <MetaItem>Luxury and commercial: $350 and up</MetaItem>
            <MetaItem>Delivery in 24 to 48 hours</MetaItem>
            <MetaItem>Serving University City and greater Philadelphia</MetaItem>
          </HeroMeta>
        </HeroContent>
      </HeroWrapper>

      <Section className="reveal">
        <Container>
          <SectionHeader>
            <SectionTag>Portfolio Preview</SectionTag>
            <SectionTitle>Before and After <span>Listing Impact</span></SectionTitle>
            <SectionSub>
              We focus on steady aerials, balanced color, and framing that makes each property feel premium.
              Here's a look at the style we deliver.
            </SectionSub>
          </SectionHeader>
          <PortfolioGrid>
            {Portfolio.map((p) => (
              <PortfolioCard key={p.title}>
                <SplitVisual>
                  <SplitSide variant="before">
                    Before
                    <SplitLabel>Before</SplitLabel>
                  </SplitSide>
                  <SplitSide variant="after">
                    After
                    <SplitLabel>After</SplitLabel>
                  </SplitSide>
                </SplitVisual>
                <CardBody>
                  <CardTitle>{p.title}</CardTitle>
                  <CardMeta>{p.detail}</CardMeta>
                </CardBody>
              </PortfolioCard>
            ))}
          </PortfolioGrid>
        </Container>
      </Section>

      <ServicesSection />
      <AboutSection />
      <OurSuccess />
      <SubsAndPacks />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Home;
