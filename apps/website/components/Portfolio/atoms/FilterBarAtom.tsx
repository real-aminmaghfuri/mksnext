
"use client";
import React from 'react';
import { LayoutGrid, Monitor, HardDrive } from 'lucide-react';
import { PortfolioCategory } from '../types';

interface FilterBarProps {
  filters: {
    all: string;
    physical: string;
    digital: string;
  };
  activeCategory: PortfolioCategory;
  onFilterChange: (cat: PortfolioCategory) => void;
}

export const FilterBarAtom: React.FC<FilterBarProps> = ({ filters, activeCategory, onFilterChange }) => {
  
  const btnClass = (isActive: boolean) => `
    flex items-center gap-2 px-6 py-4 rounded-full text-sm font-bold transition-all duration-300 border
    ${isActive 
      ? 'bg-brand-600 text-white border-brand-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
      : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-300'
    }
  `;

  return (
    <div className="container mx-auto px-6 mb-16 relative z-10 mt-12">
      <div className="flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => onFilterChange('ALL')}
          className={btnClass(activeCategory === 'ALL')}
        >
          <LayoutGrid size={16} /> {filters.all}
        </button>
        <button 
           onClick={() => onFilterChange('PHYSICAL')}
           className={btnClass(activeCategory === 'PHYSICAL')}
        >
          <HardDrive size={16} /> {filters.physical}
        </button>
        <button 
           onClick={() => onFilterChange('DIGITAL')}
           className={btnClass(activeCategory === 'DIGITAL')}
        >
          <Monitor size={16} /> {filters.digital}
        </button>
      </div>
    </div>
  );
};
