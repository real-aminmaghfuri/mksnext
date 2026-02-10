
"use client";
import React from 'react';
import { TOCItem } from 'shared';
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, AlignLeft } from 'lucide-react';

interface TocProps {
  items: TOCItem[];
}

export const ArticleTocAtom: React.FC<TocProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-8"> {/* Reduced gap from 10 to 8 for compactness */}
      
      {/* 1. Table of Contents */}
      <div className="hidden lg:block">
         <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
            <AlignLeft size={14} /> Intelligence
         </h4>
         <div className="space-y-1 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
            {items.length > 0 ? items.map((item, idx) => (
               <a 
                 key={idx} 
                 href={`#${item.id}`} 
                 // Standardized text size to text-sm (was text-[11px]) for better readability
                 className="block text-sm font-bold text-zinc-500 hover:text-brand-600 dark:text-zinc-500 dark:hover:text-brand-500 py-1 transition-colors leading-snug line-clamp-2"
               >
                 {item.text}
               </a>
            )) : (
              <p className="text-sm text-zinc-400 italic">No sub-sections</p>
            )}
         </div>
      </div>

      {/* 2. Social Share */}
      <div>
        <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
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
