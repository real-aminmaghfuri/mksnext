
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { MOCK_ARTICLES, DICTIONARY } from 'shared';
import { useConfig } from 'ui';

export const LandingArticlesPreview: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const items = MOCK_ARTICLES.slice(0, 3);

  return (
    <section className="py-24 bg-white dark:bg-luxury-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-xs font-black tracking-[0.3em] uppercase text-brand-500 mb-4 flex items-center gap-2">
            <Sparkles size={14} /> NEWS & INSIGHTS
          </h2>
          <p className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter">
            Edukasi terbaru dari <span className="text-brand-500">SIBOS AI.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id} className="group h-full flex flex-col">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={article.coverImage} 
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-500 text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-brand-500/30">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">
                <Calendar size={12} className="text-brand-500" />
                {article.publishedAt}
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-brand-500 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 mb-6 font-medium leading-relaxed flex-1">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-600 dark:text-brand-500 group-hover:gap-4 transition-all">
                BACA SELENGKAPNYA <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-center md:text-left">
                Ingin mendapatkan tips bisnis dan teknologi langsung ke email Anda?
            </p>
            <div className="flex gap-2 w-full md:w-auto">
                <input 
                    type="email" 
                    placeholder="Alamat Email..." 
                    className="flex-1 md:w-64 bg-zinc-100 dark:bg-luxury-dark border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                />
                <button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95">
                    JOIN
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};
