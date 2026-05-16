'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            LET&apos;S BUILD <br />
            <span className={styles.outlineText}>THE</span> <span className="text-primary">FUTURE</span>
          </h2>
          <p className={styles.subtitle}>
            We are currently accepting new high-impact partnerships. Our team is ready to scale your vision.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.contactMethods}>
              <a href="mailto:azdarslk@gmail.com" className={styles.method}>
                <div className={styles.mIcon}><Mail size={24} /></div>
                <div className={styles.mText}>
                  <span>Email Us</span>
                  <strong>azdarslk@gmail.com</strong>
                </div>
              </a>
              <a href="tel:+94752723544" className={styles.method}>
                <div className={styles.mIcon}><Phone size={24} /></div>
                <div className={styles.mText}>
                  <span>Call Us</span>
                  <strong>+94 75 272 3544</strong>
                </div>
              </a>
              <div className={styles.method}>
                <div className={styles.mIcon}><MapPin size={24} /></div>
                <div className={styles.mText}>
                  <span>Visit Us</span>
                  <strong>Kandy, Sri Lanka</strong>
                </div>
              </div>
            </div>

            <div className={styles.socialFollow}>
              <p>FOLLOW US</p>
              <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/azdars.lk?igsh=MWVrZWVleXE0djM5bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={28} /></a>
                <a href="https://www.tiktok.com/@azdars.lk?_r=1&_d=ec2c5ef42hcmi9&sec_uid=MS4wLjABAAAA5Sc61jMaDm1MfFpOt3v8CcMkyvcavLwOO_y3xg0RhfzBTK_czA-uWxAC1Yn63kIa&share_author_id=7635514604223661077&sharer_language=en&source=h5_m&u_code=e4lkj4a0m4d4gd&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=C8199CA4-80E6-4B16-902D-2C0AC2787DC4&user_id=7165039669314733062&sec_user_id=MS4wLjABAAAA4vTmYS1LD0j8z99_nlYA1LIa8jWze884uYD35Zno37RK7F6IqsfCy4IujpixalMi&social_share_type=5&ug_btm=b7200,b5836&utm_campaign=client_share&share_app_id=1233" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon size={28} /></a>
                <a href="https://www.facebook.com/share/1BeN5jyZzA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon size={28} /></a>
                <a href="https://wa.me/94752723544" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={28} /></a>
              </div>
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>FULL NAME</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className={styles.inputGroup}>
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className={styles.inputGroup}>
                <label>PROJECT TYPE</label>
                <select required>
                  <option value="">Select a service</option>
                  <option value="software">Software Development</option>
                  <option value="web">Website Design & Development</option>
                  <option value="design">Graphic Design</option>
                  <option value="video">Video Editing & Production</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>MESSAGE</label>
                <textarea rows={4} placeholder="Describe your vision..." required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                INITIATE PROJECT <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
