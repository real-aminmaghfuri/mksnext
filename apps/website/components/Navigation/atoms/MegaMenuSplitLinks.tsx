
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
    <div className="w-full grid grid-cols-4 gap-8"> {/* Main Wrapper 4 Cols */}
      {columns.map((col, idx) => {
        // Layout Logic for 4-Column Target:
        // Index 0 (Teknologi/Small) -> Col Span 1
        // Index 1 (Solusi Bisnis/Large) -> Col Span 3
        const colSpan = idx === 0 ? "col-span-4 lg:col-span-1" : "col-span-4 lg:col-span-3";
        
        // Border Separator
        const borderClass = idx === 0 ? "lg:border-r border-zinc-100 dark:border-zinc-800 pr-0 lg:pr-8" : "pl-0 lg:pl-0";
        
        // Inner Grid Logic:
        // Col 1 needs 1 internal column
        // Col 3 needs 3 internal columns to spread the items horizontally
        const innerGridClass = idx === 0 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3";

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
                    <div className="shrink-0 mt-0.5 text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[13px] font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors leading-none">
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
