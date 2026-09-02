import React from 'react';
import Link from 'next/link';
import styles from './AboutWacrenRegion.module.css';
import focusStyles from './FocusAreasGrid.module.css';

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

        <div className={focusStyles.container}>
          {/* Card 1 */}
          <div className={`${focusStyles.card} ${focusStyles.card1}`}>
            <div className={focusStyles.iconWrapper}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
            </div>

            <h3 className={focusStyles.title}>Connectivity Expansion</h3>
            <p className={focusStyles.description}>
              Strengthening the WACREN backbone, extending high-speed regional links and tackling last-mile gaps bringing new countries into the network in Phase 4.
            </p>
            <Link href="#" className={focusStyles.exploreLink}>
              Explore 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          {/* Card 2 */}
          <div className={`${focusStyles.card} ${focusStyles.card2}`}>
            <div className={focusStyles.iconWrapper}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </div>

            <h3 className={focusStyles.title}>Climate Data Infrastructure</h3>
            <p className={focusStyles.description}>
              HPC clusters, EUMETCast terrestrial data portals, WMO-compliant weather stations and LoRaWAN gateways building the digital plumbing for African climate research, all under the WACREN CLIMET service. 
            </p>
            <Link href="#" className={focusStyles.exploreLink}>
              Explore 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          {/* Card 3 */}
          <div className={`${focusStyles.card} ${focusStyles.card3}`}>
            <div className={focusStyles.iconWrapper}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>

            <h3 className={focusStyles.title}>Women in STEM</h3>
            <p className={focusStyles.description}>
              Growing women’s leadership through the Women-in-WACREN programme, annual hackathons and mentorship.
            </p>
            <Link href="#" className={focusStyles.exploreLink}>
              Explore 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          {/* Card 4 */}
          <div className={`${focusStyles.card} ${focusStyles.card4}`}>
            <div className={focusStyles.iconWrapper}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            <h3 className={focusStyles.title}>Cybersecurity & Threat Intelligence</h3>
            <p className={focusStyles.description}>
              Standing up an ISAC, strengthening CSIRT cooperation and securing federated identity across the region’s NRENs, through the TrustBroker Africa and the WACREN T&I programmes
            </p>
            <Link href="#" className={focusStyles.exploreLink}>
              Explore 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          {/* Card 5 */}
          <div className={`${focusStyles.card} ${focusStyles.card5}`}>
            <div className={focusStyles.iconWrapper}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>

            <h3 className={focusStyles.title}>Capacity Building</h3>
            <p className={focusStyles.description}>
              The NREN Academy, business accelerators, technical training and exchange programmes equipping a new generation of African REN leaders, all through the Africa Training Initiative (ATI).
            </p>
            <Link href="#" className={focusStyles.exploreLink}>
              Explore 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
