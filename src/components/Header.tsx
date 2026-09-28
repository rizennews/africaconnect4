'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';
import type { Dictionary } from '@/app/[lang]/dictionaries';

const languages = [
  { code: 'en', name: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
  { code: 'fr', name: 'Français', flagUrl: 'https://flagcdn.com/w40/fr.png' },
  { code: 'pt', name: 'Português', flagUrl: 'https://flagcdn.com/w40/pt.png' },
];

const topbarItems = [
  { title: 'AfricaConnect', href: 'https://africaconnect1.net/Pages/Home.html' },
  { title: 'AfricaConnect2', href: 'https://www.africaconnect2.net/' },
  { title: 'AfricaConnect3', href: 'https://africaconnect3.net/' },
];

type HeaderDict = Dictionary['header'];

interface HeaderProps {
  dict: HeaderDict;
  lang: string;
}

export default function Header({ dict, lang }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Strip the locale prefix to get the "bare" path  e.g. /fr/about → /about
  const barePath = pathname.replace(/^\/(en|fr|pt)/, '') || '/';
  const isProcurement = barePath.startsWith('/procurement');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMega, setOpenMobileMega] = useState<string | null>(null);
  const currentLang = languages.find((l) => l.code === lang) ?? languages[0];
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setOpenMobileMega(null);
  };

  const toggleMobileMega = (menu: string) => {
    setOpenMobileMega(openMobileMega === menu ? null : menu);
  };

  const switchLang = (code: string) => {
    const target = `/${code}${barePath === '/' ? '' : barePath}`;
    router.push(target);
    setIsLangOpen(false);
  };

  // Build localised hrefs for nav links
  const href = (path: string) => `/${lang}${path}`;

  return (
    <header className={styles.headerContainer}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <ul className={styles.topbarNav}>
            {topbarItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</Link>
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
                {languages.map((l) => (
                  <button 
                    key={l.code} 
                    className={styles.langOption}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      switchLang(l.code);
                    }}
                  >
                    <img src={l.flagUrl} width="20" alt="" style={{ borderRadius: '2px' }} />
                    <span>{l.name}</span>
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
          <Link href={href('/')}>
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
            {isProcurement ? (
              <>
                <li className={styles.navItem}>
                  <Link href={href('/procurement')} className={styles.navLink}>{dict.procurement.opportunities}</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href={href('/procurement?tab=contract-awards')} className={styles.navLink}>{dict.procurement.contractAwards}</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="#" className={styles.navLink}>{dict.procurement.supplierReg}</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href={href('/')} className={styles.navLink}>{dict.procurement.backToMain}</Link>
                </li>
              </>
            ) : (
              <>
                <li className={styles.navItem}>
                  <Link href={href('/about')} className={styles.navLink}>{dict.nav.about}</Link>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>
                    {dict.focusLabel}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                  <div className={styles.megaMenu}>
                    {dict.focus.map((item) => (
                      <Link href={href(item.href ?? '/')} key={item.title} className={styles.megaMenuLink}>
                        <div className={styles.megaMenuItem}>
                          <span className={styles.megaMenuTitle}>{item.title}</span>
                          <span className={styles.megaMenuDesc}>{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </li>
                <li className={styles.navItem}>
                  <Link href={href('/activities')} className={styles.navLink}>{dict.nav.activities}</Link>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>
                    {dict.mediaLabel}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                  <div className={`${styles.megaMenu} ${styles.megaMenuRight}`}>
                    {dict.media.map((item) => (
                      <Link href={item.href?.startsWith('http') ? item.href : href(item.href ?? '/news')} key={item.title} className={styles.megaMenuLink} target={item.href?.startsWith('http') ? '_blank' : undefined} rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        <div className={styles.megaMenuItem}>
                          <span className={styles.megaMenuTitle}>{item.title}</span>
                          <span className={styles.megaMenuDesc}>{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </li>
                {/* Procurement hidden from menu for now
                <li className={styles.navItem}>
                  <Link href={href('/procurement')} className={styles.navLink}>{dict.nav.procurement}</Link>
                </li>
                */}
                <li className={styles.navItem}>
                  <Link href={href('/contact')} className={styles.navLink}>{dict.nav.contact}</Link>
                </li>
              </>
            )}
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
          {isProcurement ? (
            <>
              <li className={styles.mobileNavItem}>
                <Link href={href('/procurement')} className={styles.mobileNavLink} onClick={toggleMobileMenu}>{dict.procurement.opportunities}</Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href={href('/procurement?tab=contract-awards')} className={styles.mobileNavLink} onClick={toggleMobileMenu}>{dict.procurement.contractAwards}</Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>{dict.procurement.supplierReg}</Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href={href('/')} className={styles.mobileNavLink} onClick={toggleMobileMenu}>{dict.procurement.backToMain}</Link>
              </li>
            </>
          ) : (
            <>
              <li className={styles.mobileNavItem}>
                <Link href={href('/about')} className={styles.mobileNavLink} onClick={toggleMobileMenu}>{dict.nav.about}</Link>
              </li>
              <li className={styles.mobileNavItem}>
                <button className={styles.mobileNavLink} onClick={() => toggleMobileMega('focus')}>
                  {dict.focusLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openMobileMega === 'focus' ? 'rotate(180deg)' : 'rotate(0)' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className={`${styles.mobileMegaMenu} ${openMobileMega === 'focus' ? styles.open : ''}`}>
                  {dict.focus.map((item) => (
                    <Link href={href(item.href ?? '/')} key={item.title} className={styles.megaMenuLink} onClick={toggleMobileMenu}>
                      <div className={styles.megaMenuItem}>
                        <span className={styles.megaMenuTitle}>{item.title}</span>
                        <span className={styles.megaMenuDesc}>{item.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </li>
              <li className={styles.mobileNavItem}>
                <Link href={href('/activities')} className={styles.mobileNavLink} onClick={toggleMobileMenu}>{dict.nav.activities}</Link>
              </li>
              <li className={styles.mobileNavItem}>
                <button className={styles.mobileNavLink} onClick={() => toggleMobileMega('media')}>
                  {dict.mediaLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openMobileMega === 'media' ? 'rotate(180deg)' : 'rotate(0)' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className={`${styles.mobileMegaMenu} ${openMobileMega === 'media' ? styles.open : ''}`}>
                  {dict.media.map((item) => (
                    <Link href={item.href?.startsWith('http') ? item.href : href(item.href ?? '/news')} key={item.title} className={styles.megaMenuLink} onClick={toggleMobileMenu} target={item.href?.startsWith('http') ? '_blank' : undefined} rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      <div className={styles.megaMenuItem}>
                        <span className={styles.megaMenuTitle}>{item.title}</span>
                        <span className={styles.megaMenuDesc}>{item.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </li>
              {/* Procurement hidden from menu for now
              <li className={styles.mobileNavItem}>
                <Link href={href('/procurement')} className={styles.mobileNavLink} onClick={toggleMobileMenu}>{dict.nav.procurement}</Link>
              </li>
              */}
              <li className={styles.mobileNavItem}>
                <Link href={href('/contact')} className={styles.mobileNavLink} onClick={toggleMobileMenu}>{dict.nav.contact}</Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Topbar Links */}
        <div className={styles.mobileTopbar}>
          <ul className={styles.mobileTopbarList}>
            {topbarItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href} onClick={toggleMobileMenu} target="_blank" rel="noopener noreferrer">{item.title}</Link>
              </li>
            ))}
          </ul>
          
          <div className={styles.mobileLangList}>
            <p className={styles.mobileLangTitle}>{dict.selectLanguage}</p>
            <div className={styles.mobileLangOptions}>
              {languages.map((l) => (
                <button 
                  key={l.code}
                  className={`${styles.mobileLangBtn} ${currentLang.code === l.code ? styles.activeLang : ''}`}
                  onClick={() => {
                    switchLang(l.code);
                    toggleMobileMenu();
                  }}
                >
                  <img src={l.flagUrl} width="20" alt="" style={{ borderRadius: '2px' }} />
                  <span>{l.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
