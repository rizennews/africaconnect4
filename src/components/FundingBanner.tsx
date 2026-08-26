import React from 'react';
import Image from 'next/image';
import styles from './FundingBanner.module.css';

export default function FundingBanner() {
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
            <span className={styles.fundedBy}>Funded by</span>
            <p className={styles.fundingText}>
              The European Union — under the EU Global Gateway Strategy and the Africa-Europe Investment Package, through DG INTPA.
            </p>
          </div>
        </div>

        {/* Right Side: Disclaimer */}
        <div className={styles.rightContent}>
          <p className={styles.disclaimerText}>
            Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible.
          </p>
        </div>
      </div>
    </section>
  );
}
