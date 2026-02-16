import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent.jsx';

const AboutUs = () => {
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
        highlightBox: {
            background: '#f0fdf4',
            borderLeft: '5px solid #10b981',
            padding: isMobile ? '15px' : '25px',
            marginBottom: '40px',
        },
        valuesGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '40px',
        },
        valueCard: {
            padding: '20px',
            background: '#f8fafc',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #e2e8f0'
        },
        legalBox: {
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            padding: '20px',
            borderRadius: '8px',
            marginTop: '40px',
            fontSize: '14px',
            color: '#9a3412'
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper}>
                <section id="about">
                    <h2 style={styles.sectionHeader}>About Maasadguru</h2>
                    <div style={styles.highlightBox}>
                        <p style={{ margin: 0, fontSize: isMobile ? '14px' : '16px', color: '#065f46', lineHeight: '1.6' }}>
                            Maasadguru Social Services is dedicated to bringing transparency and efficiency to the social sector. Our core focus is on educational reform, healthcare accessibility, and environmental sustainability in rural and underserved urban areas.
                        </p>
                    </div>
                </section>

                <section id="founding-story" style={{ marginBottom: '40px' }}>
                    <h2 style={styles.sectionHeader}>Our Founding Story</h2>
                    <p style={{ lineHeight: '1.8', color: '#4b5563', marginBottom: '15px' }}>
                        Founded in 2020 by a group of passionate social workers led by Jatothu Ravi, Maasadguru emerged from a simple observation: while government welfare schemes exist, they often fail to reach the most marginalized due to lack of awareness and procedural complexities.
                    </p>
                    <p style={{ lineHeight: '1.8', color: '#4b5563' }}>
                        Starting as a small volunteer group in Warangal, we have now grown into a registered organization serving over 40+ villages, driven by the belief that <strong>information is empowerment</strong>.
                    </p>
                </section>

                <section id="values">
                    <h2 style={styles.sectionHeader}>Our Core Values</h2>
                    <div style={styles.valuesGrid}>
                        <div style={styles.valueCard}>
                            <div style={{ fontSize: '30px', marginBottom: '10px' }}>⚖️</div>
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '10px' }}>Integrity</h3>
                            <p style={{ fontSize: '14px', color: '#64748b' }}>Uncompromising honesty in our operations and financial reporting.</p>
                        </div>
                        <div style={styles.valueCard}>
                            <div style={{ fontSize: '30px', marginBottom: '10px' }}>❤️</div>
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '10px' }}>Compassion</h3>
                            <p style={{ fontSize: '14px', color: '#64748b' }}>Serving every individual with dignity, empathy, and respect.</p>
                        </div>
                        <div style={styles.valueCard}>
                            <div style={{ fontSize: '30px', marginBottom: '10px' }}>🤝</div>
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '10px' }}>Collaboration</h3>
                            <p style={{ fontSize: '14px', color: '#64748b' }}>Partnering with local bodies and communities for sustainable impact.</p>
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
                            { name: 'Jatothu Ravi', role: 'Founder', mobile: '8143177143', desc: 'Leading the vision for social equity and transparent welfare systems.', color: '#1e3a8a', bg: '#eff6ff' },
                            { name: 'Gugulothu Naveen', role: 'Co-Founder', mobile: '9908709764', desc: 'Overseeing technical architecture and field operations for maximum impact.', color: '#10b981', bg: '#f0fdf4' }
                        ].map((leader, i) => (
                            <div key={i} style={{ padding: '25px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', textAlign: 'center', borderTop: `4px solid ${leader.color}` }}>
                                <div style={{ width: '80px', height: '80px', backgroundColor: leader.bg, borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>👤</div>
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#1e3a8a' }}>{leader.name}</h3>
                                <p style={{ margin: 0, fontSize: '14px', color: '#065f46', fontWeight: 'bold' }}>{leader.role}</p>
                                <p style={{ marginTop: '5px', fontSize: '14px', color: '#1e3a8a', fontWeight: '600' }}>📞 {leader.mobile}</p>
                                <p style={{ marginTop: '10px', fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{leader.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="operational-presence" style={{ marginBottom: '40px' }}>
                    <h2 style={styles.sectionHeader}>Operational Presence</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        gap: '30px',
                        alignItems: 'center',
                        background: '#fcfcfc',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #eee'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <svg viewBox="150 150 400 600" style={{ width: '100%', maxHeight: '350px' }}>
                                <path
                                    d="M380,180 L420,200 L450,250 L460,320 L440,380 L460,450 L430,520 L400,580 L320,600 L250,550 L200,500 L180,420 L210,350 L200,280 L230,220 L280,180 L330,170 Z"
                                    fill="#f1f5f9"
                                    stroke="#1e3a8a"
                                    strokeWidth="1.5"
                                />
                                <circle cx="280" cy="450" r="10" fill="#f59e0b">
                                    <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="280" cy="450" r="4" fill="#fff" />
                                <text x="295" y="455" fontSize="16" fontWeight="bold" fill="#1e3a8a">HYDERABAD (HQ)</text>

                                <text x="180" y="200" fontSize="24" fontWeight="800" fill="#cbd5e1" opacity="0.3">TELANGANA</text>
                            </svg>
                        </div>
                        <div>
                            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.7' }}>
                                Headquartered in <strong>Hyderabad</strong>, our reach extends across the diverse landscapes of Telangana. We maintain active monitoring in over 30 districts, ensuring that no community is left behind in the digital and social welfare revolution.
                            </p>
                            <ul style={{ fontSize: '14px', color: '#64748b', marginTop: '15px', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}>Regional Hub: Warangal District</li>
                                <li style={{ marginBottom: '8px' }}>Field Operations: Mahabubnagar & Nizamabad</li>
                                <li style={{ marginBottom: '8px' }}>Tribal Outreach: Adilabad & Khammam</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="legal">
                    <h2 style={styles.sectionHeader}>Legal & Registration</h2>
                    <div style={styles.legalBox}>
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '15px' }}>
                            <div>
                                <strong>Registered Society No:</strong> <span style={{ fontFamily: 'monospace' }}>584/2024</span>
                            </div>
                            <div>
                                <strong>NITI Aayog UID:</strong> <span style={{ fontFamily: 'monospace' }}>TS/2024/0458921</span>
                            </div>
                            <div>
                                <strong>12A Registration:</strong> <span style={{ fontFamily: 'monospace' }}>AAATM8921QE2024</span>
                            </div>
                            <div>
                                <strong>80G Registration:</strong> <span style={{ fontFamily: 'monospace' }}>AAATM8921QE2025</span>
                            </div>
                        </div>
                        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '13px' }}>
                            * Maasadguru Social Services is compliant with all statutory regulations for Non-Profit Organizations in India.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
