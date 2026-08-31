import PageHero from '@/components/PageHero';
import PublicationsList from '@/components/PublicationsList';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Public Documents." 
        description=""
      />
      
      <div style={{ backgroundColor: '#f9f9fa', padding: '4rem 0' }}>
        <PublicationsList />
      </div>
    </main>
  );
}
