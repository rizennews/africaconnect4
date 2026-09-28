"use client";

import React from 'react';
import styles from './UpcomingCrawler.module.css';
import { EventData } from '@/components/EventsGrid';
import { useParams } from 'next/navigation';
import Link from 'next/link';

type UpcomingCrawlerDict = {
  upcoming: string;
};

export default function UpcomingCrawler({ dict, events }: { dict: UpcomingCrawlerDict, events: EventData[] }) {
  const params = useParams();
  const lang = (params.lang as string) || 'en';

  if (!events || events.length === 0) return null;

  const getHref = (link?: string) => {
    if (!link) return '#';
    return link.startsWith('http') ? link : `/${lang}${link.startsWith('/') ? link : `/${link}`}`;
  };

  return (
    <div className={styles.crawlerWrapper}>
      <div className={styles.crawlerLabel}>
        {dict.upcoming}
      </div>
      <div className={styles.crawlerTrack}>
        <div className={styles.crawlerContent}>
          {events.map((ev, i) => (
            <React.Fragment key={i}>
              <Link href={getHref(ev.link)} target={ev.link?.startsWith('http') ? '_blank' : undefined} rel={ev.link?.startsWith('http') ? 'noopener noreferrer' : undefined} className={styles.crawlerItem}>
                <span className={styles.date}>{ev.day} {ev.month} {ev.year}</span>
                <span className={styles.title}>{ev.title}</span>
                <span className={styles.arrow}>→</span>
              </Link>
              <span className={styles.separator}>•</span>
            </React.Fragment>
          ))}
          {/* Duplicate for infinite seamless scroll */}
          {events.map((ev, i) => (
            <React.Fragment key={`dup-${i}`}>
              <Link href={getHref(ev.link)} target={ev.link?.startsWith('http') ? '_blank' : undefined} rel={ev.link?.startsWith('http') ? 'noopener noreferrer' : undefined} className={styles.crawlerItem}>
                <span className={styles.date}>{ev.day} {ev.month} {ev.year}</span>
                <span className={styles.title}>{ev.title}</span>
                <span className={styles.arrow}>→</span>
              </Link>
              <span className={styles.separator}>•</span>
            </React.Fragment>
          ))}
          {/* Third copy to ensure enough width for large screens */}
          {events.map((ev, i) => (
            <React.Fragment key={`dup2-${i}`}>
              <Link href={getHref(ev.link)} target={ev.link?.startsWith('http') ? '_blank' : undefined} rel={ev.link?.startsWith('http') ? 'noopener noreferrer' : undefined} className={styles.crawlerItem}>
                <span className={styles.date}>{ev.day} {ev.month} {ev.year}</span>
                <span className={styles.title}>{ev.title}</span>
                <span className={styles.arrow}>→</span>
              </Link>
              <span className={styles.separator}>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
