import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; padding: 0; background: #0a0f1a; color: #ffffff;
    font-family: 'Inter', -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; }
  ::selection { background: #7bdcff; color: #0a0f1a; }
`;
