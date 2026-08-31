'use client';

import React, { useState } from 'react';
import styles from './PublicationsList.module.css';

interface Publication {
  id: string;
  tag: string;
  title: string;
  date: string;
  size: string;
  category: string;
  path: string;
}

const allFiles: Publication[] = [
  {
    id: '1',
    tag: 'CONSULTANCY',
    title: 'ToR- Consultancy for GPUHPC-Based Water and Energy Budget Modelling_WACREN.pdf',
    date: 'Aug 31, 2026',
    size: '258 KB',
    category: 'Consultancy',
    path: '/documents/consultancy/ToR- Consultancy for GPUHPC-Based Water and Energy Budget Modelling_WACREN.pdf'
  },
  {
    id: '2',
    tag: 'MAPS',
    title: 'WACREN Timeline.mp4',
    date: 'Aug 31, 2026',
    size: '49.8 MB',
    category: 'Maps',
    path: '/documents/maps/WACREN Timeline.mp4'
  }
];

const folders = [
  { name: 'Presentations', count: 0 },
  { name: 'Consultancy', count: 1 },
  { name: 'Maps', count: 1 }
];

export default function PublicationsList() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = allFiles.filter(file => {
    const matchesFolder = activeFolder ? file.category === activeFolder : true;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = file.title.toLowerCase().includes(searchLower) ||
                          file.category.toLowerCase().includes(searchLower) ||
                          file.tag.toLowerCase().includes(searchLower);
    return matchesFolder && matchesSearch;
  });

  return (
    <section className={styles.container}>
      
      <div className={styles.searchBox}>
        <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          placeholder="Search documents..." 
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h3 className={styles.sectionSubtitle}>
        {activeFolder ? `${activeFolder} Documents` : 'All Documents'}
      </h3>

      <div className={styles.sectionLabel}>Folders</div>
      <div className={styles.foldersGrid}>
        <div 
          className={`${styles.folderCard} ${activeFolder === null ? styles.active : ''}`}
          onClick={() => setActiveFolder(null)}
        >
          <div className={styles.folderIconBox}>
            <svg viewBox="0 0 24 24">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
            </svg>
          </div>
          <div className={styles.folderInfo}>
            <span className={styles.folderName}>All Documents</span>
            <span className={styles.folderCount}>{allFiles.length} items</span>
          </div>
        </div>
        
        {folders.map(folder => (
          <div 
            key={folder.name} 
            className={`${styles.folderCard} ${activeFolder === folder.name ? styles.active : ''}`}
            onClick={() => setActiveFolder(folder.name)}
          >
            <div className={styles.folderIconBox}>
              <svg viewBox="0 0 24 24">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
              </svg>
            </div>
            <div className={styles.folderInfo}>
              <span className={styles.folderName}>{folder.name}</span>
              <span className={styles.folderCount}>{folder.count} items</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionLabel}>Files</div>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div>NAME</div>
          <div>LAST MODIFIED</div>
          <div>SIZE</div>
          <div></div>
        </div>
        
        {filteredFiles.map(file => (
          <div key={file.id} className={styles.tableRow}>
            <div className={styles.fileNameCol}>
              <svg className={styles.fileIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              {file.title}
            </div>
            <div className={styles.fileDateCol}>{file.date}</div>
            <div className={styles.fileSizeCol}>{file.size}</div>
            <a href={file.path} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn} title="Download file" aria-label="Download">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        ))}
        
        {filteredFiles.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'rgba(12, 25, 77, 0.6)', fontSize: '0.9rem' }}>
            No documents found.
          </div>
        )}
      </div>
    </section>
  );
}
