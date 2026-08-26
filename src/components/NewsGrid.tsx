'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsGrid.module.css';

export interface NewsArticle {
  id: string;
  category: 'News' | 'Blog' | 'Event';
  date: string;
  readTime: string;
  title: string;
  image: string;
  link: string;
  cutoutPosition?: 'bottom' | 'top';
  timestamp: number; // for chronological sorting
}

interface NewsGridProps {
  articles?: NewsArticle[];
  items?: NewsArticle[];
  showControls?: boolean;
}

const CATEGORIES = ['All', 'News', 'Blog', 'Event'] as const;

export default function NewsGrid({ articles, items, showControls = true }: NewsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  const articleList = useMemo(() => articles || items || [], [articles, items]);

  const filteredAndSortedArticles = useMemo(() => {
    return articleList
      .filter((article) => {
        if (!article) return false;
        if (!showControls) return true;
        const matchesCategory =
          activeCategory === 'All' ||
          (article.category && article.category.toLowerCase() === activeCategory.toLowerCase());
        
        const searchLower = searchQuery.toLowerCase().trim();
        const matchesSearch =
          searchLower === '' ||
          (article.title && article.title.toLowerCase().includes(searchLower)) ||
          (article.category && article.category.toLowerCase().includes(searchLower)) ||
          (article.date && article.date.toLowerCase().includes(searchLower));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const timeA = a.timestamp || 0;
        const timeB = b.timestamp || 0;
        if (sortBy === 'newest') {
          return timeB - timeA;
        } else {
          return timeA - timeB;
        }
      });
  }, [articleList, activeCategory, searchQuery, sortBy, showControls]);

  return (
    <section className={`${styles.container} ${!showControls ? styles.compactContainer : ''}`}>
      {/* Top Bar with Category Filter, Search and Sort */}
      {showControls && (
        <div className={styles.topBar}>
          {/* Category Pills */}
          <div className={styles.categoryGroup}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${
                  activeCategory === cat ? styles.active : ''
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className={styles.controlsRight}>
            {/* Search Input */}
            <div className={styles.searchBox}>
              <svg
                className={styles.searchIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search posts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            {/* Sort Dropdown */}
            <div className={styles.sortWrapper}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                className={styles.sortSelect}
              >
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
              </select>
              <svg
                className={styles.sortChevron}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className={styles.grid}>
        {filteredAndSortedArticles.map((item) => {
          const isTopCutout = item.cutoutPosition === 'top';

          return (
            <Link key={item.id} href={item.link} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Scallop / Arch Cutout */}
                {isTopCutout ? (
                  <svg
                    viewBox="0 0 100 24"
                    preserveAspectRatio="none"
                    className={styles.cutoutTop}
                  >
                    <path
                      d="M0,0 C30,0 35,24 50,24 C65,24 70,0 100,0 Z"
                      fill="#ffffff"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 100 24"
                    preserveAspectRatio="none"
                    className={styles.cutoutBottom}
                  >
                    <path
                      d="M0,24 C30,24 35,0 50,0 C65,0 70,24 100,24 Z"
                      fill="#ffffff"
                    />
                  </svg>
                )}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.metaInfo}>
                  <span>{item.date}</span>
                  <span> • </span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </Link>
          );
        })}

        {filteredAndSortedArticles.length === 0 && (
          <div className={styles.emptyState}>
            <p>No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
