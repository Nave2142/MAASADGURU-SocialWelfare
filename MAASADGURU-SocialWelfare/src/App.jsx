import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';

const App = () => {
  const images = [
    {
      url: "https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=1170&auto=format&fit=crop",
      title: "Educational Reform",
      desc: "Empowering rural students through digital literacy."
    },
    {
      url: "https://images.unsplash.com/photo-1652858672796-960164bd632b?q=80&w=1170&auto=format&fit=crop",
      title: "Environmental Impact",
      desc: "Sustaining local ecosystems through community action."
    },
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
      title: "Learning Support",
      desc: "Bridging the gap in primary education resources."
    },
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
      title: "Community Growth",
      desc: "Direct field-level support for local families."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      color: '#333',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    heroSection: {
      height: '250px',
      background: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
    },
    mainContainer: {
      maxWidth: '1200px',
      margin: '0 auto 40px',
      padding: '0 20px',
    },
    contentWrapper: {
      background: '#fff',
      padding: '40px',
      marginTop: '-40px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      position: 'relative',
      zIndex: 2,
    },
    sectionHeader: {
      fontSize: '24px',
      color: '#1e3a8a',
      borderBottom: '2px solid #f59e0b',
      paddingBottom: '8px',
      marginBottom: '20px',
      display: 'inline-block',
      fontFamily: "'Outfit', sans-serif",
      textTransform: 'uppercase',
    },
    sliderContainer: {
      position: 'relative',
      width: '100%',
      height: '450px',
      overflow: 'hidden',
      borderRadius: '8px',
      marginBottom: '40px',
      background: '#000',
    },
    slide: {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'opacity 1s ease-in-out',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'flex-end',
    },
    slideCaption: {
      background: 'rgba(0, 0, 0, 0.6)',
      color: '#fff',
      width: '100%',
      padding: '20px 40px',
      backdropFilter: 'blur(5px)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginBottom: '40px',
    },
    featureCard: {
      padding: '25px',
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '4px',
      borderTop: '4px solid #1e3a8a',
    },
    highlightBox: {
      background: '#f0fdf4',
      borderLeft: '5px solid #10b981',
      padding: '25px',
      marginBottom: '40px',
    },
    serviceItem: {
      display: 'flex',
      gap: '20px',
      padding: '20px',
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
      marginBottom: '15px',
      alignItems: 'center',
    },
    serviceIcon: {
      fontSize: '24px',
      minWidth: '50px',
      height: '50px',
      background: '#eff6ff',
      color: '#1e3a8a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
    }
  };

  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.heroSection}>
        <div>
          <h1 style={{ fontSize: '42px', margin: '0 0 10px 0', fontFamily: "'Outfit', sans-serif" }}>MAASADGURU</h1>
          <p style={{ fontSize: '18px', opacity: 0.9 }}>Pure Hearts. Impactful Lives.</p>
        </div>
      </div>

      <div style={styles.mainContainer}>
        <div style={styles.contentWrapper}>

          {/* Slider Section */}
          <section id="gallery">
            <h2 style={styles.sectionHeader}>Impact Gallery</h2>
            <div style={styles.sliderContainer}>
              {images.map((img, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.slide,
                    backgroundImage: `url(${img.url})`,
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 1 : 0
                  }}
                >
                  <div style={styles.slideCaption}>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '20px' }}>{img.title}</h3>
                    <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>{img.desc}</p>
                  </div>
                </div>
              ))}
              {/* Slider Dots */}
              <div style={{ position: 'absolute', bottom: '20px', right: '40px', zIndex: 2, display: 'flex', gap: '10px' }}>
                {images.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: index === currentIndex ? '#f59e0b' : 'rgba(255,255,255,0.5)',
                      cursor: 'pointer'
                    }}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Organization Mission */}
          <section id="about">
            <h2 style={styles.sectionHeader}>Social Service Goals</h2>
            <div style={styles.highlightBox}>
              <p style={{ margin: 0, fontSize: '16px', color: '#065f46', lineHeight: '1.6' }}>
                Maasadguru Social Services is dedicated to bringing transparency and efficiency to the social sector. Our core focus is on educational reform, healthcare accessibility, and environmental sustainability in rural and underserved urban areas.
              </p>
            </div>
          </section>

          {/* Core NGO Features */}
          <section id="features">
            <h2 style={styles.sectionHeader}>NGO Operational Features</h2>
            <div style={styles.grid}>
              <div style={styles.featureCard}>
                <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '700' }}>Transparent Operations</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4b5563' }}>Standardized verification and status tracking for all projects to ensure complete accountability.</p>
              </div>
              <div style={styles.featureCard}>
                <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '700' }}>Impact Dashboard</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4b5563' }}>Real-time analytics for donors to see where funds are being utilized across different social sectors.</p>
              </div>
              <div style={styles.featureCard}>
                <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '700' }}>Volunteer Portal</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4b5563' }}>A dedicated space for youth and professionals to register, track hours, and receive digital certificates.</p>
              </div>
              <div style={styles.featureCard}>
                <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '700' }}>Direct Beneficiary Links</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4b5563' }}>Cutting out middlemen to ensure resources reach the intended communities directly.</p>
              </div>
            </div>
          </section>

          {/* Social Service Programs */}
          <section id="services" style={{ marginBottom: '40px' }}>
            <h2 style={styles.sectionHeader}>Our Social Services</h2>

            <div style={styles.serviceItem}>
              <div style={styles.serviceIcon}>🎓</div>
              <div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', color: '#1e3a8a' }}>Educational Reform</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Providing solar-powered digital classroom kits and mobile learning hubs for remote villages.</p>
              </div>
            </div>

            <div style={styles.serviceItem}>
              <div style={styles.serviceIcon}>🏥</div>
              <div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', color: '#1e3a8a' }}>Healthcare Initiatives</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Connecting medical professionals directly with underserved communities via our collaborative networks.</p>
              </div>
            </div>

            <div style={styles.serviceItem}>
              <div style={styles.serviceIcon}>🌱</div>
              <div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', color: '#1e3a8a' }}>Environmental Sustainability</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Community-led reforestation and sustainable waste management projects across local districts.</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
