import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
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

export default async function Page() {
  const dict = await getDictionary();
  const t = dict.pages.openScience;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: t.heroTitle, item: `${siteUrl}/open-science` },
    ],
  };

  const paraParts = t.para.split('LIBSENSE');

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
      <FocusLayout activeHref="/open-science">
        <p className={styles.lead}>
          {t.lead}
        </p>
        <p className={styles.paragraph}>
          {paraParts.map((part, i) => (
            <span key={i}>
              {part}
              {i < paraParts.length - 1 && (
                <a href="https://libsense.ren.africa/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-orange)', fontWeight: 600 }}>
                  LIBSENSE
                </a>
              )}
            </span>
          ))}
        </p>
      </FocusLayout>
    </main>
  );
}
