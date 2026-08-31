"use client";

import React, { useState } from 'react';
import EventsGrid, { EventData } from '@/components/EventsGrid';
import styles from './ActivitiesToggle.module.css';

const pastEvents: EventData[] = [
  {
    status: 'PAST',
    type: 'CONFERENCE',
    title: 'WACREN 2026',
    description: 'WACREN Conference 2026',
    day: '23', month: 'MAR', year: '2026',
    location: 'Banjul, The Gambia',
    link: 'https://wacren2026.wacren.net/'
  },
  {
    status: 'PAST',
    type: 'WORKSHOP',
    title: 'LIBSENSE ECR Leadership',
    description: 'LIBSENSE ECR Leadership Workshop',
    day: '15', month: 'FEB', year: '2026',
    location: 'Virtual',
    link: 'https://indico.wacren.net/event/266/'
  },
  {
    status: 'PAST',
    type: 'EVENT',
    title: 'Diamond Open Access Day',
    description: 'Diamond Open Access Day',
    day: '10', month: 'JAN', year: '2026',
    location: 'Virtual',
    link: 'https://indico.wacren.net/event/264/'
  },
  {
    status: 'PAST',
    type: 'SYMPOSIUM',
    title: 'LIBSENSE Open Science Symposium',
    description: 'LIBSENSE Open Science Symposium - The Gambia',
    day: '05', month: 'JAN', year: '2026',
    location: 'Banjul, The Gambia',
    link: 'https://indico.wacren.net/event/262/'
  },
  {
    status: 'PAST',
    type: 'ACADEMY',
    title: 'NREN Academy 2026',
    description: 'NREN Academy 2026',
    day: '12', month: 'DEC', year: '2025',
    location: 'Virtual',
    link: 'https://indico.wacren.net/event/265/'
  },
  {
    status: 'PAST',
    type: 'WORKSHOP',
    title: 'Network Monitoring & Management',
    description: 'ATI-6: Network Monitoring & Management Workshop (NMM) - The Gambia',
    day: '20', month: 'NOV', year: '2025',
    location: 'Banjul, The Gambia',
    link: 'https://indico.wacren.net/event/263/'
  },
  {
    status: 'PAST',
    type: 'TRAINING',
    title: 'Annual CSIRT Training',
    description: 'TrustBroker Africa (TBA) VI - Community & Training Event',
    day: '15', month: 'OCT', year: '2025',
    location: 'Virtual',
    link: 'https://indico.wacren.net/event/270/'
  },
  {
    status: 'PAST',
    type: 'WORKSHOP',
    title: 'Atelier Confiance et Identité',
    description: 'Atelier Confiance et Identite - Togo',
    day: '10', month: 'SEP', year: '2025',
    location: 'Lomé, Togo',
    link: 'https://indico.wacren.net/event/260/'
  }
];

const presentEvents: EventData[] = [];

export const futureEvents: EventData[] = [
  {
    status: 'UPCOMING',
    type: 'LAB',
    title: 'Women-In-WACREN Climate Innovation Lab',
    description: 'Climate Innovation Lab 2026',
    day: '25', month: 'AUG', year: '2026',
    location: 'TBA',
    link: 'https://indico.wacren.net/event/279/'
  },
  {
    status: 'UPCOMING',
    type: 'CALL',
    title: 'Women-In-WACREN Call for Facilitators',
    description: 'Women-In-WACREN Call for Facilitators',
    day: '01', month: 'JUN', year: '2026',
    location: 'Virtual',
    link: 'https://indico.wacren.net/event/282/'
  },
  {
    status: 'UPCOMING',
    type: 'CALL',
    title: 'Women-In-WACREN Call for Mentors',
    description: 'Women-In-WACREN Call for Mentors',
    day: '01', month: 'JUL', year: '2026',
    location: 'Virtual',
    link: 'https://indico.wacren.net/event/283/'
  }
];

export default function ActivitiesToggle() {
  const [activeTab, setActiveTab] = useState<'ALL' | 'PAST' | 'PRESENT' | 'FUTURE'>('ALL');

  let activeEvents: EventData[] = [];
  let categoryLabel = '';
  
  if (activeTab === 'ALL') {
    activeEvents = [...futureEvents, ...presentEvents, ...pastEvents];
    categoryLabel = 'All Activities';
  } else if (activeTab === 'PAST') {
    activeEvents = pastEvents;
    categoryLabel = 'Past Activities';
  } else if (activeTab === 'PRESENT') {
    activeEvents = presentEvents;
    categoryLabel = 'Present Activities';
  } else {
    activeEvents = futureEvents;
    categoryLabel = 'Future Activities';
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toggleContainer}>
        <button 
          className={`${styles.toggleButton} ${activeTab === 'ALL' ? styles.active : ''}`}
          onClick={() => setActiveTab('ALL')}
        >
          All
        </button>
        <button 
          className={`${styles.toggleButton} ${activeTab === 'PAST' ? styles.active : ''}`}
          onClick={() => setActiveTab('PAST')}
        >
          Past
        </button>
        <button 
          className={`${styles.toggleButton} ${activeTab === 'PRESENT' ? styles.active : ''}`}
          onClick={() => setActiveTab('PRESENT')}
        >
          Present
        </button>
        <button 
          className={`${styles.toggleButton} ${activeTab === 'FUTURE' ? styles.active : ''}`}
          onClick={() => setActiveTab('FUTURE')}
        >
          Future
        </button>
      </div>

      <div className={styles.eventsWrapper}>
        {activeEvents.length > 0 ? (
          <EventsGrid 
            title={categoryLabel} 
            category={activeTab === 'ALL' ? 'All Events' : activeTab === 'PAST' ? 'Archived Events' : activeTab === 'PRESENT' ? 'Ongoing Events' : 'Upcoming Events'} 
            events={activeEvents} 
          />
        ) : (
          <div className={styles.emptyState}>
            <h3>No {categoryLabel.toLowerCase()} at the moment.</h3>
            <p>Check back later for updates!</p>
          </div>
        )}
      </div>
    </div>
  );
}
