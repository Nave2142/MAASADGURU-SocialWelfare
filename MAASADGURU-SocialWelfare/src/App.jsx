import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
const Header = React.lazy(() => import('./header'));
const Footer = React.lazy(() => import('./footer'));
const Donate = React.lazy(() => import('./donate'));
const Home = React.lazy(() => import('./home'));
const GalleryPage = React.lazy(() => import('./gallery'));
const AboutUsPage = React.lazy(() => import('./aboutUs'));
const ServicesPage = React.lazy(() => import('./services'));
const ContactUsPage = React.lazy(() => import('./contactUs'));

// Loading component for Suspense
const LoadingSpinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
);

// Scroll to top and refresh animations on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fallback for older browsers
    if (!window.IntersectionObserver) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
      return;
    }

    const observerOptions = {
      threshold: 0,
      rootMargin: '100px' // Expand trigger area to be more lenient
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const scanAndObserve = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        // Double check: if it's already got the active class, ignore
        if (el.classList.contains('active')) return;

        const rect = el.getBoundingClientRect();
        // If element is already in or very near the viewport, show it
        if (rect.top < (window.innerHeight + 100) && rect.bottom > -100) {
          el.classList.add('active');
        } else {
          observer.observe(el);
        }
      });
    };

    // More aggressive scanning schedule to handle React route transitions
    scanAndObserve();
    const intervals = [50, 200, 500, 1000, 2000, 5000].map(delay =>
      setTimeout(scanAndObserve, delay)
    );

    return () => {
      intervals.forEach(clearTimeout);
      observer.disconnect();
    };
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
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
