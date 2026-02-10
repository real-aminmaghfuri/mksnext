
"use client";
import React from 'react';
import { Tag, ChevronRight, Files } from 'lucide-react';
import { ArticleItem } from 'shared';
import Link from 'next/link';
import Image from 'next/image';

interface RightSidebarProps {
  categories: string[];
  relatedArticles: ArticleItem[];
  products?: any[]; 
}

export const ArticleRightSidebarAtom: React.FC<RightSidebarProps> = ({ categories, relatedArticles }) => {
  return (
    <div className="space-y-12">
       
       {/* 1. Categories (MOVED TO TOP) */}
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

       {/* 2. Related Articles Widget (MOVED DOWN & STYLED MINIMALLY) */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-4">
             <Files size={14} /> Dokumen Terkait
          </h4>
          <div className="space-y-6">
             {relatedArticles.map((article) => (
                <Link href={`/articles/${article.slug}`} key={article.id} className="block group">
                   {/* Removed GlassCard container. Using clean flex layout. */}
                   <div className="flex gap-4 items-start">
                      
                      {/* Thumbnail */}
                      <div className="w-20 h-14 rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0 relative border border-zinc-200 dark:border-zinc-800 group-hover:border-brand-500/50 transition-colors">
                          <Image 
                            src={article.image} 
                            alt={article.title} 
                            fill
                            sizes="80px"
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                          />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0 py-0.5">
                          <h5 className="font-bold text-sm text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors mb-1.5">
                              {article.title}
                          </h5>
                          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wide flex items-center gap-2">
                              {article.category}
                          </p>
                      </div>

                   </div>
                </Link>
             ))}
          </div>
       </div>

    </div>
  );
};