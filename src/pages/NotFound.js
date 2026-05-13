import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div``;

const Big404 = styled.h1`
  font-size: 10rem;
  font-weight: 900;
  background: linear-gradient(90deg, #00d4ff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: rgba(255,255,255,0.6);
  margin-bottom: 2rem;
`;

const BackLink = styled.a`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00d4ff, #00ff88);
  color: #0a0f1a;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
`;

const NotFound = () => (
  <>
    <PageWrapper>
      <Content>
        <Big404>404</Big404>
        <Title>Signal Lost</Title>
        <Text>This page went off the map — like a drone losing signal.</Text>
        <BackLink href="/">Back to Home</BackLink>
      </Content>
    </PageWrapper>
    <Footer />
  </>
);

export default NotFound;