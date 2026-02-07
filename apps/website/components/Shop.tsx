"use client";

import React from 'react';
import { useConfig, GlassCard, Button } from 'ui';
import { DICTIONARY } from 'shared';
import { MOCK_PRODUCTS } from 'shared'; 
import { ShoppingCart, Tag } from 'lucide-react';

export const Shop: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(price);
  };

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24">
      <div className="pt-12 pb-16 px-4 relative overflow-hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
         <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">
              {text.shopTitle}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {text.shopSub}
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <GlassCard key={product.id} hoverEffect className="group flex flex-col h-full bg-white dark:bg-zinc-900/40">
              <div className="relative aspect-video overflow-hidden rounded-t-xl bg-zinc-100 dark:bg-zinc-800">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.tag && (
                  <div className="absolute top-3 right-3 bg-brand-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg flex items-center gap-1">
                    <Tag size={10} /> {product.tag}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-brand-600 dark:text-brand-500 font-mono font-bold text-lg">
                    {formatPrice(product.price)}
                  </p>
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-1">
                  {product.desc}
                </p>

                <Button fullWidth className="group/btn">
                  <ShoppingCart size={18} className="mr-2 group-hover/btn:animate-bounce" />
                  {text.shopBtnOrder}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};