import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Climate Data Infrastructure" 
        description="Building data systems supporting climate resilience."
      />
      <FocusLayout activeHref="/climate-data-infrastructure">
        <p className={styles.lead}>
          Empowering the region with the digital infrastructure needed to monitor, analyze, and combat climate change effectively.
        </p>
        <p className={styles.paragraph}>
          Climate research requires immense computational power and data storage. The AfricaConnect4 initiative provides dedicated infrastructure and high-speed transit for earth observation data, enabling local scientists to collaborate globally and develop data-driven climate resilience models tailored for the region.
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Data Repositories
            </h3>
            <p>Creating centralized, accessible hubs for regional environmental data and historical climate records.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
              Real-time Analytics
            </h3>
            <p>Providing the high-throughput connectivity needed for real-time weather tracking and disaster early warning systems.</p>
          </div>
        </div>
      </FocusLayout>
    </main>
  );
}
