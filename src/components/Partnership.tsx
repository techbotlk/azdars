'use client';

import { motion } from 'framer-motion';
import { Clock, Briefcase, Calendar, RefreshCw } from 'lucide-react';
import styles from './Partnership.module.css';

export default function Partnership() {
  return (
    <section id="partnership" className={`${styles.partnership} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            FLEXIBLE <br />
            <span className={styles.outlineText}>PARTNERSHIP</span> <span className="text-primary">MODELS</span>
          </h2>
          <p className={styles.subtitle}>
            Tailored engagement structures designed to scale with your business needs and technical requirements.
          </p>
        </div>

        <div className={styles.modelsGrid}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.model}
          >
            <Clock size={40} className={styles.modelIcon} />
            <h4>Retainer</h4>
            <p>Ongoing dedicated support, continuous integration, and seamless product evolution.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.model}
          >
            <Briefcase size={40} className={styles.modelIcon} />
            <h4>Project-Based</h4>
            <p>Fixed-scope delivery with precise milestones and guaranteed outcome-driven results.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.model}
          >
            <Calendar size={40} className={styles.modelIcon} />
            <h4>Subscription</h4>
            <p>SaaS access to our proprietary core tools with enterprise-grade SLA and security.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.model}
          >
            <RefreshCw size={40} className={styles.modelIcon} />
            <h4>Hybrid</h4>
            <p>A completely tailored blend of services to fit unique, large-scale enterprise demands.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
