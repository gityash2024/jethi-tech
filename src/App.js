import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import '@fontsource/sofia'; // Defaults to weight 400
import About from './pages/About';
import Blog from './pages/Blog';
import TermsConditions from './pages/TermsConditions';
import CodeOfConduct from './pages/CodeOfConduct';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Service from './pages/Service';
import Technology from './pages/Technology';
import Hire from './pages/Hire';
import Solutions from './pages/Solutions';
import Work from './pages/Work';
import BlogDetails from './pages/BlogDetails';
import ScrollToTop from './components/scrollToTop';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import Card from './pages/Card';
import MenuCard from './pages/MenuCard';

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails/>} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<Service />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/work" element={<Work />} />
          <Route path="/card" element={<Card />} />
          {/* <Route path="/menu-card" element={<MenuCard />} /> */}
        </Routes>
        <ScrollToTop />
      </MainLayout>
    </Router>
  );
}

export default App;