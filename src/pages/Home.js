import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import OurSuccess from '../components/OurSuccess';
import FaqSection from '../components/FaqSection';
import SubsAndPacks from '../components/SubsAndPacks';
import Footer from '../components/Footer';

// Animations
const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const shimmerBorder = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const VIDEO_ID = 'eFhA4e1ustw';
const HERO_VIDEO_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1`;
const HERO_THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

const HeroVideoBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background-image: url(${HERO_THUMBNAIL_URL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 177.78vh;
    min-width: 100%;
    height: 56.25vw;
    min-height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    border: 0;
    pointer-events: none;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(10, 15, 26, 0.35) 0%,
      rgba(10, 15, 26, 0.58) 55%,
      rgba(10, 15, 26, 0.74) 100%
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    iframe {
      width: 240vh;
      height: 60vw;
    }
  }
`;

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #0a0f1a;
  padding: 8rem 2rem 6rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, #0a0f1a, transparent);
    pointer-events: none;
  }
`;

const ParallaxBg = styled.div`
  position: absolute;
  inset: -20%;
  background: 
    radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0, 212, 255, 0.06), transparent 70%);
  transform: translateY(${props => props.$scrollY * 0.3}px);
  pointer-events: none;
`;

const BottomBackgroundEffect = styled.div`
  height: 260px;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 60% at 15% 25%, rgba(0, 212, 255, 0.12), transparent 55%),
    radial-gradient(ellipse 60% 50% at 85% 70%, rgba(0, 255, 136, 0.08), transparent 50%),
    linear-gradient(160deg, #0a0f1a 0%, #0d1525 40%, #0a0f1a 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 12s ease infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, transparent 40%, rgba(0, 212, 255, 0.03) 50%, transparent 60%),
      radial-gradient(circle at 30% 70%, rgba(0, 255, 136, 0.04) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 950px;
  z-index: 2;
  position: relative;
  transform: translateY(${props => props.$scrollY ? -props.$scrollY * 0.08 : 0}px);
  transition: transform 0.1s linear-out;
`;

const HeroTag = styled.p`
  color: #00d4ff;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  span.tag-item {
    display: inline-flex;
    align-items: center;
    gap: 1.25rem;
  }

  span.tag-separator {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(0, 212, 255, 0.5);
    flex-shrink: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.02;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #00ff88 50%, #f1c16b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% auto;
    animation: ${shimmer} 4s linear infinite;
  }
`;

const TitleWord = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(40px) scale(0.9);
  animation: wordReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${props => props.$delay || 0}s;

  @keyframes wordReveal {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const HeroSub = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
`;

const MagneticWrapper = styled.div`
  display: inline-block;
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
`;

const PrimaryBtn = styled.a`
  padding: 1.1rem 2.75rem;
  background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
  color: #0a0f1a;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
    opacity: 0;
    border-radius: inherit;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 255, 136, 0.15);
  }

  &:hover::before {
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const MagneticBtn = styled.div`
  display: inline-block;
`;

const SecondaryBtn = styled.a`
  padding: 1.1rem 2.75rem;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #00d4ff;
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.08);
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 212, 255, 0.1);
  }
`;

const HeroMeta = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  opacity: 0;
  animation: fadeSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
`;

const MetaItem = styled.div`
  padding: 1rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
    background: rgba(0, 212, 255, 0.05);
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: fadeSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards;

  span {
    font-size: 0.65rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
  }

  svg {
    animation: ${bounce} 2s ease-in-out infinite;
    color: rgba(0, 212, 255, 0.6);
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  background: #0a0f1a;
  position: relative;
`;

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTag = styled.p`
  color: #00d4ff;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionSub = styled.p`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.1rem;
  max-width: 680px;
  margin: 0 auto;
  line-height: 1.75;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;
`;

const PortfolioCard = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-8px) rotateX(2deg);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(0, 212, 255, 0.08);
  }
`;

const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #1a2035, #2a3050);
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${PortfolioCard}:hover & img {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(10, 15, 26, 0.5) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  ${PortfolioCard}:hover &::after {
    opacity: 1;
  }
`;

const CardBody = styled.div`
  padding: 1.5rem 1.75rem 1.75rem;
`;

const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const CardMeta = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.65;
`;

const Portfolio = [
  {
    title: 'University City Rowhouse',
    detail: 'Aerial reveal of a classic Philly rowhome — roofline, lot depth, and street context that ground photos miss.',
    image: '/rowhouse_after.jpg',
  },
  {
    title: 'Suburban Colonial',
    detail: 'Full property footprint from above — driveway, backyard, and landscaping context for the full picture.',
    image: '/suburban_after.jpg',
  },
  {
    title: 'Philly Rowhome',
    detail: 'Bird\'s-eye angle reveals the block, roof condition, and neighborhood character from above.',
    image: '/philly_after.jpg',
  },
  {
    title: 'New Construction',
    detail: 'Drone aerial shows lot orientation, framing context, and the complete site for new builds.',
    image: '/newbuild_after.jpg',
  },
  {
    title: 'Luxury Estate',
    detail: 'Pool, patios, and total grounds — captured from above to showcase the full property scope.',
    image: '/luxury_after.jpg',
  },
  {
    title: 'Commercial Property',
    detail: 'Parking, access points, and surrounding traffic patterns — aerial view for commercial listings.',
    image: '/commercial_after.jpg',
  },
];

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Magnetic button effect
    const handleMouseMove = (e) => {
      if (!window.magneticBtns) return;
      window.magneticBtns.forEach((wrapper) => {
        if (!wrapper) return;
        const rect = wrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDist = 120;
        if (distance < maxDist) {
          const strength = (maxDist - distance) / maxDist;
          wrapper.style.transform = `translate(${deltaX * strength * 0.25}px, ${deltaY * strength * 0.25}px)`;
        } else {
          wrapper.style.transform = 'translate(0, 0)';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .slide-left, .slide-right, .scale-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const titleWords = ['Drone Media That', 'Elevates Property'].reduce((acc, phrase, pi) => {
    const words = phrase.split(' ');
    words.forEach((word, wi) => {
      const totalDelay = pi === 0 
        ? 0.3 + wi * 0.08 
        : 0.3 + 2 * 0.08 + 0.15 + wi * 0.08;
      acc.push({ word, delay: totalDelay });
    });
    return acc;
  }, []);

  return (
    <>
      <HeroWrapper ref={heroRef}>
        <HeroVideoBg>
          <iframe
            src={HERO_VIDEO_URL}
            title="SkyEye Drone Media Hero Background Video"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex="-1"
            loading="eager"
            aria-hidden="true"
          />
        </HeroVideoBg>
        <ParallaxBg $scrollY={scrollY} />
        <HeroContent $scrollY={scrollY}>
          <HeroTag>
            <span className="tag-item">FAA Part 107 Certified</span>
            <span className="tag-separator" />
            <span className="tag-item">Insured</span>
            <span className="tag-separator" />
            <span className="tag-item">University City, Philadelphia</span>
          </HeroTag>
          <HeroTitle>
            {titleWords.map(({ word, delay }, i) => (
              <React.Fragment key={i}>
                {i === 2 && <br />}
                <TitleWord $delay={delay}>{word}</TitleWord>{' '}
              </React.Fragment>
            ))}
            <span>Marketing</span>
          </HeroTitle>
          <HeroSub>
            SkyEye Drone Media creates crisp aerial footage and listing-ready edits for agents, brokers, and developers.
            Expect clean composition, reliable turnaround, and visuals that help buyers focus on the property.
          </HeroSub>
          <CTAGroup>
            <MagneticWrapper ref={el => { if (el) window.magneticBtns = window.magneticBtns || []; if (!window.magneticBtns.includes(el)) window.magneticBtns.push(el); }}>
              <PrimaryBtn href="/contact"><span>Schedule a Shoot</span></PrimaryBtn>
            </MagneticWrapper>
            <MagneticWrapper ref={el => { if (el) window.magneticBtns = window.magneticBtns || []; if (!window.magneticBtns.includes(el)) window.magneticBtns.push(el); }}>
              <SecondaryBtn href="/work">View Portfolio</SecondaryBtn>
            </MagneticWrapper>
          </CTAGroup>
          <HeroMeta>
            <MetaItem>Standard packages: $149 to $249</MetaItem>
            <MetaItem>Luxury and commercial: $299</MetaItem>
            <MetaItem>Delivery in 24 to 48 hours</MetaItem>
            <MetaItem>Penn, Drexel, UPenn area specialists</MetaItem>
          </HeroMeta>
        </HeroContent>
        <ScrollIndicator>
          <span>Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </ScrollIndicator>
      </HeroWrapper>

      <Section className="reveal">
        <Container>
          <SectionHeader>
            <SectionTag>Portfolio Preview</SectionTag>
            <SectionTitle>Aerial Listing <span>Showcase</span></SectionTitle>
            <SectionSub>
              Every property has a story from above. Here is how drone footage elevates listings across University City, Center City, and greater Philadelphia.
            </SectionSub>
          </SectionHeader>
          <PortfolioGrid>
            {Portfolio.map((p, i) => (
              <PortfolioCard 
                key={p.title} 
                className={`reveal reveal-delay-${(i % 4) + 1}`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
                }}
              >
                <CardImage>
                  <img src={p.image} alt={p.title} loading="lazy" />
                </CardImage>
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
      <BottomBackgroundEffect aria-hidden="true" />
      <Footer />
    </>
  );
};

export default Home;
