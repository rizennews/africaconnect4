import React from 'react';
import styles from './EventCard.module.css';

interface EventCardProps {
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

export default function EventCard({
  status,
  type,
  title,
  description,
  day,
  month,
  year,
  location,
  duration
}: EventCardProps) {
  const isUpcoming = status === 'UPCOMING';
  const cardClass = isUpcoming ? styles.upcoming : styles.past;

  return (
    <div className={`${styles.card} ${cardClass}`}>
      <div className={styles.dateSidebar}>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
        <span className={styles.year}>{year}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          <span className={styles.statusTag}>{status}</span>
          <span className={styles.typeTag}>{type}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          {location}{duration && ` · ${duration}`}
        </div>
      </div>
    </div>
  );
}
