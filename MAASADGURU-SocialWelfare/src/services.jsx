import React, { useState, useEffect } from 'react';

const Services = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        mainContainer: {
            maxWidth: '1200px',
            margin: '0 auto 60px',
            padding: isMobile ? '0 12px' : '0 30px',
        },
        contentWrapper: {
            background: '#fff',
            padding: isMobile ? '35px 20px' : '65px 45px',
            marginTop: isMobile ? '30px' : '50px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
            borderRadius: '24px'
        },
        sectionHeader: {
            fontSize: isMobile ? '22px' : '28px',
            color: '#1e3a8a',
            borderBottom: '3px solid #f59e0b',
            paddingBottom: '10px',
            marginBottom: '30px',
            display: 'inline-block',
            fontFamily: "'Outfit', sans-serif",
            textTransform: 'uppercase',
            fontWeight: '800'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))'),
            gap: isMobile ? '20px' : '30px',
            marginBottom: '50px',
        },
        featureCard: {
            padding: isMobile ? '25px' : '35px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            borderTop: '6px solid #1e3a8a',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04)'
        },
        serviceItem: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '15px' : '25px',
            padding: isMobile ? '25px' : '30px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            marginBottom: '20px',
            borderRadius: '20px',
            alignItems: isMobile ? 'center' : 'center',
            textAlign: isMobile ? 'center' : 'left'
        },
        serviceIcon: {
            fontSize: '32px',
            minWidth: '70px',
            height: '70px',
            background: '#eff6ff',
            color: '#1e3a8a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            boxShadow: '0 4px 10px rgba(30,58,138,0.1)'
        },
        processStep: {
            textAlign: 'center',
            position: 'relative',
            padding: '20px',
        },
        stepNumber: {
            width: '50px',
            height: '50px',
            background: '#f59e0b',
            color: '#000',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 15px',
            fontWeight: '800',
            fontSize: '20px',
            boxShadow: '0 4px 6px rgba(245,158,11,0.3)',
            transform: 'rotate(-5deg)'
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper}>
                <section id="services" style={{ marginBottom: '60px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Key Services</h2>
                    <div style={styles.serviceItem} className="ngo-card">
                        <div style={styles.serviceIcon}>🎓</div>
                        <div>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', color: '#1e3a8a', fontWeight: '800' }}>Educational Reform</h3>
                            <p style={{ margin: 0, fontSize: isMobile ? '14px' : '15px', color: '#475569', lineHeight: '1.7' }}>Providing solar-powered digital classroom kits and mobile learning hubs for remote villages. We follow strictly verified enrollment protocols.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem} className="ngo-card">
                        <div style={styles.serviceIcon}>🏥</div>
                        <div>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', color: '#1e3a8a', fontWeight: '800' }}>Healthcare Initiatives</h3>
                            <p style={{ margin: 0, fontSize: isMobile ? '14px' : '15px', color: '#475569', lineHeight: '1.7' }}>Connecting medical professionals directly with underserved communities. Regular health camps for eye care and general checkups.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem} className="ngo-card">
                        <div style={styles.serviceIcon}>🌱</div>
                        <div>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', color: '#1e3a8a', fontWeight: '800' }}>Environmental Sustainability</h3>
                            <p style={{ margin: 0, fontSize: isMobile ? '14px' : '15px', color: '#475569', lineHeight: '1.7' }}>Reforestation and sustainable waste management projects. Promoting organic farming techniques among rural youth.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem} className="ngo-card">
                        <div style={styles.serviceIcon}>👩‍👧</div>
                        <div>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', color: '#1e3a8a', fontWeight: '800' }}>Women Empowerment</h3>
                            <p style={{ margin: 0, fontSize: isMobile ? '14px' : '15px', color: '#475569', lineHeight: '1.7' }}>Skill development workshops and self-help groups to enable financial independence for rural women.</p>
                        </div>
                    </div>
                </section>

                <section id="process" style={{ marginBottom: '80px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>The Delivery Model</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'), gap: '30px', marginTop: '30px' }}>
                        <div style={styles.processStep} className="ngo-card">
                            <div style={styles.stepNumber}>1</div>
                            <h4 style={{ margin: '15px 0 10px', color: '#1e3a8a', fontWeight: '800', fontSize: '18px' }}>Identify</h4>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>Surveying villages to identify the most pressing needs.</p>
                        </div>
                        <div style={styles.processStep} className="ngo-card">
                            <div style={styles.stepNumber}>2</div>
                            <h4 style={{ margin: '15px 0 10px', color: '#1e3a8a', fontWeight: '800', fontSize: '18px' }}>Plan</h4>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>Experts design interventions tailored to local village conditions.</p>
                        </div>
                        <div style={styles.processStep} className="ngo-card">
                            <div style={styles.stepNumber}>3</div>
                            <h4 style={{ margin: '15px 0 10px', color: '#1e3a8a', fontWeight: '800', fontSize: '18px' }}>Execute</h4>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>Volunteers implement the projects with Maasadguru Social Service transparency.</p>
                        </div>
                        <div style={styles.processStep} className="ngo-card">
                            <div style={styles.stepNumber}>4</div>
                            <h4 style={{ margin: '15px 0 10px', color: '#1e3a8a', fontWeight: '800', fontSize: '18px' }}>Sustain</h4>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>Empowering village committees to ensure long-term impact.</p>
                        </div>
                    </div>
                </section>

                <section id="features" className="reveal">
                    <h2 style={styles.sectionHeader}>Operational Governance</h2>
                    <div style={styles.grid}>
                        <div style={styles.featureCard} className="ngo-card">
                            <h3 style={{ fontSize: '20px', color: '#1e3a8a', marginBottom: '15px', fontWeight: '800' }}>Transparent Ops</h3>
                            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#475569' }}>Standardized verification and status tracking for all projects as per Maasadguru Social Service guidelines.</p>
                        </div>
                        <div style={styles.featureCard} className="ngo-card">
                            <h3 style={{ fontSize: '20px', color: '#1e3a8a', marginBottom: '15px', fontWeight: '800' }}>Impact Dashboard</h3>
                            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#475569' }}>Real-time analytics for donors to see fund utilization across social sectors.</p>
                        </div>
                        <div style={styles.featureCard} className="ngo-card">
                            <h3 style={{ fontSize: '20px', color: '#1e3a8a', marginBottom: '15px', fontWeight: '800' }}>Volunteer Portal</h3>
                            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#475569' }}>A dedicated space for youth to register, track service hours, and receive certifications.</p>
                        </div>
                        <div style={styles.featureCard} className="ngo-card">
                            <h3 style={{ fontSize: '20px', color: '#1e3a8a', marginBottom: '15px', fontWeight: '800' }}>Beneficiary Links</h3>
                            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#475569' }}>Direct intervention to ensure resources reach intended communities without middlemen.</p>
                        </div>
                    </div>
                </section>

                <section id="methodology" style={{ marginTop: '50px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Strategic Pillars</h2>
                    <p style={{ fontSize: isMobile ? '15px' : '17px', color: '#475569', lineHeight: '1.8', marginBottom: '30px', fontWeight: '500' }}>
                        At <strong>Maasadguru Social Service</strong>, we build systems powered by transparency and community trust.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), gap: '25px' }}>
                        <div style={{ padding: '30px 25px', border: '1px solid #e2e8f0', borderRadius: '20px', background: '#fff' }} className="ngo-card">
                            <h4 style={{ color: '#1e3a8a', marginBottom: '12px', fontWeight: '800', fontSize: '18px' }}>Awareness & Advocacy</h4>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>Ground-level workshops to educate citizens about government benefits, following the <strong>Maasadguru Social Service</strong> model.</p>
                        </div>
                        <div style={{ padding: '30px 25px', border: '1px solid #e2e8f0', borderRadius: '20px', background: '#fff' }} className="ngo-card">
                            <h4 style={{ color: '#1e3a8a', marginBottom: '12px', fontWeight: '800', fontSize: '18px' }}>Resource Optimization</h4>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>Utilizing digital tools to match needs with donor resources, ensuring zero wastage.</p>
                        </div>
                        <div style={{ padding: '30px 25px', border: '1px solid #e2e8f0', borderRadius: '20px', background: '#fff' }} className="ngo-card">
                            <h4 style={{ color: '#1e3a8a', marginBottom: '12px', fontWeight: '800', fontSize: '18px' }}>Sustainable Exit</h4>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>Handover phase where local village committees are trained to maintain infrastructure independently.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
