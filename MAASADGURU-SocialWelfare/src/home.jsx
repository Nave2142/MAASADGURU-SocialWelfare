import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from './MapComponent.jsx';

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width < 768;
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        heroSection: {
            height: isMobile ? '300px' : '450px',
            background: 'linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '0 20px',
        },
        marqueeContainer: {
            background: '#1e3a8a',
            color: '#fff',
            padding: '10px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
        },
        marqueeText: {
            display: 'inline-block',
            paddingLeft: '100%',
            animation: 'scroll 20s linear infinite',
            fontSize: '14px',
            fontWeight: '600',
        },
        mainContainer: {
            maxWidth: '1200px',
            margin: '0 auto 40px',
            padding: isMobile ? '0 10px' : '0 20px',
        },
        contentWrapper: {
            background: '#fff',
            padding: isMobile ? '30px 15px' : '60px 40px',
            marginTop: '40px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            position: 'relative',
            zIndex: 2,
            borderRadius: '16px'
        },
        sectionHeader: {
            fontSize: isMobile ? '22px' : '36px',
            color: '#1e3a8a',
            marginBottom: '10px',
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: '800'
        },
        subHeader: {
            fontSize: isMobile ? '18px' : '22px',
            color: '#1e3a8a',
            borderLeft: '4px solid #f59e0b',
            paddingLeft: '15px',
            marginBottom: '20px',
            fontFamily: "'Outfit', sans-serif",
        },
        highlightBox: {
            background: '#f0fdf4',
            borderLeft: '5px solid #10b981',
            padding: isMobile ? '20px' : '30px',
            marginBottom: '50px',
            borderRadius: '0 8px 8px 0'
        },
        impactGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '60px'
        },
        impactCard: {
            background: '#fff',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid #f1f5f9',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
        },
        serviceGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '60px'
        },
        serviceCard: {
            background: '#f8fafc',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
        },
        iconCircle: {
            width: '60px',
            height: '60px',
            background: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            margin: '0 auto 20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        },
        schemesGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '20px',
            marginBottom: '60px'
        },
        schemeCard: {
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            gap: '15px',
            alignItems: 'start'
        },
        testimonialGrid: {
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '60px'
        },
        testimonialCard: {
            background: '#f8fafc',
            padding: '25px',
            borderRadius: '12px',
            borderLeft: '5px solid #f59e0b',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease'
        },
        partnerStrip: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '40px',
            opacity: 0.7,
            filter: 'grayscale(100%)'
        },
        ctaSection: {
            background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
            padding: isMobile ? '40px 20px' : '60px 40px',
            borderRadius: '16px',
            color: '#fff',
            textAlign: 'center',
            marginTop: '40px'
        },
        button: {
            background: '#f59e0b',
            color: '#000',
            padding: '12px 30px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            marginTop: '20px',
            display: 'inline-block',
            textDecoration: 'none',
            transition: 'background 0.3s'
        }
    };

    return (
        <>
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                `}
            </style>
            <div style={styles.heroSection}>
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: isMobile ? '36px' : '64px', margin: '0 0 15px 0', fontFamily: "'Outfit', sans-serif", fontWeight: '800' }}>MAASADGURU</h1>
                    <p style={{ fontSize: isMobile ? '16px' : '22px', opacity: 0.95, lineHeight: '1.4', marginBottom: '30px' }}>
                        Empowering Communities through Transparency, Education, and Sustainable Change.
                    </p>
                    <button onClick={() => navigate('/donate')} style={styles.button}>Start Your Impact</button>
                </div>
            </div>

            <div style={styles.marqueeContainer}>
                <div style={styles.marqueeText}>
                    📢 New Medical Camp in Warangal on 25th Feb! | 🎓 Scholarship Applications Open for 2026 | 🌳 Tree Plantation Drive Successful in 5 Villages | 🤝 Join us as a Volunteer today!
                </div>
            </div>

            <div style={styles.mainContainer}>
                <div style={styles.contentWrapper}>

                    <section id="mission" style={{ marginBottom: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h2 style={styles.sectionHeader}>Our Driving Vision</h2>
                            <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '0 auto' }}></div>
                        </div>
                        <div style={styles.highlightBox}>
                            <p style={{ margin: 0, fontSize: isMobile ? '16px' : '19px', color: '#065f46', lineHeight: '1.8', textAlign: 'center' }}>
                                <strong>Maasadguru Social Services</strong> is more than just an organization; it's a movement aimed at bridging the gap between resources and the underserved.
                                We believe in a world where every individual, regardless of their background, has access to quality education, healthcare, and a clean environment.
                            </p>
                        </div>
                    </section>

                    <section id="statistics" style={{ marginBottom: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h3 style={styles.sectionHeader}>The Scale of Our Reach</h3>
                            <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '0 auto' }}></div>
                        </div>
                        <div style={styles.impactGrid}>
                            {[
                                { label: 'Families Supported', value: '1,500+', icon: '🏡' },
                                { label: 'Villages Reached', value: '45', icon: '📍' },
                                { label: 'Volunteers Enrolled', value: '500+', icon: '🤝' },
                                { label: 'Projects Completed', value: '120+', icon: '✅' }
                            ].map((stat, idx) => (
                                <div key={idx} style={styles.impactCard}>
                                    <div style={{ fontSize: '40px', marginBottom: '15px' }}>{stat.icon}</div>
                                    <div style={{ fontSize: '32px', fontWeight: '800', color: '#1e3a8a', marginBottom: '5px', fontFamily: "'Outfit', sans-serif" }}>{stat.value}</div>
                                    <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="schemes" style={{ marginBottom: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 style={styles.sectionHeader}>Facilitating Government Welfare</h2>
                            <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '15px auto' }}></div>
                            <p style={{ maxWidth: '700px', margin: '15px auto 0', color: '#64748b', fontSize: '16px' }}>
                                We bridge the gap between government schemes and eligible beneficiaries, ensuring entitlements reach the last mile.
                            </p>
                        </div>
                        <div style={styles.schemesGrid}>
                            {[
                                { icon: '👵', title: 'Aasara Pensions', desc: 'Assisting elderly, widows, and physically challenged individuals in applying for state pension schemes.' },
                                { icon: '🌾', title: 'Rythu Bandhu Support', desc: 'Guiding farmers on eligibility documentation and application processes for agricultural investment support.' },
                                { icon: '🎓', title: 'Post-Matric Scholarships', desc: 'Helping students from marginalized communities access state and central education scholarships.' },
                                { icon: '🏥', title: 'Arogyasri Health Cards', desc: 'Facilitating enrollment for health insurance cards to ensure cashless medical treatment for the poor.' }
                            ].map((scheme, i) => (
                                <div key={i} style={styles.schemeCard}>
                                    <div style={{ fontSize: '36px', minWidth: '50px' }}>{scheme.icon}</div>
                                    <div>
                                        <h3 style={{ margin: '0 0 8px 0', color: '#1e3a8a', fontSize: '18px', fontWeight: '700' }}>{scheme.title}</h3>
                                        <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>{scheme.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="focus-areas" style={{ marginBottom: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 style={styles.sectionHeader}>Areas of Focus</h2>
                            <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '15px auto' }}></div>
                        </div>
                        <div style={styles.serviceGrid}>
                            <div style={styles.serviceCard}>
                                <div style={styles.iconCircle}>🎓</div>
                                <h3 style={{ color: '#1e3a8a', marginBottom: '15px', fontWeight: '700' }}>Education</h3>
                                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
                                    Bridging the digital divide with mobile learning hubs and solar kits for remote students.
                                </p>
                            </div>
                            <div style={styles.serviceCard}>
                                <div style={styles.iconCircle}>🏥</div>
                                <h3 style={{ color: '#1e3a8a', marginBottom: '15px', fontWeight: '700' }}>Health</h3>
                                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
                                    Mobile medical clinics and direct support for rural healthcare infrastructure.
                                </p>
                            </div>
                            <div style={styles.serviceCard}>
                                <div style={styles.iconCircle}>🌱</div>
                                <h3 style={{ color: '#1e3a8a', marginBottom: '15px', fontWeight: '700' }}>Sustainability</h3>
                                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
                                    Promoting eco-friendly living and reforestation projects within local communities.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="beneficiary-voices" style={{ marginBottom: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 style={styles.sectionHeader}>Beneficiary Voices</h2>
                            <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '15px auto' }}></div>
                        </div>
                        <div style={styles.testimonialGrid}>
                            {[
                                { text: "I was struggling to get my widow pension sanctioned for 2 years. Maasadguru volunteers helped me with the paperwork and now I receive it monthly.", author: "Lakshmiamma, Mahabubabad" },
                                { text: "The study material provided by the NGO helped my son prepare for his entrance exams. We are forever grateful for their educational support.", author: "Venkanna, Farmer" },
                                { text: "Their medical camp in our village identified my eye issue early. They even helped me get free surgery at the district hospital.", author: "Rajeswari, Tribal Hamelt" }
                            ].map((t, i) => (
                                <div key={i} style={styles.testimonialCard}>
                                    <p style={{ marginBottom: '15px', color: '#334155', fontSize: '15px', lineHeight: '1.7' }}>"{t.text}"</p>
                                    <strong style={{ color: '#1e3a8a', display: 'block', fontSize: '14px' }}>- {t.author}</strong>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="transparency" style={{ marginBottom: '80px' }}>
                        <div style={{ background: '#fefce8', padding: isMobile ? '30px 20px' : '40px', borderRadius: '16px', border: '1px solid #fef08a', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#854d0e', marginBottom: '15px', fontFamily: "'Outfit', sans-serif" }}>100% Transparency Guarantee</h3>
                            <p style={{ fontSize: '16px', color: '#713f12', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
                                We utilize a digital auditing framework where every rupee you donate is tracked and reported.
                                Our donors receive real-time updates and field reports, ensuring your contribution creates the maximum possible impact.
                            </p>
                        </div>
                    </section>

                    <section id="regional-impact" style={{ marginBottom: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 style={styles.sectionHeader}>Our Presence in Telangana</h2>
                            <div style={{ width: '60px', height: '4px', background: '#f59e0b', margin: '15px auto' }}></div>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                            gap: '40px',
                            alignItems: 'start',
                            background: '#f8fafc',
                            padding: isMobile ? '30px 20px' : '50px 40px',
                            borderRadius: '24px',
                            border: '1px solid #f1f5f9'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <MapComponent isMobile={isMobile} />
                            </div>
                            <div>
                                <h3 style={{ ...styles.subHeader, borderLeftWidth: '6px', marginBottom: '30px', fontSize: '24px', fontWeight: '800' }}>Impact Statistics</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                                    {[
                                        { val: '4,400+', label: 'NGOs Registered', color: '#1e3a8a' },
                                        { val: '33', label: 'Districts Active', color: '#10b981' },
                                        { val: '12,000+', label: 'Direct Beneficiaries', color: '#f59e0b' },
                                        { val: '5,000+', label: 'Portal Inquiries', color: '#6366f1' }
                                    ].map((stat, i) => (
                                        <div key={i} style={{ padding: '20px', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                            <div style={{ fontSize: '28px', fontWeight: '800', color: stat.color, fontFamily: "'Outfit', sans-serif" }}>{stat.val}</div>
                                            <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.8' }}>
                                    Following the <strong>NGO Darpan</strong> model of centralized transparency, Maasadguru focuses its operations primarily across the state of Telangana, with our central coordination hub located in <strong>Hyderabad</strong>.
                                    Our digital platform ensures that every district—from Adilabad to Khammam—is integrated into our monitoring network.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="partners" style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h4 style={{ textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '2px', marginBottom: '30px', fontSize: '14px', fontWeight: '700' }}>Supported By</h4>
                        <div style={styles.partnerStrip}>
                            {['DISTRICT COLLECTORATE', 'RURAL DEV. AGENCY', 'LOCAL MUNICIPIALITY', 'YOUTH CLUBS'].map((p, i) => (
                                <span key={i} style={{ fontWeight: '800', fontSize: isMobile ? '16px' : '20px', color: '#94a3b8', border: '2px solid #f1f5f9', padding: '10px 20px', borderRadius: '8px' }}>{p}</span>
                            ))}
                        </div>
                    </section>

                    <div style={styles.ctaSection}>
                        <h2 style={{ fontSize: isMobile ? '28px' : '40px', marginBottom: '20px', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>Be the Change</h2>
                        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '650px', margin: '0 auto 30px', lineHeight: '1.6' }}>
                            Your journey with Maasadguru starts here. Every contribution towards our social missions helps build a more equitable society.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button onClick={() => navigate('/donate')} style={{ ...styles.button, marginTop: 0 }}>Donate Now</button>
                            <button onClick={() => navigate('/about')} style={{ ...styles.button, marginTop: 0, background: 'transparent', border: '2px solid #fff', color: '#fff' }}>Meet the Team</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;
