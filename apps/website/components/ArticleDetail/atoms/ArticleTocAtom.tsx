
"use client";
import React from 'react';
import { TOCItem } from 'shared';
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, AlignLeft } from 'lucide-react';

interface TocProps {
  items: TOCItem[];
}

export const ArticleTocAtom: React.FC<TocProps> = ({ items }) => {
  return (
    <div className="sticky top-32 space-y-12">
      
      {/* Social Share */}
      <div className="flex flex-col gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
           <Share2 size={18} />
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all">
           <Facebook size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all">
           <Twitter size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all">
           <Linkedin size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-700 hover:border-zinc-700 transition-all">
           <LinkIcon size={18} />
        </button>
      </div>

      {/* Table of Contents */}
      <div className="hidden lg:block">
         <h4 className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">
            <AlignLeft size={14} /> Intelligence
         </h4>
         <div className="space-y-1 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
            {items.length > 0 ? items.map((item, idx) => (
               <a 
                 key={idx} 
                 href="#"
                 className="block text-xs font-bold text-zinc-500 hover:text-brand-600 dark:text-zinc-500 dark:hover:text-brand-500 py-2 transition-colors leading-relaxed"
               >
                 {item.text}
               </a>
            )) : (
              <p className="text-xs text-zinc-400 italic">No sub-sections</p>
            )}
         </div>
      </div>

    </div>
  );
};
