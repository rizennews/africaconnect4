import React from 'react';
import styles from './FocusAreasIntro.module.css';

export default function FocusAreasIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            Five thematic <span className={styles.highlight}>focus areas</span>
          </h2>
        </div>

      </div>
    </section>
  );
}
