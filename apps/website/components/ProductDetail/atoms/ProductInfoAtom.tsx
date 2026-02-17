
"use client";
import React from 'react';
import { ProductItem } from 'shared';
import { Scale, Ruler, Box, Sparkles } from 'lucide-react';

interface InfoProps {
  product: ProductItem;
  text: any;
}

export const ProductInfoAtom: React.FC<InfoProps> = ({ product, text }) => {
  return (
    <div className="p-8 lg:p-12 space-y-10">
       
       {/* Tech Specs Bar */}
       <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
             <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Scale size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">{text.prodWeight}</span>
             </div>
             <p className="font-bold text-zinc-900 dark:text-white">{product.weight}</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
             <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <Ruler size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">{text.prodDim}</span>
             </div>
             <p className="font-bold text-zinc-900 dark:text-white">{product.dimensions}</p>
          </div>
       </div>

       {/* Narrative Review */}
       <div>
          <h3 className="flex items-center gap-2 text-sm font-black text-brand-600 uppercase tracking-widest mb-4">
             <Sparkles size={16} /> {text.prodWorth}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base font-medium">
             {product.review}
          </p>
       </div>

       {/* Divider */}
       <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full" />

       {/* Specs List */}
       <div>
          <h3 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
             {text.prodSpecs}
          </h3>
          <ul className="space-y-3">
             {product.specs.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                   {spec}
                </li>
             ))}
          </ul>
       </div>

       {/* In The Box */}
       <div>
          <h3 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
             {text.prodInBox}
          </h3>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
             <ul className="space-y-3">
                {product.inBox.map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-bold">
                      <Box size={16} className="text-brand-500" />
                      {item}
                   </li>
                ))}
             </ul>
          </div>
       </div>

       {/* Bottom Spacer for Mobile Scroll */}
       <div className="h-24 lg:hidden" />
    </div>
  );
};