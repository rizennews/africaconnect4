import React from 'react';
import Link from 'next/link';
import styles from './PartnersBanner.module.css';

interface Partner {
  name: string;
  role: string;
}

interface PartnersBannerDict {
  title: string;
  partners: Partner[];
}

export default function PartnersBanner({ dict }: { dict: PartnersBannerDict }) {
  const partnerUrls = [
    'https://wacren.net/',
    'https://ubuntunet.net/',
    'https://geant.org/',
    'https://nordu.net/',
    'https://www.expertisefrance.fr/en'
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            {dict.title}
          </h2>
        </div>
        
        <div className={styles.partnersList}>
          {dict.partners.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <Link href={partnerUrls[index] || '#'} className={styles.partnerName} target="_blank" rel="noopener noreferrer">{partner.name}</Link>
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
