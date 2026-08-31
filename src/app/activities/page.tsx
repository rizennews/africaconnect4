import PageHero from '@/components/PageHero';
import FeaturedActivity from '@/components/FeaturedActivity';
import ActivitiesToggle from '@/components/ActivitiesToggle';
import FundingBanner from '@/components/FundingBanner';

export default function ActivitiesPage() {
  return (
    <main>
      <PageHero 
        title="Project activities." 
        description="Conferences, workshops, hackathons, training sessions and community meetings across the AfricaConnect4 programme in West and Central Africa." 
      />
      
      <FeaturedActivity />
      
      <ActivitiesToggle />
      
      <FundingBanner />
    </main>
  );
}
