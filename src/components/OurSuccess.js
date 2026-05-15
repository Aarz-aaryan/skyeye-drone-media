import React from 'react';
import styled from 'styled-components';

const SuccessWrapper = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0f1a, #1a2035);
`;
const Container = styled.div`
  max-width: 900px; margin: 0 auto; text-align: center;
`;
const Title = styled.h2`
  font-size: 2.5rem; font-weight: 800; color: #ffffff; margin-bottom: 3rem;
  span { background: linear-gradient(90deg, #7bdcff, #f1c16b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;
const StatsGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
`;
const StatBox = styled.div`padding: 2rem;`;
const StatNumber = styled.div`
  font-size: 2.4rem; font-weight: 800;
  background: linear-gradient(90deg, #7bdcff, #f1c16b);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; margin-bottom: 0.5rem;
`;
const StatLabel = styled.div`
  color: rgba(255,255,255,0.6); font-size: 0.9rem;
  text-transform: uppercase; letter-spacing: 1px;
`;

const stats = [
  { number: '24 to 48 hr', label: 'Turnaround' },
  { number: '4K', label: 'Video delivery' },
  { number: 'University City', label: 'Local focus' },
  { number: 'MLS ready', label: 'Formats' },
];

const OurSuccess = () => (
  <SuccessWrapper className="reveal">
    <Container>
      <Title>What You Can <span>Expect</span></Title>
      <StatsGrid>
        {stats.map((s) => (
          <StatBox key={s.label}>
            <StatNumber>{s.number}</StatNumber>
            <StatLabel>{s.label}</StatLabel>
          </StatBox>
        ))}
      </StatsGrid>
    </Container>
  </SuccessWrapper>
);
export default OurSuccess;
