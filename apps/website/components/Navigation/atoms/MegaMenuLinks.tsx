
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
      
      {/* 
         4 Column Grid Layout 
         - lg:grid-cols-4 : Forces 4 columns on desktop
         - gap-x-6 : Tighter horizontal gap
         - gap-y-3 : Tighter vertical gap (Compact)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
        {items.map((item, itemIdx) => {
          const Icon = item.icon;
          return (
            <Link 
              key={itemIdx} 
              href={item.path}
              onClick={onLinkClick}
              className="group flex items-start gap-2.5 p-1 -ml-1 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-200"
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
};
