import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/app/[lang]/dictionaries';
import styles from './StatsSection.module.css';

export default async function StatsSection() {
  const dict = await getDictionary();
  const t = dict.stats;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2 className={styles.title}>
            {t.title}
          </h2>
          <p className={styles.description}>
            {t.description}
          </p>
          <Link href="https://africaconnect3.net/wp-content/uploads/2026/02/AC3-impact-report_English.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>
            {t.reportLink}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        {/* Right Content - Stats Grid */}
        <div className={styles.rightContent}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{t.items[0].number}</div>
            <div className={styles.statLabel}>{t.items[0].label}</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{t.items[1].number}</div>
            <div className={styles.statLabel}>{t.items[1].label}</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{t.items[2].number}</div>
            <div className={styles.statLabel}>{t.items[2].label}</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{t.items[3].number}</div>
            <div className={styles.statLabel}>{t.items[3].label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
