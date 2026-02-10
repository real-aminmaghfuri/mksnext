
"use client";
import React from 'react';
import { ShopCategory } from '../types';
import { LayoutGrid, Smartphone, Monitor, Mouse } from 'lucide-react';

interface ShopFilterProps {
  activeCategory: ShopCategory;
  onFilterChange: (cat: ShopCategory) => void;
}

export const ShopFilterAtom: React.FC<ShopFilterProps> = ({ activeCategory, onFilterChange }) => {
  
  const buttons: { id: ShopCategory; label: string; icon: any }[] = [
    { id: 'ALL', label: 'SEMUA ARSENAL', icon: LayoutGrid },
    { id: 'ANDROID', label: 'POS ANDROID', icon: Smartphone },
    { id: 'PC', label: 'DESKTOP HQ', icon: Monitor },
    { id: 'PERIPHERALS', label: 'AKSESORIS', icon: Mouse },
  ];

  return (
    <div className="container mx-auto px-6 mb-12 sticky top-24 z-30">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-2 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg md:inline-flex md:left-1/2 md:relative md:-translate-x-1/2">
        {buttons.map((btn) => {
          const Icon = btn.icon;
          const isActive = activeCategory === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => onFilterChange(btn.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wide transition-all duration-300
                ${isActive 
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25 scale-105' 
                  : 'bg-transparent text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
                }
              `}
            >
              <Icon size={14} strokeWidth={isActive ? 2.5 : 2} />
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
