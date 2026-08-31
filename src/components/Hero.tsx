import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Connecting Africa to unlimited possibilities
        </h1>
        <p className={styles.description}>
          AfricaConnect4 is the fourth chapter of an EU-funded initiative growing Africa’s research and education sector through high-speed connectivity, climate data infrastructure, digital services and capacity building implemented in West and Central Africa by WACREN.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="#" className={styles.primaryButton}>
            Explore the Project
          </Link>
          <Link href="#" className={styles.secondaryButton}>
            See Activities
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
  );
}
