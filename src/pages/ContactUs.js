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
  span { background: linear-gradient(90deg, #7bdcff, #f1c16b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`;

const Subtitle = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 1.1rem;
  max-width: 560px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const FormSection = styled.div`
  padding: 0 2rem 6rem;
  max-width: 540px;
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
      <Title>Book a <span>Drone Shoot</span></Title>
      <Subtitle>Tell us the property address, listing date, and the look you want. We'll reply within one business day with availability and a quote.</Subtitle>
    </Header>
    <FormSection>
      <ContactForm />
      <ContactSocial />
      <ContactInfo>info@skyeyeaerial.com · (267) 555-0147 · University City, Philadelphia, PA</ContactInfo>
    </FormSection>
    <Footer />
  </PageWrapper>
);

export default ContactUs;
