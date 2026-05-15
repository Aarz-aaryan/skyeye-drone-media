import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 1.25rem 2rem;
  display: flex; justify-content: space-between; align-items: center;
  background: rgba(10,15,26,0.92); backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
`;
const Logo = styled.a`
  font-size: 1.25rem; font-weight: 800; text-decoration: none; color: #ffffff;
  span { color: #7bdcff; }
`;
const NavLinks = styled.div`
  display: flex; gap: 2.5rem;
  @media (max-width: 768px) { display: none; }
`;
const NavLink = styled.a`
  color: rgba(255,255,255,0.7); text-decoration: none;
  font-size: 0.9rem; font-weight: 500; transition: color 0.2s;
  &:hover { color: #7bdcff; }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none; border: none; cursor: pointer; padding: 0.5rem;
  color: #ffffff; font-size: 1.5rem; line-height: 1;
  @media (max-width: 768px) { display: flex; align-items: center; justify-content: center; }
`;

const MobileMenuOverlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: fixed; inset: 0; z-index: 999;
    background: rgba(10,15,26,0.95); backdrop-filter: blur(20px);
    flex-direction: column; align-items: center; justify-content: center;
    gap: 2rem;
  }
`;

const MobileMenuLinks = styled.div`
  display: flex; flex-direction: column; align-items: center; gap: 2rem;
`;

const MobileNavLink = styled.a`
  color: rgba(255,255,255,0.9); text-decoration: none;
  font-size: 1.25rem; font-weight: 500;
  &:hover { color: #7bdcff; }
`;

const CloseButton = styled.button`
  position: absolute; top: 1.25rem; right: 2rem;
  background: none; border: none; cursor: pointer;
  color: #ffffff; font-size: 2rem; line-height: 1;
`;

const FOCUSABLE_SELECTORS = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

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
    <NavWrapper>
      <Logo href="/">SkyEye<span>DM</span></Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/contact">Contact</NavLink>
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
