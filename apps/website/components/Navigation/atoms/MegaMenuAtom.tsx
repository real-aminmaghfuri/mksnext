
"use client";
import React from 'react';
import { SubMenuItem, MegaMenuColumn } from '../types';
import { useMegaMenu } from '../hooks/useMegaMenu';
import { MegaMenuLinks } from './MegaMenuLinks';
import { MegaMenuBanner } from './MegaMenuBanner';
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
  // 1. Get Visual Data from Hook (Only used for Standard Layout)
  const { visualData } = useMegaMenu(parentLabel);

  // Determine which layout to use
  const isSplitLayout = !!columns && columns.length > 0;

  return (
    <div 
      className={`fixed top-20 inset-x-0 z-40 transition-all duration-300 ease-out origin-top border-b border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white/95 dark:bg-black/95 backdrop-blur-xl ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
    >
      {/* Accent Line Top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />

      {isSplitLayout ? (
         // --- SPLIT LAYOUT (Full Width Container Logic inside component) ---
         <MegaMenuSplitLinks 
           columns={columns} 
           onLinkClick={onLinkClick} 
         />
      ) : (
         // --- STANDARD LAYOUT (Legacy - Wrapped in Container) ---
         <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
             <div className="grid grid-cols-12 min-h-[350px]">
                <MegaMenuLinks 
                  parentLabel={parentLabel} 
                  items={items || []} 
                  onLinkClick={onLinkClick} 
                />
                <MegaMenuBanner 
                  img={visualData.img} 
                  title={visualData.title} 
                />
             </div>
         </div>
      )}
    </div>
  );
};
