import type { Metadata } from 'next';
import ProcurementClient from '@/components/ProcurementClient';
import { getDictionary } from '@/app/[lang]/dictionaries';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

export const metadata: Metadata = {
  title: 'Procurement Opportunities and Tenders | AfricaConnect4',
  description: 'View active tenders, expressions of interest, and contract awards for the AfricaConnect4 project and regional network infrastructure.',
  alternates: {
    canonical: '/procurement',
  },
  openGraph: {
    title: 'Procurement Opportunities and Tenders | AfricaConnect4',
    description: 'View active tenders, expressions of interest, and contract awards for the AfricaConnect4 project.',
    url: `${siteUrl}/procurement`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const procurementSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/procurement#webpage`,
      'url': `${siteUrl}/procurement`,
      'name': 'Procurement Opportunities and Tenders | AfricaConnect4',
      'description': 'Tenders, bids, and contract awards for regional research network infrastructure.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/procurement#breadcrumb`,
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
          'name': 'Procurement',
          'item': `${siteUrl}/procurement`,
        },
      ],
    },
  ],
};

export default async function ProcurementPage() {
  const dict = await getDictionary();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procurementSchema) }}
      />
      <ProcurementClient dict={dict.procurementPage} />
    </>
  );
}
