import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

export const metadata: Metadata = {
  title: 'Capacity Building and NREN Training | AfricaConnect4',
  description: 'Equipping African network engineers, researchers, and higher education institutions with advanced technical skills, cloud routing expertise, and institutional sustainability frameworks.',
  alternates: {
    canonical: '/capacity-building',
  },
  openGraph: {
    title: 'Capacity Building and NREN Training | AfricaConnect4',
    description: 'Equipping African network engineers, researchers, and higher education institutions with advanced technical skills.',
    url: `${siteUrl}/capacity-building`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

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
      'name': 'Capacity Building',
      'item': `${siteUrl}/capacity-building`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
      <PageHero 
        title="Capacity Building" 
        description="Training and institutional development for the future."
      />
      <FocusLayout activeHref="/capacity-building">
        <p className={styles.lead}>
          Equipping engineers, researchers, and institutions with the skills required to sustain digital growth.
        </p>
        <p className={styles.paragraph}>
          Infrastructure alone is not enough. The Capacity Building initiative focuses on continuous education, hands-on workshops, and institutional support. We train network engineers on modern routing protocols, and assist researchers in utilizing high-performance computing services.
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              Technical Training
            </h3>
            <p>Comprehensive bootcamps on cloud deployment, network management, and advanced routing strategies.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              NREN Development
            </h3>
            <p>Providing strategic consulting to emerging National Research and Education Networks on sustainability models.</p>
          </div>
        </div>
      </FocusLayout>
    </main>
    </>
  );
}
