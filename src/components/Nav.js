import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 1.25rem 2rem;
  display: flex; justify-content: space-between; align-items: center;
  background: rgba(10,15,26,0.9); backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
`;
const Logo = styled.a`
  font-size: 1.25rem; font-weight: 800; text-decoration: none; color: #ffffff;
  span { color: #00d4ff; }
`;
const NavLinks = styled.div`
  display: flex; gap: 2.5rem;
  @media (max-width: 768px) { display: none; }
`;
const NavLink = styled.a`
  color: rgba(255,255,255,0.7); text-decoration: none;
  font-size: 0.9rem; font-weight: 500; transition: color 0.2s;
  &:hover { color: #00d4ff; }
`;

const Nav = () => (
  <NavWrapper>
    <Logo href="/">SkyEye<span>DM</span></Logo>
    <NavLinks>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/work">Work</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </NavLinks>
  </NavWrapper>
);
export default Nav;