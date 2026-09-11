'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProcurementSidebar, { categories } from '../../components/ProcurementSidebar';
import OpportunityCard from '../../components/OpportunityCard';
import styles from './page.module.css';

import { MOCK_OPPORTUNITIES, MOCK_AWARDS } from '../../data/procurement';

function ProcurementContent() {
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
            <h1 className={styles.title}>Procurement Opportunities</h1>
            <p className={styles.subtitle}>View and filter current tenders and contract awards.</p>
          </div>
          <button className={styles.postBtn} onClick={() => setIsPostModalOpen(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Post Opportunity
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
          />
        </div>
        
        <div className={styles.mainCol}>
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              placeholder="Search by keyword, reference number..." 
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
              Open Opportunities
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'closed' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('closed')}
            >
              Closed Opportunities
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'contract-awards' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('contract-awards')}
            >
              Contract Awards
            </button>
          </div>

          <div className={styles.list}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <OpportunityCard
                  key={item.id}
                  {...item}
                />
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>No opportunities found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isPostModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsPostModalOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Post New Opportunity</h3>
              <button className={styles.closeBtn} onClick={() => setIsPostModalOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className={styles.modalBody}>
              <form onSubmit={e => { e.preventDefault(); alert('Opportunity Posted successfully!'); setIsPostModalOpen(false); }}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Reference Number</label>
                    <input type="text" placeholder="WACREN-202X-001" required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Category</label>
                    <select required className={styles.select}>
                      <option value="">Select category</option>
                      {categories.filter(c => c.id !== 'all').map(c => (
                        <option key={c.id} value={c.id}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Title</label>
                  <input type="text" placeholder="e.g. Supply of Fiber Optic Cables" required className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Description</label>
                  <textarea placeholder="Detailed description of the opportunity..." required className={styles.textarea} rows={4}></textarea>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Budget Range</label>
                    <input type="text" placeholder="e.g. $10k - $50k" className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Deadline</label>
                    <input type="date" required className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Upload Documents (PDF, ZIP, DOCX)</label>
                  <input type="file" multiple accept=".pdf,.zip,.doc,.docx" className={styles.fileInput} />
                </div>

                <div className={styles.modalFooter}>
                  <button type="button" className={styles.cancelBtn} onClick={() => setIsPostModalOpen(false)}>Cancel</button>
                  <button type="submit" className={styles.submitBtn}>Create Opportunity</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProcurementPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading opportunities...</div>}>
      <ProcurementContent />
    </Suspense>
  );
}
