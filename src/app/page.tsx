import Hero from '@/components/Hero';
import PartnersBanner from '@/components/PartnersBanner';
import FocusAreasIntro from '@/components/FocusAreasIntro';
import FocusAreasGrid from '@/components/FocusAreasGrid';

export default function Home() {
  return (
    <main>
      <Hero />
      <PartnersBanner />
      <FocusAreasIntro />
      <FocusAreasGrid />
    </main>
  );
}
