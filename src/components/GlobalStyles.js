import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    padding: 0;
    background: #0a0f1a;
    color: #ffffff;
    font-family: 'Inter', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    cursor: none;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; }
  ::selection { background: #7bdcff; color: #0a0f1a; }

  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.65);
    background: rgba(255,255,255,0.06);
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease;
    z-index: 9999;
  }

  .custom-cursor.cursor--active {
    transform: translate(-50%, -50%) scale(1.7);
    border-color: rgba(255,255,255,0.9);
    background: rgba(255,255,255,0.18);
  }

  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (pointer: coarse) {
    body { cursor: auto; }
    .custom-cursor { display: none; }
  }
`;
