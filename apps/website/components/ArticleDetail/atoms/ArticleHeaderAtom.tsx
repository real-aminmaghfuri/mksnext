
"use client";
import React from 'react';
import { ArticleItem } from 'shared';
import { Calendar, User, Clock, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleHeaderProps {
  article: ArticleItem;
  backText?: string;
}

export const ArticleHeaderAtom: React.FC<ArticleHeaderProps> = ({ article, backText = "KEMBALI KE WAWASAN" }) => {
  return (
    <div className="mb-12">
      {/* Breadcrumb / Back */}
      <div className="mb-8">
        <Link 
            href="/articles" 
            className="inline-flex items-center text-xs font-bold text-zinc-500 hover:text-brand-600 dark:hover:text-brand-500 transition-colors uppercase tracking-widest"
        >
            <ChevronLeft size={16} className="mr-1" /> {backText}
        </Link>
      </div>

      {/* Title Block */}
      <div className="mb-8 max-w-4xl">
        <div className="inline-block px-3 py-1 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest rounded mb-6 shadow-lg shadow-brand-600/30">
             {article.category}
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white leading-tight tracking-tighter mb-6">
            {article.title}
        </h1>
        
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider border-y border-zinc-200 dark:border-zinc-800 py-4">
            <div className="flex items-center gap-2">
                <User size={16} className="text-brand-500" />
                <span className="text-zinc-900 dark:text-white">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
            </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-800 relative">
         <Image 
            src={article.image} 
            alt={article.title} 
            fill
            priority
            sizes="100vw"
            className="object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
};