"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.5, 0, 0, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const hoverEffect = {
    hover: { 
      y: -8, 
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)', 
      borderColor: 'rgba(59, 130, 246, 0.3)',
      transition: { duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }
    }
  };

  return (
    <>
      <div className="animated-bg"></div>
      
      <nav style={{ padding: '20px 0', borderBottom: '1px solid var(--glass-border)', position: 'fixed', top: 0, width: '100%', zIndex: 100, backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
            <span className="text-gradient">JV</span>.
          </h2>
          <div style={{ display: 'flex', gap: '20px', color: 'var(--text-secondary)' }}>
            <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500 }}>About</a>
            <a href="#experience" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Experience</a>
            <a href="#skills" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Skills</a>
          </div>
        </div>
      </nav>

      <main className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        
        {/* Hero Section */}
        <section id="about" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap-reverse', marginBottom: '80px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', flex: '1 1 500px' }}
          >
            <div style={{ padding: '8px 16px', borderRadius: '20px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)', width: 'fit-content', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', animation: 'pulse 2s infinite' }}></span>
              Available for Freelance Opportunities
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1 }}>
              Hi, I'm <br />
              <span className="text-gradient">Joji Raju Varghese</span>
            </h1>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 400 }}>
              Software Developer specializing in React & Next.js
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.8 }}>
              To work in a challenging environment that will expose me to new trends in the world of information technology and wish to get trained in an organization where I can get guidance and support to excel in computing.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', marginTop: '20px', flexWrap: 'wrap' }}>
              <motion.a 
                href="mailto:jojirajuvarghese@gmail.com" 
                className="glass-panel" 
                variants={hoverEffect}
                whileHover="hover"
                style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}
              >
                jojirajuvarghese@gmail.com
              </motion.a>
              <motion.div 
                className="glass-panel" 
                variants={hoverEffect}
                whileHover="hover"
                style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, color: 'var(--text-secondary)' }}
              >
                +91 87999 29317
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ 
              width: '350px', 
              height: '350px', 
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
              overflow: 'hidden',
              border: '4px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(59, 130, 246, 0.2)',
              position: 'relative',
              animation: 'morph 8s ease-in-out infinite'
            }}>
              <img 
                src="/profile.jpg" 
                alt="Joji Raju Varghese" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ marginBottom: '100px' }}>
          <motion.h3 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{ fontSize: '2.5rem', marginBottom: '40px' }}
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h3>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            
            {/* Job 1 */}
            <motion.div variants={fadeUpVariant}>
              <motion.div 
                className="glass-panel" 
                variants={hoverEffect}
                whileHover="hover"
                style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Software Developer</h4>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '16px' }}>AVENTUS INFORMATICS, INFOPARK KORATTY</p>
                  </div>
                  <div style={{ padding: '6px 16px', borderRadius: '20px', background: 'var(--bg-secondary)', fontSize: '0.875rem' }}>
                    Aug 2022 - Present
                  </div>
                </div>
                <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                    Implemented websites from the concept through deployment with a mobile-first approach.
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                    Collaborated with team members to implement new feature developments, worked on websites using REACT JS, NEXT JS, SCSS, CSS.
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                    Developed and integrated payment processing features onto eCommerce websites.
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Freelance */}
            <motion.div variants={fadeUpVariant}>
              <motion.div 
                className="glass-panel" 
                variants={hoverEffect}
                whileHover="hover"
                style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #10b981, transparent)' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Freelance Web Developer</h4>
                    <p style={{ color: '#10b981', fontWeight: 600, marginBottom: '16px' }}>INDEPENDENT, REMOTE</p>
                  </div>
                  <div style={{ padding: '6px 16px', borderRadius: '20px', background: 'var(--bg-secondary)', fontSize: '0.875rem' }}>
                    2020 - Present
                  </div>
                </div>
                <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: '#10b981' }}>▹</span>
                    Designed and developed custom web applications for various clients using React, Next.js, and modern CSS frameworks.
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: '#10b981' }}>▹</span>
                    Provided end-to-end solutions including UI/UX design, responsive frontend architecture, and seamless API integration.
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: '#10b981' }}>▹</span>
                    Delivered high-performance, SEO-optimized websites tailored to specific business needs and client requirements.
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Job 2 */}
            <motion.div variants={fadeUpVariant}>
              <motion.div 
                className="glass-panel" 
                variants={hoverEffect}
                whileHover="hover"
                style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-secondary), transparent)' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>UI Developer</h4>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '16px' }}>DR. D. Y. PATIL VIDYAPEETH, PUNE</p>
                  </div>
                  <div style={{ padding: '6px 16px', borderRadius: '20px', background: 'var(--bg-secondary)', fontSize: '0.875rem' }}>
                    Aug 2021 - Jul 2022
                  </div>
                </div>
                <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                    Implemented website for their Alumni Network as a UI Developer in their Software Development Cell.
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                    Worked on 25+ Institutional websites using HTML, CSS, BOOTSTRAP, JAVASCRIPT.
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Job 3 */}
            <motion.div variants={fadeUpVariant}>
              <motion.div 
                className="glass-panel" 
                variants={hoverEffect}
                whileHover="hover"
                style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--glass-border), transparent)' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>UI Developer</h4>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '16px' }}>BODHWI TECHNOLOGIES PVT LTD, KOCHI</p>
                  </div>
                  <div style={{ padding: '6px 16px', borderRadius: '20px', background: 'var(--bg-secondary)', fontSize: '0.875rem' }}>
                    Feb 2019 - Jul 2019
                  </div>
                </div>
                <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                    Worked on findmyhostel website using HTML, CSS, JAVASCRIPT.
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                    Standardized all output with a new, responsive, mobile-first approach and strategy.
                  </li>
                </ul>
              </motion.div>
            </motion.div>

          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ marginBottom: '100px' }}>
          <motion.h3 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{ fontSize: '2.5rem', marginBottom: '40px' }}
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h3>
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel" 
            style={{ padding: '40px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}
          >
            {['React JS', 'Next JS', 'Javascript', 'Typescript', 'C', 'C++', 'C#', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'Git'].map((skill, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -4, borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '12px 24px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  fontWeight: 500,
                  cursor: 'default',
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: '100px' }}>
          <motion.h3 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{ fontSize: '2.5rem', marginBottom: '40px' }}
          >
            Education <span className="text-gradient">Journey</span>
          </motion.h3>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
          >
            
            <motion.div variants={fadeUpVariant}>
              <motion.div 
                className="glass-panel" 
                variants={hoverEffect}
                whileHover="hover"
                style={{ padding: '30px', height: '100%' }}
              >
                <div style={{ color: 'var(--accent-primary)', marginBottom: '10px', fontSize: '0.875rem' }}>Aug 2019 - Nov 2021</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Master of Computer Application (MCA)</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>A M C Engineering College, Bangalore</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ padding: '4px 12px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '12px', fontSize: '0.75rem' }}>67.00%</span>
                  <span style={{ padding: '4px 12px', background: 'var(--bg-secondary)', borderRadius: '12px', fontSize: '0.75rem' }}>Computer Science</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <motion.div 
                className="glass-panel" 
                variants={hoverEffect}
                whileHover="hover"
                style={{ padding: '30px', height: '100%' }}
              >
                <div style={{ color: 'var(--accent-primary)', marginBottom: '10px', fontSize: '0.875rem' }}>Jul 2015 - Apr 2018</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Bsc. Computer Science</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Mar Thoma College, Chungathara</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ padding: '4px 12px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '12px', fontSize: '0.75rem' }}>65.30%</span>
                  <span style={{ padding: '4px 12px', background: 'var(--bg-secondary)', borderRadius: '12px', fontSize: '0.75rem' }}>Computer Science</span>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </section>

      </main>

      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Joji Raju Varghese. All rights reserved.</p>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '40px',
              right: '40px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.5)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              cursor: 'pointer',
              zIndex: 1000,
              backdropFilter: 'blur(10px)'
            }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
