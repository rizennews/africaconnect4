import React from 'react';
import Link from 'next/link';
import styles from './AboutTimeline.module.css';

interface AboutTimelineDict {
  title: string;
  subtitle: string;
  visitSite: string;
  card2Title: string;
  card2Desc: string;
  card3Title: string;
  card3Desc: string;
  card4Title: string;
  card4Desc: string;
  currentPhase: string;
}

export default function AboutTimeline({ dict }: { dict: AboutTimelineDict }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{dict.title}</h2>
          <p className={styles.subtitle}>
            {dict.subtitle}
          </p>
        </div>
        
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>
          <div className={styles.grid}>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.ring}></div>
              </div>
              <div className={styles.year}>2015 - 2019</div>
              <h3 className={styles.cardTitle}>{dict.card2Title}</h3>
              <p className={styles.cardDesc}>
                {dict.card2Desc}
              </p>
              <Link href="https://www.africaconnect2.net/" className={styles.link} target="_blank" rel="noopener noreferrer">
                {dict.visitSite} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.ring}></div>
              </div>
              <div className={styles.year}>2019 - 2025</div>
              <h3 className={styles.cardTitle}>{dict.card3Title}</h3>
              <p className={styles.cardDesc}>
                {dict.card3Desc}
              </p>
              <Link href="https://africaconnect3.net/" className={styles.link} target="_blank" rel="noopener noreferrer">
                {dict.visitSite} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
            </div>
            
            {/* Card 4 - Active */}
            <div className={`${styles.card} ${styles.cardActive}`}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.ring} ${styles.ringActive}`}></div>
              </div>
              <div className={styles.year}>2025 - 2029</div>
              <h3 className={styles.cardTitle}>{dict.card4Title}</h3>
              <p className={styles.cardDesc}>
                {dict.card4Desc}
              </p>
              <span className={styles.currentPhase}>{dict.currentPhase}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
