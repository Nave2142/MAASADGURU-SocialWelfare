import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const API_BASE_URL = 'http://localhost:5000';

    const handleLogin = async (e) => {
        e.preventDefault();
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
        }
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            padding: '20px',
            background: '#f8fafc',
        },
        card: {
            background: '#fff',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            width: '100%',
            maxWidth: '400px',
        },
        title: {
            fontSize: '28px',
            color: '#1e3a8a',
            marginBottom: '30px',
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: '800',
        },
        inputGroup: {
            marginBottom: '20px',
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            color: '#64748b',
            fontWeight: '600',
        },
        input: {
            width: '100%',
            padding: '12px 15px',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            fontSize: '16px',
            boxSizing: 'border-box',
            outline: 'none',
            transition: 'border-color 0.3s',
        },
        button: {
            width: '100%',
            padding: '14px',
            borderRadius: '10px',
            border: 'none',
            background: '#1e3a8a',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            marginTop: '10px',
            transition: 'background 0.3s',
        },
        error: {
            color: '#ef4444',
            fontSize: '14px',
            marginBottom: '20px',
            textAlign: 'center',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Admin Login</h2>
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
                    <button type="submit" style={styles.button}>Login</button>
                    <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#94a3b8' }}>
                        Access restricted to authorized personnel only.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
