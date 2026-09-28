import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import UpcomingCrawler from '@/components/UpcomingCrawler';
import ActivitiesToggle from '@/components/ActivitiesToggle';
import { futureEvents } from '@/data/events';
import FundingBanner from '@/components/FundingBanner';

export const metadata: Metadata = {
  title: 'Project Activities & Events',
  description: 'Conferences, workshops, hackathons, training sessions and community meetings across the AfricaConnect4 programme in West and Central Africa.',
  alternates: {
    canonical: '/activities',
  },
  openGraph: {
    title: 'Project Activities & Events | AfricaConnect4',
    description: 'Conferences, workshops, and training sessions across the AfricaConnect4 programme in West and Central Africa.',
    url: 'https://africaconnect4.net/activities',
  },
};

export default function ActivitiesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

  const eventsSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
            name: 'Activities',
            item: `${siteUrl}/activities`,
          },
        ],
      },
      ...futureEvents.map((ev) => ({
        '@type': 'Event',
        name: ev.title,
        description: ev.description || ev.title,
        startDate: `2026-08-${ev.day || '01'}T09:00:00Z`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: ev.location === 'Virtual'
          ? 'https://schema.org/OnlineEventAttendanceMode'
          : 'https://schema.org/OfflineEventAttendanceMode',
        location: ev.location === 'Virtual'
          ? {
              '@type': 'VirtualLocation',
              url: ev.link || `${siteUrl}/activities`,
            }
          : {
              '@type': 'Place',
              name: ev.location || 'West and Central Africa',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'Africa',
              },
            },
        image: ev.image ? [`${siteUrl}${ev.image}`] : [`${siteUrl}/og-image.jpg`],
        organizer: {
          '@type': 'Organization',
          name: 'WACREN',
          url: 'https://wacren.net',
        },
      })),
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }}
      />
      <PageHero 
        title="Project activities." 
        description="Conferences, workshops, hackathons, training sessions and community meetings across the AfricaConnect4 programme in West and Central Africa." 
      />
      
      <UpcomingCrawler />
      
      <ActivitiesToggle />
      
      <FundingBanner />
    </main>
  );
}
