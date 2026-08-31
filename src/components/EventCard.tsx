import React from 'react';
import styles from './EventCard.module.css';

interface EventCardProps {
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
  duration,
  link
}: EventCardProps) {
  const isUpcoming = status === 'UPCOMING';
  const cardClass = isUpcoming ? styles.upcoming : styles.past;
  const CardWrapper = link ? 'a' : 'div';
  const linkProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer", style: {textDecoration: 'none'} } : {};

  return (
    <CardWrapper className={`${styles.card} ${cardClass}`} {...linkProps as any}>
      <div className={styles.dateSidebar}>
        {day && <span className={styles.day}>{day}</span>}
        {month && <span className={styles.month}>{month}</span>}
        {year && <span className={styles.year}>{year}</span>}
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          <span className={styles.statusTag}>{status}</span>
          {type && <span className={styles.typeTag}>{type}</span>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {(location || duration || isUpcoming) && (
          <div className={styles.footer}>
            {isUpcoming ? (
              <span style={{color: 'var(--color-primary-orange)'}}>Click to apply →</span>
            ) : (
              <>{location}{location && duration ? ' · ' : ''}{duration}</>
            )}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
