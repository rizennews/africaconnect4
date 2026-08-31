import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import styles from './Contact.module.css';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Contact Us" 
        description="We'd love to hear from you. Get in touch with the AfricaConnect4 team."
      />
      
      <section className={styles.container}>
        <div className={styles.infoSection}>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className={styles.detailText}>
                <h3>Secretariat</h3>
                <p>WACREN Secretariat<br />VCG Office Complex, IPS Road<br />P O Box LG 1279, Accra, Ghana</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className={styles.detailText}>
                <h3>Email Us</h3>
                <p>secretariat@wacren.net</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className={styles.detailText}>
                <h3>Call Us</h3>
                <p>+233 30 294 2873</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
