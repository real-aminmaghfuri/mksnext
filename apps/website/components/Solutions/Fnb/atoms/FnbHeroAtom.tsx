
"use client";
import React from 'react';
import { ChefHat } from 'lucide-react';

interface FnbHeroProps {
  content: {
    badge: string;
    title: string;
    span: string;
    sub: string;
  }
}

export const FnbHeroAtom: React.FC<FnbHeroProps> = ({ content }) => {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
       {/* Background Heat Effect */}
       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(249,115,22,0.05)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(249,115,22,0.15)_100%)]" />
       
       {/* Smoke / Steam Blur */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 dark:bg-orange-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

       <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-500 text-xs font-black animate-fade-in-up mx-auto shadow-sm mb-8 uppercase tracking-widest">
             <ChefHat size={14} />
             <span>{content.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-8 leading-[0.9]">
            {content.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500">{content.span}</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
            {content.sub}
          </p>
       </div>
    </div>
  );
};
