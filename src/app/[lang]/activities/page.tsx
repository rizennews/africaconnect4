import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
import PageHero from '@/components/PageHero';
import UpcomingCrawler from '@/components/UpcomingCrawler';
import ActivitiesToggle from '@/components/ActivitiesToggle';
import { futureEvents as futureEventsEn, pastEvents as pastEventsEn, presentEvents as presentEventsEn } from '@/data/events';
import { futureEvents as futureEventsFr, pastEvents as pastEventsFr, presentEvents as presentEventsFr } from '@/data/events_fr';
import { futureEvents as futureEventsPt, pastEvents as pastEventsPt, presentEvents as presentEventsPt } from '@/data/events_pt';
import FundingBanner from '@/components/FundingBanner';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
  title: 'Project Activities & Events',
  description: 'Conferences, workshops, hackathons, training sessions and community meetings across the AfricaConnect4 programme in West and Central Africa.',
  
  openGraph: {
    title: 'Project Activities & Events | AfricaConnect4',
    description: 'Conferences, workshops, and training sessions across the AfricaConnect4 programme in West and Central Africa.',
    url: 'https://africaconnect4.net/activities',
  },
  alternates: {
    canonical: `/${lang}/activities`,
    languages: {
      en: `/en/activities`,
      fr: `/fr/activities`,
      pt: `/pt/activities`,
    },
  },
  };
}

export default async function ActivitiesPage({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const dict = await getDictionary();
  const t = dict.pages.activities;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

  const futureEvents = lang === 'fr' ? futureEventsFr : lang === 'pt' ? futureEventsPt : futureEventsEn;
  const pastEvents = lang === 'fr' ? pastEventsFr : lang === 'pt' ? pastEventsPt : pastEventsEn;
  const presentEvents = lang === 'fr' ? presentEventsFr : lang === 'pt' ? presentEventsPt : presentEventsEn;

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
            name: t.heroTitle,
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
        title={t.heroTitle} 
        description={t.heroDesc} 
      />
      
      <UpcomingCrawler dict={dict.upcomingCrawler} events={futureEvents} />
      
      <ActivitiesToggle 
        dict={{ ...dict.activitiesToggle, eventCard: dict.eventCard }} 
        pastEvents={pastEvents}
        presentEvents={presentEvents}
        futureEvents={futureEvents}
      />
      
      <FundingBanner />
    </main>
  );
}
