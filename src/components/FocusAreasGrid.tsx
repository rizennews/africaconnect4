import React from 'react';
import Link from 'next/link';
import { lang as getLang } from 'next/root-params';
import { getDictionary } from '@/app/[lang]/dictionaries';
import styles from './FocusAreasGrid.module.css';

export default async function FocusAreasGrid() {
  const dict = await getDictionary();
  const t = dict.focusGrid;
  const locale = await getLang();
  const href = (path: string) => `/${locale}${path}`;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Card 1 */}
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.iconWrapper}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4"></circle>
            </svg>
          </div>

          <h3 className={styles.title}>{t.cards[0].title}</h3>
          <p className={styles.description}>
            {t.cards[0].description}
          </p>
          <Link href={href('/connectivity-expansion')} className={styles.exploreLink}>
            {t.exploreLink} 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        {/* Card 2 */}
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.iconWrapper}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </div>

          <h3 className={styles.title}>{t.cards[1].title}</h3>
          <p className={styles.description}>
            {t.cards[1].description}
          </p>
          <Link href={href('/climate-data-infrastructure')} className={styles.exploreLink}>
            {t.exploreLink} 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        {/* Card 3 */}
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.iconWrapper}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>

          <h3 className={styles.title}>{t.cards[2].title}</h3>
          <p className={styles.description}>
            {t.cards[2].description}
          </p>
          <Link href={href('/women-in-stem')} className={styles.exploreLink}>
            {t.exploreLink} 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        {/* Card 4 */}
        <div className={`${styles.card} ${styles.card4}`}>
          <div className={styles.iconWrapper}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>

          <h3 className={styles.title}>{t.cards[3].title}</h3>
          <p className={styles.description}>
            {t.cards[3].description}
          </p>
          <Link href={href('/cybersecurity-threat-intelligence')} className={styles.exploreLink}>
            {t.exploreLink} 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        {/* Card 5 */}
        <div className={`${styles.card} ${styles.card5}`}>
          <div className={styles.iconWrapper}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>

          <h3 className={styles.title}>{t.cards[4].title}</h3>
          <p className={styles.description}>
            {t.cards[4].description}
          </p>
          <Link href={href('/capacity-building')} className={styles.exploreLink}>
            {t.exploreLink} 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
