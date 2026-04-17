"use client";
import React from 'react';
import { ArticleItem } from 'shared';
import { GlassCard } from 'ui';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  article: ArticleItem;
}

export const ArticleCardAtom: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={`/articles/${article.slug}`} className="block h-full">
        <GlassCard hoverEffect variant="solid" className="flex flex-col h-full bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 group overflow-hidden">
        {/* Image Container with precise aspect ratio to prevent CLS */}
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <Image 
                src={article.coverImage} 
                alt={article.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur text-white text-[10px] font-black uppercase px-2 py-1 rounded border border-white/10 z-10">
                {article.category}
            </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">
                <Calendar size={12} className="text-brand-500" /> {article.publishedAt || article.createdAt}
            </div>
            
            <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-3 leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors line-clamp-2">
                {article.title}
            </h3>
            
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-6 flex-1">
                {article.excerpt}
            </p>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-xs font-black text-zinc-900 dark:text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                    BACA SELENGKAPNYA <ArrowRight size={14} className="text-brand-500" />
                </span>
            </div>
        </div>
        </GlassCard>
    </Link>
  );
};