import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
import PageHero from '@/components/PageHero';
import PublicationsList from '@/components/PublicationsList';
import { allFiles, folders } from '@/data/publications';
import { allFilesFr, foldersFr } from '@/data/publications_fr';
import { allFilesPt, foldersPt } from '@/data/publications_pt';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
  title: 'Publications and Public Documents | AfricaConnect4',
  description: 'Access official project documents, technical policy briefs, connectivity roadmaps, and annual impact reports for AfricaConnect4 and partner NRENs.',
  
  openGraph: {
    title: 'Publications and Public Documents | AfricaConnect4',
    description: 'Access official project documents, technical policy briefs, and annual impact reports.',
    url: `${siteUrl}/publications`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `/${lang}/publications`,
    languages: {
      en: `/en/publications`,
      fr: `/fr/publications`,
      pt: `/pt/publications`,
    },
  },
  };
}

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

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const dict = await getDictionary();
  const t = dict.publications;

  const localizedFiles = lang === 'fr' ? allFilesFr : lang === 'pt' ? allFilesPt : allFiles;
  const localizedFolders = lang === 'fr' ? foldersFr : lang === 'pt' ? foldersPt : folders;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationSchema) }}
      />
      <main>
      <PageHero 
        title={t.title} 
        description={t.description}
      />
      
      <div style={{ backgroundColor: '#f9f9fa', padding: '4rem 0' }}>
        <PublicationsList dict={t} allFiles={localizedFiles} folders={localizedFolders} />
      </div>
    </main>
    </>
  );
}
