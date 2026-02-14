import React, { useState, useEffect } from 'react';

const Header = ({ setPage }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        mainHeader: {
            padding: isMobile ? '10px 5%' : '15px 10%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: isMobile ? '1px solid #eee' : 'none',
        },
        logoSection: {
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '10px' : '15px',
        },
        logoImg: {
            height: isMobile ? '40px' : '60px',
            objectFit: 'contain',
        },
        logoTextContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        logoTitle: {
            margin: 0,
            fontSize: isMobile ? '20px' : '28px',
            fontWeight: '700',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            textTransform: 'uppercase',
            lineHeight: '1.2',
        },
        logoSubtitle: {
            margin: 0,
            fontSize: isMobile ? '10px' : '14px',
            color: '#065f46',
            fontWeight: '600',
            letterSpacing: '1px',
        },
        navBar: {
            background: '#1e3a8a',
            padding: isMobile ? '0' : '0 10%',
            display: isMobile ? (menuOpen ? 'block' : 'none') : 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: isMobile ? 'absolute' : 'static',
            top: isMobile ? '60px' : 'auto',
            left: 0,
            width: isMobile ? '100%' : 'auto',
            zIndex: 1000,
            boxShadow: isMobile ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
        },
        navList: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            width: isMobile ? '100%' : 'auto',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
        },
        navLink: {
            color: '#ffffff',
            textDecoration: 'none',
            padding: isMobile ? '15px 5%' : '15px 20px',
            fontSize: '14px',
            fontWeight: '500',
            borderRight: !isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
            borderBottom: isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
            transition: 'background 0.3s',
            fontFamily: "'Inter', sans-serif",
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            textAlign: 'left',
            display: isMobile ? 'block' : 'inline-block',
            width: isMobile ? '100%' : 'auto',
            whiteSpace: 'nowrap',
            flexShrink: 0,
        },
        donateBtn: {
            background: '#f59e0b',
            color: '#000',
            border: 'none',
            padding: isMobile ? '8px 15px' : '10px 20px',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '700',
            cursor: 'pointer',
            borderRadius: '4px',
            fontFamily: "'Inter', sans-serif",
            display: isMobile ? 'none' : 'block',
        },
        mobileDonateBtn: {
            background: '#f59e0b',
            color: '#000',
            border: 'none',
            padding: '15px 5%',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            display: isMobile ? 'block' : 'none',
            textAlign: 'left',
            width: '100%',
        },
        menuToggle: {
            display: isMobile ? 'block' : 'none',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            color: '#1e3a8a',
            cursor: 'pointer',
            padding: '5px',
        }
    };

    const handleLinkClick = (page, hash) => {
        setPage(page);
        setMenuOpen(false);
        if (hash) {
            window.location.hash = hash;
        } else {
            window.history.pushState(null, null, ' ');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header style={{ position: 'relative' }}>
            <div style={styles.mainHeader}>
                <div style={styles.logoSection} onClick={() => handleLinkClick('home')}>
                    <img src="/favicon.png" alt="Logo" style={styles.logoImg} />
                    <div style={styles.logoTextContainer}>
                        <h1 style={styles.logoTitle}>MAASADGURU</h1>
                        <p style={styles.logoSubtitle}>Social Service</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button onClick={() => setPage('donate')} style={styles.donateBtn}>DONATE</button>
                    <button style={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            <nav style={styles.navBar}>
                <div style={styles.navList}>
                    <button onClick={() => handleLinkClick('home')} style={styles.navLink}>Home</button>
                    <button onClick={() => handleLinkClick('home', '#about')} style={styles.navLink}>About Us</button>
                    <button onClick={() => handleLinkClick('home', '#features')} style={styles.navLink}>NGO Directory</button>
                    <button onClick={() => handleLinkClick('home', '#statistics')} style={styles.navLink}>Statistics</button>
                    <button onClick={() => handleLinkClick('home', '#services')} style={styles.navLink}>NGO Resources</button>
                    <button onClick={() => handleLinkClick('home', '#leadership')} style={styles.navLink}>Leadership</button>
                    <button onClick={() => handleLinkClick('home', '#contact')} style={styles.navLink}>Contact Us</button>
                    <button onClick={() => { setPage('donate'); setMenuOpen(false); }} style={styles.mobileDonateBtn}>DONATE NOW</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
