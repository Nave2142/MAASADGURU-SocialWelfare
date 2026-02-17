import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent.jsx';

const AboutUs = () => {
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
            marginBottom: '25px',
            display: 'inline-block',
            fontFamily: "'Outfit', sans-serif",
            textTransform: 'uppercase',
            fontWeight: '800'
        },
        highlightBox: {
            background: 'linear-gradient(to right, #f0fdf4, #ffffff)',
            borderLeft: '6px solid #10b981',
            padding: isMobile ? '25px' : '35px',
            marginBottom: '40px',
            borderRadius: '0 12px 12px 0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)'
        },
        valuesGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
            gap: '25px',
            marginBottom: '60px',
        },
        valueCard: {
            padding: '30px 25px',
            background: '#f8fafc',
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid #e2e8f0',
            transition: 'all 0.3s ease'
        },
        legalBox: {
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            padding: isMobile ? '25px' : '35px',
            borderRadius: '20px',
            marginTop: '50px',
            fontSize: isMobile ? '14px' : '15px',
            color: '#9a3412',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper}>
                <section id="about" className="reveal">
                    <h2 style={styles.sectionHeader}>About Maasadguru Social Service</h2>
                    <div style={styles.highlightBox}>
                        <p style={{ margin: 0, fontSize: isMobile ? '15px' : '17px', color: '#065f46', lineHeight: '1.8', fontWeight: '500' }}>
                            Operating under the standards of <strong>Maasadguru Social Service</strong>, our core focus is on educational reform, healthcare accessibility, and environmental sustainability in rural Telangana.
                        </p>
                    </div>
                </section>

                <section id="founding-story" style={{ marginBottom: '60px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Our Social Service Journey</h2>
                    <p style={{ lineHeight: '1.8', color: '#4b5563', marginBottom: '20px', fontSize: isMobile ? '15px' : '16px' }}>
                        Established in 2020 by a group of passionate social workers led by Jatothu Ravi, <strong>Maasadguru Social Service</strong> emerged from a simple observation: while government welfare schemes exist, they often fail to reach the most marginalized due to lack of awareness and procedural complexities.
                    </p>
                    <p style={{ lineHeight: '1.8', color: '#4b5563', fontSize: isMobile ? '15px' : '16px' }}>
                        Starting as a small volunteer group in Warangal, we have now evolved into a structured organization serving over 45+ villages, driven by the belief that <strong>information is empowerment</strong>.
                    </p>
                </section>

                <section id="values" className="reveal">
                    <h2 style={styles.sectionHeader}>Our Core Values</h2>
                    <div style={styles.valuesGrid}>
                        <div style={styles.valueCard} className="ngo-card">
                            <div style={{ fontSize: '36px', marginBottom: '15px' }}>⚖️</div>
                            <h3 style={{ fontSize: '20px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '800' }}>Integrity</h3>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>Uncompromising honesty in our operations and financial reporting.</p>
                        </div>
                        <div style={styles.valueCard} className="ngo-card">
                            <div style={{ fontSize: '36px', marginBottom: '15px' }}>❤️</div>
                            <h3 style={{ fontSize: '20px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '800' }}>Compassion</h3>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>Serving every individual with dignity, empathy, and respect.</p>
                        </div>
                        <div style={styles.valueCard} className="ngo-card">
                            <div style={{ fontSize: '36px', marginBottom: '15px' }}>🤝</div>
                            <h3 style={{ fontSize: '20px', color: '#1e3a8a', marginBottom: '12px', fontWeight: '800' }}>Collaboration</h3>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>Partnering with local bodies for sustainable impact.</p>
                        </div>
                    </div>
                </section>

                <section id="leadership" style={{ marginBottom: '60px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Our Leadership</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(300px, 1fr))'),
                        gap: isMobile ? '20px' : '30px',
                    }}>
                        {[
                            { name: 'Jatothu Ravi', role: 'Founder', mobile: '8143177143', desc: 'Leading the vision for social equity and transparent governance.', color: '#1e3a8a', bg: '#eff6ff' },
                            { name: 'Gugulothu Naveen', role: 'Co-Founder', mobile: '9908709764', desc: 'Overseeing technical architecture and field operations for maximum impact.', color: '#10b981', bg: '#f0fdf4' }
                        ].map((leader, i) => (
                            <div key={i} style={{ padding: '35px 25px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', textAlign: 'center', borderTop: `6px solid ${leader.color}`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04)' }} className="ngo-card">
                                <div style={{ width: '90px', height: '90px', backgroundColor: leader.bg, borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>👤</div>
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '20px', color: '#1e3a8a', fontWeight: '800' }}>{leader.name}</h3>
                                <p style={{ margin: 0, fontSize: '14px', color: '#065f46', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{leader.role}</p>
                                <p style={{ marginTop: '10px', fontSize: '15px', color: '#1e3a8a', fontWeight: '700' }}>📞 {leader.mobile}</p>
                                <p style={{ marginTop: '15px', fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{leader.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="operational-presence" style={{ marginBottom: '60px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Operational Presence</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : (isTablet ? '1fr' : '1.2fr 0.8fr'),
                        gap: isMobile ? '30px' : '50px',
                        alignItems: 'center',
                        background: '#fcfcfc',
                        padding: isMobile ? '25px 20px' : '50px 40px',
                        borderRadius: '24px',
                        border: '1px solid #eee'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <MapComponent isMobile={isMobile} hqLabel="UPPAL (HQ)" />
                        </div>
                        <div>
                            <p style={{ fontSize: isMobile ? '15px' : '16px', color: '#4b5563', lineHeight: '1.8' }}>
                                Headquartered in <strong>Uppal, Hyderabad</strong>, our reach extends across the diverse landscapes of Telangana. We maintain active monitoring in over 30 districts, ensuring that no community is left behind.
                            </p>
                            <ul style={{ fontSize: isMobile ? '14px' : '15px', color: '#64748b', marginTop: '20px', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '12px' }}>Regional Hub: Warangal District</li>
                                <li style={{ marginBottom: '12px' }}>Field Operations: Mahabubnagar & Nizamabad</li>
                                <li style={{ marginBottom: '12px' }}>Tribal Outreach: Adilabad & Khammam</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="legal" className="reveal">
                    <h2 style={styles.sectionHeader}>Registration & Compliance</h2>
                    <div style={styles.legalBox}>
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)'), gap: '20px' }}>
                            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.5)', borderRadius: '12px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>Society Registration No:</strong> <span style={{ fontFamily: 'monospace', fontSize: '16px', fontWeight: '700' }}>584/2024</span>
                            </div>
                            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.5)', borderRadius: '12px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>NITI Aayog UID:</strong> <span style={{ fontFamily: 'monospace', fontSize: '16px', fontWeight: '700' }}>TS/2024/0458921</span>
                            </div>
                            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.5)', borderRadius: '12px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>12A Registration:</strong> <span style={{ fontFamily: 'monospace', fontSize: '16px', fontWeight: '700' }}>AAATM8921QE2024</span>
                            </div>
                            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.5)', borderRadius: '12px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>80G Registration:</strong> <span style={{ fontFamily: 'monospace', fontSize: '16px', fontWeight: '700' }}>AAATM8921QE2025</span>
                            </div>
                        </div>
                        <p style={{ marginTop: '25px', fontStyle: 'italic', fontSize: '14px' }}>
                            * <strong>Maasadguru Social Service</strong> is fully compliant with all statutory regulations for Non-Profit Organizations in India as per industrial transparency standards.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
