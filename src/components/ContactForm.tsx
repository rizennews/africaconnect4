"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Send us a message</h3>
      
      {status === 'success' && (
        <div className={styles.successMessage}>
          Thank you for reaching out! Your message has been received and we will get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Full Name</label>
          <input type="text" id="name" className={styles.input} required placeholder="Jane Doe" disabled={status === 'submitting'} />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <input type="email" id="email" className={styles.input} required placeholder="jane@example.com" disabled={status === 'submitting'} />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="subject">Subject</label>
          <input type="text" id="subject" className={styles.input} required placeholder="How can we help?" disabled={status === 'submitting'} />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">Message</label>
          <textarea id="message" className={styles.textarea} required placeholder="Type your message here..." disabled={status === 'submitting'}></textarea>
        </div>
        
        <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
          {status !== 'submitting' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
