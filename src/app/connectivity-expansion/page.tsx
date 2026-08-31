import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Connectivity Expansion" 
        description="Growing regional network infrastructure to connect the unconnected."
      />
      <FocusLayout activeHref="/connectivity-expansion">
        <p className={styles.lead}>
          A robust and expansive network is the foundation of digital transformation across West and Central Africa.
        </p>
        <p className={styles.paragraph}>
          Through the AfricaConnect4 project, we are significantly expanding the reach of our high-speed network. By deploying new links and upgrading existing ones, we aim to bridge the digital divide, providing researchers, educators, and students with reliable and fast internet access.
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
              Network Upgrades
            </h3>
            <p>Enhancing backbone capacity and resiliency across member countries to handle future data demands.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              Global Peering
            </h3>
            <p>Establishing vital direct connections with international research networks and major content providers.</p>
          </div>
        </div>
      </FocusLayout>
    </main>
  );
}
