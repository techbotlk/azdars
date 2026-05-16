'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "What makes Azdars different from other digital agencies?",
    answer: "Azdars combines world-class design aesthetics with enterprise-grade engineering. We don't just build websites or apps; we craft proprietary digital assets designed to scale and dominate your market."
  },
  {
    question: "Do you offer custom software solutions?",
    answer: "Absolutely. Our 'Custom Build' approach means we architect and develop bespoke software systems from the ground up, precisely tailored to your unique operational and business needs."
  },
  {
    question: "How do your Flexible Partnership Models work?",
    answer: "We offer Retainer, Project-Based, Subscription, and Hybrid models. This allows us to integrate seamlessly with your team, whether you need a fixed-scope project delivered or ongoing, dedicated support."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on complexity. A premium brand identity or landing page might take 2-4 weeks, while complex enterprise software platforms can span 3-6 months. We provide precise roadmaps during consultation."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, our Retainer and Subscription partnership models are specifically designed to provide continuous integration, security updates, and feature evolution long after the initial launch."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`${styles.faq} section`}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            FREQUENTLY <br />
            <span className={styles.outlineText}>ASKED</span> <span className="text-primary">QUESTIONS</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about partnering with Azdars.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.item} ${openIndex === index ? styles.active : ''}`}
            >
              <button className={styles.question} onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <ChevronDown className={styles.icon} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrapper}
                  >
                    <div className={styles.answer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
