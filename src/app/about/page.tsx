import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import AboutTimeline from '@/components/AboutTimeline';
import AboutWacrenRegion from '@/components/AboutWacrenRegion';
import AboutStats from '@/components/AboutStats';
import FundingBanner from '@/components/FundingBanner';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutTimeline />
      <AboutWacrenRegion />
      <AboutStats />
      <FundingBanner />
    </main>
  );
}
