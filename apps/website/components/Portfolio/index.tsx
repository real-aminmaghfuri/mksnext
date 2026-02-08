
"use client";

import React from 'react';
import { usePortfolio } from './usePortfolio';
import { PortfolioHeaderAtom } from './atoms/PortfolioHeaderAtom';
import { FilterBarAtom } from './atoms/FilterBarAtom';
import { ProjectGridAtom } from './atoms/ProjectGridAtom';
import { PortfolioCtaAtom } from './atoms/PortfolioCtaAtom';

export const Portfolio: React.FC = () => {
  const { content, activeCategory, setActiveCategory, filteredItems } = usePortfolio();

  return (
    <section className="min-h-screen bg-black transition-colors duration-500">
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

      <PortfolioCtaAtom 
        title={content.cta.title}
        sub={content.cta.sub}
        btnText={content.cta.btn}
      />
    </section>
  );
};
