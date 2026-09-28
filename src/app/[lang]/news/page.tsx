import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
import PageHero from '@/components/PageHero';
import NewsGrid, { NewsArticle } from '@/components/NewsGrid';
import FundingBanner from '@/components/FundingBanner';
import { ARTICLES } from '@/data/articles';
import { ARTICLES_FR } from '@/data/articles_fr';
import { ARTICLES_PT } from '@/data/articles_pt';

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

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary();
  const t = dict.news;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

  const localizedArticles = lang === 'fr' ? ARTICLES_FR : lang === 'pt' ? ARTICLES_PT : ARTICLES;

  const newsArticles: NewsArticle[] = localizedArticles.map((item) => ({
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

  const newsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'News and Updates - AfricaConnect4',
    description: 'Announcements, milestones, and articles from AfricaConnect4.',
    url: `${siteUrl}/news`,
    hasPart: localizedArticles.map((a) => ({
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
        title={t.title} 
        description={t.description} 
      />
      
      <NewsGrid dict={dict.newsGrid} articles={newsArticles} />
      
      <FundingBanner />
    </main>
  );
}
