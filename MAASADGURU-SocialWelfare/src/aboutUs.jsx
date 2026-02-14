import React, { useState, useEffect } from 'react';

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
            </div>
        </div>
    );
};

export default AboutUs;
