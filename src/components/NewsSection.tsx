import React from 'react';
import Link from 'next/link';
import { lang as getLang } from 'next/root-params';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { ARTICLES } from '@/data/articles';
import { ARTICLES_FR } from '@/data/articles_fr';
import { ARTICLES_PT } from '@/data/articles_pt';
import NewsGrid, { NewsArticle } from '@/components/NewsGrid';
import styles from './NewsSection.module.css';

export default async function NewsSection() {
  const dict = await getDictionary();
  const t = dict.news;
  const locale = await getLang();
  const href = (path: string) => `/${locale}${path}`;

  const localizedArticles = locale === 'fr' ? ARTICLES_FR : locale === 'pt' ? ARTICLES_PT : ARTICLES;

  const featuredArticles: NewsArticle[] = localizedArticles.slice(0, 3).map((item) => ({
    id: item.id,
    category: item.category,
    date: item.date,
    readTime: item.readTime,
    title: (dict.articleTitles && dict.articleTitles[item.slug as keyof typeof dict.articleTitles]) || item.title,
    image: item.image,
    link: href(`/news/${item.slug}`),
    cutoutPosition: item.cutoutPosition,
    timestamp: item.timestamp,
  }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>{t.title}</h2>
          </div>
          <Link href={href('/news')} className={styles.viewAll}>
            {t.viewAll}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        <div className={styles.gridWrapper}>
          <NewsGrid dict={dict.newsGrid} articles={featuredArticles} showControls={false} />
        </div>
      </div>
    </section>
  );
}
