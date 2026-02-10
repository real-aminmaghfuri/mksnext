
"use client";
import React from 'react';
import { ProductItem } from 'shared';
import { Tag, ShoppingBag, ChevronRight, Zap } from 'lucide-react';
import { GlassCard } from 'ui';

interface RightSidebarProps {
  categories: string[];
  products: ProductItem[];
}

export const ArticleRightSidebarAtom: React.FC<RightSidebarProps> = ({ categories, products }) => {
  return (
    <div className="space-y-8"> {/* Reduced spacing from 12 to 8 */}
       
       {/* Categories */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
             <Tag size={14} /> Kategori Intel
          </h4>
          <div className="flex flex-col gap-1">
             {categories.map((cat, idx) => (
                <button 
                   key={idx} 
                   className="flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all group"
                >
                   {/* Standardized text to text-xs/sm for better readability */}
                   <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 uppercase tracking-wide">
                      {cat}
                   </span>
                   <ChevronRight size={14} className="text-zinc-300 group-hover:text-brand-500 transition-colors" />
                </button>
             ))}
          </div>
       </div>

       {/* Supply Drop */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
             <ShoppingBag size={14} /> Supply Drop
          </h4>
          <div className="space-y-3">
             {products.map((product) => (
                <GlassCard key={product.id} variant="solid" hoverEffect className="p-2.5 flex gap-3 items-center bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 cursor-pointer group">
                   
                   {/* Thumbnail */}
                   <div className="w-12 h-12 rounded-md bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0 relative border border-zinc-100 dark:border-zinc-700">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                   </div>
                   
                   {/* Content */}
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 line-clamp-1 leading-tight mb-1 group-hover:text-brand-600 transition-colors">
                            {product.name}
                        </h5>
                        <Zap size={10} className="text-zinc-300 group-hover:text-brand-500" />
                      </div>
                      <p className="text-brand-600 dark:text-brand-500 font-mono text-xs font-black">
                        IDR {product.price.toLocaleString()}
                      </p>
                   </div>

                </GlassCard>
             ))}
          </div>
       </div>

    </div>
  );
};
