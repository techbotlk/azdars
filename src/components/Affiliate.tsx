'use client';

import { motion } from 'framer-motion';
import { DollarSign, Share2, TrendingUp, ArrowRight } from 'lucide-react';
import styles from './Affiliate.module.css';

export default function Affiliate() {
  return (
    <section id="affiliate" className="section">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className={styles.title}>
                PARTNER WITH <br />
                <span className={styles.outlineText}>OUR</span> <span className="text-primary">ELITE NETWORK</span>
              </h2>
              <p className={styles.description}>
                Join our elite affiliate network and earn high-ticket commissions by connecting your audience with world-class digital solutions.
              </p>
              
              <div className={styles.benefits}>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}><DollarSign size={20} /></div>
                  <div>
                    <h4>Premium Payouts</h4>
                    <p>Highest commission rates in the industry.</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}><Share2 size={20} /></div>
                  <div>
                    <h4>Elite Materials</h4>
                    <p>Access to premium marketing assets.</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}><TrendingUp size={20} /></div>
                  <div>
                    <h4>Global Tracking</h4>
                    <p>Real-time analytics and reporting.</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary">
                Apply Now <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
          
          <div className={styles.visual}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={styles.dashboardCard}
            >
              <div className={styles.cardHeader}>
                <span>Performance Overview</span>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span>Total Earnings</span>
                  <strong>$12,450.00</strong>
                </div>
                <div className={styles.stat}>
                  <span>Conversion Rate</span>
                  <strong>8.4%</strong>
                </div>
              </div>
              <div className={styles.graph}>
                {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className={styles.bar}
                  ></motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
