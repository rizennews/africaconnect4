import React from 'react';
import styles from './PartnersBanner.module.css';

const partners = [
  { name: 'WACREN', role: 'Lead — W&C Africa' },
  { name: 'UbuntuNet Alliance', role: 'E&S Africa Cluster' },
  { name: 'GÉANT', role: 'European RREN' },
  { name: 'NORDUnet', role: 'Nordic Partner' },
  { name: 'Expertise France', role: 'Implementing Partner' },
  { name: 'IRD', role: 'Research Institute' },
];

export default function PartnersBanner() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Implemented by a coalition of partners
          </h2>
        </div>
        
        <div className={styles.partnersList}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <span className={styles.partnerName}>{partner.name}</span>
              <span className={styles.partnerRole}>{partner.role}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.additionalTextContainer}>
        <p className={styles.additionalText}>
          The African Union Commission, Regional Economic Communities (ECOWAS, UEMOA, SADC, EAC), national ministries and regulators, and international partners such as the World Bank, UNESCO and the ITU are engaged as key stakeholders.
        </p>
      </div>
    </section>
  );
}
