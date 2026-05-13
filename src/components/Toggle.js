import React from 'react';
import styled from 'styled-components';
const ToggleWrapper = styled.button`
  background: none; border: none; cursor: pointer; padding: 0.5rem;
`;
const Toggle = ({ isOn, toggle }) => (
  <ToggleWrapper onClick={toggle} aria-label="Toggle theme">
    {isOn ? '🌙' : '☀️'}
  </ToggleWrapper>
);
export default Toggle;