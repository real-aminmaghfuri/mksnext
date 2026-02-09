
"use client";
import React, { useState } from 'react';
import { Search, Tag, ShoppingBag, ChevronDown, ChevronRight, Layers, Cpu, Briefcase } from 'lucide-react';
import { GlassCard } from 'ui';
import { ProductItem } from 'shared';

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  products: ProductItem[];
  text: {
    searchPlaceholder: string;
    sidebarTitle: string;
    productTitle: string;
  };
}

// Helper to Map Flat Data to Hierarchy for UI
// In a real app, this might come from the DB, but here we structure the mocks.
const CATEGORY_TREE = [
  {
    id: 'MAIN_ALL',
    label: 'SEMUA ARSIP',
    icon: Layers,
    subs: ['ALL']
  },
  {
    id: 'MAIN_BIZ',
    label: 'STRATEGI BISNIS',
    icon: Briefcase,
    subs: ['MARKETING', 'MANAJEMEN']
  },
  {
    id: 'MAIN_TECH',
    label: 'TEKNOLOGI & ALAT',
    icon: Cpu,
    subs: ['TEKNIS']
  }
];

export const SidebarAtom: React.FC<SidebarProps> = ({ categories, activeCategory, onCategoryChange, products, text }) => {
  
  // Accordion State: Default open 'MAIN_BIZ' or based on active
  const [expandedSection, setExpandedSection] = useState<string | null>('MAIN_BIZ');

  const toggleSection = (id: string) => {
    setExpandedSection(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-8 sticky top-24">
       {/* Search */}
       <div className="relative">
          <input 
             type="text" 
             placeholder={text.searchPlaceholder}
             className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm font-bold focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
       </div>

       {/* Categories Accordion */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">
             <Tag size={14} /> {text.sidebarTitle}
          </h4>
          
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
            {CATEGORY_TREE.map((section) => {
              const Icon = section.icon;
              const isOpen = expandedSection === section.id;
              
              // Special case for "ALL" which acts like a button, not an accordion
              if (section.id === 'MAIN_ALL') {
                 const isActive = activeCategory === 'ALL';
                 return (
                    <button 
                        key={section.id}
                        onClick={() => {
                            onCategoryChange('ALL');
                            setExpandedSection(null); // Close others
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
                  {/* Main Category Header */}
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

                  {/* Sub Categories */}
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
       </div>

       {/* Products Widget */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">
             <ShoppingBag size={14} /> {text.productTitle}
          </h4>
          <div className="space-y-4">
             {products.map(product => (
                <GlassCard key={product.id} variant="solid" hoverEffect className="p-4 flex gap-4 items-center bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                   <div className="w-16 h-16 rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h5 className="font-bold text-sm text-zinc-900 dark:text-white line-clamp-1 mb-1">{product.name}</h5>
                      <p className="text-brand-600 dark:text-brand-500 font-mono text-xs font-black">IDR {product.price.toLocaleString()}</p>
                   </div>
                </GlassCard>
             ))}
          </div>
       </div>
    </div>
  );
};
