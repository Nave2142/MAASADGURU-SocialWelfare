import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Donate from './donate';
import Home from './home';
import GalleryPage from './gallery';
import AboutUsPage from './aboutUs';
import ServicesPage from './services';
import ContactUsPage from './contactUs';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 1024;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      color: '#333',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      paddingTop: isMobile ? '70px' : '0',
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
