import React from 'react';
import Link from 'next/link';
import styles from './NewsSection.module.css';

// Placeholder data for the news blocks
const newsItems = [
  {
    id: 1,
    tag: 'Announcement',
    date: 'Oct 12, 2023',
    title: 'Phase 4 officially kicks off with new regional partnerships',
    excerpt: 'The European Union and regional RRENs have formally signed the agreements to launch the next phase of the AfricaConnect programme.',
    link: '#'
  },
  {
    id: 2,
    tag: 'Milestone',
    date: 'Sep 28, 2023',
    title: 'WACREN backbone expands to 6 new countries',
    excerpt: 'Significant infrastructure upgrades have been completed, connecting new educational institutions to high-speed research networks.',
    link: '#'
  },
  {
    id: 3,
    tag: 'Story from the field',
    date: 'Aug 15, 2023',
    title: 'How climate data portals are empowering local researchers',
    excerpt: 'Researchers in West Africa are using newly deployed EUMETCast portals to model weather patterns and predict agricultural yields.',
    link: '#'
  }
];

export default function NewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>News & updates.</h2>
            <p className={styles.description}>
              Announcements, milestones, partnership updates and stories from the field across the West and Central Africa cluster.
            </p>
          </div>
          <Link href="#" className={styles.viewAll}>
            View all news
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        <div className={styles.grid}>
          {newsItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.tag}>{item.tag}</span>
                  <span className={styles.date}>{item.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.excerpt}>{item.excerpt}</p>
                <Link href={item.link} className={styles.readMore}>
                  Read more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
