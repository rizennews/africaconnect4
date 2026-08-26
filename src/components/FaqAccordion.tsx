'use client';

import React, { useState } from 'react';
import styles from './FaqAccordion.module.css';

interface FaqAccordionProps {
  question: string;
  children: React.ReactNode;
}

export default function FaqAccordion({ question, children }: FaqAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles.question} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={styles.icon}></span>
      </button>
      <div className={styles.answer}>
        {children}
      </div>
    </div>
  );
}
