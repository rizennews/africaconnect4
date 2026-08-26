import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Column 1: Company Info */}
          <div className={styles.companyInfo}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>WACREN</h2>
            </Link>
            <p className={styles.description}>
              The West and Central African Research and Education Network — providing world-class infrastructure and services for the region&apos;s research and education community.
            </p>
            <address className={styles.address}>
              <span>VCG Office Complex, IPS Road</span>
              <span>P O Box LG 1279, Accra, Ghana</span>
              <span className={styles.contact}>+233 302 942 873 · secretariat@wacren.net</span>
            </address>
          </div>

          {/* Column 2: About */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>About</h3>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>Who we are</Link>
              <Link href="#" className={styles.link}>Corporate information</Link>
              <Link href="#" className={styles.link}>Board & governance</Link>
              <Link href="#" className={styles.link}>Member NRENs</Link>
              <Link href="#" className={styles.link}>Careers</Link>
            </div>
          </div>

          {/* Column 3: Services & Projects */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services & Projects</h3>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>Network</Link>
              <Link href="#" className={styles.link}>eduroam & eduGAIN</Link>
              <Link href="#" className={styles.link}>Video conferencing</Link>
              <Link href="#" className={styles.link}>LIBSENSE</Link>
            </div>
          </div>

          {/* Column 4: Stay In Touch */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Stay In Touch</h3>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>WACREN 2026 Conference</Link>
              <Link href="#" className={styles.link}>Newsletter</Link>
              <Link href="#" className={styles.link}>Press & media</Link>
              <Link href="#" className={styles.link}>Contact</Link>
            </div>
            
            <div className={styles.socialLinks}>
              {/* Twitter / X */}
              <a href="https://twitter.com/wacren" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              
              {/* Bluesky */}
              <a href="https://bsky.app/profile/wacren.bsky.social" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Bluesky">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.81 9.497 7.823 4.308 4.556-5.073 1.082-6.498-2.83-7.078a5.916 5.916 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.789.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/west-and-central-african-research-and-education-network/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Mastodon */}
              <a href="https://mastodon.social/@WACREN" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Mastodon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© {new Date().getFullYear()} WACREN. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="#" className={styles.link}>Privacy Policy</Link>
            <Link href="#" className={styles.link}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
