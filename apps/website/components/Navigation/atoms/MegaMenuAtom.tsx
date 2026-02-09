
"use client";
import React from 'react';
import { SubMenuItem, MegaMenuColumn } from '../types';
import { MegaMenuLinks } from './MegaMenuLinks';
import { MegaMenuSplitLinks } from './MegaMenuSplitLinks';

interface MegaMenuAtomProps {
  items?: SubMenuItem[];
  columns?: MegaMenuColumn[];
  parentLabel: string;
  isVisible: boolean;
  onLinkClick: () => void;
}

export const MegaMenuAtom: React.FC<MegaMenuAtomProps> = ({ 
  items, 
  columns, 
  parentLabel, 
  isVisible, 
  onLinkClick 
}) => {
  const isSplitLayout = !!columns && columns.length > 0;

  return (
    <div 
      className={`fixed top-20 inset-x-0 z-40 transition-all duration-300 ease-out origin-top border-b border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white/95 dark:bg-black/95 backdrop-blur-xl ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />

      {/* 
         Compact Container Logic:
         - Removed min-h-[450px] -> Height is now dynamic (h-auto)
         - Removed Image Column
         - Added 'container mx-auto' to center content like the main website
         - Reduced padding (py-8) for compact feel
      */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl py-8">
          {isSplitLayout ? (
              <MegaMenuSplitLinks 
                columns={columns} 
                onLinkClick={onLinkClick} 
              />
          ) : (
              <MegaMenuLinks 
                parentLabel={parentLabel} 
                items={items || []} 
                onLinkClick={onLinkClick} 
              />
          )}
      </div>
    </div>
  );
};
