import React from 'react';
import styles from './FocusAreasIntro.module.css';

export default function FocusAreasIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            Five thematic <span className={styles.highlight}>focus areas</span>.
          </h2>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.description}>
            AfricaConnect4 organises its work in West and Central Africa around five
            mutually reinforcing focus areas — each addressing a structural gap in
            the region’s research and education networking ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}
