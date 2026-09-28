import type { Metadata } from 'next';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import AboutTimeline from '@/components/AboutTimeline';
import AboutWacrenRegion from '@/components/AboutWacrenRegion';
import PartnersBanner from '@/components/PartnersBanner';
import FundingBanner from '@/components/FundingBanner';

export const metadata: Metadata = {
  title: 'About the Project',
  description: 'Learn about AfricaConnect4, an EU co-funded pan-African connectivity project implemented in West and Central Africa by WACREN, connecting research and education communities.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About the Project | AfricaConnect4',
    description: 'Learn about AfricaConnect4, an EU co-funded pan-African connectivity project implemented in West and Central Africa by WACREN.',
    url: 'https://africaconnect4.net/about',
  },
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${siteUrl}/about`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutHero />
      <AboutIntro />
      <PartnersBanner />
      <AboutTimeline />
      <AboutWacrenRegion />
      <FundingBanner />
    </main>
  );
}
