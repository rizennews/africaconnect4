import PageHero from '@/components/PageHero';

export default function ActivitiesPage() {
  return (
    <main>
      <PageHero 
        title="Project activities." 
        description="Conferences, workshops, hackathons, training sessions and community meetings across the AfricaConnect4 programme in West and Central Africa." 
      />
      
      {/* We can add a grid of activities or upcoming events here later */}
      <section style={{ padding: '6rem 2rem', minHeight: '50vh', backgroundColor: '#f0f0f1', textAlign: 'center', color: '#7d7c7d' }}>
        <p>Activities content coming soon...</p>
      </section>
    </main>
  );
}
