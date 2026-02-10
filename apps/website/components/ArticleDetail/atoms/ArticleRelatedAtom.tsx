
"use client";
import React from 'react';
import { ArticleItem } from 'shared';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface RelatedProps {
  prev: ArticleItem | undefined;
  next: ArticleItem | undefined;
}

export const ArticleRelatedAtom: React.FC<RelatedProps> = ({ prev, next }) => {
  const NavCard = ({ item, type }: { item: ArticleItem, type: 'PREV' | 'NEXT' }) => (
    <Link 
       href={`/articles/${item.slug}`}
       className={`flex-1 group flex flex-col ${type === 'NEXT' ? 'items-end text-right' : 'items-start text-left'}`}
    >
       {/* High Contrast Label */}
       <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/30 mb-4 transition-transform group-hover:scale-105`}>
          {type === 'PREV' && <ArrowLeft size={12} strokeWidth={3} />}
          <span className="text-[10px] font-black uppercase tracking-widest">
             {type === 'PREV' ? 'SEBELUMNYA' : 'SELANJUTNYA'}
          </span>
          {type === 'NEXT' && <ArrowRight size={12} strokeWidth={3} />}
       </div>

       {/* Article Title - No Container */}
       <h4 className="text-lg md:text-xl font-black text-zinc-900 dark:text-white leading-tight line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
          {item.title}
       </h4>
    </Link>
  );

  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 py-12 mt-12">
       <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
          <div className="flex-1">
            {prev && <NavCard item={prev} type="PREV" />}
          </div>
          {/* Vertical Separator for desktop */}
          <div className="hidden md:block w-px bg-zinc-200 dark:bg-zinc-800 self-stretch" />
          <div className="flex-1 flex justify-end">
            {next && <NavCard item={next} type="NEXT" />}
          </div>
       </div>
    </div>
  );
};
