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
            Since 2011, the AfricaConnect series has fundamentally reshaped Africa’s research and education networking landscape. Phase 4 consolidates and expands these results across both clusters.
          </p>
          <Link href="#" className={styles.button}>
            See what&apos;s coming up
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        {/* Right Content - Stats Grid */}
        <div className={styles.rightContent}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>38</div>
            <div className={styles.statLabel}>NRENs supported into formation across the continent</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3,000</div>
            <div className={styles.statLabel}>Institutions on high-speed connections</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>9M+</div>
            <div className={styles.statLabel}>Students & staff reached by the programme</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statNumber}>6 → 12</div>
            <div className={styles.statLabel}>Countries on the WACREN backbone after Phase 4 expansion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
