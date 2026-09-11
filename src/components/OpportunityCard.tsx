import React from 'react';
import Link from 'next/link';
import styles from './OpportunityCard.module.css';

interface OpportunityCardProps {
  id: string;
  category: string;
  title: string;
  deadline: string;
  budget?: string;
  status: 'Open' | 'Closed' | 'Awarded';
}

export default function OpportunityCard({
  id,
  category,
  title,
  deadline,
  budget,
  status
}: OpportunityCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.badges}>
          <span className={styles.idBadge}>{id}</span>
          <span className={styles.categoryBadge}>{category}</span>
        </div>
        <div className={`${styles.statusBadge} ${styles[status.toLowerCase()]}`}>
          {status}
        </div>
      </div>
      
      <div className={styles.cardBody}>
        <div className={styles.mainInfo}>
          <h3 className={styles.title}>{title}</h3>
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Deadline: <strong>{deadline}</strong></span>
            </div>
            
            {budget && (
              <div className={styles.detailItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"></path></svg>
                <span>Budget: {budget}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className={styles.actions}>
          <Link href={`/procurement/${id}`} className={styles.viewBtn}>
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
