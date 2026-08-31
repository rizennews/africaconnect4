import React from 'react';
import Link from 'next/link';
import styles from './FocusPage.module.css';

const focusItems = [
  { title: 'Connectivity Expansion', href: '/connectivity-expansion' },
  { title: 'Climate Data Infrastructure', href: '/climate-data-infrastructure' },
  { title: 'Women-In-STEM', href: '/women-in-stem' },
  { title: 'Cybersecurity & Threat Intelligence', href: '/cybersecurity-threat-intelligence' },
  { title: 'Capacity Building', href: '/capacity-building' },
];

export default function FocusLayout({ children, activeHref }: { children: React.ReactNode, activeHref: string }) {
  return (
    <section className={styles.container}>
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Focus Areas</h3>
        <nav className={styles.sidebarNav}>
          {focusItems.map(item => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`${styles.sidebarLink} ${activeHref === item.href ? styles.active : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}
