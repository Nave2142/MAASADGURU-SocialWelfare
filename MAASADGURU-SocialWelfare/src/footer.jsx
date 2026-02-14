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
            background: '#1b263b',
            color: '#e2e8f0',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            borderTop: '5px solid #f59e0b',
        },
        topSection: {
            padding: isMobile ? '30px 5%' : '40px 10%',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isTablet ? '1fr 1fr' : 'repeat(4, 1fr)'),
            gap: isMobile ? '25px' : '30px',
            borderBottom: '1px solid #334155',
        },
        footerCol: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        },
        footerTitle: {
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '700',
            marginBottom: '8px',
            textTransform: 'uppercase',
            borderBottom: isMobile ? '1px solid #334155' : 'none',
            paddingBottom: isMobile ? '5px' : '0',
        },
        footerLink: {
            color: '#cbd5e1',
            textDecoration: 'none',
            marginBottom: '5px',
            display: 'block',
            transition: 'color 0.2s',
        },
        bottomSection: {
            padding: '20px 5%',
            textAlign: 'center',
            background: '#0f172a',
            color: '#94a3b8',
            fontSize: '11px',
        },
        govtText: {
            marginTop: '10px',
            fontStyle: 'italic',
            opacity: 0.8,
        }
    };

    return (
        <footer id="contact" style={styles.footer}>
            <div style={styles.topSection}>
                <div style={styles.footerCol}>
                    <h4 style={styles.footerTitle}>About Portal</h4>
                    <a href="#" style={styles.footerLink}>Overview</a>
                    <a href="#" style={styles.footerLink}>Terms of Use</a>
                    <a href="#" style={styles.footerLink}>Privacy Policy</a>
                    <a href="#" style={styles.footerLink}>Disclaimer</a>
                </div>

                <div style={styles.footerCol}>
                    <h4 style={styles.footerTitle}>Important Links</h4>
                    <a href="#" style={styles.footerLink}>NITI Aayog</a>
                    <a href="#" style={styles.footerLink}>Ministry Information</a>
                    <a href="#" style={styles.footerLink}>National Portal</a>
                    <a href="#" style={styles.footerLink}>Digital India</a>
                </div>

                <div style={styles.footerCol}>
                    <h4 style={styles.footerTitle}>Resources</h4>
                    <a href="#" style={styles.footerLink}>User Manuals</a>
                    <a href="#" style={styles.footerLink}>Guidelines</a>
                    <a href="#" style={styles.footerLink}>FAQs</a>
                    <a href="#" style={styles.footerLink}>Grievance</a>
                </div>

                <div style={styles.footerCol}>
                    <h4 style={styles.footerTitle}>Contact</h4>
                    <p style={{ margin: '0 0 10px', lineHeight: '1.5' }}>
                        <strong>Maasadguru Social Service</strong><br />
                        Hyderabad, Telangana<br />
                        India
                    </p>
                    <p style={{ margin: 0 }}>Email: support@maasadguru.org</p>
                    <p style={{ margin: '8px 0 0', lineHeight: '1.4' }}>
                        Call: +91 8143177143<br />
                        Call: +91 9908709764
                    </p>
                </div>
            </div>

            <div style={styles.bottomSection}>
                <div style={{ marginBottom: '10px' }}>Content Owned, Maintained and Updated by Maasadguru Social Service</div>
                <div style={styles.govtText}>Modeled after National Standards for NGO Transparency</div>
                <div style={{ marginTop: '15px', color: '#64748b' }}>© 2026 Maasadguru. All Rights Reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
