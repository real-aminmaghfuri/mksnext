
"use client";

import React from 'react';

interface ArticlePreviewAtomProps {
  content: string;
  title?: string;
}

export const ArticlePreviewAtom: React.FC<ArticlePreviewAtomProps> = ({ content, title }) => {
  return (
    <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-xl">
      {/* Browser-like header */}
      <div className="bg-zinc-50 dark:bg-zinc-900 px-6 py-3 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/20 border border-rose-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
        </div>
        <div className="flex-1 mx-4 bg-white dark:bg-black rounded-lg border border-zinc-100 dark:border-zinc-800 py-1 px-3 text-[10px] font-mono text-zinc-400 truncate">
          https://mesinkasirsolo.com/articles/{title?.toLowerCase().replace(/ /g, '-') || 'preview'}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto custom-scrollbar bg-white dark:bg-zinc-950">
        <article className="max-w-3xl mx-auto">
          {title && (
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4 leading-tight">
                {title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                <span>By Amin Maghfuri</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span>{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
            </header>
          )}

          <div 
            className="prose prose-zinc dark:prose-invert max-w-none 
              prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:border-l-4 prose-h3:border-brand-600 prose-h3:pl-4
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4
              prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-6
              prose-blockquote:border-brand-600 prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-900/50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
              prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
              prose-lead:text-xl prose-lead:font-bold prose-lead:text-zinc-900 dark:prose-lead:text-white prose-lead:mb-10"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </article>
      </div>
    </div>
  );
};
