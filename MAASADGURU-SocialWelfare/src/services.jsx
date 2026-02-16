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
        },
        processStep: {
            textAlign: 'center',
            position: 'relative',
        },
        stepNumber: {
            width: '40px',
            height: '40px',
            background: '#f59e0b',
            color: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px',
            fontWeight: 'bold',
            fontSize: '18px'
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper}>
                <section id="services" style={{ marginBottom: '40px' }}>
                    <h2 style={styles.sectionHeader}>Our Key Sectors</h2>
                    <div style={styles.serviceItem}>
                        <div style={styles.serviceIcon}>🎓</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', color: '#1e3a8a' }}>Educational Reform</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Providing solar-powered digital classroom kits and mobile learning hubs for remote villages. We also facilitate scholarship applications for meritorious students.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem}>
                        <div style={styles.serviceIcon}>🏥</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', color: '#1e3a8a' }}>Healthcare Initiatives</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Connecting medical professionals directly with underserved communities via our collaborative networks. Regular health camps for eye care and general checkups.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem}>
                        <div style={styles.serviceIcon}>🌱</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', color: '#1e3a8a' }}>Environmental Sustainability</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Community-led reforestation and sustainable waste management projects across local districts. Promoting organic farming techniques among rural youth.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem}>
                        <div style={styles.serviceIcon}>👩‍👧</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '17px', color: '#1e3a8a' }}>Women Empowerment</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Skill development workshops and self-help group formation to enable financial independence for rural women.</p>
                        </div>
                    </div>
                </section>

                <section id="process" style={{ marginBottom: '60px' }}>
                    <h2 style={styles.sectionHeader}>How We Work</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '20px', marginTop: '30px' }}>
                        <div style={styles.processStep}>
                            <div style={styles.stepNumber}>1</div>
                            <h4 style={{ margin: '10px 0', color: '#1e3a8a' }}>Identify</h4>
                            <p style={{ fontSize: '13px', color: '#666' }}>We survey villages to identify the most pressing needs of the community.</p>
                        </div>
                        <div style={styles.processStep}>
                            <div style={styles.stepNumber}>2</div>
                            <h4 style={{ margin: '10px 0', color: '#1e3a8a' }}>Plan</h4>
                            <p style={{ fontSize: '13px', color: '#666' }}>Our experts design sustainable interventions tailored to local conditions.</p>
                        </div>
                        <div style={styles.processStep}>
                            <div style={styles.stepNumber}>3</div>
                            <h4 style={{ margin: '10px 0', color: '#1e3a8a' }}>Execute</h4>
                            <p style={{ fontSize: '13px', color: '#666' }}>Volunteers and partners implement the project with full transparency.</p>
                        </div>
                        <div style={styles.processStep}>
                            <div style={styles.stepNumber}>4</div>
                            <h4 style={{ margin: '10px 0', color: '#1e3a8a' }}>Sustain</h4>
                            <p style={{ fontSize: '13px', color: '#666' }}>We empower locals to take ownership ensure long-term impact.</p>
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

                <section id="methodology" style={{ marginTop: '40px' }}>
                    <h2 style={styles.sectionHeader}>Our Strategic Pillars</h2>
                    <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '20px' }}>
                        At Maasadguru, we don't just provide aid; we build systems. Our approach is rooted in three fundamental pillars that ensure every intervention is meaningful and long-lasting.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '20px' }}>
                        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                            <h4 style={{ color: '#1e3a8a', marginBottom: '10px' }}>Awareness & Advocacy</h4>
                            <p style={{ fontSize: '13px', color: '#666' }}>Conducting ground-level workshops to educate citizens about their rights and available government benefits, inspired by the <strong>NGO Darpan</strong> transparency model.</p>
                        </div>
                        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                            <h4 style={{ color: '#1e3a8a', marginBottom: '10px' }}>Resource Optimization</h4>
                            <p style={{ fontSize: '13px', color: '#666' }}>Utilizing digital tools to match community needs with available donor resources, ensuring zero wastage and maximum reach.</p>
                        </div>
                        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                            <h4 style={{ color: '#1e3a8a', marginBottom: '10px' }}>Sustainable Exit</h4>
                            <p style={{ fontSize: '13px', color: '#666' }}>Every project includes a handover phase where local village committees are trained to maintain the infrastructure or systems independently.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
