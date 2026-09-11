import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_OPPORTUNITIES, MOCK_AWARDS } from '../../../data/procurement';
import ProcurementActions from './ProcurementActions';
import styles from './page.module.css';

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProcurementDetail({ params }: DetailPageProps) {
  const { id } = await params;
  const opportunity = [...MOCK_OPPORTUNITIES, ...MOCK_AWARDS].find(o => o.id === id);

  if (!opportunity) {
    notFound();
  }

  const statusClass = 
    opportunity.status === 'Open' ? styles.badgeOpen :
    opportunity.status === 'Closed' ? styles.badgeClosed : 
    styles.badgeAwarded;

  return (
    <div className={styles.container}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link href="/procurement" className={styles.backLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Opportunities
        </Link>
      </div>

      <div className={styles.layout}>
        <div className={styles.mainContent}>
          <div className={styles.badges}>
            <span className={`${styles.badge} ${styles.badgeId}`}>{opportunity.id}</span>
            <span className={styles.badge}>{opportunity.category}</span>
            <span className={`${styles.badge} ${statusClass}`}>{opportunity.status}</span>
          </div>
          
          <h1 className={styles.title}>{opportunity.title}</h1>

          <div className={styles.detailsBox}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div>
                <div className={styles.detailLabel}>Deadline</div>
                <div className={styles.detailValue}>{opportunity.deadline}</div>
              </div>
            </div>
            
            {opportunity.budget && (
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <div>
                  <div className={styles.detailLabel}>Budget Range</div>
                  <div className={styles.detailValue}>{opportunity.budget}</div>
                </div>
              </div>
            )}
          </div>

          <h2 className={styles.sectionTitle}>Description</h2>
          <p className={styles.description}>
            {opportunity.description || 'No detailed description provided for this opportunity.'}
          </p>

          {opportunity.documents && opportunity.documents.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>Downloads</h2>
              <div className={styles.docList}>
                {opportunity.documents.map((doc, i) => (
                  <a key={i} href={doc.url} className={styles.docItem}>
                    <div className={styles.docInfo}>
                      <div className={styles.docIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      </div>
                      <div>
                        <div className={styles.docTitle}>{doc.title}</div>
                        <div className={styles.docMeta}>{doc.type} • {doc.size}</div>
                      </div>
                    </div>
                    <div className={styles.downloadIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>

        <div className={styles.sidebar}>
          <ProcurementActions title={opportunity.title} status={opportunity.status} />

          <div className={styles.contactCard}>
            <div className={styles.contactTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Have Questions?
            </div>
            <p className={styles.contactDesc}>
              For inquiries regarding this opportunity, please contact the procurement team.
            </p>
            <div style={{fontWeight: 600}}>WACREN Secretariat</div>
            <a href="mailto:procurement@wacren.net" className={styles.contactEmail}>procurement@wacren.net</a>
          </div>
        </div>
      </div>
    </div>
  );
}
