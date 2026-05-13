import React from 'react';
import styled from 'styled-components';
const WaveWrapper = styled.div`
  width: 100%; overflow: hidden; line-height: 0;
`;
const SVG = styled.svg`
  display: block; width: 100%;
`;
const Wave = ({ color = '#0a0f1a' }) => (
  <WaveWrapper>
    <SVG viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color} />
    </SVG>
  </WaveWrapper>
);
export default Wave;