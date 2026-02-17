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
                <section id="about" className="reveal">
                    <h2 style={styles.sectionHeader}>About Maasadguru NGO</h2>
                    <div style={styles.highlightBox}>
                        <p style={{ margin: 0, fontSize: isMobile ? '14px' : '16px', color: '#065f46', lineHeight: '1.6', fontWeight: '500' }}>
                            <strong>Maasadguru NGO</strong> is dedicated to bringing transparency and efficiency to the social sector.
                            Operating under the standards of <strong>NGO Darpan</strong>, our core focus is on educational reform, healthcare accessibility, and environmental sustainability in rural Telangana.
                        </p>
                    </div>
                </section>

                <section id="founding-story" style={{ marginBottom: '40px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Our NGO Journey</h2>
                    <p style={{ lineHeight: '1.8', color: '#4b5563', marginBottom: '15px', fontSize: '15px' }}>
                        Established in 2020 by a group of passionate social workers led by Jatothu Ravi, <strong>Maasadguru NGO</strong> emerged from a simple observation: while government welfare schemes exist, they often fail to reach the most marginalized due to lack of awareness and procedural complexities.
                    </p>
                    <p style={{ lineHeight: '1.8', color: '#4b5563', fontSize: '15px' }}>
                        Starting as a small volunteer group in Warangal, we have now evolved into a structured NGO serving over 45+ villages, driven by the belief that <strong>information is empowerment</strong>.
                    </p>
                </section>

                <section id="values" className="reveal">
                    <h2 style={styles.sectionHeader}>Our Core NGO Values</h2>
                    <div style={styles.valuesGrid}>
                        <div style={styles.valueCard} className="ngo-card">
                            <div style={{ fontSize: '30px', marginBottom: '10px' }}>⚖️</div>
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '10px', fontWeight: '700' }}>Integrity</h3>
                            <p style={{ fontSize: '14px', color: '#64748b' }}>Uncompromising honesty in our NGO operations and financial reporting.</p>
                        </div>
                        <div style={styles.valueCard} className="ngo-card">
                            <div style={{ fontSize: '30px', marginBottom: '10px' }}>❤️</div>
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '10px', fontWeight: '700' }}>Compassion</h3>
                            <p style={{ fontSize: '14px', color: '#64748b' }}>Serving every individual with dignity, empathy, and respect.</p>
                        </div>
                        <div style={styles.valueCard} className="ngo-card">
                            <div style={{ fontSize: '30px', marginBottom: '10px' }}>🤝</div>
                            <h3 style={{ fontSize: '18px', color: '#1e3a8a', marginBottom: '10px', fontWeight: '700' }}>Collaboration</h3>
                            <p style={{ fontSize: '14px', color: '#64748b' }}>Partnering with local bodies for sustainable NGO impact.</p>
                        </div>
                    </div>
                </section>

                <section id="leadership" style={{ marginBottom: '40px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>Our NGO Leadership</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                    }}>
                        {[
                            { name: 'Jatothu Ravi', role: 'Founder', mobile: '8143177143', desc: 'Leading the vision for social equity and transparent NGO systems.', color: '#1e3a8a', bg: '#eff6ff' },
                            { name: 'Gugulothu Naveen', role: 'Co-Founder', mobile: '9908709764', desc: 'Overseeing NGO architecture and field operations for maximum impact.', color: '#10b981', bg: '#f0fdf4' }
                        ].map((leader, i) => (
                            <div key={i} style={{ padding: '25px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', textAlign: 'center', borderTop: `4px solid ${leader.color}` }} className="ngo-card">
                                <div style={{ width: '80px', height: '80px', backgroundColor: leader.bg, borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>👤</div>
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#1e3a8a', fontWeight: '700' }}>{leader.name}</h3>
                                <p style={{ margin: 0, fontSize: '14px', color: '#065f46', fontWeight: 'bold' }}>{leader.role}</p>
                                <p style={{ marginTop: '5px', fontSize: '14px', color: '#1e3a8a', fontWeight: '600' }}>📞 {leader.mobile}</p>
                                <p style={{ marginTop: '10px', fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{leader.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="operational-presence" style={{ marginBottom: '40px' }} className="reveal">
                    <h2 style={styles.sectionHeader}>NGO Operational Presence</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        gap: '30px',
                        alignItems: 'center',
                        background: '#fcfcfc',
                        padding: '20px',
                        borderRadius: '12px',
                        border: '1px solid #eee'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <MapComponent isMobile={isMobile} hqLabel="UPPAL (HQ)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.7' }}>
                                Headquartered in <strong>Uppal, Hyderabad</strong>, our reach extends across the diverse landscapes of Telangana. We maintain active monitoring in over 30 districts, ensuring that no community is left behind in the digital and social welfare revolution.
                            </p>
                            <ul style={{ fontSize: '14px', color: '#64748b', marginTop: '15px', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}>Regional Hub: Warangal District</li>
                                <li style={{ marginBottom: '8px' }}>Field Operations: Mahabubnagar & Nizamabad</li>
                                <li style={{ marginBottom: '8px' }}>Tribal Outreach: Adilabad & Khammam</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="legal" className="reveal">
                    <h2 style={styles.sectionHeader}>NGO Registration & Compliance</h2>
                    <div style={styles.legalBox}>
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '15px' }}>
                            <div>
                                <strong>NGO Society No:</strong> <span style={{ fontFamily: 'monospace' }}>584/2024</span>
                            </div>
                            <div>
                                <strong>NITI Aayog (Darpan) UID:</strong> <span style={{ fontFamily: 'monospace' }}>TS/2024/0458921</span>
                            </div>
                            <div>
                                <strong>12A NGO Registration:</strong> <span style={{ fontFamily: 'monospace' }}>AAATM8921QE2024</span>
                            </div>
                            <div>
                                <strong>80G NGO Registration:</strong> <span style={{ fontFamily: 'monospace' }}>AAATM8921QE2025</span>
                            </div>
                        </div>
                        <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '13px' }}>
                            * <strong>Maasadguru NGO</strong> is fully compliant with all statutory regulations for Non-Profit Organizations in India as per NGO Darpan standards.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
