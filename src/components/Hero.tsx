'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 50]);
  const opacity = useTransform(scrollY, [500, 800], [1, 0]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.meshGradient}></div>
      
      <div className={`container ${styles.heroContainer}`}>
        <motion.div style={{ y, opacity }} className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.badge}
          >
            <Star size={14} className={styles.starIcon} />
            <span>Award Winning Digital Studio</span>
          </motion.div>

          <h1 className={styles.title}>
            <span className={styles.line}>CRAFTING THE</span>
            <span className={styles.lineHighlight}>FUTURE OF DIGITAL</span>
            <span className={styles.line}>EXPERIENCES</span>
          </h1>
          
          <p className={styles.description}>
            Azdars combines unparalleled creative vision with world-class engineering. 
            We build digital legacies for industry-leading brands.
          </p>
          
          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">
              Start Project <ArrowRight size={20} />
            </a>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <strong>250+</strong>
                <span>Projects</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statItem}>
                <strong>50+</strong>
                <span>Awards</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.visuals}>
        <div className={styles.orbMain}></div>
        <div className={styles.orbSecond}></div>
      </div>
    </section>
  );
}
