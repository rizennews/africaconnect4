import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export const metadata: Metadata = {
  title: 'Climate Data Infrastructure & Resilience',
  description: 'Empowering West and Central Africa with LoRaWAN environmental monitoring, federated HPC resources for climate modelling, and EUMETCast terrestrial services.',
  alternates: {
    canonical: '/climate-data-infrastructure',
  },
  openGraph: {
    title: 'Climate Data Infrastructure | AfricaConnect4',
    description: 'Building data systems supporting climate resilience across West and Central Africa.',
    url: 'https://africaconnect4.net/climate-data-infrastructure',
  },
};

export default function Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Climate Data Infrastructure', item: `${siteUrl}/climate-data-infrastructure` },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero 
        title="Climate Data Infrastructure" 
        description="Building data systems supporting climate resilience." 
      />
      <FocusLayout activeHref="/climate-data-infrastructure">
        <p className={styles.lead}>
          Empowering the region with the digital infrastructure needed to monitor, analyze, and combat climate change effectively.
        </p>
        <p className={styles.paragraph}>
          Climate research requires immense computational power and data storage. The AfricaConnect4 initiative provides dedicated infrastructure and high-speed transit for earth observation data, enabling local scientists to collaborate globally and develop data-driven climate resilience models tailored for the region.
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Data Repositories
            </h3>
            <p>Creating centralized, accessible hubs for regional environmental data and historical climate records.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              Real-time Analytics
            </h3>
            <p>Providing the high-throughput connectivity needed for real-time weather tracking and disaster early warning systems.</p>
          </div>
        </div>
      </FocusLayout>
    </main>
  );
}
