import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const images = [
        {
            url: "https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=1170&auto=format&fit=crop",
            title: "Educational Reform",
            desc: "Empowering rural students through digital literacy."
        },
        {
            url: "https://images.unsplash.com/photo-1652858672796-960164bd632b?q=80&w=1170&auto=format&fit=crop",
            title: "Environmental Impact",
            desc: "Sustaining local ecosystems through community action."
        },
        {
            url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
            title: "Learning Support",
            desc: "Bridging the gap in primary education resources."
        },
        {
            url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
            title: "Community Growth",
            desc: "Direct field-level support for local families."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const styles = {
        mainContainer: {
            maxWidth: '1200px',
            margin: '0 auto 60px',
            padding: isMobile ? '0 12px' : '0 30px',
        },
        contentWrapper: {
            background: '#fff',
            padding: isMobile ? '35px 20px' : '65px 45px',
            marginTop: isMobile ? '30px' : '50px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
            borderRadius: '24px'
        },
        sectionHeader: {
            fontSize: isMobile ? '22px' : '28px',
            color: '#1e3a8a',
            borderBottom: '3px solid #f59e0b',
            paddingBottom: '10px',
            marginBottom: '30px',
            display: 'inline-block',
            fontFamily: "'Outfit', sans-serif",
            textTransform: 'uppercase',
            fontWeight: '800'
        },
        sliderContainer: {
            position: 'relative',
            width: '100%',
            height: isMobile ? '300px' : (isTablet ? '400px' : '550px'),
            overflow: 'hidden',
            borderRadius: '24px',
            marginBottom: '40px',
            background: '#000',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
        },
        slide: {
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'flex-end',
        },
        slideCaption: {
            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.85))',
            color: '#fff',
            width: '100%',
            padding: isMobile ? '40px 20px 20px' : '80px 40px 40px',
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper} className="reveal-instant">
                <section id="gallery">
                    <h2 style={styles.sectionHeader}>Impact Gallery</h2>
                    <div style={styles.sliderContainer}>
                        {images.map((img, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.slide,
                                    backgroundImage: `url(${img.url})`,
                                    opacity: index === currentIndex ? 1 : 0,
                                    zIndex: index === currentIndex ? 1 : 0
                                }}
                            >
                                <div style={styles.slideCaption}>
                                    <h3 style={{ margin: '0 0 8px 0', fontSize: isMobile ? '20px' : '28px', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>{img.title}</h3>
                                    <p style={{ margin: 0, fontSize: isMobile ? '14px' : '16px', opacity: 0.9, lineHeight: 1.5 }}>{img.desc} - Verified Social Service Activity</p>
                                </div>
                            </div>
                        ))}
                        <div style={{ position: 'absolute', bottom: '25px', right: isMobile ? '20px' : '40px', zIndex: 2, display: 'flex', gap: '10px' }}>
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: index === currentIndex ? '30px' : '10px',
                                        height: '10px',
                                        borderRadius: '10px',
                                        background: index === currentIndex ? '#f59e0b' : 'rgba(255,255,255,0.4)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', color: '#64748b', fontSize: '15px' }}>
                        <p>Documenting our journey across the districts of Telangana.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;
