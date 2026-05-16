'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Portfolio.module.css';

const projects = [
  { id: 1, title: 'Enterprise POS', category: 'Software', image: 'https://images.unsplash.com/photo-1556742049-13e73ec79517?q=80&w=800' },
  { id: 2, title: 'Global Retail Hub', category: 'Web Experience', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800' },
  { id: 3, title: 'Minimalist Vision', category: 'Brand Identity', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800' },
  { id: 4, title: 'Urban Narrative', category: 'Cinematography', image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=800' },
  { id: 5, title: 'Growth Engine', category: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800' },
  { id: 6, title: 'Cloud Systems', category: 'Software', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800' }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={`${styles.portfolio} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            SELECTED <br />
            <span className={styles.outlineText}>OUR</span> <span className="text-primary">WORKS</span>
          </h2>
          <p className={styles.description}>
            A curated selection of our most challenging and transformative digital products.
          </p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.project}
            >
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.arrowBox}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
