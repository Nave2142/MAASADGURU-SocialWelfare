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

    const styles = {
        mainHeader: {
            padding: isMobile ? '10px 5%' : '15px 10%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: isMobile ? '1px solid #eee' : 'none',
        },
        topInfoBar: {
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            padding: isMobile ? '6px 5%' : '6px 10%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-end',
            gap: isMobile ? '8px 15px' : '20px',
            fontSize: isMobile ? '10px' : '12px',
            color: '#64748b',
            fontFamily: "'Inter', sans-serif",
        },
        infoItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
        },
        logoSection: {
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '12px' : '18px',
            cursor: 'pointer',
            textDecoration: 'none'
        },
        logoImg: {
            height: isMobile ? '45px' : '68px',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.08))',
            transition: 'transform 0.3s ease',
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
            fontSize: isMobile ? '10px' : '12px',
            color: '#059669',
            fontWeight: '600',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
        },
        navBar: {
            background: '#1e3a8a',
            padding: isMobile ? '0' : '0 10%',
            display: isMobile ? (menuOpen ? 'block' : 'none') : 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: isMobile ? 'fixed' : 'static',
            top: isMobile ? (width < 600 ? '110px' : '95px') : 'auto',
            left: 0,
            width: isMobile ? '100%' : 'auto',
            height: 'auto',
            maxHeight: isMobile ? 'calc(100vh - 95px)' : 'auto',
            zIndex: 1000,
            boxShadow: isMobile ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
            overflowY: isMobile ? 'auto' : 'visible',
            transition: 'all 0.3s ease-in-out',
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
            textAlign: 'left',
            display: isMobile ? 'block' : 'inline-block',
            width: isMobile ? '100%' : 'auto',
            whiteSpace: 'nowrap',
            flexShrink: 0,
        },
        activeLink: {
            background: 'rgba(255,255,255,0.1)',
            color: '#f59e0b',
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
            textDecoration: 'none'
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

    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    return (
        <header style={{
            position: isMobile ? 'fixed' : 'relative',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 2000,
            background: '#fff'
        }}>
            {isMobile && menuOpen && (
                <div
                    onClick={handleMenuClick}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 900
                    }}
                />
            )}
            <div style={styles.topInfoBar}>
                <div style={styles.infoItem}>
                    <span style={{ fontWeight: '700', color: '#1e3a8a' }}>Founder:</span> Jatothu Ravi (8143177143)
                </div>
                {!isMobile && <span style={{ color: '#cbd5e1' }}>|</span>}
                <div style={styles.infoItem}>
                    <span style={{ fontWeight: '700', color: '#10b981' }}>Co-Founder:</span> Gugulothu Naveen (9908709764)
                </div>
            </div>
            <div style={styles.mainHeader}>
                <NavLink to="/" style={styles.logoSection} onClick={handleMenuClick}>
                    <img src="/favicon1.png" alt="Logo" style={styles.logoImg} className="logo-hover" />
                    <div style={styles.logoTextContainer}>
                        <h1 style={styles.logoTitle}>MAASADGURU</h1>
                        <p style={styles.logoSubtitle}>Social Service</p>
                    </div>
                </NavLink>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {!isMobile && <button onClick={() => navigate('/donate')} style={styles.donateBtn}>DONATE</button>}
                    <button style={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                        <div style={{ transform: menuOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s ease' }}>
                            {menuOpen ? '✕' : '☰'}
                        </div>
                    </button>
                </div>
            </div>

            <nav style={styles.navBar}>
                <div style={styles.navList}>
                    <NavLink to="/" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>Home</NavLink>
                    <NavLink to="/gallery" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>Gallery</NavLink>
                    <NavLink to="/about" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>About Us</NavLink>
                    <NavLink to="/services" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>Services</NavLink>
                    <NavLink to="/contact" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} onClick={handleMenuClick}>Contact Us</NavLink>
                    <NavLink to="/donate" style={styles.mobileDonateBtn} onClick={handleMenuClick}>DONATE NOW</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
