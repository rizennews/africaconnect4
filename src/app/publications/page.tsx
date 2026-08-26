import PageHero from '@/components/PageHero';
import PublicationsList from '@/components/PublicationsList';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Publications & reports." 
        description="Narrative reports, strategy documents, country fiches, impact reports and policy briefs from across AC4."
      />
      
      <div style={{ backgroundColor: '#f9f9fa', padding: '4rem 0' }}>
        <PublicationsList />
      </div>
    </main>
  );
}
