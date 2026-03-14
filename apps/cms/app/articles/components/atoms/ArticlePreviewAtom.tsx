
"use client";

import React from 'react';

interface ArticlePreviewAtomProps {
  content: string;
  title?: string;
}

export const ArticlePreviewAtom: React.FC<ArticlePreviewAtomProps> = ({ content, title }) => {
  return (
    <div className="bg-white dark:bg-zinc-950 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-2xl shadow-black/5">
      {/* Browser-like header - Modernized */}
      <div className="bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-md px-8 py-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/40" />
          <div className="w-3 h-3 rounded-full bg-amber-500/40" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
        </div>
        <div className="flex-1 max-w-2xl bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-800 py-1.5 px-6 text-[10px] font-mono text-zinc-400 truncate shadow-inner">
          <span className="opacity-50">https://</span>mesinkasirsolo.com/articles/{title?.toLowerCase().replace(/ /g, '-') || 'preview'}
        </div>
      </div>

      {/* Content Area - Block Based Look */}
      <div className="p-10 md:p-20 max-h-[85vh] overflow-y-auto custom-scrollbar bg-white dark:bg-zinc-950">
        <article className="max-w-4xl mx-auto">
          {title && (
            <header className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-brand-600 text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-full">
                  Featured Intel
                </span>
                <span className="h-[1px] flex-1 bg-zinc-100 dark:bg-zinc-800" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase mb-8 leading-[0.9] text-zinc-900 dark:text-white">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">AM</div>
                  <span>Amin Maghfuri</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span>{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span>8 Min Read</span>
              </div>
            </header>
          )}

          <div 
            className="prose prose-zinc dark:prose-invert max-w-none 
              prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-zinc-900 dark:prose-headings:text-white
              prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-10 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-zinc-100 dark:prose-h2:border-zinc-800
              prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-8 prose-h3:flex prose-h3:items-center prose-h3:gap-4
              prose-h3:before:content-[''] prose-h3:before:w-2 prose-h3:before:h-8 prose-h3:before:bg-brand-600 prose-h3:before:rounded-full
              prose-p:text-lg prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-[1.8] prose-p:mb-10
              prose-blockquote:border-l-8 prose-blockquote:border-brand-600 prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-900/50 prose-blockquote:p-10 prose-blockquote:rounded-2xl prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-medium prose-blockquote:text-zinc-900 dark:prose-blockquote:text-white
              prose-a:text-brand-600 prose-a:underline prose-a:underline-offset-4 prose-a:decoration-2 hover:prose-a:text-brand-500
              prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:my-16
              prose-strong:text-zinc-900 dark:prose-strong:text-white prose-strong:font-black
              prose-ul:list-none prose-ul:pl-0
              prose-li:relative prose-li:pl-8 prose-li:mb-4
              prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-3 prose-li:before:w-2 prose-li:before:h-2 prose-li:before:bg-brand-600 prose-li:before:rounded-full"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
          
          <footer className="mt-20 pt-10 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {['#MESINKASIR', '#SOLO', '#AI_INTEL'].map(tag => (
                  <span key={tag} className="text-[10px] font-black text-zinc-400 hover:text-brand-600 cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};
