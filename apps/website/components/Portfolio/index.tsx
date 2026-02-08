
"use client";

import React from 'react';
import { usePortfolio } from './usePortfolio';
import { PortfolioHeaderAtom } from './atoms/PortfolioHeaderAtom';
import { FilterBarAtom } from './atoms/FilterBarAtom';
import { ProjectGridAtom } from './atoms/ProjectGridAtom';
import { PortfolioCtaAtom } from './atoms/PortfolioCtaAtom';
import { Button } from 'ui';
import { RefreshCw } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { content, activeCategory, setActiveCategory, filteredItems, hasMore, loadMore } = usePortfolio();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      <PortfolioHeaderAtom 
        heading={content.heading}
        headingSpan={content.headingSpan}
        sub={content.sub}
      />
      
      <FilterBarAtom 
        filters={content.filters}
        activeCategory={activeCategory}
        onFilterChange={setActiveCategory}
      />

      <ProjectGridAtom 
        items={filteredItems}
        viewText={content.viewCaseText}
      />

      {/* Lazy Loading Button */}
      {hasMore && (
        <div className="flex justify-center mb-24 -mt-10 relative z-10">
          <Button 
            onClick={loadMore} 
            variant="ghost" 
            className="border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:border-brand-500 text-zinc-600 dark:text-zinc-400 hover:text-brand-600 font-bold uppercase tracking-widest px-8 py-3 rounded-full"
          >
            <RefreshCw size={16} className="mr-2" />
            LOAD MORE ARSENAL
          </Button>
        </div>
      )}

      <PortfolioCtaAtom 
        title={content.cta.title}
        sub={content.cta.sub}
        btnText={content.cta.btn}
      />
    </section>
  );
};
