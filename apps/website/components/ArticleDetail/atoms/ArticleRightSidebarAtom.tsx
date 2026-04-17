
"use client";
import React from 'react';
import { Files } from 'lucide-react';
import { ArticleItem } from 'shared';
import Link from 'next/link';
import Image from 'next/image';

interface RightSidebarProps {
  relatedArticles: ArticleItem[];
  text: any;
  currentCategory: string;
}

export const ArticleRightSidebarAtom: React.FC<RightSidebarProps> = ({ relatedArticles, text }) => {
  return (
    <div>
       {/* Related Articles Widget - Upscaled Compact Mode */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-3">
             <Files size={14} /> Dokumen Terkait
          </h4>
          <div className="space-y-0.5">
             {relatedArticles.map((article) => (
                <Link href={`/articles/${article.slug}`} key={article.id} className="block group">
                   
                   <div className="flex gap-3 items-center p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                      
                      {/* Thumbnail - Increased to w-20 h-14 (80x56px) for better visibility */}
                      <div className="w-20 h-14 rounded-md bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0 relative border border-zinc-200 dark:border-zinc-800 group-hover:border-brand-500/50 transition-colors">
                          <Image 
                            src={article.coverImage} 
                            alt={article.title} 
                            fill
                            sizes="80px"
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                          />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                          {/* Title - Upscaled to text-sm */}
                          <h5 className="font-bold text-sm text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-tight group-hover:text-brand-600 transition-colors mb-1">
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
