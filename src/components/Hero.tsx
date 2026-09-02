import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Connecting Africa to unlimited possibilities
          </h1>
          <p className={styles.description}>
            AfricaConnect4 is the fourth interation of an EU-funded initiative growing Africa’s research and education sector through high-speed connectivity, climate data infrastructure, digital services and capacity building implemented in West and Central Africa by WACREN.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/about" className={styles.primaryButton}>
              Explore AfricaConnect4
            </Link>
            <Link href="/activities" className={styles.secondaryButton}>
              View Activities
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <video 
            src="/WACREN Timeline.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.heroImage}
          />
        </div>
      </section>
    </div>
  );
}
