import React from 'react';

const Donate = ({ onBack }) => {
    const styles = {
        container: {
            padding: '60px 20px',
            textAlign: 'center',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        },
        title: {
            fontSize: '32px',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            marginBottom: '20px',
            textTransform: 'uppercase',
        },
        message: {
            fontSize: '18px',
            color: '#4b5563',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginBottom: '40px',
        },
        icon: {
            fontSize: '64px',
            marginBottom: '20px',
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
