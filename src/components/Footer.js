import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background: rgba(5, 8, 16, 0.85);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 4rem 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent);
  }
`;

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }
`;

const BrandSection = styled.div``;

const Logo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  span {
    background: linear-gradient(135deg, #00d4ff, #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const Tagline = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 320px;

  @media (max-width: 900px) {
    margin: 0 auto 1.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ContactItem = styled.a`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 900px) {
    justify-content: center;
  }

  &:hover {
    color: #00d4ff;
    transform: translateX(4px);
  }

  &::before {
    content: '';
    width: 16px;
    height: 1px;
    background: rgba(0, 212, 255, 0.4);
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 24px;
    background: #00d4ff;
  }
`;

const NavSection = styled.div``;

const SectionTitle = styled.h4`
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 900px) {
    justify-content: center;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255,255,255,0.1), transparent);
    max-width: 60px;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: #00d4ff;
    transform: translateX(4px);
  }
`;

const SocialSection = styled.div``;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &:hover {
    color: #00d4ff;
    transform: translateX(4px);
  }

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0, 212, 255, 0.4);
    transition: all 0.3s ease;
  }

  &:hover::before {
    background: #00d4ff;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  }
`;

const BottomBar = styled.div`
  max-width: 1150px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.85rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.8rem;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Footer = () => {
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
    <FooterWrapper ref={sectionRef} className="reveal">
      <Container>
        <BrandSection className="reveal">
          <Logo to="/">SkyEye</Logo>
          <Tagline>Aerial drone videography for University City and greater Philadelphia. Professional real estate media that sells properties faster.</Tagline>
          <ContactInfo>
            <ContactItem href="mailto:info@skyeyeaerial.com">info@skyeyeaerial.com</ContactItem>
            <ContactItem href="tel:+12675550147">(267) 555-0147</ContactItem>
            <ContactItem href="#">University City, Philadelphia</ContactItem>
          </ContactInfo>
        </BrandSection>

        <NavSection className="reveal reveal-delay-1">
          <SectionTitle>Navigation</SectionTitle>
          <FooterNav>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/work">Portfolio</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterNav>
        </NavSection>

        <SocialSection className="reveal reveal-delay-2">
          <SectionTitle>Connect</SectionTitle>
          <SocialLinks>
            <SocialLink href="#" aria-label="Instagram">Instagram</SocialLink>
            <SocialLink href="#" aria-label="YouTube">YouTube</SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">LinkedIn</SocialLink>
          </SocialLinks>
        </SocialSection>
      </Container>

      <BottomBar>
        <Copyright>© 2026 SkyEye Drone Media. All rights reserved.</Copyright>
        <LegalLinks>
          <LegalLink href="#">Privacy Policy</LegalLink>
          <LegalLink href="#">Terms of Service</LegalLink>
        </LegalLinks>
      </BottomBar>
    </FooterWrapper>
  );
};

export default Footer;