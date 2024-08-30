import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;
const Content = styled.main`
  padding: 120px 0px 0; // Adjust the top padding based on your header height
  @media (max-width: 768px) {
    padding: 15px 15px 0; // Adjust for mobile
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
