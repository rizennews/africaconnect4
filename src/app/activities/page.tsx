import PageHero from '@/components/PageHero';
import UpcomingCrawler from '@/components/UpcomingCrawler';
import ActivitiesToggle from '@/components/ActivitiesToggle';
import FundingBanner from '@/components/FundingBanner';

export default function ActivitiesPage() {
  return (
    <main>
      <PageHero 
        title="Project activities." 
        description="Conferences, workshops, hackathons, training sessions and community meetings across the AfricaConnect4 programme in West and Central Africa." 
      />
      
      <UpcomingCrawler />
      
      <ActivitiesToggle />
      
      <FundingBanner />
    </main>
  );
}
