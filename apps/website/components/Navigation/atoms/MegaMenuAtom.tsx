
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
      className={`fixed top-20 inset-x-0 z-40 transition-all duration-300 ease-out origin-top border-b border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white/95 dark:bg-black/95 backdrop-blur-xl ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />

      {isSplitLayout ? (
         <MegaMenuSplitLinks 
           columns={columns} 
           onLinkClick={onLinkClick} 
         />
      ) : (
         /* 
            Standard Layout Update:
            Removed 'container' wrapper. Used Grid 12 Full Width.
            Left Side (Links): 9 cols.
            Right Side (Banner): 3 cols.
            Image now touches the right edge.
         */
         <div className="w-full grid grid-cols-12 min-h-[350px]">
            {/* Left Column: Contains Links */}
            <div className="col-span-12 lg:col-span-9 border-r border-zinc-100 dark:border-zinc-800">
               {/* 
                  Inner alignment hack: 
                  We use padding-left calculation to mimic 'container mx-auto' alignment for the content 
                  on the left side, while keeping the background full width.
                  Fallback for laptop: pl-12. Large screens uses calc.
               */}
               <div className="h-full pl-6 md:pl-12 lg:pl-[max(3rem,calc((100vw-80rem)/2))] pr-8 py-8">
                  <MegaMenuLinks 
                    parentLabel={parentLabel} 
                    items={items || []} 
                    onLinkClick={onLinkClick} 
                  />
               </div>
            </div>

            {/* Right Column: Banner Image (Bleeds to edge) */}
            <div className="col-span-12 lg:col-span-3 h-full">
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
