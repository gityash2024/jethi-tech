import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const Content = styled.main`
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const MainLayout = ({ children }) => (
  <MainContainer>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </MainContainer>
);

export default MainLayout;
