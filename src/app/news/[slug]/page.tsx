import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, ArticleData } from '@/data/articles';
import NewsGrid, { NewsArticle } from '@/components/NewsGrid';
import ShareButton from './ShareButton';
import styles from './ArticleSingle.module.css';

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article: ArticleData | undefined = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related posts (exclude current, strictly same category)
  let related = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );

  const relatedArticles: NewsArticle[] = related
    .slice(0, 3)
    .map((item) => ({
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
    <article className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Top Split Hero Section */}
        <header className={styles.heroSplit}>
          {/* Left Column */}
          <div className={styles.heroLeft}>
            <div>
              {/* Breadcrumb Tags */}
              <div className={styles.breadcrumbs}>
                {article.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <Link href={`/news?category=${tag}`} className={styles.breadcrumbLink}>
                      {tag}
                    </Link>
                    {idx < article.tags.length - 1 && (
                      <span className={styles.breadcrumbSeparator}>/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Main Headline */}
              <h1 className={styles.mainTitle}>{article.title}</h1>
            </div>

            {/* Author & Share Row */}
            <div className={styles.authorRow}>
              <div className={styles.authorMeta}>
                <div className={styles.avatar}>
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{article.author.name}</span>
                  <span> • </span>
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Interactive Share Menu */}
              <ShareButton title={article.title} />
            </div>
          </div>

          {/* Right Column (Featured Image) */}
          <div className={styles.heroImageWrapper}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className={styles.heroImage}
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
        </header>

        {/* 2-Column Content Layout (Sidebar + Article Body) */}
        <div className={styles.contentLayout}>
          {/* Left Sidebar: Table of Contents */}
          <aside className={styles.sidebar}>
            <div className={styles.tocHeader}>Table of contents</div>
            <div className={styles.tocDivider}></div>
            <ul className={styles.tocList}>
              {article.tableOfContents.map((item) => (
                <li key={item.id} className={styles.tocItem}>
                  <span className={styles.tocBullet}>•</span>
                  <a href={`#${item.id}`} className={styles.tocLink}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Main Article Content */}
          <div className={styles.articleBody}>
            {article.content.intro && (
              <p className={styles.introText}>{article.content.intro}</p>
            )}

            {article.content.sections.map((section, sIdx) => (
              <section key={section.id || sIdx} id={section.id}>
                {section.heading && (
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                )}
                {section.image && (
                  <div className={styles.sectionImageWrapper} style={{ position: 'relative' }}>
                    <Image 
                      src={section.image} 
                      alt="Section feature" 
                      fill
                      className={styles.sectionImage}
                      sizes="(max-width: 960px) 100vw, 800px"
                    />
                  </div>
                )}
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className={styles.paragraph}>
                    {p}
                  </p>
                ))}
                {section.quote && (
                  <blockquote className={styles.quoteBlock}>
                    <p className={styles.quoteText}>"{section.quote.text}"</p>
                    <cite className={styles.quoteAuthor}>— {section.quote.author}</cite>
                  </blockquote>
                )}
              </section>
            ))}

            {/* CTA / Registration Link */}
            {article.content.cta && (
              <div className={styles.ctaBox}>
                <span className={styles.ctaLabel}>{article.content.cta.label}</span>
                <a
                  href={article.content.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaLink}
                >
                  {article.content.cta.linkText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Posts Section (No search / sort / filter controls) */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle}>Related stories</h2>
            <NewsGrid articles={relatedArticles} showControls={false} />
          </div>
        </section>
      )}
    </article>
  );
}
