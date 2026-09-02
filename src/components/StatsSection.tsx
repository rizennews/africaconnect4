import React from 'react';
import Link from 'next/link';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2 className={styles.title}>
            Building on the success of three earlier phases.
          </h2>
          <p className={styles.description}>
            Since 2015, WACREN's participation inthe AfricaConnect project has fundamentally reshaped our region's research and education networking landscape. Phase 4 of the project consolidates and expands these results across the WACREN region
          </p>
          <Link href="https://africaconnect3.net/wp-content/uploads/2026/02/AC3-impact-report_English.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>
            Read AfricaConnect impact report
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        {/* Right Content - Stats Grid */}
        <div className={styles.rightContent}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>18</div>
            <div className={styles.statLabel}>NRENs in 22 countries supported</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Institutions on high-speed connectivity</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>1M+</div>
            <div className={styles.statLabel}>Researchers, students and staff impacted</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>12</div>
            <div className={styles.statLabel}>Countries connected to the regional backbone</div>
          </div>
        </div>
      </div>
    </section>
  );
}
