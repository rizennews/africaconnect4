import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ARTICLES, ArticleData } from '@/data/articles';
import { ARTICLES_FR } from '@/data/articles_fr';
import { ARTICLES_PT } from '@/data/articles_pt';
import { getPlaceholderBase64 } from '@/utils/placeholder';
import NewsGrid, { NewsArticle } from '@/components/NewsGrid';
import { getDictionary } from '../../dictionaries';
import ShareButton from './ShareButton';
import styles from './ArticleSingle.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const localizedArticles = lang === 'fr' ? ARTICLES_FR : lang === 'pt' ? ARTICLES_PT : ARTICLES;
  const article = localizedArticles.find((a) => a.slug === slug);
  
  if (!article) return { title: 'Article Not Found' };

  const description = article.title;

  return {
    title: article.title,
    description,
    alternates: {
      canonical: `/${lang}/news/${slug}`,
      languages: {
        en: `/en/news/${slug}`,
        fr: `/fr/news/${slug}`,
        pt: `/pt/news/${slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description,
      url: `${siteUrl}/${lang}/news/${slug}`,
      type: 'article',
      publishedTime: new Date(article.timestamp).toISOString(),
      authors: [article.author ? article.author.name : 'WACREN'],
      section: article.category,
      images: article.image ? [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ] : undefined,
      siteName: 'AfricaConnect4',
      locale: lang === 'fr' ? 'fr_FR' : lang === 'pt' ? 'pt_PT' : 'en_IE',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: article.image ? [article.image] : undefined,
      creator: '@WACREN',
    },
  };
}


export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;
  
  const localizedArticles = lang === 'fr' ? ARTICLES_FR : lang === 'pt' ? ARTICLES_PT : ARTICLES;
  const article: ArticleData | undefined = localizedArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const dict = await getDictionary();

  // Related posts (exclude current, strictly same category)
  let related = localizedArticles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );

  const relatedArticles: NewsArticle[] = related
    .slice(0, 3)
    .map((item) => ({
      id: item.id,
      category: item.category,
      date: item.date,
      readTime: item.readTime,
      title: (dict.articleTitles && dict.articleTitles[item.slug as keyof typeof dict.articleTitles]) || item.title,
      image: item.image,
      link: `/${lang}/news/${item.slug}`,
      cutoutPosition: item.cutoutPosition,
      timestamp: item.timestamp,
    }));

  // JSON-LD structured data for rich search results
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.title,
    image: article.image ? [`${siteUrl}${article.image}`] : undefined,
    datePublished: new Date(article.timestamp).toISOString(),
    dateModified: new Date(article.timestamp).toISOString(),
    author: {
      '@type': 'Organization',
      name: article.author ? article.author.name : 'WACREN',
      url: 'https://wacren.net',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AfricaConnect4',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/og-image.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/${lang}/news/${slug}`,
    },
    inLanguage: lang === 'fr' ? 'fr' : lang === 'pt' ? 'pt' : 'en',
    articleSection: article.category,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home',
        item: `${siteUrl}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: lang === 'fr' ? 'Actualités' : lang === 'pt' ? 'Notícias' : 'News',
        item: `${siteUrl}/${lang}/news`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${siteUrl}/${lang}/news/${slug}`,
      },
    ],
  };

  return (
    <article className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                    <Link href={`/${lang}/news?category=${tag}`} className={styles.breadcrumbLink}>
                      {tag}
                    </Link>
                    {idx < article.tags.length - 1 && (
                      <span className={styles.breadcrumbSeparator}>/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Main Headline */}
              <h1 className={styles.mainTitle}>{(dict.articleTitles && dict.articleTitles[article.slug as keyof typeof dict.articleTitles]) || article.title}</h1>
            </div>

            {/* Author & Share Row */}
            <div className={styles.authorRow}>
              <div className={styles.authorMeta}>
                <div className={styles.avatar}>
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    sizes="48px"
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
              <ShareButton title={(dict.articleTitles && dict.articleTitles[article.slug as keyof typeof dict.articleTitles]) || article.title} dict={dict.articleSingle} />
            </div>
          </div>

          {/* Right Column (Featured Image) */}
          <div className={styles.heroImageWrapper}>
            <Image
              src={article.image}
              alt={(dict.articleTitles && dict.articleTitles[article.slug as keyof typeof dict.articleTitles]) || article.title}
              fill
              priority
              placeholder="blur"
              blurDataURL={getPlaceholderBase64()}
              className={styles.heroImage}
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
        </header>

        {/* Content Layout */}
        <div className={styles.contentLayout}>
          {/* Main Article Content */}
          <div className={styles.articleBody}>
            {article.content.intro && (
              <p className={styles.introText}>{article.content.intro}</p>
            )}

            {article.content.sections.map((section, sIdx) => (
              <section key={section.id || sIdx} id={section.id} className={styles.articleSection}>
                {section.heading && (
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                )}
                {section.image && (
                  <div className={styles.sectionImageWrapper}>
                    <img 
                      src={section.image} 
                      alt="Section inline visual" 
                      className={styles.sectionImage}
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
                    <span className={styles.quoteIcon}>“</span>
                    <div className={styles.quoteContent}>
                      <p className={styles.quoteText}>{section.quote.text}</p>
                      <cite className={styles.quoteAuthor}>— {section.quote.author}</cite>
                    </div>
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
            <h2 className={styles.relatedTitle}>{dict.articleSingle.relatedArticles}</h2>
            <NewsGrid dict={dict.newsGrid} articles={relatedArticles} showControls={false} />
          </div>
        </section>
      )}
    </article>
  );
}
