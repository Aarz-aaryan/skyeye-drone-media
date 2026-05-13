import React from 'react';
import styled from 'styled-components';
import SubsAndPacks from '../components/SubsAndPacks';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0f1a;
`;

const Subscriptions = () => (
  <PageWrapper>
    <SubsAndPacks />
    <Footer />
  </PageWrapper>
);

export default Subscriptions;