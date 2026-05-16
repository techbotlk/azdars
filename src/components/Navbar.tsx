'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import styles from './Navbar.module.css';

const sections = ['home', 'about', 'services', 'faq'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      let currentSection = '';
      for (const section of sectionElements) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/azdars-logo.png" 
              alt="Azdars Logo" 
              width={120} 
              height={38} 
              className={styles.logoImage}
              priority
            />
          </Link>
          
          <div className={styles.navLinks}>
            {sections.map(section => (
              <Link 
                key={section} 
                href={`#${section}`} 
                className={activeSection === section ? styles.active : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          <div className={styles.navActions}>
            <Link href="#contact" className="btn btn-primary btn-sm">
              Consult Now
            </Link>
          </div>

          <button 
            className={styles.mobileToggle} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={styles.mobileMenu}
            >
              <Link href="#home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Consult Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
