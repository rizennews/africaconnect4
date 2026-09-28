"use client";

import React, { useState } from 'react';
import EventsGrid, { EventData } from '@/components/EventsGrid';
import { pastEvents, presentEvents, futureEvents } from '@/data/events';
import styles from './ActivitiesToggle.module.css';

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
    categoryLabel = 'Upcoming Activities';
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
            category="" 
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
