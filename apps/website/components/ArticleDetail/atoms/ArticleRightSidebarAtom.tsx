
"use client";
import React from 'react';
import { ProductItem } from 'shared';
import { Tag, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { GlassCard } from 'ui';

interface RightSidebarProps {
  categories: string[];
  products: ProductItem[];
}

export const ArticleRightSidebarAtom: React.FC<RightSidebarProps> = ({ categories, products }) => {
  return (
    <div className="sticky top-32 space-y-12">
       
       {/* Categories */}
       <div>
          <h4 className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">
             <Tag size={14} /> Kategori Intel
          </h4>
          <div className="flex flex-wrap gap-2">
             {categories.map((cat, idx) => (
                <span 
                   key={idx} 
                   className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide hover:border-brand-500 hover:text-brand-500 cursor-pointer transition-all"
                >
                   {cat}
                </span>
             ))}
          </div>
       </div>

       {/* Random Supply Drop */}
       <div>
          <h4 className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">
             <ShoppingBag size={14} /> Supply Drop
          </h4>
          <div className="space-y-4">
             {products.map((product) => (
                <GlassCard key={product.id} variant="solid" hoverEffect className="p-0 overflow-hidden bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 group cursor-pointer">
                   <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 bg-brand-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded">
                         HOT
                      </div>
                   </div>
                   <div className="p-4">
                      <h5 className="font-bold text-xs text-zinc-900 dark:text-white line-clamp-2 mb-2 leading-tight group-hover:text-brand-600 transition-colors">
                         {product.name}
                      </h5>
                      <div className="flex justify-between items-center">
                         <span className="text-zinc-500 text-[10px] font-mono">IDR {product.price.toLocaleString()}</span>
                         <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-brand-500" />
                      </div>
                   </div>
                </GlassCard>
             ))}
          </div>
       </div>

    </div>
  );
};
