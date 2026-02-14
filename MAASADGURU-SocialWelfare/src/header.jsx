import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            setWidth(currentWidth);
            setIsMobile(currentWidth < 1024);
            if (currentWidth >= 1024) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen, isMobile]);

    const styles = {
        headerWrapper: {
            position: isMobile ? 'fixed' : 'relative',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 2000,
            background: '#ffffff',
            boxShadow: isMobile ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        },
        mainHeader: {
            padding: isMobile ? '12px 20px' : '15px 10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1400px',
            margin: '0 auto',
        },
        logoSection: {
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '10px' : '18px',
            cursor: 'pointer',
            textDecoration: 'none'
        },
        logoImg: {
            height: isMobile ? '40px' : '68px',
            width: 'auto',
            objectFit: 'contain',
            transition: 'transform 0.3s ease',
        },
        logoTextContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        logoTitle: {
            margin: 0,
            fontSize: isMobile ? '18px' : '28px',
            fontWeight: '800',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            textTransform: 'uppercase',
            lineHeight: '1.1',
        },
        logoSubtitle: {
            margin: 0,
            fontSize: isMobile ? '9px' : '12px',
            color: '#059669',
            fontWeight: '700',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
        },
        navBar: {
            background: isMobile ? '#ffffff' : '#1e3a8a',
            padding: isMobile ? '0' : '0 10%',
            position: isMobile ? 'fixed' : 'static',
            top: 0,
            right: isMobile ? (menuOpen ? '0' : '-100%') : 'auto',
            width: isMobile ? '80%' : 'auto',
            height: isMobile ? '100vh' : 'auto',
            zIndex: 3000,
            boxShadow: isMobile ? '-5px 0 15px rgba(0,0,0,0.1)' : 'none',
            transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isMobile ? 'flex-start' : 'center',
            paddingTop: isMobile ? '80px' : '0',
        },
        navList: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            width: isMobile ? '100%' : 'auto',
        },
        navLink: {
            color: isMobile ? '#1e3a8a' : '#ffffff',
            textDecoration: 'none',
            padding: isMobile ? '18px 30px' : '15px 20px',
            fontSize: isMobile ? '16px' : '14px',
            fontWeight: '600',
            borderBottom: isMobile ? '1px solid #f1f5f9' : 'none',
            borderRight: !isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
            transition: 'all 0.3s ease',
            fontFamily: "'Inter', sans-serif",
            cursor: 'pointer',
        },
        activeLink: {
            background: isMobile ? '#eff6ff' : 'rgba(255,255,255,0.1)',
            color: isMobile ? '#1e3a8a' : '#f59e0b',
            borderLeft: isMobile ? '4px solid #f59e0b' : 'none',
        },
        menuToggle: {
            display: isMobile ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f1f5f9',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            fontSize: '20px',
            color: '#1e3a8a',
            cursor: 'pointer',
            zIndex: 4000,
        },
        backdrop: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            opacity: menuOpen ? 1 : 0,
            visibility: menuOpen ? 'visible' : 'hidden',
            transition: 'all 0.4s ease',
            zIndex: 2500,
        },
        mobileMenuHeader: {
            padding: '20px 30px',
            borderBottom: '1px solid #f1f5f9',
            marginBottom: '10px',
            display: isMobile ? 'block' : 'none',
        },
        donateBtn: {
            background: '#f59e0b',
            color: '#000',
            border: 'none',
            padding: '10px 24px',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            borderRadius: '6px',
            fontFamily: "'Inter', sans-serif",
            boxShadow: '0 4px 6px rgba(245, 158, 11, 0.2)',
            transition: 'transform 0.2s',
        }
    };

    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    return (
        <div style={styles.headerWrapper}>
            {isMobile && <div style={styles.backdrop} onClick={handleMenuClick} />}

            <div style={styles.mainHeader}>
                <NavLink to="/" style={styles.logoSection} onClick={handleMenuClick}>
                    <img src="/favicon1.png" alt="Logo" style={styles.logoImg} className="logo-hover" />
                    <div style={styles.logoTextContainer}>
                        <h1 style={styles.logoTitle}>MAASADGURU</h1>
                        <p style={styles.logoSubtitle}>Social Service</p>
                    </div>
                </NavLink>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {!isMobile && <button onClick={() => navigate('/donate')} style={styles.donateBtn}>DONATE</button>}
                    <button style={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                        <span style={{ transform: menuOpen ? 'scale(1.2)' : 'none', transition: 'transform 0.3s' }}>
                            {menuOpen ? '✕' : '☰'}
                        </span>
                    </button>
                </div>
            </div>

            <nav style={styles.navBar}>
                {isMobile && (
                    <div style={styles.mobileMenuHeader}>
                        <h2 style={{ fontSize: '20px', color: '#1e3a8a', margin: 0, fontFamily: "'Outfit', sans-serif" }}>Menu</h2>
                    </div>
                )}
                <div style={styles.navList}>
                    <NavLink to="/" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>Home</NavLink>
                    <NavLink to="/gallery" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>Gallery</NavLink>
                    <NavLink to="/about" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>About Us</NavLink>
                    <NavLink to="/services" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>Services</NavLink>
                    <NavLink to="/contact" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>Contact Us</NavLink>
                    {isMobile && (
                        <NavLink to="/donate" style={{ ...styles.navLink, background: '#f59e0b', color: '#000', textAlign: 'center', marginTop: '20px', marginX: '30px', borderRadius: '8px' }} onClick={handleMenuClick}>DONATE NOW</NavLink>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
