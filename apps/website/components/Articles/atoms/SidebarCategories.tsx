
"use client";
import React, { useState, useMemo } from 'react';
import { Tag, ChevronDown, ChevronRight, Layers, Cpu, Briefcase } from 'lucide-react';

interface SidebarCategoriesProps {
  text: {
    sidebarTitle: string;
    catAll: string;
    catBiz: string;
    catTech: string;
  };
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export const SidebarCategories: React.FC<SidebarCategoriesProps> = ({ text, activeCategory, onCategoryChange }) => {
  const categoryTree = useMemo(() => [
    {
      id: 'MAIN_ALL',
      label: text.catAll,
      icon: Layers,
      subs: ['ALL']
    },
    {
      id: 'MAIN_BIZ',
      label: text.catBiz,
      icon: Briefcase,
      subs: ['MARKETING', 'MANAJEMEN']
    },
    {
      id: 'MAIN_TECH',
      label: text.catTech,
      icon: Cpu,
      subs: ['TEKNIS']
    }
  ], [text]);

  const [expandedSection, setExpandedSection] = useState<string | null>('MAIN_BIZ');

  const toggleSection = (id: string) => {
    setExpandedSection(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
        {categoryTree.map((section) => {
          const Icon = section.icon;
          const isOpen = expandedSection === section.id;
          
          if (section.id === 'MAIN_ALL') {
             const isActive = activeCategory === 'ALL';
             return (
                <button 
                    key={section.id}
                    onClick={() => {
                        onCategoryChange('ALL');
                        setExpandedSection(null);
                    }}
                    className={`w-full flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800 transition-colors
                        ${isActive ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300'}
                    `}
                >
                    <div className="flex items-center gap-3">
                        <Icon size={18} strokeWidth={2} />
                        <span className="text-xs font-black uppercase tracking-wide">{section.label}</span>
                    </div>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                </button>
             );
          }

          return (
            <div key={section.id} className="border-b border-zinc-100 dark:border-zinc-800 last:border-0">
              <button 
                onClick={() => toggleSection(section.id)}
                className={`w-full flex items-center justify-between p-4 transition-colors
                    ${isOpen ? 'bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/30 text-zinc-600 dark:text-zinc-400'}
                `}
              >
                 <div className="flex items-center gap-3">
                    <Icon size={18} strokeWidth={2} />
                    <span className="text-xs font-black uppercase tracking-wide">{section.label}</span>
                 </div>
                 <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                 <div className="bg-zinc-50/50 dark:bg-black/20 pb-2">
                    {section.subs.map((subCat) => {
                       const isActive = activeCategory === subCat;
                       return (
                         <button
                            key={subCat}
                            onClick={() => onCategoryChange(subCat)}
                            className={`w-full flex items-center gap-3 py-2.5 pl-12 pr-4 text-xs font-bold transition-all relative
                                ${isActive 
                                    ? 'text-brand-600 dark:text-brand-500' 
                                    : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}
                            `}
                         >
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-brand-500" />
                            )}
                            {isActive ? <ChevronRight size={12} /> : <div className="w-3" />}
                            {subCat}
                         </button>
                       );
                    })}
                 </div>
              </div>
            </div>
          );
        })}
      </div>
  );
};
