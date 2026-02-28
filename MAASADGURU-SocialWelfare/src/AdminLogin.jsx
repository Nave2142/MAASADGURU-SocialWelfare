import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import environment from './environment.json';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    const API_BASE_URL = environment.api_base_url;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.status === 'success') {
                localStorage.setItem('adminToken', data.token);
                localStorage.setItem('adminUser', data.username);
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Could not connect to the server');
        } finally {
            setLoading(false);
        }
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: isMobile ? 'flex-start' : 'center',
            minHeight: isMobile ? 'calc(100vh - 150px)' : '70vh',
            padding: isMobile ? '40px 15px' : '60px 20px',
            background: '#f1f5f9',
            transition: 'all 0.3s ease',
        },
        card: {
            background: '#fff',
            padding: isMobile ? '30px 20px' : '45px',
            borderRadius: '24px',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
            width: '100%',
            maxWidth: '420px',
            transform: 'translateY(0)',
            transition: 'all 0.3s ease',
        },
        title: {
            fontSize: isMobile ? '24px' : '32px',
            color: '#1e3a8a',
            marginBottom: '35px',
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: '800',
            letterSpacing: '-0.5px'
        },
        inputGroup: {
            marginBottom: '24px',
        },
        label: {
            display: 'block',
            marginBottom: '10px',
            fontSize: '14px',
            color: '#475569',
            fontWeight: '700',
            fontFamily: "'Inter', sans-serif",
        },
        input: {
            width: '100%',
            padding: '14px 18px',
            borderRadius: '12px',
            border: '2px solid #e2e8f0',
            fontSize: '16px',
            boxSizing: 'border-box',
            outline: 'none',
            transition: 'all 0.3s ease',
            background: '#f8fafc',
            fontFamily: "'Inter', sans-serif",
        },
        button: {
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            border: 'none',
            background: loading ? '#64748b' : '#1e3a8a',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '800',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginTop: '15px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 6px -1px rgba(30, 58, 138, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        },
        error: {
            color: '#ef4444',
            background: '#fef2f2',
            padding: '12px 15px',
            borderRadius: '10px',
            fontSize: '14px',
            marginBottom: '25px',
            textAlign: 'center',
            fontWeight: '600',
            border: '1px solid #fee2e2'
        }
    };

    return (
        <div style={styles.container}>
            <style>
                {`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `}
            </style>
            <div style={styles.card}>
                <h2 style={styles.title}>Login</h2>
                {error && <div style={styles.error}>{error}</div>}
                <form onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Username</label>
                        <input
                            type="text"
                            style={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? (
                            <>
                                <span className="spinner-small" style={{
                                    width: '18px',
                                    height: '18px',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    borderTopColor: '#fff',
                                    borderRadius: '50%',
                                    animation: 'spin 0.8s linear infinite'
                                }}></span>
                                <span>Logging in...</span>
                            </>
                        ) : 'Login'}
                    </button>
                    <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#94a3b8' }}>
                        Access restricted to authorized personnel only.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
