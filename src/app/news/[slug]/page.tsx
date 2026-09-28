import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES, ArticleData } from '@/data/articles';
import { getPlaceholderBase64 } from '@/utils/placeholder';
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article: ArticleData | undefined = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const articleUrl = `${siteUrl}/news/${article.slug}`;
  const imageUrl = article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`;
  const description = article.content.intro || article.title;

  return {
    title: article.title,
    description: description,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      url: articleUrl,
      title: article.title,
      description: description,
      publishedTime: new Date(article.timestamp).toISOString(),
      authors: [article.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: description,
      images: [imageUrl],
      creator: '@WACREN',
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article: ArticleData | undefined = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const articleUrl = `${siteUrl}/news/${article.slug}`;
  const imageUrl = article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NewsArticle',
        '@id': `${articleUrl}#article`,
        isPartOf: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
        headline: article.title,
        description: article.content.intro || article.title,
        image: [imageUrl],
        datePublished: new Date(article.timestamp).toISOString(),
        dateModified: new Date(article.timestamp).toISOString(),
        author: {
          '@type': 'Person',
          name: article.author.name,
          jobTitle: article.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: 'WACREN',
          url: 'https://wacren.net',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/og-image.jpg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'News',
            item: `${siteUrl}/news`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

            {/* Author Block */}
            <div className={styles.authorMeta}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{article.author.name}</span>
                <span className={styles.authorRole}>{article.author.role}</span>
              </div>
              <div className={styles.postMeta}>
                <span>{article.date}</span>
                <span className={styles.bullet}>•</span>
                <span>{article.readTime}</span>
              </div>
              <ShareButton 
                title={article.title} 
              />
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className={styles.heroRight}>
            <div className={styles.imageCard}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                placeholder="blur"
                blurDataURL={getPlaceholderBase64()}
                className={styles.articleImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </header>

        {/* Content Body Layout */}
        <div className={styles.bodyLayout}>
          {/* Left Sticky Sidebar (Table of Contents) */}
          <aside className={styles.sidebar}>
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div className={styles.tocWrapper}>
                <h4 className={styles.tocHeading}>Table of Contents</h4>
                <nav className={styles.tocNav}>
                  {article.tableOfContents.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className={styles.tocLink}>
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </aside>

          {/* Right Main Content Area */}
          <div className={styles.mainContent}>
            {/* Intro paragraph */}
            {article.content.intro && (
              <p className={styles.introParagraph}>{article.content.intro}</p>
            )}

            {/* Content Sections */}
            {article.content.sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.contentSection}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className={styles.paragraph}>
                    {p}
                  </p>
                ))}
                {section.quote && (
                  <blockquote className={styles.quoteBlock}>
                    <span className={styles.quoteIcon}>“</span>
                    <div className={styles.quoteContent}>
                      <p className={styles.quoteText}>{section.quote.text}</p>
                      <cite className={styles.quoteAuthor}>- {section.quote.author}</cite>
                    </div>
                  </blockquote>
                )}
              </section>
            ))}

            {/* CTA / Registration Link */}
            {article.content.cta && (
              <div className={styles.ctaBox}>
                <h3 className={styles.ctaHeading}>Ready to participate?</h3>
                <p className={styles.ctaText}>
                  Registration and call applications are managed via the official WACREN Indico events portal.
                </p>
                <a 
                  href={article.content.cta.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  {article.content.cta.label} &rarr;
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedHeader}>
              <h3 className={styles.relatedTitle}>Related Articles</h3>
            </div>
            <NewsGrid articles={relatedArticles} showControls={false} />
          </section>
        )}
      </div>
    </article>
  );
}
