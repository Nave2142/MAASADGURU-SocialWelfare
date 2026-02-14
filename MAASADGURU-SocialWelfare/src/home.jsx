import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        heroSection: {
            height: isMobile ? '300px' : '450px',
            background: 'linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
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
            padding: isMobile ? '30px 15px' : '60px 40px',
            marginTop: isMobile ? '-40px' : '-80px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            position: 'relative',
            zIndex: 2,
            borderRadius: '12px'
        },
        sectionHeader: {
            fontSize: isMobile ? '22px' : '32px',
            color: '#1e3a8a',
            marginBottom: '30px',
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: '800'
        },
        subHeader: {
            fontSize: isMobile ? '18px' : '22px',
            color: '#1e3a8a',
            borderLeft: '4px solid #f59e0b',
            paddingLeft: '15px',
            marginBottom: '20px',
            fontFamily: "'Outfit', sans-serif",
        },
        highlightBox: {
            background: '#f0fdf4',
            borderLeft: '5px solid #10b981',
            padding: isMobile ? '20px' : '30px',
            marginBottom: '50px',
            borderRadius: '0 8px 8px 0'
        },
        impactGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '60px'
        },
        impactCard: {
            background: '#fff',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid #f1f5f9',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
        },
        serviceGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '60px'
        },
        serviceCard: {
            background: '#f8fafc',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
        },
        iconCircle: {
            width: '60px',
            height: '60px',
            background: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            margin: '0 auto 20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        },
        ctaSection: {
            background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
            padding: isMobile ? '40px 20px' : '60px 40px',
            borderRadius: '16px',
            color: '#fff',
            textAlign: 'center',
            marginTop: '40px'
        },
        button: {
            background: '#f59e0b',
            color: '#000',
            padding: '12px 30px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            marginTop: '20px',
            display: 'inline-block',
            textDecoration: 'none',
            transition: 'background 0.3s'
        }
    };

    return (
        <>
            <div style={styles.heroSection}>
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: isMobile ? '36px' : '64px', margin: '0 0 15px 0', fontFamily: "'Outfit', sans-serif", fontWeight: '800' }}>MAASADGURU</h1>
                    <p style={{ fontSize: isMobile ? '16px' : '22px', opacity: 0.95, lineHeight: '1.4', marginBottom: '30px' }}>
                        Empowering Communities through Transparency, Education, and Sustainable Change.
                    </p>
                    <button onClick={() => navigate('/donate')} style={styles.button}>Start Your Impact</button>
                </div>
            </div>

            <div style={styles.mainContainer}>
                <div style={styles.contentWrapper}>

                    <section id="mission" style={{ marginBottom: '60px' }}>
                        <h2 style={styles.sectionHeader}>Our Driving Vision</h2>
                        <div style={styles.highlightBox}>
                            <p style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', color: '#065f46', lineHeight: '1.8' }}>
                                <strong>Maasadguru Social Services</strong> is more than just an organization; it's a movement aimed at bridging the gap between resources and the underserved.
                                We believe in a world where every individual, regardless of their background, has access to quality education, healthcare, and a clean environment.
                            </p>
                        </div>
                    </section>

                    <section id="statistics">
                        <h3 style={styles.subHeader}>The Scale of Our Reach</h3>
                        <div style={styles.impactGrid}>
                            {[
                                { label: 'Families Supported', value: '1,500+', icon: '🏡' },
                                { label: 'Villages Reached', value: '45', icon: '📍' },
                                { label: 'Volunteers Enrolled', value: '500+', icon: '🤝' },
                                { label: 'Projects Completed', value: '120+', icon: '✅' }
                            ].map((stat, idx) => (
                                <div key={idx} style={styles.impactCard}>
                                    <div style={{ fontSize: '30px', marginBottom: '10px' }}>{stat.icon}</div>
                                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#1e3a8a', marginBottom: '5px' }}>{stat.value}</div>
                                    <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="focus-areas">
                        <h2 style={styles.sectionHeader}>Areas of Focus</h2>
                        <div style={styles.serviceGrid}>
                            <div style={styles.serviceCard}>
                                <div style={styles.iconCircle}>🎓</div>
                                <h3 style={{ color: '#1e3a8a', marginBottom: '15px' }}>Education</h3>
                                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                                    Bridging the digital divide with mobile learning hubs and solar kits for remote students.
                                </p>
                            </div>
                            <div style={styles.serviceCard}>
                                <div style={styles.iconCircle}>🏥</div>
                                <h3 style={{ color: '#1e3a8a', marginBottom: '15px' }}>Health</h3>
                                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                                    Mobile medical clinics and direct support for rural healthcare infrastructure.
                                </p>
                            </div>
                            <div style={styles.serviceCard}>
                                <div style={styles.iconCircle}>🌱</div>
                                <h3 style={{ color: '#1e3a8a', marginBottom: '15px' }}>Sustainability</h3>
                                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                                    Promoting eco-friendly living and reforestation projects within local communities.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="transparency">
                        <div style={{ background: '#fefce8', padding: '30px', borderRadius: '12px', border: '1px solid #fef08a' }}>
                            <h3 style={{ ...styles.subHeader, borderLeftColor: '#854d0e', color: '#854d0e' }}>100% Transparency Guarantee</h3>
                            <p style={{ fontSize: '15px', color: '#713f12', lineHeight: '1.6' }}>
                                We utilize a digital auditing framework where every rupee you donate is tracked and reported.
                                Our donors receive real-time updates and field reports, ensuring your contribution creates the maximum possible impact.
                            </p>
                        </div>
                    </section>

                    <div style={styles.ctaSection}>
                        <h2 style={{ fontSize: isMobile ? '24px' : '32px', marginBottom: '15px' }}>Join the Mission</h2>
                        <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 20px' }}>
                            Your support provides the foundation for tomorrow's leaders. Whether through volunteering or direct contribution, every effort counts.
                        </p>
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button onClick={() => navigate('/donate')} style={styles.button}>Donate Now</button>
                            <button onClick={() => navigate('/about')} style={{ ...styles.button, background: 'transparent', border: '2px solid #fff', color: '#fff' }}>Meet the Team</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;
