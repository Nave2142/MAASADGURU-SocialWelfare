import React, { useState, useEffect } from 'react';

const Services = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        mainContainer: {
            maxWidth: '1200px',
            margin: '0 auto 40px',
            padding: isMobile ? '0 10px' : '0 20px',
        },
        contentWrapper: {
            background: '#fff',
            padding: isMobile ? '20px' : '40px',
            marginTop: '40px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            borderRadius: '8px'
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

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper}>
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
            </div>
        </div>
    );
};

export default Services;
