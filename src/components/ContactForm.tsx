"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  dict: any;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [category, setCategory] = useState(dict.categories[0]);
    
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
      
      const combinedSubject = category !== dict.categories[0] 
        ? `[${category}] ${target.subject.value}`
        : target.subject.value;

    const data = {
      name: target.name.value,
      email: target.email.value,
      subject: combinedSubject,
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
      } else {
        const resJson = await response.json().catch(() => null);
        setStatus('error');
        setErrorMessage(resJson?.error || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('An unexpected connection error occurred. Please try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
    setCategory(dict.categories[0]);
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>{dict.title}</h3>
        <p className={styles.formSubtitle}>
          {dict.subtitle}
        </p>
      </div>
      
      {status === 'success' ? (
        <div className={styles.successCard}>
          <div className={styles.successIconCircle}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h4 className={styles.successTitle}>{dict.successTitle}</h4>
          <p className={styles.successDesc}>
            {dict.successDesc}
          </p>
          <button type="button" onClick={handleReset} className={styles.resetBtn}>
            {dict.sendAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.formGrid}>
          {status === 'error' && (
            <div className={styles.errorAlert} role="alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Email */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">
                <span>{dict.fullName} <span className={styles.required}>*</span></span>
              </label>
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className={styles.input} 
                  required 
                  placeholder={dict.namePlaceholder} 
                  disabled={status === 'submitting'} 
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                <span>{dict.emailAddress} <span className={styles.required}>*</span></span>
              </label>
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className={styles.input} 
                  required 
                  placeholder={dict.emailPlaceholder} 
                  disabled={status === 'submitting'} 
                />
              </div>
            </div>
          </div>

          {/* Row 2: Category and Topic */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="category">
                <span>{dict.inquiryArea}</span>
              </label>
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <select
                  id="category"
                  name="category"
                  className={styles.select}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={status === 'submitting'}
                >
                  {dict.categories.map((cat: string) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="subject">
                <span>{dict.subject} <span className={styles.required}>*</span></span>
              </label>
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className={styles.input} 
                  required 
                  placeholder={dict.subjectPlaceholder} 
                  disabled={status === 'submitting'} 
                />
              </div>
            </div>
          </div>
          
          {/* Row 3: Message */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">
              <span>{dict.yourMessage} <span className={styles.required}>*</span></span>
            </label>
            <textarea 
              id="message" 
              name="message"
              className={styles.textarea} 
              required 
              placeholder={dict.messagePlaceholder} 
              disabled={status === 'submitting'}
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
            {status === 'submitting' ? (
              <>
                <svg className={styles.spinner} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="6"></line>
                  <line x1="12" y1="18" x2="12" y2="22"></line>
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                  <line x1="2" y1="12" x2="6" y2="12"></line>
                  <line x1="18" y1="12" x2="22" y2="12"></line>
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
                <span>{dict.sending}</span>
              </>
            ) : (
              <>
                <span>{dict.sendMessage}</span>
                <svg className={styles.btnArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
