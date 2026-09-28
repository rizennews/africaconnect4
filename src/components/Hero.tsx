import React from 'react';
import Link from 'next/link';
import { lang as getLang } from 'next/root-params';
import styles from './Hero.module.css';
import { getDictionary } from '@/app/[lang]/dictionaries';

export default async function Hero() {
  const dict = await getDictionary();
  const t = dict.hero;
  const locale = await getLang();
  const href = (path: string) => `/${locale}${path}`;

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t.title}
          </h1>
          <p className={styles.description}>
            {t.description}
          </p>
          <div className={styles.buttonGroup}>
            <Link href={href('/about')} className={styles.primaryButton}>
              {t.explore}
            </Link>
            <Link href={href('/activities')} className={styles.secondaryButton}>
              {t.viewActivities}
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
