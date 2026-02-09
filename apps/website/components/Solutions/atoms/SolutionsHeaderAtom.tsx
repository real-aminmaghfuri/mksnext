
"use client";
import React from 'react';
import { Briefcase } from 'lucide-react';

interface SolutionsHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export const SolutionsHeaderAtom: React.FC<SolutionsHeaderProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="pt-32 pb-16 relative overflow-hidden bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
       {/* Background Patterns */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold animate-fade-in-up mx-auto shadow-sm mb-8">
             <Briefcase size={16} className="text-brand-500" />
             <span>{badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
       </div>
    </div>
  );
};
