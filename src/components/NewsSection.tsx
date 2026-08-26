import React from 'react';
import Link from 'next/link';
import { ARTICLES } from '@/data/articles';
import NewsGrid, { NewsArticle } from '@/components/NewsGrid';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  const featuredArticles: NewsArticle[] = ARTICLES.slice(0, 3).map((item) => ({
    id: item.id,
    category: item.category,
    date: item.date,
    readTime: item.readTime,
    title: item.title,
    image: item.image,
    link: `/news/${item.slug}`,
    cutoutPosition: item.cutoutPosition,
    timestamp: item.timestamp,
  }));

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
          <Link href="/news" className={styles.viewAll}>
            View all news
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        <div className={styles.gridWrapper}>
          <NewsGrid articles={featuredArticles} showControls={false} />
        </div>
      </div>
    </section>
  );
}
