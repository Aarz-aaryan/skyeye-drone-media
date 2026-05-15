import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background: #050810;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 3rem 2rem;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Brand = styled.div``;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  span { color: #7bdcff; }
`;

const Tagline = styled.p`
  color: rgba(255,255,255,0.4);
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const Copyright = styled.p`
  color: rgba(255,255,255,0.4);
  font-size: 0.85rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: rgba(255,255,255,0.5);
  font-size: 1.25rem;
  transition: color 0.2s;
  &:hover { color: #7bdcff; }
`;

const Footer = () => (
  <FooterWrapper>
    <Container>
      <Brand>
        <Logo to="/">SkyEye<span>DM</span></Logo>
        <Tagline>Aerial drone videography — University City, Philadelphia</Tagline>
      </Brand>
      <Copyright>© 2026 SkyEye Drone Media. All rights reserved.</Copyright>
      <SocialLinks>
        <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
        <SocialLink href="#" aria-label="YouTube">📹</SocialLink>
      </SocialLinks>
    </Container>
  </FooterWrapper>
);

export default Footer;
