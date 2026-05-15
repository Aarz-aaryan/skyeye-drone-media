import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 7rem 2rem;
  background: #0a0f1a;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2.5rem;
  span { background: linear-gradient(90deg, #7bdcff, #f1c16b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;

const FaqItem = styled.details`
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px; margin-bottom: 1rem; overflow: hidden;
  summary { padding: 1.25rem; cursor: pointer; font-weight: 600; color: #ffffff; list-style: none; display: flex; justify-content: space-between; align-items: center; &::after { content: '+'; font-size: 1.5rem; color: #7bdcff; } }
  &[open] summary::after { content: '-'; }
`;
const FaqAnswer = styled.div`
  padding: 0 1.25rem 1.25rem; color: rgba(255,255,255,0.6); line-height: 1.7;
`;

const faqs = [
  { q: 'Are you FAA licensed and insured?', a: 'Yes. We operate under Part 107 certification and carry commercial liability insurance.' },
  { q: 'What is the typical turnaround time?', a: 'Most listings are delivered within 24–48 hours. Rush delivery is available if needed.' },
  { q: 'How do we schedule a shoot?', a: 'Send the property address, target listing date, and any shot preferences. We’ll confirm availability and deliver a shot plan.' },
  { q: 'Do packages include editing?', a: 'Every package includes color correction, licensed music, and MLS-ready exports. Raw footage is available on request.' },
];

const FaqSection = () => (
  <Section>
    <Container>
      <Title>FAQs <span>Agents Ask</span></Title>
      {faqs.map(f => (
        <FaqItem key={f.q}>
          <summary>{f.q}</summary>
          <FaqAnswer>{f.a}</FaqAnswer>
        </FaqItem>
      ))}
    </Container>
  </Section>
);
export default FaqSection;
