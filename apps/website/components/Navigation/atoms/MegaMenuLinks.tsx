
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
    <div className="h-full flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-6 pb-2 border-b border-zinc-100 dark:border-zinc-800 w-full max-w-2xl">
          <div className="w-1.5 h-3 bg-brand-500 rounded-full"/>
          <h4 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">
            {parentLabel} DIRECTORY
          </h4>
      </div>
      
      {/* List Layout - No Boxes */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-1 max-w-3xl">
        {items.map((item, itemIdx) => {
          const Icon = item.icon;
          return (
            <Link 
              key={itemIdx} 
              href={item.path}
              onClick={onLinkClick}
              className="group flex items-center gap-4 py-2 transition-transform active:translate-x-1"
            >
              {/* Icon - No Background */}
              <div className="shrink-0 text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                <Icon size={20} strokeWidth={2} />
              </div>
              
              <div className="overflow-hidden">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors truncate">
                    {item.label}
                  </p>
                  <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-500 shrink-0" />
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 truncate mt-0.5 font-medium group-hover:text-zinc-400 transition-colors">
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
