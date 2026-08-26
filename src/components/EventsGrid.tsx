import React from 'react';
import styles from './EventsGrid.module.css';
import EventCard from './EventCard';

export interface EventData {
  status: 'UPCOMING' | 'PAST';
  type: string;
  title: string;
  description: string;
  day: string;
  month: string;
  year: string;
  location: string;
  duration?: string;
}

interface EventsGridProps {
  title: string;
  category: string;
  events: EventData[];
}

export default function EventsGrid({ title, category, events }: EventsGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.category}>{category}</span>
        </div>
        <div className={styles.grid}>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
