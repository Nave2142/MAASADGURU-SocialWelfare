import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Donate = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            padding: isMobile ? '60px 20px' : '100px 30px',
            textAlign: 'center',
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        card: {
            background: '#fff',
            padding: isMobile ? '40px 25px' : '60px 50px',
            borderRadius: '24px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
            maxWidth: '700px',
            width: '100%'
        },
        title: {
            fontSize: isMobile ? '28px' : '42px',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            marginBottom: '20px',
            fontWeight: '800',
            lineHeight: 1.2
        },
        message: {
            fontSize: isMobile ? '16px' : '19px',
            color: '#475569',
            lineHeight: '1.8',
            marginBottom: '35px',
        },
        icon: {
            fontSize: isMobile ? '64px' : '84px',
            marginBottom: '25px',
            display: 'inline-block',
        },
        button: {
            padding: '18px 45px',
            backgroundColor: '#f59e0b',
            color: '#000',
            border: 'none',
            borderRadius: '14px',
            fontSize: '18px',
            fontWeight: '800',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            width: isMobile ? '100%' : 'auto',
            boxShadow: '0 4px 10px rgba(245,158,11,0.3)'
        },
        badge: {
            display: 'inline-block',
            padding: '8px 20px',
            background: '#eff6ff',
            color: '#1e3a8a',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '700',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    };

    return (
        <div style={styles.container} className="reveal-instant">
            <div style={styles.card}>
                <div style={styles.badge}>Contribution Portal</div>
                <div style={styles.icon}>🙏</div>
                <h2 style={styles.title}>Support Our Mission</h2>
                <p style={styles.message}>
                    Your support at <strong>Maasadguru Social Service</strong> directly impacts remote villages in Telangana.
                    As a registered <strong>12A & 80G</strong> entity, we ensure complete transparency and professional stewardship of all contributions.
                </p>
                <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: '20px', borderRadius: '16px', marginBottom: '40px' }}>
                    <p style={{ margin: 0, color: '#92400e', fontWeight: '700', fontSize: '15px', lineHeight: 1.6 }}>
                        Note: Online donations are temporarily restricted for system upgrades. Please contact our leadership directly for support and verification of banking details.
                    </p>
                </div>
                <button style={styles.button} onClick={() => navigate('/')} className="ngo-badge">
                    Return to Home
                </button>
            </div>
        </div>
    );
};

export default Donate;
