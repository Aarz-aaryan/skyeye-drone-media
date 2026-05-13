import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SuccessWrapper = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0f1a, #1a2035);
`;
const Container = styled.div`
  max-width: 900px; margin: 0 auto; text-align: center;
`;
const Title = styled.h2`
  font-size: 2.5rem; font-weight: 800; color: #ffffff; margin-bottom: 3rem;
  span { background: linear-gradient(90deg, #00d4ff, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;
const StatsGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
`;
const StatBox = styled(motion.div)`padding: 2rem;`;
const StatNumber = styled.div`
  font-size: 3rem; font-weight: 900;
  background: linear-gradient(90deg, #00d4ff, #00ff88);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; margin-bottom: 0.5rem;
`;
const StatLabel = styled.div`
  color: rgba(255,255,255,0.6); font-size: 0.9rem;
  text-transform: uppercase; letter-spacing: 1px;
`;

const stats = [
  { number: '50+', label: 'Properties Filmed' },
  { number: '100%', label: '5-Star Reviews' },
  { number: '24hr', label: 'Avg Turnaround' },
  { number: '5★', label: 'Client Rating' },
];

const OurSuccess = () => (
  <SuccessWrapper>
    <Container>
      <Title>Our <span>Results</span></Title>
      <StatsGrid>
        {stats.map((s, i) => (
          <StatBox key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <StatNumber>{s.number}</StatNumber>
            <StatLabel>{s.label}</StatLabel>
          </StatBox>
        ))}
      </StatsGrid>
    </Container>
  </SuccessWrapper>
);
export default OurSuccess;