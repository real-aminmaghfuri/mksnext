
"use client";
import React from 'react';
import { Tag, ChevronRight } from 'lucide-react';

interface RightSidebarProps {
  categories: string[];
  products?: any[]; // Keep prop optional to avoid breaking interface if passed, but ignored
}

export const ArticleRightSidebarAtom: React.FC<RightSidebarProps> = ({ categories }) => {
  return (
    <div className="space-y-8">
       
       {/* Categories */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
             <Tag size={14} /> Kategori Intel
          </h4>
          <div className="flex flex-col gap-1">
             {categories.map((cat, idx) => (
                <button 
                   key={idx} 
                   className="flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all group"
                >
                   <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 uppercase tracking-wide">
                      {cat}
                   </span>
                   <ChevronRight size={14} className="text-zinc-300 group-hover:text-brand-500 transition-colors" />
                </button>
             ))}
          </div>
       </div>

    </div>
  );
};
