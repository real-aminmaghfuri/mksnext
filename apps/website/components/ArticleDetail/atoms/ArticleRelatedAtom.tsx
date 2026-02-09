
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
       className={`flex-1 relative h-32 md:h-48 rounded-2xl overflow-hidden group border border-zinc-200 dark:border-zinc-800
         ${type === 'NEXT' ? 'text-right' : 'text-left'}
       `}
    >
       <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10" />
       <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
       
       <div className={`absolute inset-0 z-20 p-6 flex flex-col justify-center ${type === 'NEXT' ? 'items-end' : 'items-start'}`}>
          <span className="text-[10px] font-black text-brand-500 uppercase tracking-widest mb-2 flex items-center gap-2">
             {type === 'PREV' && <ArrowLeft size={12} />}
             {type === 'PREV' ? 'INTEL SEBELUMNYA' : 'INTEL SELANJUTNYA'}
             {type === 'NEXT' && <ArrowRight size={12} />}
          </span>
          <h4 className="text-sm md:text-lg font-bold text-white leading-tight line-clamp-2 max-w-xs">
             {item.title}
          </h4>
       </div>
    </Link>
  );

  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 py-12 mt-12">
       <div className="flex gap-4 md:gap-8">
          {prev && <NavCard item={prev} type="PREV" />}
          {next && <NavCard item={next} type="NEXT" />}
       </div>
    </div>
  );
};
