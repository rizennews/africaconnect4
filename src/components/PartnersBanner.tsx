import React from 'react';
import Link from 'next/link';
import styles from './PartnersBanner.module.css';

const partners = [
  { name: 'WACREN', role: 'Lead — W&C Africa', url: 'https://wacren.net/' },
  { name: 'UbuntuNet Alliance', role: 'E&S Africa Cluster', url: 'https://ubuntunet.net/' },
  { name: 'GÉANT', role: 'European RREN', url: 'https://geant.org/' },
  { name: 'NORDUnet', role: 'Nordic Partner', url: 'https://nordu.net/' },
  { name: 'Expertise France/IRD', role: 'Implementing Partners', url: 'https://www.expertisefrance.fr/en' },
];

export default function PartnersBanner() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Project partners
          </h2>
        </div>
        
        <div className={styles.partnersList}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <Link href={partner.url} className={styles.partnerName} target="_blank" rel="noopener noreferrer">{partner.name}</Link>
              <span className={styles.partnerRole}>{partner.role}</span>
            </div>
          ))}
        </div>
      </div>
      {/* 
      <div className={styles.additionalTextContainer}>
        <p className={styles.additionalText}>
          The African Union Commission, Regional Economic Communities (ECOWAS, UEMOA, SADC, EAC), national ministries and regulators, and international partners such as the World Bank, UNESCO and the ITU are engaged as key stakeholders.
        </p>
      </div>
      */}
    </section>
  );
}
