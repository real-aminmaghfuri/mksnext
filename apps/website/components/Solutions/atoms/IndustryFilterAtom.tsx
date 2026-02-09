
"use client";
import React from 'react';
import { FilterType } from '../types';
import { ShoppingBag, Coffee, Scissors, Activity, Factory, GraduationCap, LayoutGrid } from 'lucide-react';

interface IndustryFilterProps {
  filters: {
    all: string;
    retail: string;
    fnb: string;
    services: string;
    health: string;
    corp: string;
    edu: string;
  };
  activeFilter: FilterType;
  onFilterChange: (tag: FilterType) => void;
}

export const IndustryFilterAtom: React.FC<IndustryFilterProps> = ({ filters, activeFilter, onFilterChange }) => {
  
  const filterItems: { id: FilterType; label: string; icon: any }[] = [
    { id: 'ALL', label: filters.all, icon: LayoutGrid },
    { id: 'RETAIL', label: filters.retail, icon: ShoppingBag },
    { id: 'FNB', label: filters.fnb, icon: Coffee },
    { id: 'SERVICES', label: filters.services, icon: Scissors },
    { id: 'HEALTH', label: filters.health, icon: Activity },
    { id: 'CORP', label: filters.corp, icon: Factory },
    { id: 'EDU', label: filters.edu, icon: GraduationCap },
  ];

  return (
    <div className="sticky top-20 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6 py-4 overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-3 min-w-max md:justify-center">
           {filterItems.map((item) => {
             const Icon = item.icon;
             const isActive = activeFilter === item.id;
             
             return (
               <button
                 key={item.id}
                 onClick={() => onFilterChange(item.id)}
                 className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-300 border
                    ${isActive 
                      ? 'bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-500/25 scale-105' 
                      : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }
                 `}
               >
                 <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                 {item.label}
               </button>
             );
           })}
        </div>
      </div>
    </div>
  );
};
