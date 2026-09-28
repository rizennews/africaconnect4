import React from 'react';
import Image from 'next/image';
import { getDictionary } from '@/app/[lang]/dictionaries';
import styles from './FundingBanner.module.css';

export default async function FundingBanner() {
  const dict = await getDictionary();
  const t = dict.funding;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side: Logo and Funding Info */}
        <div className={styles.leftContent}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/EU-logo.png" 
              alt="European Union Logo" 
              width={200} 
              height={100} 
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </div>
          
          <div className={styles.textContent}>
            <span className={styles.fundedBy}>{t.fundedBy}</span>
            <p className={styles.fundingText}>
              {t.fundingText}
            </p>
          </div>
        </div>

        {/* Right Side: Disclaimer */}
        <div className={styles.rightContent}>
          <p className={styles.disclaimerText}>
            {t.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
