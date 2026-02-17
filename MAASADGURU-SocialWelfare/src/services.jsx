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
                <section id="services" style={{ marginBottom: '40px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Key NGO Sectors</h2>
                    <div style={styles.serviceItem} className="ngo-card">
                        <div style={styles.serviceIcon}>🎓</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#1e3a8a', fontWeight: '700' }}>Educational Reform</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>Providing solar-powered digital classroom kits and mobile learning hubs for remote villages. We follow strictly verified NGO enrollment protocols.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem} className="ngo-card">
                        <div style={styles.serviceIcon}>🏥</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#1e3a8a', fontWeight: '700' }}>Healthcare Initiatives</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>Connecting medical professionals directly with underserved communities. NGO-led regular health camps for eye care and general checkups.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem} className="ngo-card">
                        <div style={styles.serviceIcon}>🌱</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#1e3a8a', fontWeight: '700' }}>Environmental Sustainability</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>NGO-led reforestation and sustainable waste management projects. Promoting organic farming techniques among rural youth.</p>
                        </div>
                    </div>
                    <div style={styles.serviceItem} className="ngo-card">
                        <div style={styles.serviceIcon}>👩‍👧</div>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#1e3a8a', fontWeight: '700' }}>Women Empowerment</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>Skill development workshops and NGO self-help groups to enable financial independence for rural women.</p>
                        </div>
                    </div>
                </section>

                <section id="process" style={{ marginBottom: '60px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>The NGO Delivery Model</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '20px', marginTop: '30px' }}>
                        <div style={styles.processStep} className="ngo-card">
                            <div style={styles.stepNumber}>1</div>
                            <h4 style={{ margin: '10px 0', color: '#1e3a8a', fontWeight: '700' }}>Identify</h4>
                            <p style={{ fontSize: '13px', color: '#64748b' }}>Surveying villages to identify the most pressing NGO needs.</p>
                        </div>
                        <div style={styles.processStep} className="ngo-card">
                            <div style={styles.stepNumber}>2</div>
                            <h4 style={{ margin: '10px 0', color: '#1e3a8a', fontWeight: '700' }}>Plan</h4>
                            <p style={{ fontSize: '13px', color: '#64748b' }}>Experts design NGO interventions tailored to local village conditions.</p>
                        </div>
                        <div style={styles.processStep} className="ngo-card">
                            <div style={styles.stepNumber}>3</div>
                            <h4 style={{ margin: '10px 0', color: '#1e3a8a', fontWeight: '700' }}>Execute</h4>
                            <p style={{ fontSize: '13px', color: '#64748b' }}>Volunteers implement the NGO project with Darpan transparency.</p>
                        </div>
                        <div style={styles.processStep} className="ngo-card">
                            <div style={styles.stepNumber}>4</div>
                            <h4 style={{ margin: '10px 0', color: '#1e3a8a', fontWeight: '700' }}>Sustain</h4>
                            <p style={{ fontSize: '13px', color: '#64748b' }}>Empowering village committees to ensure long-term NGO impact.</p>
                        </div>
                    </div>
                </section>

                <section id="features" className="reveal">
                    <h2 style={styles.sectionHeader}>NGO Operational Governance</h2>
                    <div style={styles.grid}>
                        <div style={styles.featureCard} className="ngo-card">
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '700' }}>Transparent NGO Ops</h3>
                            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>Standardized verification and status tracking for all NGO projects as per Darpan guidelines.</p>
                        </div>
                        <div style={styles.featureCard} className="ngo-card">
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '700' }}>NGO Impact Dashboard</h3>
                            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>Real-time NGO analytics for donors to see fund utilization across social sectors.</p>
                        </div>
                        <div style={styles.featureCard} className="ngo-card">
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '700' }}>NGO Volunteer Portal</h3>
                            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>A dedicated space for youth to register, track NGO service hours, and receive certifications.</p>
                        </div>
                        <div style={styles.featureCard} className="ngo-card">
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '700' }}>NGO Beneficiary Links</h3>
                            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>Direct NGO intervention to ensure resources reach intended communities without middlemen.</p>
                        </div>
                    </div>
                </section>

                <section id="methodology" style={{ marginTop: '40px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Our NGO Strategic Pillars</h2>
                    <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.8', marginBottom: '20px', fontWeight: '500' }}>
                        At <strong>Maasadguru NGO</strong>, we build systems powered by transparency and community trust.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '20px' }}>
                        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#fff' }} className="ngo-card">
                            <h4 style={{ color: '#1e3a8a', marginBottom: '10px', fontWeight: '700' }}>Awareness & Advocacy</h4>
                            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>NGO-led ground-level workshops to educate citizens about government benefits, following the <strong>NGO Darpan</strong> model.</p>
                        </div>
                        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#fff' }} className="ngo-card">
                            <h4 style={{ color: '#1e3a8a', marginBottom: '10px', fontWeight: '700' }}>Resource Optimization</h4>
                            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>Utilizing NGO digital tools to match needs with donor resources, ensuring zero wastage.</p>
                        </div>
                        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#fff' }} className="ngo-card">
                            <h4 style={{ color: '#1e3a8a', marginBottom: '10px', fontWeight: '700' }}>Sustainable Exit</h4>
                            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>NGO handover phase where local village committees are trained to maintain infrastructure independently.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
