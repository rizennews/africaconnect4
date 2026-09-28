import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import styles from './Contact.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

export const metadata: Metadata = {
  title: 'Contact AfricaConnect4 Project Team | WACREN',
  description: 'Get in touch with the AfricaConnect4 project secretariat, communications team, and regional NREN coordination offices across Africa.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact AfricaConnect4 Project Team | WACREN',
    description: 'Get in touch with the AfricaConnect4 project secretariat and regional NREN coordination offices.',
    url: `${siteUrl}/contact`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${siteUrl}/contact#webpage`,
      'url': `${siteUrl}/contact`,
      'name': 'Contact AfricaConnect4 and WACREN',
      'description': 'Direct contact channels for the AfricaConnect4 secretariat.',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'WACREN',
        'url': 'https://wacren.net',
        'email': 'secretariat@wacren.net',
        'telephone': '+233 30 294 2873',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'VCG Office Complex, IPS Road',
          'postOfficeBoxNumber': 'P O Box LG 1279',
          'addressLocality': 'Accra',
          'addressCountry': 'GH',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/contact#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': siteUrl,
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Contact Us',
          'item': `${siteUrl}/contact`,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className={styles.wrapper}>
        <PageHero 
          title="Contact Us" 
          description="Direct communication channels for the AfricaConnect4 project and regional partners."
        />
        
        <section className={styles.container}>
          <div className={styles.infoSection}>
            <div>
              <span className={styles.badge}>Get In Touch</span>
              <h2 className={styles.infoTitle}>Connect with the Coordination Team</h2>
              <p className={styles.infoDesc}>
                Reach out for inquiries regarding high-speed research networking, technical training, open science, or institutional partnerships across West and Central Africa.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.detailCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.detailText}>
                  <div className={styles.detailHeader}>
                    <h3>Secretariat Headquarters</h3>
                    <span className={styles.actionTag}>Accra, Ghana</span>
                  </div>
                  <p className={styles.detailValue}>WACREN Secretariat</p>
                  <p className={styles.detailSub}>VCG Office Complex, IPS Road, P O Box LG 1279, Accra, Ghana</p>
                </div>
              </div>
              
              <a href="mailto:secretariat@wacren.net" className={styles.detailCard} aria-label="Send email to secretariat@wacren.net">
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.detailText}>
                  <div className={styles.detailHeader}>
                    <h3>Email Support</h3>
                    <span className={styles.actionTag}>Tap to Email</span>
                  </div>
                  <p className={styles.detailValue}>secretariat@wacren.net</p>
                  <p className={styles.detailSub}>Replies typically within 24 to 48 business hours</p>
                </div>
              </a>
              
              <a href="tel:+233302942873" className={styles.detailCard} aria-label="Call +233 30 294 2873">
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.detailText}>
                  <div className={styles.detailHeader}>
                    <h3>Direct Phone Line</h3>
                    <span className={styles.actionTag}>Tap to Call</span>
                  </div>
                  <p className={styles.detailValue}>+233 30 294 2873</p>
                  <p className={styles.detailSub}>Mon - Fri: 08:30 to 17:00 GMT</p>
                </div>
              </a>
            </div>

            <div className={styles.initiativeNote}>
              <strong>Institutional Partnership:</strong> AfricaConnect4 is a WACREN initiative co-funded by the European Union.
            </div>
          </div>
          
          <div className={styles.formSection}>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
