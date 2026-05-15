import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
`;

const Section = styled.section`
  padding: 9rem 2rem;
  background: 
    linear-gradient(180deg, #0a0f1a 0%, #0d1828 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(0, 212, 255, 0.05), transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 850px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3.5rem;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaqItemWrapper = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(0, 212, 255, 0.2);
    background: rgba(0, 212, 255, 0.03);
  }

  &[data-open="true"] {
    border-color: rgba(0, 212, 255, 0.3);
    background: rgba(0, 212, 255, 0.04);
  }
`;

const FaqQuestion = styled.button`
  width: 100%;
  padding: 1.5rem 1.75rem;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  font-size: 1.05rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-family: 'DM Sans', -apple-system, sans-serif;
  transition: color 0.3s ease;

  &:hover {
    color: #00d4ff;
  }

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: #00d4ff;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &[data-open="true"] svg {
    transform: rotate(180deg);
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;

  ${FaqItemWrapper}[data-open="true"] & {
    background: rgba(0, 212, 255, 0.2);
  }
`;

const FaqAnswerWrapper = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
`;

const FaqAnswer = styled.div`
  padding: 0 1.75rem 1.75rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
  font-size: 1rem;
`;

const faqs = [
  { q: 'Are you FAA licensed and insured?', a: 'Yes. We operate under Part 107 certification and carry commercial liability insurance, so you can book with confidence for any property.' },
  { q: 'What is the typical turnaround time?', a: 'Most listings are delivered within 24 to 48 hours. Rush delivery is available when needed—we understand listing timelines are tight.' },
  { q: 'How do we schedule a shoot?', a: 'Send the property address, target listing date, and any shot preferences. We will confirm availability and share a shot plan within hours.' },
  { q: 'Do packages include editing?', a: 'Every package includes color correction, licensed music, and MLS-ready exports. Raw footage is available on request at no extra cost.' },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add('is-visible');
      }, i * 100);
    });
  }, []);

  return (
    <Section ref={sectionRef} className="reveal">
      <Container>
        <Title>Questions <span>Agents Ask</span></Title>
        <FaqList>
          {faqs.map((f, i) => (
            <FaqItemWrapper 
              key={i} 
              className="faq-item reveal"
              data-open={openIndex === i}
            >
              <FaqQuestion 
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                data-open={openIndex === i}
              >
                {f.q}
                <IconWrapper>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </IconWrapper>
              </FaqQuestion>
              <FaqAnswerWrapper 
                style={{ 
                  maxHeight: openIndex === i ? '300px' : '0',
                  paddingTop: openIndex === i ? '0.5rem' : '0'
                }}
              >
                <FaqAnswer>{f.a}</FaqAnswer>
              </FaqAnswerWrapper>
            </FaqItemWrapper>
          ))}
        </FaqList>
      </Container>
    </Section>
  );
};

export default FaqSection;