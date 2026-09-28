import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/app/[lang]/dictionaries';
import styles from './FocusPage.module.css';

export default async function FocusLayout({ children, activeHref }: { children: React.ReactNode, activeHref: string }) {
  const dict = await getDictionary();
  const focusItems = dict.focusLayout.items;

  return (
    <section className={styles.container}>
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>{dict.focusLayout.sidebarTitle}</h3>
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
