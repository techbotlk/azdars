'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, Globe, Palette, Video, Megaphone } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    icon: <Terminal size={32} />,
    title: 'Software Development',
    description: 'Bespoke enterprise software, mobile apps, and complex system architectures built for scale.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Website Design & Development',
    description: 'Immersive digital storefronts and high-conversion web experiences.'
  },
  {
    icon: <Palette size={32} />,
    title: 'Graphic Design',
    description: 'Strategic visual identities and high-impact brand storytelling.'
  },
  {
    icon: <Video size={32} />,
    title: 'Video Editing & Production',
    description: 'Cinematic video content and professional post-production.'
  },
  {
    icon: <Megaphone size={32} />,
    title: 'Digital Marketing',
    description: 'Data-driven growth strategies and market dominance.'
  }
];

function BentoCard({ service, index }: { service: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={styles.card}
    >
      <div style={{ transform: "translateZ(50px)" }} className={styles.cardInner}>
        <div className={styles.iconContainer}>
          {service.icon}
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDescription}>{service.description}</p>
        </div>
      </div>
      <div className={styles.glow} />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className={`${styles.services} section`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Expertise</span>
          <h2 className={styles.title}>
            BEYOND <span className={styles.outlineText}>DIGITAL</span> <br />
            <span className="text-primary">EXCELLENCE</span>
          </h2>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <BentoCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
