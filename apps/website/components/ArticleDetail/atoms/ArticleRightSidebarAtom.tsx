
"use client";
import React from 'react';
import { Tag, ChevronRight, Files } from 'lucide-react';
import { ArticleItem } from 'shared';
import { GlassCard } from 'ui';
import Link from 'next/link';

interface RightSidebarProps {
  categories: string[];
  relatedArticles: ArticleItem[];
  products?: any[]; 
}

export const ArticleRightSidebarAtom: React.FC<RightSidebarProps> = ({ categories, relatedArticles }) => {
  return (
    <div className="space-y-12">
       
       {/* 1. Related Articles Widget */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-4">
             <Files size={14} /> Dokumen Terkait
          </h4>
          <div className="space-y-3">
             {relatedArticles.map((article) => (
                <Link href={`/articles/${article.slug}`} key={article.id} className="block group">
                   <GlassCard variant="solid" hoverEffect className="p-2 flex gap-3 items-center bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 cursor-pointer">
                      
                      {/* Thumbnail */}
                      <div className="w-12 h-12 rounded-md bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0 relative border border-zinc-100 dark:border-zinc-700">
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                          />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors">
                              {article.title}
                          </h5>
                          <p className="text-[9px] text-zinc-400 mt-1 font-bold uppercase">{article.category}</p>
                      </div>

                   </GlassCard>
                </Link>
             ))}
          </div>
       </div>

       {/* 2. Categories */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-3">
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
