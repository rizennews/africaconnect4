import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export const metadata: Metadata = {
  title: 'Cybersecurity & Threat Intelligence | TrustBroker Africa',
  description: 'Strengthening regional cyber resilience, TrustBroker Africa (TBA), CSIRT coordination, and federated trust & identity across West and Central Africa.',
  alternates: {
    canonical: '/cybersecurity-threat-intelligence',
  },
  openGraph: {
    title: 'Cybersecurity & Threat Intelligence | AfricaConnect4',
    description: 'Safeguarding academic and research networks against evolving digital threats.',
    url: 'https://africaconnect4.net/cybersecurity-threat-intelligence',
  },
};

export default async function Page() {
  const dict = await getDictionary();
  const t = dict.pages.cybersecurity;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: t.heroTitle, item: `${siteUrl}/cybersecurity-threat-intelligence` },
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
      <FocusLayout activeHref="/cybersecurity-threat-intelligence">
        <p className={styles.lead}>
          {t.lead}
        </p>
        <p className={styles.paragraph}>
          {t.para}
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              {t.card1Title}
            </h3>
            <p>{t.card1Desc}</p>
          </div>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              {t.card2Title}
            </h3>
            <p>{t.card2Desc}</p>
          </div>
        </div>
      </FocusLayout>
    </main>
  );
}
