'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';
import styles from './Footer.module.css';

export default function Footer() {
  const [year, setYear] = useState<number | string>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/azdars-logo.png" 
                alt="Azdars Logo" 
                width={160} 
                height={50} 
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>Delivers The Best</p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/azdars.lk?igsh=MWVrZWVleXE0djM5bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><InstagramIcon size={18} /></a>
              <a href="https://www.facebook.com/share/1BeN5jyZzA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook"><FacebookIcon size={18} /></a>
              <a href="https://www.tiktok.com/@azdars.lk?_r=1&_d=ec2c5ef42hcmi9&sec_uid=MS4wLjABAAAA5Sc61jMaDm1MfFpOt3v8CcMkyvcavLwOO_y3xg0RhfzBTK_czA-uWxAC1Yn63kIa&share_author_id=7635514604223661077&sharer_language=en&source=h5_m&u_code=e4lkj4a0m4d4gd&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=C8199CA4-80E6-4B16-902D-2C0AC2787DC4&user_id=7165039669314733062&sec_user_id=MS4wLjABAAAA4vTmYS1LD0j8z99_nlYA1LIa8jWze884uYD35Zno37RK7F6IqsfCy4IujpixalMi&social_share_type=5&ug_btm=b7200,b5836&utm_campaign=client_share&share_app_id=1233" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok"><TikTokIcon size={18} /></a>
              <a href="https://wa.me/94752723544" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp"><WhatsAppIcon size={18} /></a>
            </div>
          </div>
          
          <div className={styles.linksGroup}>
            <h3>Exploration</h3>
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Azdars</Link></li>
              <li><Link href="#services">Our Solutions</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksGroup}>
            <h3>Expertise</h3>
            <ul>
              <li><Link href="#services">Web & App Dev</Link></li>
              <li><Link href="#services">UI/UX Design</Link></li>
              <li><Link href="#services">Motion Graphics</Link></li>
              <li><Link href="#services">Digital Marketing</Link></li>
              <li><Link href="#services">Software Systems</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksGroup}>
            <h3>Connect</h3>
            <ul className={styles.contactInfo}>
              <li><MapPin size={16} color="#216dcf" /> Kandy, Sri Lanka</li>
              <li><Phone size={16} color="#216dcf" /> +94 75 272 3544</li>
              <li><Mail size={16} color="#216dcf" /> azdarslk@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {year} Azdars. Crafted with passion for Digital Excellence.</p>
          <div className={styles.legal}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
