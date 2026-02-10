
"use client";
import React from 'react';
import { TOCItem } from 'shared';
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, AlignLeft } from 'lucide-react';

interface TocProps {
  items: TOCItem[];
  activeId?: string; // New Prop
}

export const ArticleTocAtom: React.FC<TocProps> = ({ items, activeId }) => {
  return (
    <div className="flex flex-col gap-8"> 
      
      {/* 1. Table of Contents */}
      <div className="hidden lg:block">
         <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-3">
            <AlignLeft size={14} /> Intelligence
         </h4>
         {/* Using relative to create a sliding marker effect if we wanted, but simple border-l is fine */}
         <div className="space-y-1 relative pl-4">
            {/* Background Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800" />
            
            {items.length > 0 ? items.map((item, idx) => {
               const isActive = activeId === item.id;
               return (
                <div key={idx} className="relative">
                   {/* Active Marker Indicator */}
                   <div 
                      className={`absolute -left-[17px] top-1.5 w-[2px] h-4 bg-brand-500 transition-all duration-300 ${isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} 
                   />
                   <a 
                     href={`#${item.id}`} 
                     className={`block text-sm font-bold py-1 transition-all duration-300 leading-snug line-clamp-2 capitalize
                        ${isActive 
                            ? 'text-brand-600 dark:text-brand-500 translate-x-1' 
                            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}
                     `}
                   >
                     {/* Lowercase first to ensure capitalize works on ALL CAPS source */}
                     {item.text.toLowerCase()}
                   </a>
                </div>
               );
            }) : (
              <p className="text-sm text-zinc-400 italic">No sub-sections</p>
            )}
         </div>
      </div>

      {/* 2. Social Share */}
      <div>
        <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-3">
            <Share2 size={14} /> Sebarkan
        </h4>
        <div className="flex flex-wrap gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all bg-white dark:bg-zinc-900">
            <Facebook size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all bg-white dark:bg-zinc-900">
            <Twitter size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all bg-white dark:bg-zinc-900">
            <Linkedin size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-700 hover:border-zinc-700 transition-all bg-white dark:bg-zinc-900">
            <LinkIcon size={18} />
            </button>
        </div>
      </div>

    </div>
  );
};
