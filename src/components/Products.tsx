'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Package, Calculator, UserCheck, Plus, Briefcase, Clock, Calendar, RefreshCw } from 'lucide-react';
import styles from './Products.module.css';

const products = [
  { icon: <ShoppingCart size={24} />, title: 'Azdars POS', desc: 'Seamless retail experiences with integrated payments and analytics.' },
  { icon: <Package size={24} />, title: 'Inventory Pro', desc: 'Real-time supply chain optimization for growing businesses.' },
  { icon: <Calculator size={24} />, title: 'Azdars Finance', desc: 'Enterprise-grade accounting tools to manage global finances.' },
  { icon: <UserCheck size={24} />, title: 'Azdars CRM', desc: 'High-intelligence customer relationship management.' }
];

export default function Products() {
  return (
    <section id="products" className={`${styles.products} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            PROPRIETARY <br />
            <span className={styles.outlineText}>DIGITAL</span> <span className="text-primary">ASSETS</span>
          </h2>
          <p className={styles.subtitle}>
            Empower your operations with our suite of premium software products.
          </p>
        </div>
        
        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.icon}>{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <button className={styles.learnMore}>Learn More</button>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`${styles.card} ${styles.moreCard}`}
          >
            <div className={styles.moreIcon}><Plus size={32} /></div>
            <h3>Custom Build</h3>
            <p>We build tailored software systems from the ground up for your specific needs.</p>
            <a href="#contact" className="btn btn-outline btn-sm">Start Build</a>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
