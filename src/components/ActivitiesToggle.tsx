"use client";

import React, { useState } from 'react';
import EventsGrid, { EventData } from '@/components/EventsGrid';
import styles from './ActivitiesToggle.module.css';

type ActivitiesToggleDict = {
  all: string;
  past: string;
  present: string;
  future: string;
  allActivities: string;
  pastActivities: string;
  presentActivities: string;
  upcomingActivities: string;
  noActivities: string;
  atTheMoment: string;
  checkBack: string;
  eventCard: any;
};

export default function ActivitiesToggle({ 
  dict, 
  pastEvents, 
  presentEvents, 
  futureEvents 
}: { 
  dict: ActivitiesToggleDict;
  pastEvents: EventData[];
  presentEvents: EventData[];
  futureEvents: EventData[];
}) {
  const [activeTab, setActiveTab] = useState<'ALL' | 'PAST' | 'PRESENT' | 'FUTURE'>('ALL');

  let activeEvents: EventData[] = [];
  let categoryLabel = '';
  
  if (activeTab === 'ALL') {
    activeEvents = [...futureEvents, ...presentEvents, ...pastEvents];
    categoryLabel = dict.allActivities;
  } else if (activeTab === 'PAST') {
    activeEvents = pastEvents;
    categoryLabel = dict.pastActivities;
  } else if (activeTab === 'PRESENT') {
    activeEvents = presentEvents;
    categoryLabel = dict.presentActivities;
  } else {
    activeEvents = futureEvents;
    categoryLabel = dict.upcomingActivities;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toggleContainer}>
        <button 
          className={`${styles.toggleButton} ${activeTab === 'ALL' ? styles.active : ''}`}
          onClick={() => setActiveTab('ALL')}
        >
          {dict.all}
        </button>
        <button 
          className={`${styles.toggleButton} ${activeTab === 'PAST' ? styles.active : ''}`}
          onClick={() => setActiveTab('PAST')}
        >
          {dict.past}
        </button>
        <button 
          className={`${styles.toggleButton} ${activeTab === 'PRESENT' ? styles.active : ''}`}
          onClick={() => setActiveTab('PRESENT')}
        >
          {dict.present}
        </button>
        <button 
          className={`${styles.toggleButton} ${activeTab === 'FUTURE' ? styles.active : ''}`}
          onClick={() => setActiveTab('FUTURE')}
        >
          {dict.future}
        </button>
      </div>

      <div className={styles.eventsWrapper}>
        {activeEvents.length > 0 ? (
          <EventsGrid 
            dict={dict.eventCard}
            title={categoryLabel} 
            category="" 
            events={activeEvents} 
          />
        ) : (
          <div className={styles.emptyState}>
            <h3>{dict.noActivities} {categoryLabel.toLowerCase()} {dict.atTheMoment}</h3>
            <p>{dict.checkBack}</p>
          </div>
        )}
      </div>
    </div>
  );
}
