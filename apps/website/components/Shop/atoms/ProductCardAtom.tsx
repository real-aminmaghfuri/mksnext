"use client";
import React from 'react';
import { GlassCard, Button } from 'ui';
import { ShoppingCart, Tag, Smartphone, Monitor, Mouse } from 'lucide-react';
import { ProductItem } from 'shared';
import Image from 'next/image';

interface ProductCardProps {
  product: ProductItem;
  btnText: string;
  formattedPrice: string;
  waLink: string;
}

export const ProductCardAtom: React.FC<ProductCardProps> = ({ product, btnText, formattedPrice, waLink }) => {
  
  const getCategoryIcon = () => {
    switch(product.category) {
      case 'ANDROID': return <Smartphone size={12} />;
      case 'PC': return <Monitor size={12} />;
      case 'PERIPHERALS': return <Mouse size={12} />;
      default: return <Tag size={12} />;
    }
  };

  return (
    <GlassCard hoverEffect className="group flex flex-col h-full bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800">
      {/* Image Area - Using Contain to show full product */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-white p-6 flex items-center justify-center border-b border-zinc-100 dark:border-zinc-800">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 z-10">
           {getCategoryIcon()} {product.category}
        </div>

        {/* Promo Tag */}
        {product.tag && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg flex items-center gap-1 animate-pulse z-10">
            <Tag size={10} /> {product.tag}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-1 leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-brand-600 dark:text-brand-500 font-mono font-bold text-xl">
            {formattedPrice}
          </p>
        </div>
        
        <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-1 font-medium leading-relaxed">
          {product.desc}
        </p>

        {/* Action Button: Opens WA Link */}
        <a href={waLink} target="_blank" rel="noopener noreferrer">
          <Button fullWidth className="group/btn shadow-brand-500/20">
            <ShoppingCart size={18} className="mr-2 group-hover/btn:animate-bounce" />
            {btnText}
          </Button>
        </a>
      </div>
    </GlassCard>
  );
};