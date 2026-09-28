import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

export const metadata: Metadata = {
  title: 'Women in STEM and Innovation Labs | AfricaConnect4',
  description: 'Empowering African women researchers, engineers, and tech leaders through mentorship, leadership bootcamps, and specialized STEM innovation initiatives across NRENs.',
  alternates: {
    canonical: '/women-in-stem',
  },
  openGraph: {
    title: 'Women in STEM and Innovation Labs | AfricaConnect4',
    description: 'Empowering African women researchers, engineers, and tech leaders through mentorship and leadership bootcamps.',
    url: `${siteUrl}/women-in-stem`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default async function Page() {
  const dict = await getDictionary();
  const t = dict.pages.women;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': siteUrl,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': t.heroTitle,
        'item': `${siteUrl}/women-in-stem`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <PageHero 
          title={t.heroTitle} 
          description={t.heroDesc}
        />
        <FocusLayout activeHref="/women-in-stem">
          <p className={styles.lead}>
            {t.lead}
          </p>
          <p className={styles.paragraph}>
            {t.para}
          </p>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>
                <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                {t.card1Title}
              </h3>
              <p>{t.card1Desc}</p>
            </div>
            <div className={styles.featureCard}>
              <h3>
                <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                {t.card2Title}
              </h3>
              <p>{t.card2Desc}</p>
            </div>
          </div>
        </FocusLayout>
      </main>
    </>
  );
}
