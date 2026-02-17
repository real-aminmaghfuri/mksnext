
"use client";
import React from 'react';
import { Button } from 'ui';
import { ShoppingCart, MessageCircle } from 'lucide-react';

interface ActionsProps {
  price: string;
  waLink: (type: 'BUY' | 'NEGO') => string;
  text: any;
}

export const ProductActionsAtom: React.FC<ActionsProps> = ({ price, waLink, text }) => {
  return (
    <div className="p-6 lg:p-8 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 sticky bottom-0 z-20">
       <div className="flex items-end justify-between mb-6">
          <div>
             <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{text.prodPriceLabel}</p>
             <p className="text-3xl font-black text-brand-600 dark:text-brand-500 font-mono tracking-tight">{price}</p>
          </div>
       </div>
       
       <div className="flex gap-4">
          <a href={waLink('NEGO')} target="_blank" rel="noopener noreferrer" className="flex-1">
             <Button variant="outline" fullWidth className="h-14 font-black uppercase tracking-widest border-2">
                <MessageCircle size={18} className="mr-2" /> {text.prodBtnNego}
             </Button>
          </a>
          <a href={waLink('BUY')} target="_blank" rel="noopener noreferrer" className="flex-[2]">
             <Button fullWidth className="h-14 bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 shadow-xl shadow-brand-500/20 font-black uppercase tracking-widest text-lg">
                <ShoppingCart size={20} className="mr-2" /> {text.prodBtnBuy}
             </Button>
          </a>
       </div>
    </div>
  );
};