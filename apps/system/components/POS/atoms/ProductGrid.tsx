
"use client";

import React from 'react';
import { Product } from 'data';
import { GlassCard } from 'ui';
import { Plus } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onAdd: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onAdd }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <GlassCard 
          key={product.id} 
          variant="solid" 
          className="p-4 flex flex-col justify-between hover:border-brand-500/50 transition-all cursor-pointer group active:scale-95"
          onClick={() => onAdd(product)}
        >
          <div>
            <div className="w-full aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
               <span className="text-zinc-400 font-black text-2xl opacity-20">{product.sku}</span>
               <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/10 transition-colors" />
            </div>
            <h3 className="text-xs font-black uppercase tracking-tight line-clamp-2 mb-1">{product.name}</h3>
            <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">{product.category}</p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-sm font-black text-brand-600 dark:text-brand-500">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(product.price)}
            </p>
            <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <Plus size={16} />
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
};
