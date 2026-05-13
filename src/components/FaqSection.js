import React from 'react';
import styled from 'styled-components';

const FaqItem = styled.details`
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px; margin-bottom: 1rem; overflow: hidden;
  summary { padding: 1.25rem; cursor: pointer; font-weight: 600; color: #ffffff; list-style: none; display: flex; justify-content: space-between; align-items: center; &::after { content: '+'; font-size: 1.5rem; color: #00d4ff; } }
  &[open] summary::after { content: '-'; }
`;
const FaqAnswer = styled.div`
  padding: 0 1.25rem 1.25rem; color: rgba(255,255,255,0.6); line-height: 1.7;
`;

const faqs = [
  { q: 'Do you have FAA approval to fly drones commercially?', a: 'Yes, we are a fully FAA-compliant commercial drone operator with Part 107 certification and insurance.' },
  { q: 'What is your turnaround time?', a: 'Standard turnaround is 24-48 hours. Rush same-day delivery available for an additional fee.' },
  { q: 'What areas do you serve?', a: 'University City, Center City, West Philadelphia, Fishtown, Manayunk, and Main Line. Other areas on request.' },
  { q: 'Do you provide raw footage or edited video?', a: 'All packages include fully edited video with color grading, music, and text overlays. Raw footage available on request.' },
];

const FaqSection = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
    {faqs.map(f => (
      <FaqItem key={f.q}>
        <summary>{f.q}</summary>
        <FaqAnswer>{f.a}</FaqAnswer>
      </FaqItem>
    ))}
  </div>
);
export default FaqSection;