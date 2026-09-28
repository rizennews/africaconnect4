import React from 'react';
import { getDictionary } from '@/app/[lang]/dictionaries';
import styles from './FocusAreasIntro.module.css';

export default async function FocusAreasIntro() {
  const dict = await getDictionary();
  const t = dict.focusIntro;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            {t.preTitle} <span className={styles.highlight}>{t.highlight}</span>
          </h2>
        </div>

      </div>
    </section>
  );
}
