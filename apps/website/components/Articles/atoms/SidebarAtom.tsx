
"use client";
import React from 'react';
import { Search, Tag, ShoppingBag } from 'lucide-react';
import { GlassCard } from 'ui';
import { ProductItem } from 'shared';
import { SidebarCategories } from './SidebarCategories';
import Image from 'next/image';

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  products: ProductItem[];
  text: {
    searchPlaceholder: string;
    sidebarTitle: string;
    productTitle: string;
    catAll: string;
    catBiz: string;
    catTech: string;
  };
}

export const SidebarAtom: React.FC<SidebarProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  searchQuery,
  onSearchChange,
  products, 
  text 
}) => {
  return (
    <div className="space-y-8 sticky top-24">
       {/* Search */}
       <div className="relative">
          <input 
             type="text" 
             placeholder={text.searchPlaceholder}
             value={searchQuery}
             onChange={(e) => onSearchChange(e.target.value)}
             className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm font-bold focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
       </div>

       {/* Categories Accordion */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">
             <Tag size={14} /> {text.sidebarTitle}
          </h4>
          <SidebarCategories 
            categories={categories}
            text={text}
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
       </div>

       {/* Products Widget */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">
             <ShoppingBag size={14} /> {text.productTitle}
          </h4>
          <div className="space-y-4">
             {products.map(product => (
                <GlassCard key={product.id} variant="solid" hoverEffect className="p-4 flex gap-4 items-center bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                   <div className="w-16 h-16 rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0 relative">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill
                        sizes="64px"
                        className="object-cover" 
                      />
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