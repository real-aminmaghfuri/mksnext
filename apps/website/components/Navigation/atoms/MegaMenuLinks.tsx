"use client";

import React from 'react';
import Link from 'next/link';
import { SubMenuItem } from '../types';

interface MegaMenuLinksProps {
  parentLabel: string;
  items: SubMenuItem[];
  onLinkClick: () => void;
}

export const MegaMenuLinks: React.FC<MegaMenuLinksProps> = ({ parentLabel, items, onLinkClick }) => {
  return (
    <div className="col-span-9 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 border-b border-zinc-100 dark:border-zinc-800 pb-2">
          <h4 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-3 bg-brand-500 rounded-full"/>
          {parentLabel} DIRECTORY
          </h4>
      </div>
      
      {/* Grid Links */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {items.map((item, itemIdx) => {
          const Icon = item.icon;
          return (
            <Link 
              key={itemIdx} 
              href={item.path}
              onClick={onLinkClick}
              className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
            >
              {/* Icon Container */}
              <div className="shrink-0 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-500 transition-colors">
                <Icon size={18} strokeWidth={2} />
              </div>
              
              {/* Text Container */}
              <div className="overflow-hidden">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover/item:text-brand-600 dark:group-hover:text-brand-500 transition-colors truncate">
                    {item.label}
                  </p>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 truncate mt-0.5 font-medium">
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