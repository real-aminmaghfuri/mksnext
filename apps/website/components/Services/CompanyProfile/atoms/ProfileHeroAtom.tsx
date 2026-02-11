
"use client";
import React from 'react';
import { Globe } from 'lucide-react';

interface ProfileHeroProps {
  content: {
    badge: string;
    title: string;
    titleSpan: string;
    sub: string;
  }
}

export const ProfileHeroAtom: React.FC<ProfileHeroProps> = ({ content }) => {
  return (
    <div className="pt-40 pb-24 relative overflow-hidden bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900">
       {/* Ambient Background - Livelier */}
       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(249,115,22,0.05)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(249,115,22,0.1)_100%)]" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 dark:bg-brand-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
       
       {/* Abstract Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

       <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-brand-600 dark:text-brand-500 text-xs font-black animate-fade-in-up mx-auto shadow-sm mb-8 uppercase tracking-widest">
             <Globe size={14} />
             <span>{content.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            {content.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-red-600">{content.titleSpan}</span>
          </h1>
          
          {/* Typography Fixed: Matched with Homepage Hero Subtitle (text-lg lg:text-xl) */}
          <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
            {content.sub}
          </p>
       </div>
    </div>
  );
};
