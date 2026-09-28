'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

interface ProcurementActionsProps {
  title: string;
  status: 'Open' | 'Closed' | 'Awarded';
  dict: any;
}

export default function ProcurementActions({ title, status, dict }: ProcurementActionsProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
    }
    if (isShareOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShareOpen]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl || window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsShareOpen(false);
      }, 1500);
    }
  };

  const encodedUrl = encodeURIComponent(currentUrl);
  const shareText = `${dict?.procurementPage?.single?.shareText || 'Check out this procurement opportunity from WACREN:'} ${title}`;
  const encodedText = encodeURIComponent(shareText);

  return (
    <>
      <div className={styles.applyCard}>
        {status === 'Open' ? (
          <button className={styles.applyBtn} onClick={() => setIsApplyOpen(true)}>{dict?.procurementPage?.single?.applyNow || 'Apply Now'}</button>
        ) : (
          <button className={styles.applyBtn} style={{ background: '#cbd5e1', cursor: 'not-allowed' }} disabled>
            {status === 'Closed' 
              ? (dict?.procurementPage?.single?.closedForApplications || 'Closed for Applications') 
              : (dict?.procurementPage?.single?.opportunityAwarded || 'Opportunity Awarded')}
          </button>
        )}
        
        <div className={styles.shareWrapper} ref={dropdownRef}>
          <button className={styles.secondaryBtn} style={{ width: '100%' }} onClick={() => setIsShareOpen(!isShareOpen)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            {dict?.procurementPage?.single?.shareOpportunity || 'Share Opportunity'}
          </button>
          
          {isShareOpen && (
            <div className={styles.shareDropdown}>
              <button className={styles.shareOption} onClick={handleCopyLink}>
                <span className={styles.shareOptionIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </span>
                <span>{copied ? (dict?.articleSingle?.linkCopied || 'Link Copied!') : (dict?.articleSingle?.copyLink || 'Copy link')}</span>
              </button>
              <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`} target="_blank" rel="noopener noreferrer" className={styles.shareOption}>
                <span className={`${styles.shareOptionIcon} ${styles.x}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </span>
                <span>{dict?.articleSingle?.shareOnX || 'Share on X'}</span>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={styles.shareOption}>
                <span className={`${styles.shareOptionIcon} ${styles.linkedin}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 0 0-1.62 1.63c0 .9.73 1.63 1.62 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.63-1.63-1.63z" /></svg>
                </span>
                <span>{dict?.articleSingle?.shareOnLinkedIn || 'Share on LinkedIn'}</span>
              </a>
              <a href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={styles.shareOption}>
                <span className={`${styles.shareOptionIcon} ${styles.whatsapp}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" /></svg>
                </span>
                <span>{dict?.articleSingle?.shareViaWhatsApp || 'Share via WhatsApp'}</span>
              </a>
              <a href={`mailto:?subject=${encodedText}&body=Check out this opportunity: ${encodedUrl}`} className={styles.shareOption}>
                <span className={`${styles.shareOptionIcon} ${styles.email}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <span>{dict?.articleSingle?.sendViaEmail || 'Send via Email'}</span>
              </a>
            </div>
          )}
        </div>

        <button className={styles.secondaryBtn} onClick={() => window.print()}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          {dict?.procurementPage?.single?.printDetails || 'Print Details'}
        </button>
      </div>

      {isApplyOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsApplyOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{(dict?.procurementPage?.single?.form as any)?.applyFor || 'Apply for'} {title}</h3>
              <button className={styles.closeBtn} onClick={() => setIsApplyOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className={styles.modalBody}>
              <form onSubmit={e => { e.preventDefault(); alert('Application submitted successfully!'); setIsApplyOpen(false); }}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{dict?.procurementPage?.single?.form?.fullName || 'Full Name'}</label>
                  <input type="text" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{dict?.procurementPage?.single?.form?.email || 'Email Address'}</label>
                  <input type="email" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{dict?.procurementPage?.single?.form?.coverLetter || 'Cover Letter'}</label>
                  <textarea required className={styles.textarea} rows={4}></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{dict?.procurementPage?.single?.form?.uploadResume || 'Upload Resume / Proposal (PDF)'}</label>
                  <input type="file" accept=".pdf" required className={styles.fileInput} />
                </div>
                <div className={styles.modalFooter}>
                  <button type="button" className={styles.cancelBtn} onClick={() => setIsApplyOpen(false)}>{dict?.procurementPage?.single?.form?.cancel || 'Cancel'}</button>
                  <button type="submit" className={styles.submitBtn}>{dict?.procurementPage?.single?.form?.submit || 'Submit Application'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
