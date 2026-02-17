
"use client";
import React from 'react';
import { ProductItem } from 'shared';
import { Scale, Ruler, Box, Sparkles, FileText } from 'lucide-react';

interface InfoProps {
  product: ProductItem;
  text: any;
}

export const ProductInfoAtom: React.FC<InfoProps> = ({ product, text }) => {
  return (
    <div className="p-8 lg:p-12 space-y-12">
       
       {/* Narrative Review */}
       <div>
          <h3 className="flex items-center gap-2 text-xs font-black text-brand-600 uppercase tracking-widest mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-4">
             <Sparkles size={14} /> {text.prodWorth}
          </h3>
          <article className="prose dark:prose-invert">
            <p className="text-zinc-600 dark:text-zinc-300 leading-loose text-base md:text-lg font-medium">
                {product.review}
            </p>
          </article>
       </div>

       {/* Tech Specs Bar */}
       <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
             <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <Scale size={14} /> <span className="text-[9px] font-black uppercase tracking-widest">{text.prodWeight}</span>
             </div>
             <p className="font-bold text-lg text-zinc-900 dark:text-white">{product.weight}</p>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
             <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <Ruler size={14} /> <span className="text-[9px] font-black uppercase tracking-widest">{text.prodDim}</span>
             </div>
             <p className="font-bold text-lg text-zinc-900 dark:text-white">{product.dimensions}</p>
          </div>
       </div>

       {/* Specs List */}
       <div>
          {/* UPDATED: Color changed to text-brand-600 to match top section */}
          <h3 className="flex items-center gap-2 text-xs font-black text-brand-600 uppercase tracking-widest mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-4">
             <FileText size={14} /> {text.prodSpecs}
          </h3>
          <ul className="space-y-4">
             {product.specs.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm text-zinc-700 dark:text-zinc-300 font-bold group">
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-2 shrink-0 group-hover:bg-brand-500 transition-colors" />
                   {spec}
                </li>
             ))}
          </ul>
       </div>

       {/* In The Box */}
       <div>
          {/* UPDATED: Color changed to text-brand-600 to match top section */}
          <h3 className="flex items-center gap-2 text-xs font-black text-brand-600 uppercase tracking-widest mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-4">
             <Box size={14} /> {text.prodInBox}
          </h3>
          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
             <ul className="space-y-3">
                {product.inBox.map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-bold">
                      <Box size={14} className="text-brand-500" />
                      {item}
                   </li>
                ))}
             </ul>
          </div>
       </div>

       {/* Mobile Bottom Spacer */}
       <div className="h-10 lg:hidden" />
    </div>
  );
};
