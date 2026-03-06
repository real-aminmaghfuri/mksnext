
"use client";
import React from 'react';
import { useDownloadCenter } from './hooks/useDownloadCenter';
import { DownloadHeaderAtom } from './atoms/DownloadHeaderAtom';
import { DownloadGridAtom } from './atoms/DownloadGridAtom';

export const DownloadCenter: React.FC = () => {
  const logic = useDownloadCenter();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      <DownloadHeaderAtom 
        heading={logic.heading}
        sub={logic.sub}
      />
      
      <DownloadGridAtom 
        searchPlaceholder={logic.searchPlaceholder}
        searchQuery={logic.searchQuery}
        setSearchQuery={logic.setSearchQuery}
        categories={logic.categories}
        selectedCategory={logic.selectedCategory}
        setSelectedCategory={logic.setSelectedCategory}
        tableHeaders={logic.tableHeaders}
        items={logic.filteredItems}
      />
    </section>
  );
};
