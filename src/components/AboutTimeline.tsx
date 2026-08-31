import React from 'react';
import Link from 'next/link';
import styles from './AboutTimeline.module.css';

export default function AboutTimeline() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Building on a decade of progress</h2>
          <p className={styles.subtitle}>
            The European Union has supported African RRENs through the AfricaConnect programme since 2011. Each phase has extended the network's reach across West and Central Africa.
          </p>
        </div>
        
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>
          <div className={styles.grid}>
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.ring}></div>
              </div>
              <div className={styles.year}>2011 - 2015</div>
              <h3 className={styles.cardTitle}>AfricaConnect</h3>
              <p className={styles.cardDesc}>
                Established the first regional research and education backbone, in Eastern and Southern Africa.
              </p>
              <Link href="https://africaconnect1.net/Pages/Home.html" className={styles.link} target="_blank" rel="noopener noreferrer">
                Visit site <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.ring}></div>
              </div>
              <div className={styles.year}>2015 - 2019</div>
              <h3 className={styles.cardTitle}>AfricaConnect2</h3>
              <p className={styles.cardDesc}>
                Launched the WACREN backbone, connecting the NRENs of Nigeria, Ghana and Togo to GÉANT.
              </p>
              <Link href="https://www.africaconnect2.net/" className={styles.link} target="_blank" rel="noopener noreferrer">
                Visit site <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.ring}></div>
              </div>
              <div className={styles.year}>2019 - 2024</div>
              <h3 className={styles.cardTitle}>AfricaConnect3</h3>
              <p className={styles.cardDesc}>
                Expanded to Cote d'Ivoire, Benin and Burkina Faso, and opened a new Dakar aggregation hub.
              </p>
              <Link href="https://africaconnect3.net/" className={styles.link} target="_blank" rel="noopener noreferrer">
                Visit site <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
            </div>
            
            {/* Card 4 - Active */}
            <div className={`${styles.card} ${styles.cardActive}`}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.ring} ${styles.ringActive}`}></div>
              </div>
              <div className={styles.year}>2024 - 2028</div>
              <h3 className={styles.cardTitle}>AfricaConnect4</h3>
              <p className={styles.cardDesc}>
                Closes remaining gaps, deepens above-the-network services and builds long-term sustainability.
              </p>
              <span className={styles.currentPhase}>Current phase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
