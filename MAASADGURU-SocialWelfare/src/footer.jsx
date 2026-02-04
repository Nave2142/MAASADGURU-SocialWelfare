import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            background: '#1b263b', // Dark blue background
            color: '#e2e8f0',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            borderTop: '5px solid #f59e0b', // Accent color top border
        },
        topSection: {
            padding: '40px 10%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            borderBottom: '1px solid #334155',
        },
        footerCol: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
        },
        footerTitle: {
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '700',
            marginBottom: '10px',
            textTransform: 'uppercase',
        },
        footerLink: {
            color: '#cbd5e1',
            textDecoration: 'none',
            marginBottom: '8px',
            display: 'block',
            transition: 'color 0.2s',
        },
        bottomSection: {
            padding: '20px 10%',
            textAlign: 'center',
            background: '#0f172a',
            color: '#94a3b8',
            fontSize: '12px',
        },
        govtText: {
            marginTop: '10px',
            fontStyle: 'italic',
        }
    };

    return (
        <footer style={styles.footer}>
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
                    <p style={{ margin: '0 0 10px' }}>
                        <strong>Maasadguru Social Services</strong><br />
                        Hyderabad, Telangana<br />
                        India
                    </p>
                    <p style={{ margin: 0 }}>Email: support@maasadguru.org</p>
                </div>
            </div>

            <div style={styles.bottomSection}>
                <div>Content Owned, Maintained and Updated by Maasadguru Social Welfare Organization</div>
                <div style={styles.govtText}>Modeled after National Standards for NGO Transparency</div>
                <div style={{ marginTop: '15px' }}>© 2026 Maasadguru. All Rights Reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
