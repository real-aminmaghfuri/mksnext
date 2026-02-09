
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
    <div className="grid grid-cols-2 w-full h-full divide-x divide-zinc-100 dark:divide-zinc-800">
      {columns.map((col, idx) => (
        <div key={idx} className="p-6">
          {/* Column Header */}
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-zinc-100 dark:border-zinc-800">
             <div className="w-1.5 h-3 bg-brand-500 rounded-full"/>
             <h4 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">
               {col.title}
             </h4>
          </div>

          {/* List Items */}
          <div className="space-y-3">
            {col.items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={itemIdx} 
                  href={item.path}
                  onClick={onLinkClick}
                  className="group flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                >
                  <div className="shrink-0 mt-1 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        {item.label}
                      </span>
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-500" />
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
