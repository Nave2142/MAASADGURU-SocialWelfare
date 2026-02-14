import React, { useState, useEffect } from 'react';

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
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
        highlightBox: {
            background: '#f0fdf4',
            borderLeft: '5px solid #10b981',
            padding: isMobile ? '15px' : '25px',
            marginBottom: '40px',
        }
    };

    return (
        <>
            <div style={styles.heroSection}>
                <div>
                    <h1 style={{ fontSize: isMobile ? '28px' : '42px', margin: '0 0 10px 0', fontFamily: "'Outfit', sans-serif" }}>MAASADGURU</h1>
                    <p style={{ fontSize: isMobile ? '14px' : '18px', opacity: 0.9 }}>Pure Hearts. Impactful Lives.</p>
                </div>
            </div>

            <div style={styles.mainContainer}>
                <div style={styles.contentWrapper}>
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
                </div>
            </div>
        </>
    );
};

export default Home;
