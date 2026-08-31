"use client";

import React from 'react';
import styles from './UpcomingCrawler.module.css';
import { futureEvents } from './ActivitiesToggle';

export default function UpcomingCrawler() {
  if (!futureEvents || futureEvents.length === 0) return null;

  return (
    <div className={styles.crawlerWrapper}>
      <div className={styles.crawlerLabel}>
        UPCOMING
      </div>
      <div className={styles.crawlerTrack}>
        <div className={styles.crawlerContent}>
          {futureEvents.map((ev, i) => (
            <React.Fragment key={i}>
              <a href={ev.link} target="_blank" rel="noopener noreferrer" className={styles.crawlerItem}>
                <span className={styles.date}>{ev.day} {ev.month} {ev.year}</span>
                <span className={styles.title}>{ev.title}</span>
                <span className={styles.arrow}>→</span>
              </a>
              <span className={styles.separator}>•</span>
            </React.Fragment>
          ))}
          {/* Duplicate for infinite seamless scroll */}
          {futureEvents.map((ev, i) => (
            <React.Fragment key={`dup-${i}`}>
              <a href={ev.link} target="_blank" rel="noopener noreferrer" className={styles.crawlerItem}>
                <span className={styles.date}>{ev.day} {ev.month} {ev.year}</span>
                <span className={styles.title}>{ev.title}</span>
                <span className={styles.arrow}>→</span>
              </a>
              <span className={styles.separator}>•</span>
            </React.Fragment>
          ))}
          {/* Third copy to ensure enough width for large screens */}
          {futureEvents.map((ev, i) => (
            <React.Fragment key={`dup2-${i}`}>
              <a href={ev.link} target="_blank" rel="noopener noreferrer" className={styles.crawlerItem}>
                <span className={styles.date}>{ev.day} {ev.month} {ev.year}</span>
                <span className={styles.title}>{ev.title}</span>
                <span className={styles.arrow}>→</span>
              </a>
              <span className={styles.separator}>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
