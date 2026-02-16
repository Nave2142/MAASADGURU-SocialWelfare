import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent.jsx';

const ContactUs = () => {
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
        contactGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '40px',
            marginTop: '20px'
        },
        infoBox: {
            background: '#f8fafc',
            padding: '30px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        },
        input: {
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #cbd5e1',
            fontFamily: "'Inter', sans-serif"
        },
        textarea: {
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #cbd5e1',
            minHeight: '120px',
            fontFamily: "'Inter', sans-serif"
        },
        submitBtn: {
            background: '#1e3a8a',
            color: '#fff',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '600',
            alignSelf: 'flex-start'
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper}>
                <h2 style={styles.sectionHeader}>Contact Us</h2>
                <div style={styles.contactGrid}>
                    <div style={styles.infoBox}>
                        <h3 style={{ color: '#1e3a8a', marginBottom: '20px' }}>Get in Touch</h3>
                        <p style={{ marginBottom: '15px' }}><strong>📍 Address:</strong> Hyderabad, Telangana, India</p>
                        <p style={{ marginBottom: '15px' }}><strong>📧 Email:</strong> support@maasadguru.org</p>
                        <p style={{ marginBottom: '15px' }}><strong>📞 Founder:</strong> +91 8143177143</p>
                        <p style={{ marginBottom: '15px' }}><strong>📞 Co-Founder:</strong> +91 9908709764</p>
                    </div>

                    <div>
                        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Your Name" style={styles.input} />
                            <input type="email" placeholder="Your Email" style={styles.input} />
                            <input type="text" placeholder="Subject" style={styles.input} />
                            <textarea placeholder="Your Message" style={styles.textarea}></textarea>
                            <button type="submit" style={styles.submitBtn}>Send Message</button>
                        </form>
                    </div>
                </div>

                <div style={{ marginTop: '40px', padding: isMobile ? '20px' : '40px', background: '#f8fafc', borderRadius: '8px' }}>
                    <h3 style={{ ...styles.sectionHeader, marginBottom: '30px' }}>Our Location</h3>
                    <MapComponent isMobile={isMobile} />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
