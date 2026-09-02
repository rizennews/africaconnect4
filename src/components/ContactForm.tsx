"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };
    
    const data = {
      name: target.name.value,
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Send us a message</h3>
      
      {status === 'success' && (
        <div className={styles.successMessage}>
          Thank you for reaching out! Your message has been received and we will get back to you shortly.
        </div>
      )}
      
      {status === 'error' && (
        <div className={styles.successMessage} style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#dc2626', borderColor: 'rgba(220, 38, 38, 0.2)' }}>
          {errorMessage}
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
