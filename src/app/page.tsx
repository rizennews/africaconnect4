import Hero from '@/components/Hero';
import PartnersBanner from '@/components/PartnersBanner';
import FocusAreasIntro from '@/components/FocusAreasIntro';
import FocusAreasGrid from '@/components/FocusAreasGrid';
import StatsSection from '@/components/StatsSection';
import NewsSection from '@/components/NewsSection';
import FundingBanner from '@/components/FundingBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <PartnersBanner />
      <FocusAreasIntro />
      <FocusAreasGrid />
      <StatsSection />
      <NewsSection />
      <FundingBanner />
    </main>
  );
}
