
"use client";

import React from 'react';
import Link from 'next/link';
import { SubMenuItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface MegaMenuLinksProps {
  parentLabel: string;
  items: SubMenuItem[];
  onLinkClick: () => void;
}

export const MegaMenuLinks: React.FC<MegaMenuLinksProps> = ({ parentLabel, items, onLinkClick }) => {
  return (
    <div className="w-full">
      
      {/* Header Ultra Compact */}
      <h4 className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">
          <span className="w-4 h-[2px] bg-brand-500"></span>
          {parentLabel} DIRECTORY
      </h4>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
        {items.map((item, itemIdx) => {
          const Icon = item.icon;
          
          if (item.variant === 'highlight') {
            return (
              <Link 
                key={itemIdx} 
                href={item.path}
                onClick={onLinkClick}
                className="col-span-1 md:col-span-2 lg:col-span-4 mt-2 group/high"
              >
                 <div className="flex items-center justify-center w-full p-4 rounded-xl bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 text-white shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
                    <div className="flex items-center gap-3">
                        <Icon size={20} strokeWidth={2.5} />
                        <span className="font-black uppercase tracking-widest text-sm">{item.label}</span>
                    </div>
                 </div>
              </Link>
            );
          }

          return (
            <Link 
              key={itemIdx} 
              href={item.path}
              onClick={onLinkClick}
              className="group/item flex items-start gap-2.5 py-1 transition-all duration-200"
            >
              {/* Icon: Always Orange (Brand) in Normal State */}
              <div className="shrink-0 mt-0.5 text-brand-500 group-hover/item:text-brand-600 dark:text-brand-500 dark:group-hover/item:text-brand-400 transition-colors">
                <Icon size={18} strokeWidth={2} />
              </div>
              
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  {/* Label: STRICTLY Zinc-900 (Light) / White (Dark) -> Orange on Hover */}
                  <span className="text-[13px] font-bold text-zinc-900 dark:text-white group-hover/item:text-brand-600 dark:group-hover/item:text-brand-500 transition-colors leading-none">
                    {item.label}
                  </span>
                  <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-brand-500" />
                </div>
                <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-500 line-clamp-1 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-500 transition-colors leading-tight">
                  {item.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};