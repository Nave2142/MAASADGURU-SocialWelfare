import React, { useState, useEffect } from 'react';

const ContactUs = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        heroSection: {
            height: isMobile ? '250px' : '350px',
            background: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url("https://images.unsplash.com/photo-1577563906417-007f17c7d7a9?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '0 20px',
        },
        mainContainer: {
            maxWidth: '1200px',
            margin: '0 auto 60px',
            padding: isMobile ? '0 15px' : '0 20px',
        },
        contentWrapper: {
            background: '#fff',
            padding: isMobile ? '30px 15px' : '60px 40px',
            marginTop: '-60px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            borderRadius: '20px',
            position: 'relative',
            zIndex: 10,
        },
        sectionHeader: {
            fontSize: isMobile ? '28px' : '36px',
            color: '#1e3a8a',
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: '800',
            marginBottom: '40px'
        },
        subHeader: {
            fontSize: '20px',
            color: '#1e3a8a',
            fontWeight: '700',
            fontFamily: "'Outfit', sans-serif",
            marginBottom: '15px'
        },
        contactGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
            gap: '50px',
        },
        founderGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '20px',
            marginBottom: '40px'
        },
        founderCard: {
            background: '#f8fafc',
            padding: '25px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            transition: 'transform 0.3s ease',
            cursor: 'default'
        },
        formCard: {
            padding: '40px',
            background: '#fff',
            borderRadius: '24px',
            border: '1px solid #f1f5f9',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#475569'
        },
        input: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #cbd5e1',
            marginBottom: '20px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            outline: 'none',
            transition: 'border-color 0.2s',
            boxSizing: 'border-box'
        },
        textarea: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #cbd5e1',
            minHeight: '150px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            outline: 'none',
            marginBottom: '25px',
            boxSizing: 'border-box'
        },
        submitBtn: {
            background: '#f59e0b',
            color: '#000',
            padding: '14px 35px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '800',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '16px',
            width: '100%',
            boxShadow: '0 4px 6px rgba(245, 158, 11, 0.3)',
            transition: 'all 0.3s ease'
        },
        secondaryButton: {
            background: 'transparent',
            color: '#fff',
            padding: '12px 30px',
            borderRadius: '10px',
            border: '2px solid #fff',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            marginLeft: '10px',
            display: 'inline-block',
            transition: 'all 0.3s'
        },
        faqSection: {
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid #f1f5f9'
        },
        faqItem: {
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '15px',
            textAlign: 'left'
        },
        mapWrapper: {
            marginTop: '60px',
            padding: isMobile ? '20px 15px' : '40px',
            background: '#f8fafc',
            borderRadius: '24px',
            textAlign: 'center'
        }
    };

    return (
        <>
            <div style={styles.heroSection} className="fade-in">
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: isMobile ? '32px' : '52px', margin: '0 0 10px 0', fontFamily: "'Outfit', sans-serif", fontWeight: '800' }}>Contact Our NGO</h1>
                    <p style={{ fontSize: isMobile ? '16px' : '20px', opacity: 0.9, marginBottom: '25px' }}>We follow clear communication standards as per NGO Darpan guidelines.</p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                        <button onClick={() => document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' })} style={{ ...styles.submitBtn, width: 'auto' }} className="ngo-badge">Send Message</button>
                        <button onClick={() => document.getElementById('faqs').scrollIntoView({ behavior: 'smooth' })} style={styles.secondaryButton}>View FAQs</button>
                    </div>
                </div>
            </div>

            <div style={styles.mainContainer}>
                <div style={styles.contentWrapper}>
                    <div style={styles.contactGrid}>
                        <div>
                            <h2 style={{ ...styles.sectionHeader, textAlign: 'left', marginBottom: '30px' }}>NGO Contact Information</h2>
                            <p style={{ color: '#64748b', marginBottom: '40px', lineHeight: '1.7', fontSize: '16px' }}>
                                Reach out to our NGO leadership directly. <strong>Maasadguru NGO</strong> maintain open communication channels to ensure complete transparency.
                            </p>

                            <div style={styles.founderGrid}>
                                <div style={styles.founderCard} className="ngo-card">
                                    <div style={{ fontSize: '24px', marginBottom: '15px' }}>👤</div>
                                    <h3 style={{ margin: '0 0 5px 0', color: '#1e3a8a', fontSize: '18px', fontWeight: '700' }}>Jatothu Ravi</h3>
                                    <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#059669', fontWeight: '700', letterSpacing: '0.5px' }}>NGO FOUNDER</p>
                                    <a href="tel:+918143177143" style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#334155', textDecoration: 'none' }}>📞 +91 8143177143</a>
                                </div>
                                <div style={styles.founderCard} className="ngo-card">
                                    <div style={{ fontSize: '24px', marginBottom: '15px' }}>👤</div>
                                    <h3 style={{ margin: '0 0 5px 0', color: '#1e3a8a', fontSize: '18px', fontWeight: '700' }}>Gugulothu Naveen</h3>
                                    <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#059669', fontWeight: '700', letterSpacing: '0.5px' }}>NGO CO-FOUNDER</p>
                                    <a href="tel:+919908709764" style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#334155', textDecoration: 'none' }}>📞 +91 9908709764</a>
                                </div>
                            </div>

                            <div style={{ ...styles.founderCard, background: '#f0f9ff', border: '1px solid #bae6fd' }} className="ngo-card">
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ fontSize: '30px' }}>📍</div>
                                    <div>
                                        <h3 style={{ margin: '0 0 5px 0', color: '#1e3a8a', fontSize: '18px', fontWeight: '700' }}>NGO Coordination Center</h3>
                                        <p style={{ margin: 0, color: '#475569', fontSize: '15px', lineHeight: '1.6' }}>
                                            Uppal, Hyderabad,<br />
                                            Telangana 500039, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <div style={{ background: '#f1f5f9', padding: '20px', borderRadius: '12px', flex: '1 1 200px', textAlign: 'center', border: '1px solid #e2e8f0' }} className="ngo-card">
                                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>📧</div>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#10b981' }}>support@maasadguru.org</p>
                                </div>
                                <div style={{ background: '#f1f5f9', padding: '20px', borderRadius: '12px', flex: '1 1 200px', textAlign: 'center', border: '1px solid #e2e8f0' }} className="ngo-card">
                                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>💼</div>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#1e3a8a' }}>NGO Hours: 10AM - 6PM</p>
                                </div>
                            </div>
                        </div>

                        <div id="inquiry-form">
                            <div style={styles.formCard}>
                                <h3 style={{ ...styles.subHeader, textAlign: 'center', marginBottom: '25px', fontSize: '24px' }}>Send an Inquiry</h3>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label style={styles.label}>Full Name</label>
                                        <input type="text" placeholder="Your Full Name" style={styles.input} />
                                    </div>

                                    <div>
                                        <label style={styles.label}>Email Address</label>
                                        <input type="email" placeholder="email@example.com" style={styles.input} />
                                    </div>

                                    <div>
                                        <label style={styles.label}>Phone Number</label>
                                        <input type="tel" placeholder="+91 XXXXX XXXXX" style={styles.input} />
                                    </div>

                                    <div>
                                        <label style={styles.label}>Message</label>
                                        <textarea placeholder="Tell us how we can help..." style={styles.textarea}></textarea>
                                    </div>

                                    <button type="submit" style={styles.submitBtn}>SUBMIT INQUIRY</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <section id="faqs" style={styles.faqSection} className="reveal">
                        <h2 style={styles.sectionHeader}>NGO Frequently Asked Questions</h2>
                        <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '-30px auto 40px' }}></div>
                        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                            {[
                                { q: "How can I volunteer for Maasadguru NGO projects?", a: "You can send an NGO inquiry through the form above or call our founders directly. We also announce mega-camps on our home page marquee." },
                                { q: "Are donations made to Maasadguru NGO tax-exempt?", a: "Yes, we are a registered NGO under 12A and 80G. Donors can claim tax benefits as per current regulations." },
                                { q: "What districts do you currently operate in as an NGO?", a: "Our main NGO hub is in Uppal, Hyderabad, with active field operations across 30+ districts of Telangana." },
                                { q: "How do you ensure transparency of NGO funds?", a: "We maintain a digital auditing framework aligned with NGO Darpan standards where reports are shared periodically." }
                            ].map((faq, idx) => (
                                <div key={idx} style={styles.faqItem} className="ngo-card">
                                    <h4 style={{ color: '#1e3a8a', margin: '0 0 10px 0', fontSize: '17px', fontWeight: '700' }}>{faq.q}</h4>
                                    <p style={{ color: '#444', margin: 0, fontSize: '15px', lineHeight: '1.6' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div style={styles.mapWrapper} className="reveal">
                        <h2 style={{ ...styles.sectionHeader, marginBottom: '10px' }}>NGO Hub Location (Uppal)</h2>
                        <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '0 auto 30px' }}></div>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.565!3d17.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99362ecf167d%3A0x8fb6d7551b66436d!2sUppal%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height={isMobile ? "350" : "500"}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <p style={{ marginTop: '25px', fontSize: '15px', color: '#64748b', maxWidth: '600px', margin: '25px auto 0', lineHeight: '1.6' }}>
                            Our central hub in Uppal serves as the nerve center for all social welfare coordination across Telangana districts.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
