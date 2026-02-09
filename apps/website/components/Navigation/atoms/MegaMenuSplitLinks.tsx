
"use client";

import React from 'react';
import Link from 'next/link';
import { MegaMenuColumn } from '../types';
import { ArrowRight } from 'lucide-react';

interface MegaMenuSplitLinksProps {
  columns: MegaMenuColumn[];
  onLinkClick: () => void;
}

export const MegaMenuSplitLinks: React.FC<MegaMenuSplitLinksProps> = ({ columns, onLinkClick }) => {
  return (
    <div className="w-full grid grid-cols-4 gap-8">
      {columns.map((col, idx) => {
        // Layout Logic based on 'width' prop
        const isWide = col.width === 'wide';
        const colSpan = isWide ? "col-span-4 lg:col-span-3" : "col-span-4 lg:col-span-1";
        
        // Border Separator
        const borderClass = idx === 0 ? "lg:border-r border-zinc-100 dark:border-zinc-800 pr-0 lg:pr-8" : "pl-0 lg:pl-0";
        
        // Inner Grid Logic
        const innerGridClass = isWide ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1";

        return (
          <div key={idx} className={`${colSpan} ${borderClass}`}>
            <h4 className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">
               <span className="w-4 h-[2px] bg-brand-500"></span>
               {col.title}
            </h4>

            <div className={`grid ${innerGridClass} gap-x-6 gap-y-3`}>
              {col.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={itemIdx} 
                    href={item.path}
                    onClick={onLinkClick}
                    className="group flex items-start gap-2.5 py-1 transition-all duration-200"
                  >
                    {/* Icon: Always Orange (Brand) in Normal State */}
                    <div className="shrink-0 mt-0.5 text-brand-500 group-hover:text-brand-600 dark:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        {/* Label: Zinc-900 (Light) / White (Dark) -> Orange on Hover */}
                        <span className="text-[13px] font-bold text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors leading-none">
                          {item.label}
                        </span>
                        <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-500" />
                      </div>
                      <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-500 line-clamp-1 group-hover:text-zinc-400 transition-colors leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
