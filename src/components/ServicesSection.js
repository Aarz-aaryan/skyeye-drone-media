import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

// ============ ANIMATIONS ============
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
`;

const floatSlow = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-15px) translateX(10px); }
  66% { transform: translateY(-8px) translateX(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1); }
  50% { box-shadow: 0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.2); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const drift = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(30px, -20px); }
  50% { transform: translate(10px, -40px); }
  75% { transform: translate(-20px, -20px); }
  100% { transform: translate(0, 0); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ============ STYLED COMPONENTS ============
const ServicesWrapper = styled.section`
  padding: 10rem 2rem;
  background: linear-gradient(180deg, #060912 0%, #0a1020 40%, #0d1525 60%, #080b18 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

// Animated background mesh
const BackgroundMesh = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(ellipse 80% 50% at 20% 30%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 80% 70%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse 50% 30% at 50% 50%, rgba(99, 102, 241, 0.04) 0%, transparent 50%);
    animation: ${drift} 20s ease-in-out infinite;
  }

&::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
  }
`;

// Floating orbs
const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;

  ${({ $size, $top, $left, $color, $delay, $duration }) => css`
    width: ${$size}px;
    height: ${$size}px;
    top: ${$top}%;
    left: ${$left}%;
    background: ${$color};
    animation: ${floatSlow} ${$duration}s ease-in-out infinite;
    animation-delay: ${$delay}s;
  `}
`;

// Floating particles
const Particle = styled.div`
  position: absolute;
  width: ${props => props.$size || 4}px;
  height: ${props => props.$size || 4}px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.8), transparent);
  border-radius: 50%;
  pointer-events: none;
  animation: ${float} ${props => props.$duration || 6}s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;

  ${({ $top, $left }) => css`
    top: ${$top}%;
    left: ${$left}%;
  `}
`;

// Drone-themed grid lines
const GridLines = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Tag = styled.p`
  color: #00d4ff;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;

&::before, &::after {
    content: '';
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5));
  }

  &::after {
    background: linear-gradient(90deg, rgba(0, 212, 255, 0.5), transparent);
  }
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #00ff88 50%, #00d4ff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 3s linear infinite;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

// Premium glassmorphism card
const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: ${props => props.$delay || 0}s;
  animation-fill-mode: both;

&::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 28px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.4), rgba(0, 255, 136, 0.15), rgba(99, 102, 241, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

&::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.6), rgba(0, 255, 136, 0.3), transparent);
    transform: scaleX(0);
    transition: transform 0.6s ease;
  }

&:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: rgba(0, 212, 255, 0.25);
    box-shadow: 
      0 40px 80px rgba(0, 0, 0, 0.4),
      0 0 80px rgba(0, 212, 255, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
 background: rgba(255, 255, 255, 0.05);
  }

&:hover::before {
    opacity: 1;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

// Card background glow
const CardGlow = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, ${props => props.$color || 'rgba(0, 212, 255, 0.15)'} 0%, transparent 70%);
  top: -50px;
  right: -50px;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;

  ${ServiceCard}:hover & {
    opacity: 1;
  }
`;

// Glowing icon container
const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  margin-bottom: 1.75rem;

&::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 22px;
    background: linear-gradient(135deg, ${props => props.$gradient || 'rgba(0, 212, 255, 0.2)'}, rgba(0, 255, 136, 0.08));
    border: 1px solid ${props => props.$borderColor || 'rgba(0, 212, 255, 0.3)'};
    animation: ${pulseGlow} 3s ease-in-out infinite;
    animation-delay: ${props => props.$delay || '0s'};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  svg {
    width: 40px;
    height: 40px;
    filter: drop-shadow(0 0 8px ${props => props.$glowColor || 'rgba(0, 212, 255, 0.6)'});
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.85rem;
  letter-spacing: -0.01em;
  position: relative;
 z-index: 1;
`;

const ServiceDesc = styled.p`
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  font-size: 0.95rem;
  position: relative;
  z-index: 1;
`;

const PriceTag = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #00d4ff;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 1;

&::before {
    content: '';
    width: 24px;
    height: 2px;
    background: linear-gradient(90deg, #00d4ff, #00ff88);
    border-radius: 1px;
  }
`;

// ============ SVG ICONS ============
const DroneIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8L12 16H6L12 24L6 32H12L24 40L36 32H42L36 24L42 16H36L24 8Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="2"/>
    <circle cx="24" cy="24" r="2" fill={color}/>
    <path d="M24 4V8M24 40V44M4 16L8 16M40 16L44 16M4 32L8 32M40 32L44 32" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const TourIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="32" height="20" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M8 28H40" stroke={color} strokeWidth="2"/>
    <path d="M16 28V40M32 28V40" stroke={color} strokeWidth="2"/>
    <path d="M14 20L24 12L34 20" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="24" cy="28" r="3" stroke={color} strokeWidth="2"/>
    <path d="M24 16V20" stroke={color} strokeWidth="2"/>
  </svg>
);

const LuxuryIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6L6 18V40H42V18L24 6Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M6 18L24 30L42 18" stroke={color} strokeWidth="2"/>
    <path d="M16 40V30M32 40V30" stroke={color} strokeWidth="2"/>
    <rect x="20" y="34" width="8" height="6" stroke={color} strokeWidth="2"/>
    <path d="M24 6V2M20 4L24 2L28 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StillsIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="28" rx="4" stroke={color} strokeWidth="2"/>
    <circle cx="24" cy="24" r="8" stroke={color} strokeWidth="2"/>
    <circle cx="24" cy="24" r="4" stroke={color} strokeWidth="2"/>
    <circle cx="24" cy="24" r="1.5" fill={color}/>
    <path d="M16 10V6M32 10V6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 18L44 14M40 30L44 34" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ProgressIcon = ({ color }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 40V20L16 14V40" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M16 40V12L24 8V40" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 40V16L32 12V40" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M32 40V20L40 16V40" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M4 40H44" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 32H16M24 28H32" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ============ SERVICE DATA ============
const services = [
  { 
    icon: DroneIcon, 
    title: 'Listing Drone Package', 
    desc: 'Aerial coverage and ground-level establishing shots for MLS, Zillow, and marketing. Stabilized edits with licensed music.',
    price: 'Standard: $149 to $249',
    gradient: 'rgba(0, 212, 255, 0.25)',
    borderColor: 'rgba(0, 212, 255, 0.4)',
    glowColor: 'rgba(0, 212, 255, 0.7)',
    orbColor: 'rgba(0, 212, 255, 0.12)'
  },
  { 
    icon: TourIcon, 
    title: 'Walkthrough and Drone', 
    desc: 'Exterior drone reveal, interior walkthrough, and neighborhood context for featured listings.',
    price: 'From $249',
    gradient: 'rgba(0, 255, 136, 0.2)',
    borderColor: 'rgba(0, 255, 136, 0.35)',
    glowColor: 'rgba(0, 255, 136, 0.6)',
    orbColor: 'rgba(0, 255, 136, 0.1)'
  },
  { 
    icon: LuxuryIcon, 
    title: 'Luxury and Commercial', 
    desc: 'High-end exteriors, rooftops, and architectural details with controlled pacing and refined color.',
    price: 'Luxury and commercial: $299 and up',
    gradient: 'rgba(99, 102, 241, 0.2)',
    borderColor: 'rgba(99, 102, 241, 0.35)',
    glowColor: 'rgba(99, 102, 241, 0.6)',
    orbColor: 'rgba(99, 102, 241, 0.1)'
  },
  { 
    icon: StillsIcon, 
    title: 'Aerial Photo Set', 
    desc: 'High-resolution aerial stills and angle options for listing cover images and collateral.',
    price: 'From $149',
    gradient: 'rgba(255, 180, 0, 0.2)',
    borderColor: 'rgba(255, 180, 0, 0.35)',
    glowColor: 'rgba(255, 180, 0, 0.6)',
    orbColor: 'rgba(255, 180, 0, 0.1)'
  },
  { 
    icon: ProgressIcon, 
    title: 'Construction Progress', 
    desc: 'Monthly or milestone-based aerial documentation with consistent framing for developers.',
    price: 'Custom quote',
    gradient: 'rgba(255, 100, 50, 0.2)',
    borderColor: 'rgba(255, 100, 50, 0.35)',
    glowColor: 'rgba(255, 100, 50, 0.6)',
    orbColor: 'rgba(255, 100, 50, 0.1)'
  },
];

// ============ MAIN COMPONENT ============
const ServicesSection = () => {
  const sectionRef = useRef(null);

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

  return (
    <ServicesWrapper ref={sectionRef}>
      <BackgroundMesh />
      <GridLines />
      
      {/* Floating orbs */}
      <Orb $size={400} $top={-10} $left={-10} $color="rgba(0, 212, 255, 0.08)" $delay={0} $duration={15} />
      <Orb $size={300} $top={60} $left={70} $color="rgba(0, 255, 136, 0.06)" $delay={2} $duration={18} />
      <Orb $size={350} $top={30} $left={40} $color="rgba(99, 102, 241, 0.05)" $delay={4} $duration={20} />
      <Orb $size={250} $top={70} $left={10} $color="rgba(0, 212, 255, 0.05)" $delay={1} $duration={16} />
 <Orb $size={280} $top={10} $left={60} $color="rgba(0, 255, 136, 0.04)" $delay={3} $duration={14} />

      {/* Floating particles */}
      <Particle $size={3} $top={15} $left={10} $delay={0} $duration={5} />
      <Particle $size={2} $top={25} $left={85} $delay={1} $duration={7} />
      <Particle $size={4} $top={60} $left={5} $delay={2} $duration={6} />
      <Particle $size={2} $top={80} $left={90} $delay={0.5} $duration={8} />
      <Particle $size={3} $top={40} $left={95} $delay={1.5} $duration={5.5} />
      <Particle $size={2} $top={90} $left={20} $delay={3} $duration={7.5} />
      <Particle $size={3} $top={10} $left={50} $delay={2.5} $duration={6.5} />
      <Particle $size={2} $top={70} $left={50} $delay={1.2} $duration={5.2} />
      <Particle $size={4} $top={35} $left={30} $delay={0.8} $duration={7.2} />
      <Particle $size={2} $top={55} $left={70} $delay={2.2} $duration={6.2} />

      <Container>
        <Header className="reveal">
          <Tag>Services</Tag>
          <Title>Drone Media That <span>Elevates Listings</span></Title>
          <Subtitle>From aerial photography to cinematic walkthroughs — every service designed to make your listings stand out.</Subtitle>
        </Header>
        <ServicesGrid>
          {services.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <ServiceCard 
                key={s.title} 
                className="reveal"
                $delay={`${i * 0.15}s`}
              >
                <CardGlow $color={s.orbColor} />
                <IconContainer 
                  $gradient={s.gradient} 
                  $borderColor={s.borderColor}
                  $delay={`${i * 0.5}s`}
                >
                  <IconWrapper $delay={`${i * 0.3}s`} $glowColor={s.glowColor}>
                    <IconComponent color={s.glowColor.replace('0.6)', '1)')} />
                  </IconWrapper>
                </IconContainer>
                <ServiceTitle>{s.title}</ServiceTitle>
                <ServiceDesc>{s.desc}</ServiceDesc>
                <PriceTag>{s.price}</PriceTag>
              </ServiceCard>
            );
          })}
        </ServicesGrid>
      </Container>
    </ServicesWrapper>
  );
};

export default ServicesSection;
