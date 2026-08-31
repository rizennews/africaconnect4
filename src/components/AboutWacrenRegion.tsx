import React from 'react';
import styles from './AboutWacrenRegion.module.css';

export default function AboutWacrenRegion() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>AfricaConnect4 in the WACREN region</h2>
          <p className={styles.subtitle}>
            WACREN leads AfricaConnect4 in West and Central Africa (Cluster 2), an implementation area covering more than 22 countries. Within this region, the project is working to:
          </p>
        </div>

        <div className={styles.grid}>
          {/* Top Left - Dark */}
          <div className={`${styles.cell} ${styles.cellTopLeft}`}>
            <div className={styles.iconWrapper}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h3 className={styles.cellTitle}>Extend the backbone into Central Africa</h3>
            <p className={styles.cellDesc}>
              A new Lagos-Douala link will connect Cameroon's NREN (RIC), creating WACREN's first point of presence in Central Africa and a fifth aggregation hub, opening the door to future connections with Chad, Equatorial Guinea and Gabon.
            </p>
          </div>

          {/* Top Right */}
          <div className={`${styles.cell} ${styles.cellTopRight}`}>
            <div className={styles.iconWrapperLight}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg>
            </div>
            <h3 className={styles.cellTitleDark}>Strengthen West African connectivity</h3>
            <p className={styles.cellDescLight}>
              Peering with Senegal's research and education network via the Dakar hub, and a new Dakar-Praia link bringing Cabo Verde's emerging NREN onto the network, with future links to the Americas through the BELLA programme.
            </p>
          </div>

          {/* Bottom 1 */}
          <div className={`${styles.cell} ${styles.cellBottom}`}>
            <div className={styles.iconWrapperLight}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            <h3 className={styles.cellTitleDark}>Build resilience</h3>
            <p className={styles.cellDescLight}>
              Redundant links building on the Lagos GXP and its peering connection to ZAOXI in Cape Town, with further resilience via Fortaleza and the AMPATH GXP in Miami.
            </p>
          </div>



          {/* Bottom 3 */}
          <div className={`${styles.cell} ${styles.cellBottom}`}>
            <div className={styles.iconWrapperLight}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3 className={styles.cellTitleDark}>Deliver above-the-network services</h3>
            <p className={styles.cellDescLight}>
              Regional identity, security, video collaboration, data and computing services, including eduID.africa, an Information Sharing and Analysis Centre for cybersecurity, and federated high-performance computing.
            </p>
          </div>

          {/* Bottom 4 */}
          <div className={`${styles.cell} ${styles.cellBottom}`}>
            <div className={styles.iconWrapperLight}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className={styles.cellTitleDark}>Grow women's leadership</h3>
            <p className={styles.cellDescLight}>
              An annual women's hackathon, training and mentorship programmes to increase women's participation in the REN ecosystem and in STEM more broadly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
