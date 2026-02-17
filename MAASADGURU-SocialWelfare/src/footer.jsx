import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        footer: {
            background: '#0f172a',
            color: '#94a3b8',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            borderTop: '6px solid #f59e0b',
            marginTop: '60px'
        },
        topSection: {
            padding: isMobile ? '60px 25px' : '80px 50px',
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : '1.5fr 1fr 1fr 1.2fr'),
            gap: isMobile ? '40px' : '60px',
        },
        footerCol: {
            display: 'flex',
            flexDirection: 'column',
        },
        brandCol: {
            maxWidth: '300px'
        },
        footerTitle: {
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '800',
            marginBottom: '25px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: "'Outfit', sans-serif"
        },
        footerLink: {
            color: '#94a3b8',
            textDecoration: 'none',
            marginBottom: '15px',
            display: 'block',
            transition: 'all 0.3s ease',
            fontSize: '15px'
        },
        bottomSection: {
            padding: '30px 25px',
            textAlign: 'center',
            background: '#020617',
            borderTop: '1px solid #1e293b',
            color: '#64748b',
            fontSize: '12px',
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.topSection}>
                <div style={{ ...styles.footerCol, ...styles.brandCol }}>
                    <h3 style={{ ...styles.footerTitle, color: '#f59e0b', fontSize: '20px', marginBottom: '20px' }}>Maasadguru</h3>
                    <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                        Dedicated to professionalizing social welfare and community support across Telangana. Since 2024, our mission has been to serve with transparency and impact.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {/* Social icons could go here */}
                    </div>
                </div>

                <div style={styles.footerCol}>
                    <h4 style={styles.footerTitle}>Quick Links</h4>
                    <a href="/about" style={styles.footerLink}>About Our Mission</a>
                    <a href="/services" style={styles.footerLink}>Services & Programs</a>
                    <a href="/gallery" style={styles.footerLink}>Impact Gallery</a>
                    <a href="/donate" style={styles.footerLink}>Support Us</a>
                </div>

                <div style={styles.footerCol}>
                    <h4 style={styles.footerTitle}>Compliance</h4>
                    <a href="https://niti.gov.in/" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>NITI Aayog Darpan</a>
                    <a href="#" style={styles.footerLink}>Annual Reports</a>
                    <a href="#" style={styles.footerLink}>80G/12A Status</a>
                    <a href="#" style={styles.footerLink}>Transparency Code</a>
                </div>

                <div style={styles.footerCol}>
                    <h4 style={styles.footerTitle}>Direct Contact</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <span style={{ color: '#f59e0b' }}>📍</span>
                            <span>H.No: 1-7-143, Uppal, Hyderabad, 500039</span>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <span style={{ color: '#f59e0b' }}>📞</span>
                            <span>+91 81431 77143<br />+91 99087 09764</span>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <span style={{ color: '#f59e0b' }}>✉️</span>
                            <span>maasadguru@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.bottomSection}>
                <p style={{ margin: '0 0 10px 0' }}>Approved by Maasadguru Social Service Governance Committee</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '15px' }}>
                    <span>Registered Charity: 584/2024</span>
                    <span>PAN: AAATM1431C</span>
                </div>
                <div style={{ color: '#475569' }}>© 2026 Maasadguru Social Service. All rights reserved. Professional Social Welfare.</div>
            </div>
        </footer>
    );
};

export default Footer;
