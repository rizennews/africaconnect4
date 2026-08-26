import PageHero from '@/components/PageHero';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Contact Us." 
        description="Get in touch with the AfricaConnect4 team."
      />
      
      <section style={{ padding: '6rem 2rem', minHeight: '50vh', backgroundColor: '#f0f0f1', textAlign: 'center', color: '#7d7c7d' }}>
        <p>Content for Contact Us. coming soon...</p>
      </section>
    </main>
  );
}
