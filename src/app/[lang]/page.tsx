import Hero from '@/components/Hero';
import FocusAreasIntro from '@/components/FocusAreasIntro';
import FocusAreasGrid from '@/components/FocusAreasGrid';
import StatsSection from '@/components/StatsSection';
import NewsSection from '@/components/NewsSection';
import FundingBanner from '@/components/FundingBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <FocusAreasIntro />
      <FocusAreasGrid />
      <StatsSection />
      <NewsSection />
      <FundingBanner />
    </main>
  );
}
