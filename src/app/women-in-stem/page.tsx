import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Women in STEM" 
        description="Advancing gender inclusion in technology."
      />
      <FocusLayout activeHref="/women-in-stem">
        <p className={styles.lead}>
          Driving systemic change by empowering and increasing the representation of women in Science, Technology, Engineering, and Mathematics.
        </p>
        <p className={styles.paragraph}>
          The Women-in-STEM initiative within AfricaConnect4 focuses on creating pathways, mentorship opportunities, and leadership programs. We aim to break down barriers, providing female researchers and engineers with the resources and platforms necessary to thrive in the digital ecosystem.
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Mentorship
            </h3>
            <p>Connecting young female professionals with established leaders for guidance, sponsorship, and career development.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Leadership Programs
            </h3>
            <p>Specialized workshops aimed at equipping women with the skills necessary to take on executive roles in NRENs.</p>
          </div>
        </div>
      </FocusLayout>
    </main>
  );
}
