
"use client";
import React from 'react';
import { Button } from 'ui';
import { ShoppingCart, MessageCircle, Tag, Zap } from 'lucide-react';

interface ActionsProps {
  productName: string;
  category: string;
  price: string;
  waLink: (type: 'BUY' | 'NEGO') => string;
  text: any;
}

export const ProductActionsAtom: React.FC<ActionsProps> = ({ productName, category, price, waLink, text }) => {
  return (
    <div className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 p-6 sticky bottom-0 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
       
       <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* LEFT COL: Product Info (Title, Badge, Price) */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-2">
             {/* Badge */}
             <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-[10px] font-black uppercase tracking-widest rounded-md">
                   <Tag size={10} /> {category}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-md">
                   <Zap size={10} /> READY STOCK
                </span>
             </div>

             {/* Title */}
             <h1 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-[0.9]">
                {productName}
             </h1>

             {/* Price - New Compact Layout */}
             <div className="flex items-baseline gap-2 mt-1">
                <p className="text-3xl md:text-4xl font-mono font-black text-brand-600 dark:text-brand-500 tracking-tight">
                   {price}
                </p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest transform -translate-y-1">{text.prodPriceLabel}</p>
             </div>
          </div>

          {/* RIGHT COL: Buttons (Vertical Stack) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-2">
             {/* Primary: Buy */}
             <a href={waLink('BUY')} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button fullWidth className="h-12 bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 font-black uppercase tracking-widest text-sm rounded-xl shadow-none hover:shadow-none border-0">
                   <ShoppingCart size={18} className="mr-2" /> {text.prodBtnBuy}
                </Button>
             </a>

             {/* Secondary: Nego */}
             <a href={waLink('NEGO')} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="ghost" fullWidth className="h-10 font-bold uppercase tracking-widest text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl">
                   <MessageCircle size={16} className="mr-2" /> {text.prodBtnNego}
                </Button>
             </a>
          </div>

       </div>
    </div>
  );
};
