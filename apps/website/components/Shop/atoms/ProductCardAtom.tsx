
"use client";
import React from 'react';
import { GlassCard, Button } from 'ui';
import { ShoppingCart, Tag } from 'lucide-react';
import { ProductItem } from 'shared';

interface ProductCardProps {
  product: ProductItem;
  btnText: string;
  formattedPrice: string;
}

export const ProductCardAtom: React.FC<ProductCardProps> = ({ product, btnText, formattedPrice }) => {
  return (
    <GlassCard hoverEffect className="group flex flex-col h-full bg-white dark:bg-zinc-900/40">
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
            {formattedPrice}
          </p>
        </div>
        
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-1">
          {product.desc}
        </p>

        <Button fullWidth className="group/btn">
          <ShoppingCart size={18} className="mr-2 group-hover/btn:animate-bounce" />
          {btnText}
        </Button>
      </div>
    </GlassCard>
  );
};
