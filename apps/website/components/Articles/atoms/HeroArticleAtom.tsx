"use client";
import React from 'react';
import { ArticleItem } from 'shared';
import { Calendar, User, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroArticleProps {
  article: ArticleItem;
}

export const HeroArticleAtom: React.FC<HeroArticleProps> = ({ article }) => {
  return (
    <Link href={`/articles/${article.slug}`}>
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-16 group cursor-pointer shadow-2xl">
        {/* Background Image - Optimized for LCP */}
        <Image 
            src={article.image} 
            alt={article.title}
            fill
            priority={true}
            sizes="100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 z-10" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
            <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest rounded mb-4 shadow-lg shadow-brand-600/50">
                {article.category}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
                {article.title}
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl line-clamp-2 mb-8 font-medium max-w-3xl drop-shadow-md">
                {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-zinc-400 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                    <User size={16} className="text-brand-500" />
                    <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-brand-500" />
                    <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-500" />
                    <span>{article.readTime}</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </Link>
  );
};