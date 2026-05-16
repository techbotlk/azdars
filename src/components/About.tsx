'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], [150, 0]);

  return (
    <section id="about" ref={containerRef} className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.topSection}>
          <motion.h2 style={{ x: x1 }} className={styles.largeTitle}>
            WE ARE <span className="text-primary">AZDARS</span>.
          </motion.h2>
          <motion.h2 style={{ x: x2 }} className={styles.largeTitleRight}>
            DELIVERING THE <span className={styles.outline}>BEST</span>.
          </motion.h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.left}>
            <p className={styles.mainText}>
              Founded on the principles of absolute excellence and relentless innovation, 
              Azdars has grown into a powerhouse of digital transformation. We don&apos;t just 
              build software; we craft digital legacies.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.statBox}>
              <div className={styles.stat}>
                <strong>10+</strong>
                <span>YEARS OF LEGACY</span>
              </div>
              <div className={styles.stat}>
                <strong>100%</strong>
                <span>CLIENT SUCCESS</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.missionVision}>
          <div className={styles.mvCard}>
            <h3>OUR MISSION</h3>
            <p>To redefine the digital landscape through human-first technology and uncompromising creative excellence.</p>
          </div>
          <div className={styles.mvCard}>
            <h3>OUR VISION</h3>
            <p>To be the architects of the next digital era, where every interaction is an experience and every product is a masterpiece.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
