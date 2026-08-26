import PageHero from '@/components/PageHero';
import FeaturedActivity from '@/components/FeaturedActivity';
import EventsGrid, { EventData } from '@/components/EventsGrid';
import FundingBanner from '@/components/FundingBanner';

const womenEvents: EventData[] = [
  {
    status: 'UPCOMING', type: 'HACKATHON',
    title: "Women's Hackathon — Cohort 2",
    description: "Second edition of the annual women's hackathon focused on green innovation and climate adaptation. Bilingual English/French participation.",
    day: '02', month: 'NOV', year: '2026',
    location: 'Lomé, Togo', duration: '3 days'
  },
  {
    status: 'UPCOMING', type: 'WORKSHOP',
    title: "Women's Leadership Workshop",
    description: 'Leadership development for women advancing into decision-making roles in STEM and the REN ecosystem across the region.',
    day: '15', month: 'SEP', year: '2026',
    location: "Abidjan, Côte d'Ivoire", duration: '2 days'
  },
  {
    status: 'UPCOMING', type: 'PROGRAMME',
    title: 'Mentorship Programme — Year 2 Kickoff',
    description: 'Second annual intake for the Women-in-WACREN mentorship programme, pairing early-career participants with experienced NREN professionals.',
    day: '18', month: 'AUG', year: '2026',
    location: 'Virtual + Accra, Ghana'
  },
  {
    status: 'PAST', type: 'HACKATHON',
    title: "Inaugural Women's Hackathon",
    description: "First annual Women's Hackathon — 80 participants across the region working on green innovation and climate adaptation solutions.",
    day: '04', month: 'MAY', year: '2026',
    location: 'Accra, Ghana', duration: '3 days'
  },
  {
    status: 'PAST', type: 'CAREER PANEL',
    title: 'Women-in-STEM Career Panel',
    description: 'Career development panel featuring senior women leaders across African research, education and network operations.',
    day: '21', month: 'MAR', year: '2026',
    location: 'Virtual', duration: 'half-day'
  },
  {
    status: 'PAST', type: 'ADVOCACY',
    title: "International Women's Day — WACREN Session",
    description: "Programme-wide event highlighting women's contributions to Africa's research and education networking community.",
    day: '08', month: 'MAR', year: '2026',
    location: 'Multiple locations', duration: '1 day'
  }
];

const technicalEvents: EventData[] = [
  {
    status: 'UPCOMING', type: 'DEPLOYATHON',
    title: 'HPC & Science DMZ Deployathon',
    description: 'Hands-on deployment session bringing new institutions onto the WACREN-connected HPC network and the SCION-based Science DMZ.',
    day: '12', month: 'NOV', year: '2026',
    location: 'Lagos, Nigeria', duration: '4 days'
  },
  {
    status: 'UPCOMING', type: 'WORKSHOP',
    title: 'ISAC Setup & CSIRT Cooperation',
    description: 'Technical workshop for regional CSIRTs on setting up an Information Sharing and Analysis Center and coordinating incident response.',
    day: '22', month: 'OCT', year: '2026',
    location: 'Ibadan, Nigeria', duration: '3 days'
  },
  {
    status: 'UPCOMING', type: 'TRAINING',
    title: 'EUMETCast Data Portal Training',
    description: 'Specialised curriculum for meteorological agencies and research institutions on accessing and applying EUMETCast terrestrial data.',
    day: '18', month: 'SEP', year: '2026',
    location: 'Cotonou, Benin', duration: '5 days'
  },
  {
    status: 'UPCOMING', type: 'DEPLOYATHON',
    title: 'LoRaWAN Gateway Deployathon',
    description: 'Deployment of WMO-compliant weather stations with LoRaWAN gateways — extending the AC3 pilot to additional countries in the region.',
    day: '03', month: 'AUG', year: '2026',
    location: 'Ouagadougou, Burkina Faso'
  },
  {
    status: 'PAST', type: 'WORKSHOP',
    title: 'eduGAIN & eduroam Federation Workshop',
    description: 'Technical workshop on identity federation adoption, deployment of eduroam Wi-Fi and integration with the eduGAIN service.',
    day: '14', month: 'MAY', year: '2026',
    location: 'Accra, Ghana', duration: '3 days'
  },
  {
    status: 'PAST', type: 'TRAINING',
    title: 'Network Operations Training',
    description: 'Technical capacity-building for NREN engineering teams — network operations, monitoring, service delivery and troubleshooting.',
    day: '18', month: 'MAR', year: '2026',
    location: 'Lagos, Nigeria', duration: '5 days'
  }
];

const communityEvents: EventData[] = [
  {
    status: 'UPCOMING', type: 'RETREAT',
    title: 'Climate Champions Regional Retreat',
    description: 'Annual gathering of the AC4 climate champions network — regional ambassadors advocating for climate tools and NREN infrastructure.',
    day: '05', month: 'DEC', year: '2026',
    location: 'Ouidah, Benin', duration: '3 days'
  },
  {
    status: 'UPCOMING', type: 'LIBSENSE',
    title: 'LIBSENSE Regional Meeting',
    description: 'Regional session for academic librarians and research information professionals working on open science and digital library services.',
    day: '04', month: 'NOV', year: '2026',
    location: 'Accra, Ghana', duration: '2 days'
  },
  {
    status: 'UPCOMING', type: 'WORKSHOP',
    title: 'Research Data Management for Universities',
    description: 'Hands-on workshop for university research offices and IT teams on managing, storing and sharing research data across institutions.',
    day: '16', month: 'OCT', year: '2026',
    location: 'Yaoundé, Cameroon', duration: '3 days'
  },
  {
    status: 'UPCOMING', type: 'ROUNDTABLE',
    title: 'Digital Services for Academic Libraries',
    description: 'Roundtable for academic library leaders on AC4 services — federated access, LIBSENSE, and shared subscription arrangements.',
    day: '10', month: 'SEP', year: '2026',
    location: 'Virtual', duration: 'half-day'
  },
  {
    status: 'PAST', type: 'INFO SESSION',
    title: 'AC4 Programme Info Session for Researchers',
    description: 'Open information session for researchers across the region — introducing AC4 services and how to get access at institutional level.',
    day: '28', month: 'APR', year: '2026',
    location: 'Virtual', duration: 'half-day · EN & FR'
  },
  {
    status: 'PAST', type: 'WORKSHOP',
    title: 'Open Access Publishing Workshop',
    description: 'Workshop with LIBSENSE partners on open-access publishing pathways for African researchers and institutional support models.',
    day: '05', month: 'FEB', year: '2026',
    location: 'Dakar, Senegal', duration: '2 days'
  }
];

export default function ActivitiesPage() {
  return (
    <main>
      <PageHero 
        title="Project activities." 
        description="Conferences, workshops, hackathons, training sessions and community meetings across the AfricaConnect4 programme in West and Central Africa." 
      />
      
      <FeaturedActivity />
      
      <EventsGrid 
        title="Women-In-WACREN" 
        category="Category 01 - Hackathons, Mentorship, Leadership" 
        events={womenEvents} 
      />
      
      <EventsGrid 
        title="Technical Events & Workshops" 
        category="Category 02 - Engineering, Security, Infrastructure" 
        events={technicalEvents} 
      />
      
      <EventsGrid 
        title="Community & User-Facing Events" 
        category="Category 03 - End Users, Libraries, Researchers, Students" 
        events={communityEvents} 
      />
      
      <FundingBanner />
    </main>
  );
}
