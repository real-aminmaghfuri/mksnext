
"use client";
import React from 'react';
import { ProductItem } from 'shared';
import { ShoppingBag, Zap } from 'lucide-react';
import { GlassCard } from 'ui';

interface SupplyDropProps {
  products: ProductItem[];
}

export const ArticleSupplyDropAtom: React.FC<SupplyDropProps> = ({ products }) => {
  return (
    <div className="hidden lg:block mt-10">
        <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-3">
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
  );
};
