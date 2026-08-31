'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const focusItems = [
  {
    title: 'Connectivity Expansion',
    desc: 'Growing regional network infrastructure',
    href: '/connectivity-expansion',
  },
  {
    title: 'Climate Data Infrastructure',
    desc: 'Data systems supporting climate resilience',
    href: '/climate-data-infrastructure',
  },
  {
    title: 'Women in STEM',
    desc: 'Advancing gender inclusion in technology',
    href: '/women-in-stem',
  },
  {
    title: 'Cybersecurity & Threat Intelligence',
    desc: 'Strengthening regional cyber resilience',
    href: '/cybersecurity-threat-intelligence',
  },
  {
    title: 'Capacity Building',
    desc: 'Training and institutional development',
    href: '/capacity-building',
  },
];

const mediaItems = [
  {
    title: 'News',
    desc: 'Latest updates and announcements',
    href: '/news',
  },
  {
    title: 'Publications',
    desc: 'Reports, briefs and research papers',
    href: '/publications',
  },
  {
    title: 'Gallery',
    desc: 'Photos from events and activities',
    href: 'https://photos.wacren.net/index.php?/category/178',
  },
  {
    title: 'Videos',
    desc: 'Session recordings and highlights',
    href: 'https://video.wacren.net/channel/WACREN+Conferences/597270',
  },
];

const topbarItems = [
  { title: 'AfricaConnect', href: 'https://africaconnect1.net/Pages/Home.html' },
  { title: 'AfricaConnect2', href: 'https://www.africaconnect2.net/' },
  { title: 'AfricaConnect3', href: 'https://africaconnect3.net/' },
  { title: 'Faq', href: '/faq' },
];

const languages = [
  { code: 'en', name: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
  { code: 'fr', name: 'Français', flagUrl: 'https://flagcdn.com/w40/fr.png' },
  { code: 'pt', name: 'Português', flagUrl: 'https://flagcdn.com/w40/pt.png' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMega, setOpenMobileMega] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setOpenMobileMega(null);
  };

  const toggleMobileMega = (menu: string) => {
    setOpenMobileMega(openMobileMega === menu ? null : menu);
  };

  return (
    <header className={styles.headerContainer}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <ul className={styles.topbarNav}>
            {topbarItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{item.title}</Link>
              </li>
            ))}
          </ul>
          
          <div className={styles.langSwitcher}>
            <button 
              className={styles.langBtn} 
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
            >
              <img src={currentLang.flagUrl} width="20" alt="" style={{ borderRadius: '2px' }} />
              <span>{currentLang.name}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            
            {isLangOpen && (
              <div className={styles.langDropdown}>
                {languages.map((lang) => (
                  <button 
                    key={lang.code} 
                    className={styles.langOption}
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsLangOpen(false);
                    }}
                  >
                    <img src={lang.flagUrl} width="20" alt="" style={{ borderRadius: '2px' }} />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/africaconnect4.png" 
              alt="AfricaConnect4 Logo" 
              width={125} 
              height={40} 
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>About</Link>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLink}>
                Focus
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <div className={styles.megaMenu}>
                {focusItems.map((item) => (
                  <Link href={item.href} key={item.title} className={styles.megaMenuLink} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <div className={styles.megaMenuItem}>
                      <span className={styles.megaMenuTitle}>{item.title}</span>
                      <span className={styles.megaMenuDesc}>{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="/activities" className={styles.navLink}>Activities</Link>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLink}>
                Media
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <div className={`${styles.megaMenu} ${styles.megaMenuRight}`}>
                {mediaItems.map((item) => (
                  <Link href={item.href} key={item.title} className={styles.megaMenuLink} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <div className={styles.megaMenuItem}>
                      <span className={styles.megaMenuTitle}>{item.title}</span>
                      <span className={styles.megaMenuDesc}>{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="14" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavList}>
          <li className={styles.mobileNavItem}>
            <Link href="/about" className={styles.mobileNavLink} onClick={toggleMobileMenu}>About</Link>
          </li>
          <li className={styles.mobileNavItem}>
            <button className={styles.mobileNavLink} onClick={() => toggleMobileMega('focus')}>
              Focus
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openMobileMega === 'focus' ? 'rotate(180deg)' : 'rotate(0)' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className={`${styles.mobileMegaMenu} ${openMobileMega === 'focus' ? styles.open : ''}`}>
              {focusItems.map((item) => (
                <Link href={item.href} key={item.title} className={styles.megaMenuLink} onClick={toggleMobileMenu} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <div className={styles.megaMenuItem}>
                    <span className={styles.megaMenuTitle}>{item.title}</span>
                    <span className={styles.megaMenuDesc}>{item.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/activities" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Activities</Link>
          </li>
          <li className={styles.mobileNavItem}>
            <button className={styles.mobileNavLink} onClick={() => toggleMobileMega('media')}>
              Media
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openMobileMega === 'media' ? 'rotate(180deg)' : 'rotate(0)' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className={`${styles.mobileMegaMenu} ${openMobileMega === 'media' ? styles.open : ''}`}>
              {mediaItems.map((item) => (
                <Link href={item.href} key={item.title} className={styles.megaMenuLink} onClick={toggleMobileMenu} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <div className={styles.megaMenuItem}>
                    <span className={styles.megaMenuTitle}>{item.title}</span>
                    <span className={styles.megaMenuDesc}>{item.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Topbar Links */}
        <div className={styles.mobileTopbar}>
          <ul className={styles.mobileTopbarList}>
            {topbarItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href} onClick={toggleMobileMenu} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{item.title}</Link>
              </li>
            ))}
          </ul>
          
          <div className={styles.mobileLangList}>
            <p className={styles.mobileLangTitle}>Select Language</p>
            <div className={styles.mobileLangOptions}>
              {languages.map((lang) => (
                <button 
                  key={lang.code}
                  className={`${styles.mobileLangBtn} ${currentLang.code === lang.code ? styles.activeLang : ''}`}
                  onClick={() => {
                    setCurrentLang(lang);
                    toggleMobileMenu();
                  }}
                >
                  <img src={lang.flagUrl} width="20" alt="" style={{ borderRadius: '2px' }} />
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
