import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ProcurementSidebar.module.css';

export const categories = [
  { id: 'all', label: 'All Categories' },
  { id: 'consultancy', label: 'Consultancy' },
  { id: 'network-equipment', label: 'Network Equipment' },
  { id: 'software-development', label: 'Software Development' },
  { id: 'connectivity-links', label: 'Connectivity/Links' },
  { id: 'climate-services', label: 'Climate Services' },
  { id: 'other-services', label: 'Other Services' },
];

export const budgetRanges = [
  { id: 'range1', label: '1 - 30,000' },
  { id: 'range2', label: '30,001 - 150,000' },
  { id: 'range3', label: '150,001 and above' },
];

interface ProcurementSidebarProps {
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
  selectedBudgets: string[];
  onBudgetToggle: (budgetId: string) => void;
  onClearFilters: () => void;
  dict: any;
}

export default function ProcurementSidebar({
  selectedCategories,
  onCategoryToggle,
  selectedBudgets,
  onBudgetToggle,
  onClearFilters,
  dict
}: ProcurementSidebarProps) {
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);

  return (
    <>
      <aside className={styles.sidebar}>
      {/* Filter Section */}
      <div className={styles.filterCard}>
        <div className={styles.filterHeader}>
          <div className={styles.headerLeft}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            <h3 className={styles.filterTitle}>{dict.filterTitle}</h3>
          </div>
          <button className={styles.clearBtn} onClick={onClearFilters}>{dict.clearBtn}</button>
        </div>

        <div className={styles.filterGroup}>
          <h4 className={styles.groupTitle}>{dict.categoryTitle}</h4>
          <div className={styles.checkboxList}>
            {categories.map((category) => (
              <label key={category.id} className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  className={styles.checkbox} 
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => onCategoryToggle(category.id)}
                />
                <span className={styles.labelText}>{
                  category.id === 'all' ? dict.categories.all :
                  category.id === 'consultancy' ? dict.categories.consultancy :
                  category.id === 'network-equipment' ? dict.categories.networkEquipment :
                  category.id === 'software-development' ? dict.categories.softwareDevelopment :
                  category.id === 'connectivity-links' ? dict.categories.connectivityLinks :
                  category.id === 'climate-services' ? dict.categories.climateServices :
                  dict.categories.otherServices
                }</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <h4 className={styles.groupTitle}>{dict.budgetTitle}</h4>
          <div className={styles.checkboxList}>
            {budgetRanges.map((range) => (
              <label key={range.id} className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  className={styles.checkbox}
                  checked={selectedBudgets.includes(range.id)}
                  onChange={() => onBudgetToggle(range.id)}
                />
                <span className={styles.labelText}>{
                  range.id === 'range1' ? dict.budgetRanges.range1 :
                  range.id === 'range2' ? dict.budgetRanges.range2 :
                  dict.budgetRanges.range3
                }</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Email Alerts Section */}
      <div className={styles.alertsCard}>
        <div className={styles.alertsHeader}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <h3 className={styles.alertsTitle}>{dict.alertsTitle}</h3>
        </div>
        <p className={styles.alertsDesc}>{dict.alertsDesc}</p>
        <div className={styles.alertsForm}>
          <input type="email" placeholder={dict.emailPlaceholder} className={styles.emailInput} />
          <button className={styles.subscribeBtn}>{dict.subscribeBtn}</button>
        </div>
      </div>

      {/* New to WACREN Section */}
      <div className={styles.newToCard}>
        <div className={styles.newToHeader}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <h3 className={styles.newToTitle}>{dict.newToTitle}</h3>
        </div>
        <p className={styles.newToDesc}>{dict.newToDesc}</p>
        <button onClick={() => setIsGuidelinesOpen(true)} className={styles.readGuidelines}>
          {dict.readGuidelines}
        </button>
      </div>
    </aside>

    {isGuidelinesOpen && (
      <div className={styles.modalOverlay} onClick={() => setIsGuidelinesOpen(false)}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{dict.guidelinesTitle}</h3>
            <button className={styles.closeBtn} onClick={() => setIsGuidelinesOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div className={styles.modalBody}>
            {dict.guidelines.map((guide: any, index: number) => (
              <div key={index} className={styles.guidelineSection}>
                <h4>{guide.title}</h4>
                <p>{guide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </>
  );
}
