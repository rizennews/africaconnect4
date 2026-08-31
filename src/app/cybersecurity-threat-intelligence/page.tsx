import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Cybersecurity" 
        description="Strengthening regional cyber resilience and threat intelligence."
      />
      <FocusLayout activeHref="/cybersecurity-threat-intelligence">
        <p className={styles.lead}>
          Safeguarding academic and research networks against evolving digital threats.
        </p>
        <p className={styles.paragraph}>
          As connectivity expands, so does the attack surface. Our cybersecurity focus works to build robust defense mechanisms across the regional network. By fostering collaboration between National Research and Education Networks (NRENs), we establish shared threat intelligence and rapid incident response protocols.
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Shared Intelligence
            </h3>
            <p>A unified platform for member institutions to report vulnerabilities and share real-time threat signatures.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Trust & Identity
            </h3>
            <p>Implementing secure authentication federations like eduroam and eduGAIN across the WACREN region.</p>
          </div>
        </div>
      </FocusLayout>
    </main>
  );
}
