import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
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

export default async function Page() {
  const dict = await getDictionary();
  const t = dict.pages.climate;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: t.heroTitle, item: `${siteUrl}/climate-data-infrastructure` },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero 
        title={t.heroTitle} 
        description={t.heroDesc} 
      />
      <FocusLayout activeHref="/climate-data-infrastructure">
        <p className={styles.lead}>
          {t.lead}
        </p>
        <p className={styles.paragraph}>
          {t.para}
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              {t.card1Title}
            </h3>
            <p>{t.card1Desc}</p>
          </div>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              {t.card2Title}
            </h3>
            <p>{t.card2Desc}</p>
          </div>
        </div>
      </FocusLayout>
    </main>
  );
}
