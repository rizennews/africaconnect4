import React from 'react';
import Link from 'next/link';
import styles from './AboutIntro.module.css';

export default function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>What is AfricaConnect4?</h2>
          <p className={styles.paragraph}>
            AfricaConnect4 (AC4) is an EU-co-funded pan-African connectivity project that consolidates and expands on the results of three previous phases, together supporting the creation, development and use of high-capacity research and education networks across the continent.
          </p>
          <p className={styles.paragraph}>
            The project's overall objective is to increase African research and education communities' access to and use of information and communications technology, and to strengthen international cooperation on science, technology and innovation to address global challenges.
          </p>
          

        </div>

        <div className={styles.rightColumn}>
          <div className={styles.card}>
            <h3 className={styles.cardHeader}>THREE SPECIFIC OBJECTIVES</h3>
            
            <div className={styles.objectiveList}>
              <div className={styles.objectiveItem}>
                <div className={`${styles.badge} ${styles.badgeOrange}`}>1</div>
                <p className={styles.objectiveText}>
                  Enhance the delivery capacity and the financial and institutional sustainability of African Regional and National Research and Education Networks.
                </p>
              </div>
              
              <div className={styles.objectiveItem}>
                <div className={`${styles.badge} ${styles.badgeBlue}`}>2</div>
                <p className={styles.objectiveText}>
                  Ensure African R&E communities' access to affordable, reliable, high-speed connectivity, and connection to the global R&E community.
                </p>
              </div>
              
              <div className={styles.objectiveItem}>
                <div className={`${styles.badge} ${styles.badgeBlue}`}>3</div>
                <p className={styles.objectiveText}>
                  Strengthen the delivery of above-the-network services, with particular focus on e-learning, climate change science and related disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
