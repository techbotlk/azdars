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

          <motion.h1 
            className={styles.title}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className={styles.line}>CRAFTING THE</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className={styles.lineHighlight}>FUTURE OF DIGITAL</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className={styles.line}>EXPERIENCES</motion.span>
          </motion.h1>
          
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
