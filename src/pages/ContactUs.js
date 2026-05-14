import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import ContactSocial from '../components/ContactSocial';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0f1a;
`;

const Header = styled.div`
  padding: 10rem 2rem 4rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  span { background: linear-gradient(90deg, #00d4ff, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;

const Subtitle = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const FormSection = styled.div`
  padding: 0 2rem 6rem;
  max-width: 500px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  text-align: center;
  padding: 2rem;
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
`;

const ContactUs = () => (
  <PageWrapper>
    <Header>
      <Title>Get In <span>Touch</span></Title>
      <Subtitle>Tell us about your property and we will get back to you within 24 hours.</Subtitle>
    </Header>
    <FormSection>
      <ContactForm />
      <ContactSocial />
      <ContactInfo>aaryan@skyeyeaerial.com · University City, Philadelphia, PA</ContactInfo>
    </FormSection>
    <Footer />
  </PageWrapper>
);

export default ContactUs;