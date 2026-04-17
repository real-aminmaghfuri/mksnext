
"use client";
import React from 'react';
import { ArticleItem } from 'shared';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedProps {
  prev: ArticleItem | undefined;
  next: ArticleItem | undefined;
}

export const ArticleRelatedAtom: React.FC<RelatedProps> = ({ prev, next }) => {
  
  const NavCard = ({ item, type }: { item: ArticleItem, type: 'PREV' | 'NEXT' }) => {
    const isPrev = type === 'PREV';
    
    return (
      <Link 
         href={`/articles/${item.slug}`}
         className={`group flex items-center gap-4 md:gap-6 flex-1 
            ${isPrev ? 'flex-row text-left' : 'flex-row-reverse text-right'}
         `}
      >
         {/* Thumbnail */}
         <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg group-hover:border-brand-500 transition-colors duration-300 bg-zinc-100 dark:bg-zinc-800">
            <Image 
                src={item.coverImage} 
                alt={item.title}
                fill
                sizes="120px"
                className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
         </div>

         {/* Text Content */}
         <div className={`flex flex-col min-w-0 ${isPrev ? 'items-start' : 'items-end'}`}>
            {/* Label Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-white group-hover:bg-brand-600 group-hover:border-brand-600 transition-all duration-300 mb-2`}>
                {isPrev && <ArrowLeft size={10} strokeWidth={3} />}
                <span className="text-[9px] font-black uppercase tracking-widest">
                  {isPrev ? 'SEBELUMNYA' : 'SELANJUTNYA'}
                </span>
                {!isPrev && <ArrowRight size={10} strokeWidth={3} />}
            </div>

            {/* Title */}
            <h4 className="text-sm md:text-base font-bold text-zinc-900 dark:text-white leading-tight line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                {item.title}
            </h4>
         </div>
      </Link>
    );
  };

  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 py-12 mt-12">
       <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="flex-1 min-w-0">
            {prev ? (
                <NavCard item={prev} type="PREV" />
            ) : (
                <div className="hidden md:block flex-1" /> // Spacer
            )}
          </div>
          
          {/* Vertical Separator for desktop if both exist */}
          {prev && next && (
             <div className="hidden md:block w-px bg-zinc-200 dark:bg-zinc-800 self-stretch mx-4" />
          )}

          <div className="flex-1 min-w-0">
            {next ? (
                <NavCard item={next} type="NEXT" />
            ) : (
                <div className="hidden md:block flex-1" /> // Spacer
            )}
          </div>
       </div>
    </div>
  );
};
