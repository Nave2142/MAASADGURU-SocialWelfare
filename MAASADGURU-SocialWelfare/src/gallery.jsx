import React, { useState, useEffect } from 'react';
import environment from './environment.json';

const Gallery = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const API_BASE_URL = environment.api_base_url;

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
        itemContainer: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            marginBottom: '50px',
        },
        itemImageWrapper: {
            flex: '0 0 45%',
            maxWidth: '45%',
        },
        itemImage: {
            width: '100%',
            borderRadius: '16px',
            objectFit: 'cover',
        },
        itemText: {
            flex: '1',
            padding: isMobile ? '20px 0' : '0 30px',
        },
        itemTitle: {
            fontSize: isMobile ? '22px' : '28px',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: '800',
            textTransform: 'uppercase',
            marginBottom: '10px',
        },
        itemDesc: {
            fontSize: isMobile ? '15px' : '18px',
            lineHeight: 1.6,
            color: '#475569',
            fontFamily: "'Inter', sans-serif",
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
                        <>
                            {images.map((img, index) => {
                                const reverse = !isMobile && index % 2 === 1;
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            ...styles.itemContainer,
                                            flexDirection: isMobile ? 'column' : (reverse ? 'row-reverse' : 'row')
                                        }}
                                    >
                                        <div style={styles.itemImageWrapper}>
                                            {img.type === 'video' ? (
                                                <video
                                                    src={img.url}
                                                    style={styles.itemImage}
                                                    controls
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                            ) : (
                                                <img src={img.url} alt={img.title} style={styles.itemImage} />
                                            )}
                                        </div>
                                        <div style={styles.itemText}>
                                            <h3 style={styles.itemTitle}>{img.title}</h3>
                                            <p style={styles.itemDesc}>{img.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
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
