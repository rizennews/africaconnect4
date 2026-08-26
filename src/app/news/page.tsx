import PageHero from '@/components/PageHero';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="News." 
        description="Latest updates and announcements."
      />
      
      <section style={{ padding: '6rem 2rem', minHeight: '50vh', backgroundColor: '#f0f0f1', textAlign: 'center', color: '#7d7c7d' }}>
        <p>Content for News. coming soon...</p>
      </section>
    </main>
  );
}
