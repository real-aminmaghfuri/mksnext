
"use client";
import React from 'react';
import Link from 'next/link';
import { SubMenuItem } from '../types';

interface MegaMenuAtomProps {
  items: SubMenuItem[];
}

export const MegaMenuAtom: React.FC<MegaMenuAtomProps> = ({ items }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 pt-2">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl p-4 overflow-hidden relative">
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-red-600" />
        
        <div className="grid gap-2">
          {items.map((item, itemIdx) => {
            const Icon = item.icon;
            return (
              <Link 
                key={itemIdx} 
                href={item.path}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item"
              >
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover/item:text-brand-500 group-hover/item:bg-brand-500/10 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover/item:text-brand-500 transition-colors">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-tight mt-1 font-medium">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
