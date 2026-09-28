'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProcurementSidebar, { categories } from '@/components/ProcurementSidebar';
import OpportunityCard from '@/components/OpportunityCard';
import styles from '@/app/[lang]/procurement/page.module.css';
import { MOCK_OPPORTUNITIES, MOCK_AWARDS } from '@/data/procurement';

function ProcurementContent({ dict }: { dict: any }) {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'open';
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([]);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleCategoryToggle = (categoryId: string) => {
    if (categoryId === 'all') {
      setSelectedCategories(['all']);
    } else {
      let newCats = selectedCategories.filter(c => c !== 'all');
      if (newCats.includes(categoryId)) {
        newCats = newCats.filter(c => c !== categoryId);
        if (newCats.length === 0) newCats = ['all'];
      } else {
        newCats.push(categoryId);
      }
      setSelectedCategories(newCats);
    }
  };

  const handleBudgetToggle = (budgetId: string) => {
    let newBudgets = [...selectedBudgets];
    if (newBudgets.includes(budgetId)) {
      newBudgets = newBudgets.filter(b => b !== budgetId);
    } else {
      newBudgets.push(budgetId);
    }
    setSelectedBudgets(newBudgets);
  };

  const handleClearFilters = () => {
    setSelectedCategories(['all']);
    setSelectedBudgets([]);
    setSearchQuery('');
  };

  const baseItems = 
    activeTab === 'contract-awards' 
      ? MOCK_AWARDS 
      : activeTab === 'closed'
        ? MOCK_OPPORTUNITIES.filter(o => o.status === 'Closed')
        : MOCK_OPPORTUNITIES.filter(o => o.status === 'Open');

  const filteredItems = baseItems.filter(item => {
    // 1. Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!item.title.toLowerCase().includes(query) && !item.id.toLowerCase().includes(query)) {
        return false;
      }
    }

    // 2. Category filter
    if (!selectedCategories.includes('all') && selectedCategories.length > 0) {
      const itemCatId = categories.find(c => c.label === item.category)?.id;
      if (!itemCatId || !selectedCategories.includes(itemCatId)) {
        return false;
      }
    }

    // 3. Budget filter
    if (selectedBudgets.length > 0) {
      if (!('budget' in item) || !item.budget) return false;
      let matchesBudget = false;
      const cleanBudget = item.budget.replace(/,/g, '');
      const numMatches = cleanBudget.match(/\d+/g);
      
      if (numMatches) {
        const minBudget = parseInt(numMatches[0], 10);
        const maxBudget = numMatches.length > 1 ? parseInt(numMatches[1], 10) : minBudget;
        
        // range1: 1 - 30,000
        if (selectedBudgets.includes('range1') && minBudget <= 30000) matchesBudget = true;
        // range2: 30,001 - 150,000
        if (selectedBudgets.includes('range2') && (maxBudget > 30000 && minBudget <= 150000)) matchesBudget = true;
        // range3: 150,001 and above
        if (selectedBudgets.includes('range3') && maxBudget > 150000) matchesBudget = true;
      }
      
      if (!matchesBudget) return false;
    }

    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1 className={styles.title}>{dict.title}</h1>
            <p className={styles.subtitle}>{dict.subtitle}</p>
          </div>
          <button className={styles.postBtn} onClick={() => setIsPostModalOpen(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            {dict.postBtn}
          </button>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.sidebarCol}>
          <ProcurementSidebar 
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
            selectedBudgets={selectedBudgets}
            onBudgetToggle={handleBudgetToggle}
            onClearFilters={handleClearFilters}
            dict={dict.sidebar}
          />
        </div>
        
        <div className={styles.mainCol}>
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              placeholder={dict.searchPlaceholder}
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'open' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('open')}
            >
              {dict.tabs.open}
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'closed' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('closed')}
            >
              {dict.tabs.closed}
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'contract-awards' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('contract-awards')}
            >
              {dict.tabs.awards}
            </button>
          </div>

          <div className={styles.list}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <OpportunityCard
                  key={item.id}
                  dict={dict}
                  {...item}
                />
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>{dict.emptyState}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isPostModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsPostModalOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{dict.postModal.title}</h3>
              <button className={styles.closeBtn} onClick={() => setIsPostModalOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className={styles.modalBody}>
              <form onSubmit={e => { e.preventDefault(); alert(dict.postModal.successMsg); setIsPostModalOpen(false); }}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>{dict.postModal.refLabel}</label>
                    <input type="text" placeholder={dict.postModal.refPlaceholder} required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>{dict.postModal.catLabel}</label>
                    <select required className={styles.select}>
                      <option value="">{dict.postModal.catSelect}</option>
                      {categories.filter(c => c.id !== 'all').map(c => (
                        <option key={c.id} value={c.id}>{
                          c.id === 'consultancy' ? dict.sidebar.categories.consultancy :
                          c.id === 'network-equipment' ? dict.sidebar.categories.networkEquipment :
                          c.id === 'software-development' ? dict.sidebar.categories.softwareDevelopment :
                          c.id === 'connectivity-links' ? dict.sidebar.categories.connectivityLinks :
                          c.id === 'climate-services' ? dict.sidebar.categories.climateServices :
                          dict.sidebar.categories.otherServices
                        }</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{dict.postModal.titleLabel}</label>
                  <input type="text" placeholder={dict.postModal.titlePlaceholder} required className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{dict.postModal.descLabel}</label>
                  <textarea placeholder={dict.postModal.descPlaceholder} required className={styles.textarea} rows={4}></textarea>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>{dict.postModal.budgetLabel}</label>
                    <input type="text" placeholder={dict.postModal.budgetPlaceholder} className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>{dict.postModal.deadlineLabel}</label>
                    <input type="date" required className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{dict.postModal.fileLabel}</label>
                  <input type="file" multiple accept=".pdf,.zip,.doc,.docx" className={styles.fileInput} />
                </div>

                <div className={styles.modalFooter}>
                  <button type="button" className={styles.cancelBtn} onClick={() => setIsPostModalOpen(false)}>{dict.postModal.cancelBtn}</button>
                  <button type="submit" className={styles.submitBtn}>{dict.postModal.submitBtn}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface ProcurementClientProps {
  dict: any;
}

export default function ProcurementClient({ dict }: ProcurementClientProps) {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading opportunities...</div>}>
      <ProcurementContent dict={dict} />
    </Suspense>
  );
}
