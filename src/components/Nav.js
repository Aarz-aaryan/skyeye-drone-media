import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 15, 26, ${props => props.$scrolled ? 0.95 : 0.85});
  backdrop-filter: blur(${props => Math.min(12 + props.$scrollProgress * 20, 32)}px);
  border-bottom: 1px solid rgba(255, 255, 255, ${props => props.$scrolled ? 0.1 : 0.06});
  transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.3s ease, border-color 0.4s ease;
`;

const Logo = styled.a`
  font-size: 1.3rem;
  font-weight: 800;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  transition: all 0.3s ease;

  span {
    background: linear-gradient(135deg, #00d4ff, #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00d4ff, #00ff88);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.75rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00d4ff, #00ff88);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::before {
    width: 100%;
  }
`;

const NavCtaBtn = styled.a`
  && {
    padding: 0.65rem 1.5rem;
    background: linear-gradient(135deg, #00d4ff, #00ff88);
    color: #0a0f1a;
    font-weight: 700;
    font-size: 0.85rem;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    padding: 0.45rem 0.75rem;
    font-size: 0.7rem;
    white-space: normal;
    text-align: center;
    justify-content: center;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 1;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: #00d4ff;
    transform: scale(1.1);
  }
`;

const MobileMenuOverlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: fixed;
    inset: 0;
    z-index: 999;
    background: rgba(10, 15, 26, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    animation: ${props => props.$isOpen ? fadeIn : 'none'} 0.3s ease;
  }
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #00d4ff;
    transform: scale(1.05);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 2.5rem;
  line-height: 1;
  transition: all 0.3s ease;

  &:hover {
    color: #00d4ff;
    transform: rotate(90deg);
  }
`;

const FOCUSABLE_SELECTORS = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (!mobileMenuOpen) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
      return;
    }

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current?.focus();
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current?.focus();
        }
      }
    }
  }, [mobileMenuOpen, closeMenu]);

  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(FOCUSABLE_SELECTORS);
      if (focusableElements.length > 0) {
        firstFocusableRef.current = focusableElements[0];
        lastFocusableRef.current = focusableElements[focusableElements.length - 1];
        focusableElements[0].focus();
      }
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <NavWrapper $scrolled={scrolled} $scrollProgress={scrollProgress}>
      <Logo href="/">SkyEye</Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavCtaBtn href="/contact">Schedule a Shoot</NavCtaBtn>
      </NavLinks>
      <HamburgerButton
        ref={hamburgerRef}
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open mobile menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        ☰
      </HamburgerButton>

      <MobileMenuOverlay
        id="mobile-menu"
        ref={menuRef}
        $isOpen={mobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <CloseButton
          onClick={closeMenu}
          aria-label="Close mobile menu"
        >
          ×
        </CloseButton>
        <MobileMenuLinks>
          <MobileNavLink href="/" onClick={closeMenu}>Home</MobileNavLink>
          <MobileNavLink href="/about" onClick={closeMenu}>About</MobileNavLink>
          <MobileNavLink href="/work" onClick={closeMenu}>Work</MobileNavLink>
          <MobileNavLink href="/contact" onClick={closeMenu}>Contact</MobileNavLink>
        </MobileMenuLinks>
      </MobileMenuOverlay>
    </NavWrapper>
  );
};

export default Nav;
