import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const API_BASE_URL = 'http://localhost:5000';

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        fetchGallery();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const fetchGallery = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/gallery`);
            const data = await response.json();
            if (data.status === 'success') {
                const formattedImages = data.data.map(img => ({
                    ...img,
                    url: img.url.startsWith('http') ? img.url : `${API_BASE_URL}${img.url}`
                }));
                setImages(formattedImages);
            }
        } catch (err) {
            console.error('Error fetching gallery:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (images.length === 0) return;
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

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '100px' }}>Loading Gallery...</div>;
    }

    return (
        <div style={styles.mainContainer}>
            <div style={styles.contentWrapper} className="reveal-instant">
                <section id="gallery">
                    <h2 style={styles.sectionHeader}>Impact Gallery</h2>
                    {images.length > 0 ? (
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
                    ) : (
                        <div style={{ textAlign: 'center', padding: '50px', background: '#f8fafc', borderRadius: '16px' }}>
                            <p>No images available in the gallery yet.</p>
                        </div>
                    )}
                    <div style={{ textAlign: 'center', color: '#64748b', fontSize: '15px' }}>
                        <p>Documenting our journey across the districts of Telangana.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;
