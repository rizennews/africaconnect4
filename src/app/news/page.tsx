import PageHero from '@/components/PageHero';
import NewsGrid, { NewsArticle } from '@/components/NewsGrid';
import FundingBanner from '@/components/FundingBanner';
import { ARTICLES } from '@/data/articles';

export default function Page() {
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

  return (
    <main style={{ backgroundColor: 'var(--color-light-gray, #f0f0f1)', minHeight: '100vh' }}>
      <PageHero 
        title="News & updates." 
        description="Announcements, milestones, partnership news and reports from the field across the West and Central Africa cluster of AfricaConnect4."
      />
      
      <NewsGrid articles={newsArticles} />
      
      <FundingBanner />
    </main>
  );
}
