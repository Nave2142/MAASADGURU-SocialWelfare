import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Donate from './donate';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    if (currentPage === 'home' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      color: '#333',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    heroSection: {
      height: isMobile ? '180px' : '250px',
      background: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '0 20px',
    },
    mainContainer: {
      maxWidth: '1200px',
      margin: '0 auto 40px',
      padding: isMobile ? '0 10px' : '0 20px',
    },
    contentWrapper: {
      background: '#fff',
      padding: isMobile ? '20px' : '40px',
      marginTop: isMobile ? '-20px' : '-40px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      position: 'relative',
      zIndex: 2,
    },
    sectionHeader: {
      fontSize: isMobile ? '20px' : '24px',
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
      height: isMobile ? '250px' : '450px',
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
      padding: isMobile ? '15px' : '20px 40px',
      backdropFilter: 'blur(5px)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '15px' : '25px',
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
      padding: isMobile ? '15px' : '25px',
      marginBottom: '40px',
    },
    serviceItem: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '10px' : '20px',
      padding: isMobile ? '15px' : '20px',
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
      marginBottom: '15px',
      alignItems: isMobile ? 'flex-start' : 'center',
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

  const renderHome = () => (
    <>
      <div style={styles.heroSection}>
        <div>
          <h1 style={{ fontSize: isMobile ? '28px' : (isTablet ? '34px' : '42px'), margin: '0 0 10px 0', fontFamily: "'Outfit', sans-serif" }}>MAASADGURU</h1>
          <p style={{ fontSize: isMobile ? '14px' : '18px', opacity: 0.9 }}>Pure Hearts. Impactful Lives.</p>
        </div>
      </div>

      <div style={styles.mainContainer}>
        <div style={styles.contentWrapper}>

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
                    <h3 style={{ margin: '0 0 5px 0', fontSize: isMobile ? '16px' : '20px' }}>{img.title}</h3>
                    <p style={{ margin: 0, fontSize: isMobile ? '12px' : '14px', opacity: 0.9 }}>{img.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ position: 'absolute', bottom: '15px', right: isMobile ? '15px' : '40px', zIndex: 2, display: 'flex', gap: '8px' }}>
                {images.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
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

          <section id="statistics" style={{ marginBottom: '40px' }}>
            <h2 style={styles.sectionHeader}>Impact Statistics</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: isMobile ? '10px' : '20px',
            }}>
              {[
                { label: 'Families Supported', value: '1,500+' },
                { label: 'Villages Reached', value: '45' },
                { label: 'Volunteers Enrolled', value: '500+' },
                { label: 'Projects Completed', value: '120+' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  padding: '15px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  borderRadius: '4px'
                }}>
                  <div style={{ fontSize: isMobile ? '18px' : '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '5px' }}>{stat.value}</div>
                  <div style={{ fontSize: isMobile ? '11px' : '13px', color: '#64748b', fontWeight: '600' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="about">
            <h2 style={styles.sectionHeader}>Social Service Goals</h2>
            <div style={styles.highlightBox}>
              <p style={{ margin: 0, fontSize: isMobile ? '14px' : '16px', color: '#065f46', lineHeight: '1.6' }}>
                Maasadguru Social Services is dedicated to bringing transparency and efficiency to the social sector. Our core focus is on educational reform, healthcare accessibility, and environmental sustainability in rural and underserved urban areas.
              </p>
            </div>
          </section>

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

          <section id="leadership" style={{ marginBottom: '40px' }}>
            <h2 style={styles.sectionHeader}>Our Leadership</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}>
              {[
                { name: 'Jatothu Ravi', role: 'Founder', desc: 'Leading the vision for social equity and transparent welfare systems.', color: '#1e3a8a', bg: '#eff6ff' },
                { name: 'Gugulothu Naveen', role: 'Co-Founder', desc: 'Overseeing technical architecture and field operations for maximum impact.', color: '#10b981', bg: '#f0fdf4' }
              ].map((leader, i) => (
                <div key={i} style={{ padding: '25px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', textAlign: 'center', borderTop: `4px solid ${leader.color}` }}>
                  <div style={{ width: '80px', height: '80px', backgroundColor: leader.bg, borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>👤</div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#1e3a8a' }}>{leader.name}</h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#065f46', fontWeight: 'bold' }}>{leader.role}</p>
                  <p style={{ marginTop: '10px', fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{leader.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );

  const renderDonate = () => (
    <div style={styles.mainContainer}>
      <div style={{ ...styles.contentWrapper, marginTop: isMobile ? '20px' : '40px' }}>
        <Donate onBack={() => setCurrentPage('home')} />
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <Header setPage={setCurrentPage} />
      {currentPage === 'home' ? renderHome() : renderDonate()}
      <Footer />
    </div>
  );
};

export default App;
