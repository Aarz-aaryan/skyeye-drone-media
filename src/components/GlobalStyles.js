import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    padding: 0;
    background: #0a0f1a;
    color: #ffffff;
    font-family: 'DM Sans', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bricolage Grotesque', -apple-system, sans-serif;
    font-weight: 800;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; }
  ::selection { background: #00d4ff; color: #0a0f1a; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0a0f1a; }
  ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00d4ff, #00ff88); border-radius: 3px; }

  /* Scroll progress bar */
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #00ff88);
    z-index: 9999;
    transition: width 0.1s linear;
  }

  /* Noise texture overlay */
  .noise-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 128px 128px;
  }

  /* Custom cursor */
  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.5px solid rgba(0, 212, 255, 0.7);
    background: rgba(0, 212, 255, 0.08);
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.12s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s ease, background 0.2s ease;
    z-index: 9999;
  }
  .custom-cursor.cursor--active {
    transform: translate(-50%, -50%) scale(1.8);
    border-color: rgba(0, 255, 136, 0.9);
    background: rgba(0, 255, 136, 0.12);
  }

  /* Reveal animations */
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }
  .reveal-delay-5 { transition-delay: 0.5s; }

  /* Slide animations */
  .slide-left {
    opacity: 0;
    transform: translateX(-60px);
    transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .slide-left.is-visible {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-right {
    opacity: 0;
    transform: translateX(60px);
    transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .slide-right.is-visible {
    opacity: 1;
    transform: translateX(0);
  }

  /* Scale in animation */
  .scale-in {
    opacity: 0;
    transform: scale(0.85);
    transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .scale-in.is-visible {
    opacity: 1;
    transform: scale(1);
  }

  @media (pointer: coarse) {
    body { cursor: auto; }
    .custom-cursor { display: none; }
  }
`;