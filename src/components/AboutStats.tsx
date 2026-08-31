import React from 'react';
import Link from 'next/link';
import styles from './AboutStats.module.css';

export default function AboutStats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>A sustainable network for the long term.</h2>
          <p className={styles.description}>
            AC4 aims to make WACREN's network and services financially sustainable beyond the life of the project, through long-term capacity leases, new funding partners, and a gradual shift towards shared-cost business models.
          </p>
          <Link href="#" className={styles.button}>
            See what's coming up
          </Link>
        </div>

        {/* Right Column (Stats Grid) */}
        <div className={styles.rightColumn}>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>5th</div>
            <p className={styles.statDesc}>
              Aggregation hub, opening WACREN's first point of presence in Central Africa
            </p>
          </div>
          
          <div className={styles.statBox}>
            <div className={styles.statNumber}>22+</div>
            <p className={styles.statDesc}>
              Countries across the West and Central Africa cluster
            </p>
          </div>
          
          <div className={styles.statBox}>
            <div className={styles.statNumber}>3</div>
            <p className={styles.statDesc}>
              Earlier phases building the network since 2011
            </p>
          </div>
          
          <div className={styles.statBox}>
            <div className={styles.statNumber}>10-yr</div>
            <p className={styles.statDesc}>
              Long-term capacity leases underpinning sustainability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
