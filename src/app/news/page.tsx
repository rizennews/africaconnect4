import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import NewsGrid, { NewsArticle } from '@/components/NewsGrid';
import FundingBanner from '@/components/FundingBanner';
import { ARTICLES } from '@/data/articles';

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Announcements, milestones, partnership news and reports from the field across the West and Central Africa cluster of AfricaConnect4.',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'News & Updates | AfricaConnect4',
    description: 'Announcements, milestones, and reports from the field across the AfricaConnect4 programme.',
    url: 'https://africaconnect4.net/news',
  },
};

export default function Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

  const newsArticles: NewsArticle[] = ARTICLES.map((item) => ({
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

  const newsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'News and Updates - AfricaConnect4',
    description: 'Announcements, milestones, and articles from AfricaConnect4.',
    url: `${siteUrl}/news`,
    hasPart: ARTICLES.map((a) => ({
      '@type': 'NewsArticle',
      headline: a.title,
      url: `${siteUrl}/news/${a.slug}`,
      datePublished: new Date(a.timestamp).toISOString(),
    })),
  };

  return (
    <main style={{ backgroundColor: 'var(--color-light-gray, #f0f0f1)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsListSchema) }}
      />
      <PageHero 
        title="News & updates." 
        description="Announcements, milestones, partnership news and reports from the field across the West and Central Africa cluster of AfricaConnect4." 
      />
      
      <NewsGrid articles={newsArticles} />
      
      <FundingBanner />
    </main>
  );
}
