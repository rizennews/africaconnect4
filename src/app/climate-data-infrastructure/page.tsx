import PageHero from '@/components/PageHero';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Climate Data Infrastructure." 
        description="Data systems supporting climate resilience."
      />
      
      <section style={{ padding: '6rem 2rem', minHeight: '50vh', backgroundColor: '#f0f0f1', textAlign: 'center', color: '#7d7c7d' }}>
        <p>Content for Climate Data Infrastructure. coming soon...</p>
      </section>
    </main>
  );
}
