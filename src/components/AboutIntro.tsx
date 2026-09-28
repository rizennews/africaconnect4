import React from 'react';
import Link from 'next/link';
import styles from './AboutIntro.module.css';

type AboutIntroDict = {
  title: string;
  para1: string;
  para2: string;
  objectivesTitle: string;
  objectives: string[];
};

export default function AboutIntro({ dict }: { dict: AboutIntroDict }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>{dict.title}</h2>
          <p className={styles.paragraph}>
            {dict.para1}
          </p>
          <p className={styles.paragraph}>
            {dict.para2}
          </p>
          

        </div>

        <div className={styles.rightColumn}>
          <div className={styles.card}>
            <h3 className={styles.cardHeader}>{dict.objectivesTitle}</h3>
            
            <div className={styles.objectiveList}>
              <div className={styles.objectiveItem}>
                <div className={`${styles.badge} ${styles.badgeOrange}`}>1</div>
                <p className={styles.objectiveText}>
                  {dict.objectives[0]}
                </p>
              </div>
              
              <div className={styles.objectiveItem}>
                <div className={`${styles.badge} ${styles.badgeBlue}`}>2</div>
                <p className={styles.objectiveText}>
                  {dict.objectives[1]}
                </p>
              </div>
              
              <div className={styles.objectiveItem}>
                <div className={`${styles.badge} ${styles.badgeBlue}`}>3</div>
                <p className={styles.objectiveText}>
                  {dict.objectives[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
