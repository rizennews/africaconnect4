import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PublicationsList from '@/components/PublicationsList';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

export const metadata: Metadata = {
  title: 'Publications and Public Documents | AfricaConnect4',
  description: 'Access official project documents, technical policy briefs, connectivity roadmaps, and annual impact reports for AfricaConnect4 and partner NRENs.',
  alternates: {
    canonical: '/publications',
  },
  openGraph: {
    title: 'Publications and Public Documents | AfricaConnect4',
    description: 'Access official project documents, technical policy briefs, and annual impact reports.',
    url: `${siteUrl}/publications`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const publicationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/publications#webpage`,
      'url': `${siteUrl}/publications`,
      'name': 'Publications and Technical Documents | AfricaConnect4',
      'description': 'Official policy briefs, research reports, and network documentation.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/publications#breadcrumb`,
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
          'name': 'Publications',
          'item': `${siteUrl}/publications`,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationSchema) }}
      />
      <main>
      <PageHero 
        title="Public Documents" 
        description=""
      />
      
      <div style={{ backgroundColor: '#f9f9fa', padding: '4rem 0' }}>
        <PublicationsList />
      </div>
    </main>
    </>
  );
}
