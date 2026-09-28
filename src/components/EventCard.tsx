import React from 'react';
import Image from 'next/image';
import styles from './EventCard.module.css';
import { getPlaceholderBase64 } from '@/utils/placeholder';

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
  image?: string;
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
  link,
  image
}: EventCardProps) {
  const isUpcoming = status === 'UPCOMING';
  const cardClass = isUpcoming ? styles.upcoming : styles.past;

  const cardInner = (
    <>
      <div className={styles.imageContainer}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            placeholder="blur"
            blurDataURL={getPlaceholderBase64()}
            className={styles.eventImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderPattern} />
            <svg 
              className={styles.placeholderIcon}
              width="44" 
              height="44" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
        )}

        {/* Floating Date Badge */}
        {(day || month || year) && (
          <div className={styles.floatingDateBadge}>
            {month && <span className={styles.badgeMonth}>{month}</span>}
            {day && <span className={styles.badgeDay}>{day}</span>}
            {year && <span className={styles.badgeYear}>{year}</span>}
          </div>
        )}

        {/* Floating Tags */}
        <div className={styles.floatingTags}>
          <span className={`${styles.statusTag} ${isUpcoming ? styles.statusUpcoming : styles.statusPast}`}>
            {status}
          </span>
          {type && <span className={styles.typeTag}>{type}</span>}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        
        <div className={styles.footer}>
          {location ? (
            <span className={styles.location}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {location}{duration ? ` · ${duration}` : ''}
            </span>
          ) : duration ? (
            <span>{duration}</span>
          ) : <span />}

          <span className={styles.action}>
            {isUpcoming ? 'Apply / Details' : 'Details'} &rarr;
          </span>
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.card} ${cardClass}`}
      >
        {cardInner}
      </a>
    );
  }

  return (
    <div className={`${styles.card} ${cardClass}`}>
      {cardInner}
    </div>
  );
}
