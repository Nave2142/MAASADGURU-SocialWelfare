import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import environment from './environment.json';

const ContactUs = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        mobile: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const API_BASE_URL = environment.api_base_url;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending inquiry...' });
        try {
            const response = await fetch(`${API_BASE_URL}/api/inquiry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.status === 201 || data.status === 'success') {
                setStatus({ type: 'success', message: 'Inquiry sent successfully! We will contact you soon.' });
                setFormData({
                    full_name: '',
                    email: '',
                    mobile: '',
                    subject: 'General Inquiry',
                    message: ''
                });
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to send inquiry.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Could not connect to the server.' });
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
            padding: isMobile ? '35px 20px' : '65px 50px',
            marginTop: isMobile ? '30px' : '50px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
            borderRadius: '24px'
        },
        heroSection: {
            background: 'linear-gradient(135deg, #1e3a8a, #0f172a)',
            color: '#fff',
            padding: isMobile ? '60px 20px' : '100px 40px',
            textAlign: 'center',
            borderRadius: isMobile ? '0' : '0 0 40px 40px',
        },
        sectionHeader: {
            fontSize: isMobile ? '24px' : '32px',
            color: '#1e3a8a',
            marginBottom: '40px',
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: '800'
        },
        contactGrid: {
            display: 'grid',
            gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '1fr 1fr',
            gap: isMobile ? '40px' : '60px',
            alignItems: 'start'
        },
        infoCard: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px',
            padding: '25px',
            background: '#f8fafc',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            transition: 'all 0.3s ease'
        },
        iconBox: {
            width: '60px',
            height: '60px',
            background: '#fff',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            color: '#1e3a8a'
        },
        formCard: {
            background: '#fff',
            padding: isMobile ? '30px 20px' : '45px',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.04)'
        },
        input: {
            width: '100%',
            padding: '15px 20px',
            marginBottom: '20px',
            border: '2px solid #f1f5f9',
            borderRadius: '12px',
            fontSize: '15px',
            fontFamily: "'Inter', sans-serif",
            outline: 'none',
            transition: 'border-color 0.3s',
            boxSizing: 'border-box'
        },
        submitBtn: {
            background: '#f59e0b',
            color: '#000',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '800',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.3s ease'
        },
        faqSection: {
            marginTop: '80px',
        },
        faqCard: {
            background: '#f8fafc',
            padding: '30px',
            borderRadius: '20px',
            marginBottom: '20px',
            border: '1px solid #e2e8f0'
        }
    };

    return (
        <>
            <div style={styles.heroSection} className="fade-in">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: isMobile ? '34px' : '56px', margin: '0 0 15px 0', fontFamily: "'Outfit', sans-serif", fontWeight: '800', lineHeight: 1.1 }}>Maasadguru Social Service</h1>
                    <p style={{ fontSize: isMobile ? '16px' : '20px', opacity: 0.9, marginBottom: '30px', lineHeight: 1.5 }}>Dedicated to direct impact and professional social welfare standards.</p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' })} style={{ ...styles.submitBtn, width: 'auto' }} className="ngo-badge">Send Message</button>
                    </div>
                </div>
            </div>

            <div style={styles.mainContainer}>
                <div style={styles.contentWrapper}>
                    <div style={styles.contactGrid}>
                        <div>
                            <h2 style={{ ...styles.sectionHeader, textAlign: 'left', marginBottom: '30px' }}>Contact Information</h2>
                            <p style={{ color: '#64748b', marginBottom: '40px', lineHeight: '1.8', fontSize: '16px' }}>
                                Reach out to our leadership directly. <strong>Maasadguru Social Service</strong> maintains open communication channels to ensure complete transparency.
                            </p>

                            <div style={styles.infoCard} className="ngo-card">
                                <div style={styles.iconBox}>📍</div>
                                <div>
                                    <h4 style={{ margin: '0 0 5px 0', color: '#1e3a8a', fontSize: '18px', fontWeight: '800' }}>HQ Address</h4>
                                    <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>H.No: 1-7-143, Uppal, Hyderabad, Telangana - 500039</p>
                                </div>
                            </div>

                            <div style={styles.infoCard} className="ngo-card">
                                <div style={styles.iconBox}>📞</div>
                                <div>
                                    <h4 style={{ margin: '0 0 5px 0', color: '#1e3a8a', fontSize: '18px', fontWeight: '800' }}>Founder Contacts</h4>
                                    <p style={{ margin: '0 0 5px', color: '#64748b', fontSize: '14px' }}>+91 81431 77143 (Jatothu Ravi)</p>
                                    <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>+91 99087 09764 (Gugulothu Naveen)</p>
                                </div>
                            </div>

                            <div style={styles.infoCard} className="ngo-card">
                                <div style={styles.iconBox}>✉️</div>
                                <div>
                                    <h4 style={{ margin: '0 0 5px 0', color: '#1e3a8a', fontSize: '18px', fontWeight: '800' }}>Official Email</h4>
                                    <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>maasadguru@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div id="inquiry-form" style={styles.formCard} className="reveal">
                            <h3 style={{ fontSize: '24px', color: '#1e3a8a', marginBottom: '30px', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>Direct Inquiry Form</h3>
                            {status.message && (
                                <div style={{
                                    padding: '15px',
                                    marginBottom: '20px',
                                    borderRadius: '10px',
                                    background: status.type === 'error' ? '#fee2e2' : (status.type === 'success' ? '#dcfce7' : '#fef9c3'),
                                    color: status.type === 'error' ? '#ef4444' : (status.type === 'success' ? '#16a34a' : '#ca8a04'),
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    textAlign: 'center'
                                }}>
                                    {status.message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
                                    <input
                                        type="text"
                                        name="full_name"
                                        placeholder="Full Name"
                                        style={styles.input}
                                        value={formData.full_name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        style={styles.input}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    style={styles.input}
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                />
                                <select
                                    name="subject"
                                    style={{ ...styles.input, background: '#fff' }}
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                >
                                    <option value="General Inquiry">Select Subject</option>
                                    <option value="Volunteer Registration">Volunteer Registration</option>
                                    <option value="Scholarship Inquiry">Scholarship Inquiry</option>
                                    <option value="Medical Support">Medical Support</option>
                                    <option value="Donation Transparency">Donation Transparency</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                </select>
                                <textarea
                                    name="message"
                                    placeholder="How can we help you?"
                                    style={{ ...styles.input, height: '150px', resize: 'none' }}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                                <button type="submit" style={styles.submitBtn} disabled={status.type === 'loading'}>
                                    {status.type === 'loading' ? 'Sending...' : 'Submit Inquiry'}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '80px',
                        padding: isMobile ? '35px 20px' : '60px 40px',
                        background: '#f8fafc',
                        borderRadius: '24px',
                        border: '1px solid #f1f5f9',
                        textAlign: 'center'
                    }} className="reveal">
                        <h2 style={{ ...styles.sectionHeader, marginBottom: '10px' }}>Our Regional Presence</h2>
                        <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '0 auto 40px' }}></div>
                        <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>
                            Headquartered in Hyderabad, we coordinate social welfare activities across the districts of Telangana through a network of verified volunteers.
                        </p>
                        <MapComponent isMobile={isMobile} />
                    </div>

                    <section id="faqs" style={styles.faqSection} className="reveal">
                        <h2 style={styles.sectionHeader}>Frequently Asked Questions</h2>
                        <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '-30px auto 50px' }}></div>
                        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '1fr 1fr', gap: '25px' }}>
                            {[
                                { q: "How are the funds utilized?", a: "Every contribution is mapped to a specific district project. We follow Maasadguru Social Service transparency norms with digital tracking." },
                                { q: "Can I volunteer from Hyderabad?", a: "Yes! While our projects are rural, our coordination hub is in Uppal, Hyderabad. We have digital and field volunteer roles." },
                                { q: "How to apply for scholarships?", a: "You can use the inquiry form above or visit our hub in Hyderabad with your academic documents." },
                                { q: "Is Maasadguru registered?", a: "Yes, we are a registered society (584/2024) with NITI Aayog UID and 12A/80G tax exemptions." }
                            ].map((faq, i) => (
                                <div key={i} style={styles.faqCard} className="ngo-card">
                                    <h4 style={{ color: '#1e3a8a', marginBottom: '15px', fontSize: '18px', fontWeight: '800' }}>Q: {faq.q}</h4>
                                    <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
