
"use client";
import React from 'react';
import { Factory } from 'lucide-react';

interface CorporateHeroProps {
  content: {
    badge: string;
    title: string;
    span: string;
    sub: string;
  }
}

export const CorporateHeroAtom: React.FC<CorporateHeroProps> = ({ content }) => {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
       {/* Background Effect: Slate/Industrial Theme */}
       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(100,116,139,0.05)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(100,116,139,0.15)_100%)]" />
       
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-[100px] pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-black animate-fade-in-up mx-auto shadow-sm mb-8 uppercase tracking-widest">
             <Factory size={14} />
             <span>{content.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-8 leading-[0.9]">
            {content.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-zinc-600 dark:from-slate-400 dark:to-zinc-400">{content.span}</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
            {content.sub}
          </p>
       </div>
    </div>
  );
};
