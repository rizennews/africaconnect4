import PageHero from '@/components/PageHero';
import FocusLayout from '@/components/FocusLayout';
import styles from '@/components/FocusPage.module.css';

export default function Page() {
  return (
    <main>
      <PageHero 
        title="Open Science and Open scholarly communication infrastructure" 
        description="Advancing open science paradigm"
      />
      <FocusLayout activeHref="/open-science">
        <p className={styles.lead}>
          Open, equitable access to African research is central to the region's digital transformation.
        </p>
        <p className={styles.paragraph}>
          Through the AfricaConnect4 project, WACREN advances this agenda via <a href="https://libsense.ren.africa/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-orange)', fontWeight: 600 }}>LIBSENSE</a>, a WACREN-led programme building a community of practice for open science and progressing the adoption of open science services and infrastructures across Africa.
        </p>
      </FocusLayout>
    </main>
  );
}
