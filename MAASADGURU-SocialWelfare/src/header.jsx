import React from 'react';

const Header = () => {
    const styles = {
        topBar: {
            background: '#f1f1f1',
            padding: '5px 10%',
            fontSize: '12px',
            color: '#333',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '20px',
            borderBottom: '1px solid #ddd',
        },
        mainHeader: {
            padding: '15px 10%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        logoSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
        },
        logoImg: {
            height: '60px',
            objectFit: 'contain',
        },
        logoTextContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        logoTitle: {
            margin: 0,
            fontSize: '28px',
            fontWeight: '700',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            textTransform: 'uppercase',
            lineHeight: '1.2',
        },
        logoSubtitle: {
            margin: 0,
            fontSize: '14px',
            color: '#065f46',
            fontWeight: '600',
            letterSpacing: '1px',
        },
        navBar: {
            background: '#1e3a8a',
            padding: '0 10%',
            display: 'flex',
            alignItems: 'center',
        },
        navLink: {
            color: '#ffffff',
            textDecoration: 'none',
            padding: '15px 20px',
            fontSize: '14px',
            fontWeight: '500',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            transition: 'background 0.3s',
            fontFamily: "'Inter', sans-serif",
        }
    };

    return (
        <header>
            {/* Top Utility Bar */}
            <div style={styles.topBar}>
                <span>Screen Reader Access</span>
                <span>A-</span>
                <span>A</span>
                <span>A+</span>
            </div>

            {/* Main Brand Header */}
            <div style={styles.mainHeader}>
                <div style={styles.logoSection}>
                    <img src="/favicon.png" alt="Logo" style={styles.logoImg} />
                    <div style={styles.logoTextContainer}>
                        <h1 style={styles.logoTitle}>MAASADGURU</h1>
                        <p style={styles.logoSubtitle}>SOCIAL WELFARE ORGANIZATION</p>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav style={styles.navBar}>
                <a href="#" style={styles.navLink}>Home</a>
                <a href="#about" style={styles.navLink}>About Us</a>
                <a href="#programs" style={styles.navLink}>Programs</a>
                <a href="#statistics" style={styles.navLink}>Statistics</a>
                <a href="#founders" style={styles.navLink}>Leadership</a>
                <a href="#contact" style={styles.navLink}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;
