
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
      className={`absolute top-full left-1/2 -translate-x-1/2 w-[900px] pt-2 z-50 transition-all duration-200 ease-out origin-top ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
    >
      {/* Container */}
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative min-h-[350px]">
        
        {/* Accent Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 via-red-500 to-brand-600 z-10" />

        {isSplitLayout ? (
           // --- SPLIT LAYOUT (New) ---
           <MegaMenuSplitLinks 
             columns={columns} 
             onLinkClick={onLinkClick} 
           />
        ) : (
           // --- STANDARD LAYOUT (Legacy) ---
           <div className="grid grid-cols-12 h-full">
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
        )}

      </div>
    </div>
  );
};
