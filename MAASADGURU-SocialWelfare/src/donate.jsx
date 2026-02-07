import React, { useState, useEffect } from 'react';

const Donate = ({ onBack }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            padding: isMobile ? '40px 15px' : '60px 20px',
            textAlign: 'center',
            minHeight: isMobile ? 'auto' : '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: isMobile ? 'none' : '0 4px 6px rgba(0,0,0,0.05)',
        },
        title: {
            fontSize: isMobile ? '24px' : '32px',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            marginBottom: '15px',
            textTransform: 'uppercase',
        },
        message: {
            fontSize: isMobile ? '15px' : '18px',
            color: '#4b5563',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginBottom: '30px',
        },
        icon: {
            fontSize: isMobile ? '48px' : '64px',
            marginBottom: '15px',
            color: '#f59e0b',
        },
        button: {
            padding: '12px 24px',
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background 0.3s',
            width: isMobile ? '100%' : 'auto',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.icon}>🙏</div>
            <h2 style={styles.title}>Support Our Cause</h2>
            <p style={styles.message}>
                Thank you for your interest in supporting Maasadguru Social Services.
                Please note that <strong>donations are not being accepted at the moment</strong> as we are currently updating our payment systems.
                We appreciate your patience and heart for social welfare.
            </p>
            <button style={styles.button} onClick={onBack}>
                Back to Home
            </button>
        </div>
    );
};

export default Donate;
