import React from 'react';
import styled from 'styled-components';

const ContactSocialWrapper = styled.div`
  display: flex; gap: 1.5rem; justify-content: center; margin-top: 2rem;
`;
const SocialBtn = styled.a`
  width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50%; font-size: 1.25rem; transition: all 0.2s;
  &:hover { border-color: #00d4ff; transform: translateY(-2px); }
`;

const ContactSocial = () => (
  <ContactSocialWrapper>
    <SocialBtn href="#" aria-label="Instagram">📷</SocialBtn>
    <SocialBtn href="#" aria-label="YouTube">📹</SocialBtn>
    <SocialBtn href="mailto:aaryan@skyeyeaerial.com" aria-label="Email">✉️</SocialBtn>
  </ContactSocialWrapper>
);
export default ContactSocial;