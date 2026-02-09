
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
  const { visualData } = useMegaMenu(parentLabel);
  const isSplitLayout = !!columns && columns.length > 0;

  return (
    <div 
      className={`fixed top-20 inset-x-0 z-40 transition-all duration-300 ease-out origin-top border-b border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-black ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />

      {/* Unified Grid Layout for ALL Menu Types */}
      <div className="w-full grid grid-cols-12 min-h-[450px]">
          
          {/* LEFT CONTENT AREA: Always span 9 cols (on large screens) */}
          <div className="col-span-12 lg:col-span-9 bg-white dark:bg-black/95 backdrop-blur-xl border-r border-zinc-200 dark:border-zinc-800 relative">
              {/* 
                  Padding Strategy for Alignment:
                  - Left padding uses calculation to align with "container mx-auto" of the main site.
                  - Top padding (py-12) ensures "Rata Atas" (Top Aligned)
              */}
              <div className="h-full pl-6 md:pl-10 lg:pl-[max(3rem,calc((100vw-80rem)/2))] pr-12 py-12">
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

          {/* RIGHT IMAGE AREA: Always span 3 cols, Bleed to Edge */}
          <div className="hidden lg:block lg:col-span-3 h-full relative">
              <MegaMenuBanner 
                img={visualData.img} 
                title={visualData.title} 
              />
          </div>
      </div>
    </div>
  );
};
