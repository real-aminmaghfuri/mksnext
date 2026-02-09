
"use client";

import React from 'react';
import { useSolutions } from './useSolutions';
import { SolutionsHeaderAtom } from './atoms/SolutionsHeaderAtom';
import { IndustryFilterAtom } from './atoms/IndustryFilterAtom';
import { SolutionGridAtom } from './atoms/SolutionGridAtom';
import { SolutionsCtaAtom } from './atoms/SolutionsCtaAtom';

export const Solutions: React.FC = () => {
  const { content, activeFilter, setFilter, filteredSolutions } = useSolutions();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      
      <SolutionsHeaderAtom 
        badge={content.header.badge}
        title={content.header.title}
        subtitle={content.header.subtitle}
      />

      <IndustryFilterAtom 
        filters={content.filters}
        activeFilter={activeFilter}
        onFilterChange={setFilter}
      />

      <SolutionGridAtom solutions={filteredSolutions} />

      <SolutionsCtaAtom 
        title={content.cta.title}
        desc={content.cta.desc}
        btn={content.cta.btn}
      />

    </section>
  );
};
