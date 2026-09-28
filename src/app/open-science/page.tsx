import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export const metadata: Metadata = {
  title: 'Open Science & LIBSENSE Infrastructure',
  description: 'Advancing open science, diamond open access, institutional repositories, and open scholarly communication infrastructures across Africa through LIBSENSE and WACREN.',
  alternates: {
    canonical: '/open-science',
  },
  openGraph: {
    title: 'Open Science & LIBSENSE | AfricaConnect4',
    description: 'Advancing open, equitable access to African research and scholarly communication.',
    url: 'https://africaconnect4.net/open-science',
  },
};

export default function Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Open Science', item: `${siteUrl}/open-science` },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero 
        title="Open Science and Open scholarly communication infrastructure" 
        description="Advancing open science paradigm" 
      />
      <FocusLayout activeHref="/open-science">
        <p className={styles.lead}>
          Open, equitable access to African research is central to the region&apos;s digital transformation.
        </p>
        <p className={styles.paragraph}>
          Through the AfricaConnect4 project, WACREN advances this agenda via <a href="https://libsense.ren.africa/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-orange)', fontWeight: 600 }}>LIBSENSE</a>, a WACREN-led programme building a community of practice for open science and progressing the adoption of open science services and infrastructures across Africa.
        </p>
      </FocusLayout>
    </main>
  );
}
