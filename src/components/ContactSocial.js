import React from 'react';
import styled from 'styled-components';

const ContactSocialWrapper = styled.div`
  display: flex; gap: 1.5rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;
`;
const SocialBtn = styled.a`
  min-width: 140px; height: 44px; display: inline-flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px; font-size: 0.85rem; transition: all 0.2s;
  letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.8);
  &:hover { border-color: #7bdcff; transform: translateY(-2px); color: #ffffff; }
`;

const ContactSocial = () => (
  <ContactSocialWrapper>
    <SocialBtn href="#" aria-label="Instagram">Instagram</SocialBtn>
    <SocialBtn href="#" aria-label="YouTube">YouTube</SocialBtn>
    <SocialBtn href="mailto:info@skyeyeaerial.com" aria-label="Email">Email</SocialBtn>
  </ContactSocialWrapper>
);
export default ContactSocial;
