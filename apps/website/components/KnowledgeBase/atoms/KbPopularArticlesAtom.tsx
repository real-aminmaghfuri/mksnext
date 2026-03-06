
"use client";
import React from 'react';
import { KbArticle } from 'shared';
import { ArrowRight, Clock } from 'lucide-react';

interface KbPopularArticlesProps {
  title: string;
  articles: KbArticle[];
}

export const KbPopularArticlesAtom: React.FC<KbPopularArticlesProps> = ({ title, articles }) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900/50 py-24 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-black uppercase tracking-widest text-brand-600 dark:text-brand-500 mb-12 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="group p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500 transition-all cursor-pointer shadow-xl shadow-black/5 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">
                <Clock size={14} />
                <span>{article.date}</span>
                <span className="text-zinc-200 dark:text-zinc-800">|</span>
                <span className="text-brand-600 dark:text-brand-500">{article.categoryId}</span>
              </div>
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 leading-tight group-hover:text-brand-500 transition-colors">
                {article.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-500 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                <span>BACA SELENGKAPNYA</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
