
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
    <div className="w-full h-full flex flex-col justify-start"> {/* Enforce Top Alignment */}
      
      {/* Header Style - Unifying with SplitLinks */}
      <h4 className="flex items-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-8">
          <span className="w-6 h-[2px] bg-brand-500"></span>
          {parentLabel} DIRECTORY
      </h4>
      
      {/* Grid Layout for Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
        {items.map((item, itemIdx) => {
          const Icon = item.icon;
          return (
            <Link 
              key={itemIdx} 
              href={item.path}
              onClick={onLinkClick}
              className="group flex items-start gap-4 py-2 transition-transform active:translate-x-1"
            >
              {/* Icon - Clean, No Box */}
              <div className="shrink-0 mt-0.5 text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                <Icon size={20} strokeWidth={2} />
              </div>
              
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    {item.label}
                  </span>
                  {/* Arrow Animation on Individual Item Hover */}
                  <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-500" />
                </div>
                <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500 line-clamp-1 group-hover:text-zinc-400 transition-colors">
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
