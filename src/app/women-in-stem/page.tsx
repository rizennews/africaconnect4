import PageHero from '@/components/PageHero';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Women-In-STEM." 
        description="Advancing gender inclusion in technology."
      />
      
      <section style={{ padding: '6rem 2rem', minHeight: '50vh', backgroundColor: '#f0f0f1', textAlign: 'center', color: '#7d7c7d' }}>
        <p>Content for Women-In-STEM. coming soon...</p>
      </section>
    </main>
  );
}
