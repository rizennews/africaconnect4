import React from 'react';
import styles from './EventsGrid.module.css';
import EventCard from './EventCard';

export interface EventData {
  status: 'UPCOMING' | 'PAST' | 'PRESENT';
  type?: string;
  title: string;
  description?: string;
  day?: string;
  month?: string;
  year?: string;
  location?: string;
  duration?: string;
  link?: string;
  image?: string;
}

export interface EventCardDict {
  upcoming: string;
  past: string;
  present: string;
  applyDetails: string;
  details: string;
}

interface EventsGridProps {
  dict: EventCardDict;
  title: string;
  category: string;
  events: EventData[];
}

export default function EventsGrid({ dict, title, category, events }: EventsGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.category}>{category}</span>
        </div>
        <div className={styles.grid}>
          {events.map((event, index) => (
            <EventCard key={index} dict={dict} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
