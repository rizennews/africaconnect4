import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export const metadata: Metadata = {
  title: 'Connectivity Expansion & High-Speed Networks',
  description: 'Expanding high-speed research and education network infrastructure to connect universities and research institutes across West and Central Africa.',
  alternates: {
    canonical: '/connectivity-expansion',
  },
  openGraph: {
    title: 'Connectivity Expansion | AfricaConnect4',
    description: 'Growing regional network infrastructure to connect the unconnected across West and Central Africa.',
    url: 'https://africaconnect4.net/connectivity-expansion',
  },
};

export default async function Page() {
  const dict = await getDictionary();
  const t = dict.pages.connectivity;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Connectivity Expansion', item: `${siteUrl}/connectivity-expansion` },
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
      <FocusLayout activeHref="/connectivity-expansion">
        <p className={styles.lead}>
          {t.lead}
        </p>
        <p className={styles.paragraph}>
          {t.para}
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
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
