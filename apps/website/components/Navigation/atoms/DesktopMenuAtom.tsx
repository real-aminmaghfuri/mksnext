
"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../types';
import { MegaMenuAtom } from './MegaMenuAtom';

interface DesktopMenuAtomProps {
  structure: MenuItem[];
  currentPath: string;
}

export const DesktopMenuAtom: React.FC<DesktopMenuAtomProps> = ({ structure, currentPath }) => {
  return (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
      {structure.map((menu, idx) => {
        const isActive = currentPath === menu.path;
        
        return (
          <div key={idx} className="relative group px-3 py-6">
            <Link 
              href={menu.path} 
              className={`flex items-center gap-1.5 text-[13px] font-bold tracking-wider uppercase transition-colors 
                ${isActive
                  ? 'text-brand-600 dark:text-brand-500' 
                  : 'text-zinc-600 dark:text-zinc-300 group-hover:text-brand-600 dark:group-hover:text-brand-500'
                }`}
            >
              {menu.label}
              {menu.hasDropdown && (
                <ChevronDown size={14} className="transition-transform duration-300 group-hover:-rotate-180" />
              )}
            </Link>

            {/* Render Mega Menu Atom if items exist */}
            {menu.hasDropdown && menu.items && (
              <MegaMenuAtom 
                items={menu.items} 
                parentLabel={menu.label} // Pass label for visual logic
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
