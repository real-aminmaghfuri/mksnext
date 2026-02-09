
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
    <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl py-10">
      <div className="grid grid-cols-12 gap-12">
        {columns.map((col, idx) => {
          // Logic: First column is narrower (Tech), Second is wider (Biz) to accommodate flow
          const colSpan = idx === 0 ? "col-span-12 lg:col-span-4" : "col-span-12 lg:col-span-8";
          // Logic: Borders - Right border for first col only
          const borderClass = idx === 0 ? "lg:border-r border-zinc-100 dark:border-zinc-800 pr-0 lg:pr-12" : "pl-0 lg:pl-4";

          return (
            <div key={idx} className={`${colSpan} ${borderClass}`}>
              {/* Minimalist Header */}
              <h4 className="flex items-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">
                 <span className="w-6 h-[2px] bg-brand-500"></span>
                 {col.title}
              </h4>

              {/* Grid Flow Logic: 3 Rows Max, then auto-column */}
              <div className={`grid grid-rows-3 grid-flow-col gap-x-12 gap-y-4`}>
                {col.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <Link 
                      key={itemIdx} 
                      href={item.path}
                      onClick={onLinkClick}
                      className="group flex items-start gap-4 p-2 -ml-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors"
                    >
                      <div className="shrink-0 mt-0.5 text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                            {item.label}
                          </span>
                          <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-500" />
                        </div>
                        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500 line-clamp-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
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
    </div>
  );
};
