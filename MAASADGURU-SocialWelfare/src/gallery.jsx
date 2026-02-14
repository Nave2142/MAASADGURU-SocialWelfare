import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;

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
        sliderContainer: {
            position: 'relative',
            width: '100%',
            height: isMobile ? '250px' : '450px',
            overflow: 'hidden',
            borderRadius: '8px',
            marginBottom: '40px',
            background: '#000',
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
            background: 'rgba(0, 0, 0, 0.6)',
            color: '#fff',
            width: '100%',
            padding: isMobile ? '15px' : '20px 40px',
            backdropFilter: 'blur(5px)',
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper}>
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
                                    <h3 style={{ margin: '0 0 5px 0', fontSize: isMobile ? '16px' : '20px' }}>{img.title}</h3>
                                    <p style={{ margin: 0, fontSize: isMobile ? '12px' : '14px', opacity: 0.9 }}>{img.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div style={{ position: 'absolute', bottom: '15px', right: isMobile ? '15px' : '40px', zIndex: 2, display: 'flex', gap: '8px' }}>
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: index === currentIndex ? '#f59e0b' : 'rgba(255,255,255,0.5)',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;
