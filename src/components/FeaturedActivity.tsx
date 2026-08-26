import React from 'react';
import styles from './FeaturedActivity.module.css';

export default function FeaturedActivity() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Left Side (Dark) */}
        <div className={styles.left}>
          <div>
            <span className={styles.tag}>Featured · Flagship event</span>
            <h2 className={styles.title}>WACREN 2026 —<br />Connected Futures</h2>
            <p className={styles.description}>
              The flagship annual gathering of the West and Central African research and education networking community — a week of workshops, project meetings and the main two-day conference under the theme <em>Advancing Africa&apos;s Digital Sovereignty Through Open Collaboration.</em>
            </p>
          </div>
          
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>When</span>
              <span className={styles.metaValue}>23 — 27 March<br/>2026</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Where</span>
              <span className={styles.metaValue}>Banjul, The<br/>Gambia</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Format</span>
              <span className={styles.metaValue}>In-person · EN &<br/>FR</span>
            </div>
          </div>
        </div>

        {/* Right Side (Orange) */}
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <span className={styles.darkTag}>Featured · Flagship event</span>
            <span className={styles.conferenceType}>Annual Conference<br/>W&C Africa</span>
          </div>
          
          <div>
            <div className={styles.year}>2026</div>
            <h3 className={styles.subtitle}>Connected Futures — Advancing Africa&apos;s digital sovereignty.</h3>
          </div>
          
          <div className={styles.rightMetaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.rightMetaLabel}>Dates</span>
              <span className={styles.rightMetaValue}>23 — 27 Mar<br/>2026</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.rightMetaLabel}>Venue</span>
              <span className={styles.rightMetaValue}>SDKJICC ·<br/>Banjul</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.rightMetaLabel}>Host</span>
              <span className={styles.rightMetaValue}>The Gambia ·<br/>WACREN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
