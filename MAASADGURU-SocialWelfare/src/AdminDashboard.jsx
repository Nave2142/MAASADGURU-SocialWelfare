import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import environment from './environment.json';

const AdminDashboard = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const API_BASE_URL = environment.api_base_url;

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/login');
        }
        fetchPhotos();
        fetchInquiries();
    }, [navigate]);

    const fetchInquiries = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/inquiry`);
            const data = await response.json();
            if (data.status === 'success') {
                setInquiries(data.data);
            }
        } catch (err) {
            console.error('Error fetching inquiries:', err);
        }
    };

    const fetchPhotos = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/gallery`);
            const data = await response.json();
            if (data.status === 'success') {
                setPhotos(data.data);
            }
        } catch (err) {
            console.error('Error fetching photos:', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/login');
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a file');
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('desc', desc);

        try {
            const response = await fetch(`${API_BASE_URL}/api/gallery/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.status === 'success') {
                setMessage('Upload successful!');
                setTitle('');
                setDesc('');
                setFile(null);
                fetchPhotos();
            } else {
                setMessage(data.message || 'Upload failed');
            }
        } catch (err) {
            setMessage('Upload failed: server connection error');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this photo?')) return;

        try {
            const response = await fetch(`${API_BASE_URL}/api/gallery/${id}`, {
                method: 'DELETE',
            });

            const data = await response.json();
            if (data.status === 'success') {
                setPhotos(photos.filter(p => p.id !== id));
            }
        } catch (err) {
            alert('Delete failed');
        }
    };

    const styles = {
        container: {
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            background: '#f5f5f5',
            minHeight: '70vh',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '20px',
        },
        title: {
            fontSize: '32px',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: '800',
        },
        logoutBtn: {
            padding: '10px 20px',
            background: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
        },
        section: {
            background: '#fff',
            padding: '30px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            marginBottom: '40px',
        },
        sectionTitle: {
            fontSize: '20px',
            marginBottom: '20px',
            color: '#1e3a8a',
            fontWeight: '700',
        },
        form: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
        },
        input: {
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            width: '100%',
            boxSizing: 'border-box',
        },
        uploadBtn: {
            padding: '14px',
            background: '#1e3a8a',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            gridColumn: '1 / -1',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
        },
        card: {
            background: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0',
            position: 'relative',
        },
        cardImg: {
            width: '100%',
            height: '180px',
            objectFit: 'cover',
        },
        cardBody: {
            padding: '15px',
        },
        cardTitle: {
            fontSize: '15px',
            fontWeight: '800',
            marginBottom: '8px',
            color: '#1e3a8a',
            fontFamily: "'Outfit', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        },
        cardDesc: {
            fontSize: '13px',
            color: '#64748b',
            lineHeight: '1.5',
            fontFamily: "'Inter', sans-serif"
        },
        deleteBtn: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(239, 68, 68, 0.9)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '18px',
        }
    };

    return (
        <div style={styles.container}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={styles.title}>Dashboard</h1>
                <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Add New Media (Photo/Video)</h2>
                <form style={styles.form} onSubmit={handleUpload}>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={styles.input}
                        accept="image/*,video/*"
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.uploadBtn} disabled={loading}>
                        {loading ? 'Uploading...' : 'Upload Media'}
                    </button>
                </form>
                {message && <p style={{ marginTop: '15px', color: message.includes('success') ? '#10b981' : '#ef4444' }}>{message}</p>}
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Contact Inquiries</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                                <th style={{ padding: '12px' }}>Date</th>
                                <th style={{ padding: '12px' }}>Name</th>
                                <th style={{ padding: '12px' }}>Contact</th>
                                <th style={{ padding: '12px' }}>Subject</th>
                                <th style={{ padding: '12px' }}>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inquiries.length > 0 ? inquiries.map((mq) => (
                                <tr key={mq.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '12px', fontSize: '13px' }}>{new Date(mq.created_at).toLocaleDateString()}</td>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>{mq.full_name}</td>
                                    <td style={{ padding: '12px', fontSize: '13px' }}>
                                        <div>{mq.email}</div>
                                        <div style={{ color: '#64748b' }}>{mq.mobile}</div>
                                    </td>
                                    <td style={{ padding: '12px' }}>{mq.subject}</td>
                                    <td style={{ padding: '12px', fontSize: '13px', color: '#475569' }}>{mq.message}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No inquiries found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <h2 style={{ ...styles.sectionTitle, marginBottom: '20px' }}>Current Gallery</h2>
            <div style={styles.grid}>
                {photos.map((photo) => {
                    // Correctly form the full URL for display
                    const fullUrl = photo.url.startsWith('http') ? photo.url : `${API_BASE_URL}${photo.url}`;
                    return (
                        <div key={photo.id} style={styles.card}>
                            <button onClick={() => handleDelete(photo.id)} style={styles.deleteBtn}>×</button>
                            {photo.type === 'video' ? (
                                <video src={fullUrl} style={styles.cardImg} controls muted />
                            ) : (
                                <img src={fullUrl} alt={photo.title} style={styles.cardImg} />
                            )}
                            <div style={styles.cardBody}>
                                <h3 style={styles.cardTitle}>{photo.title}</h3>
                                <p style={styles.cardDesc}>{photo.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AdminDashboard;
