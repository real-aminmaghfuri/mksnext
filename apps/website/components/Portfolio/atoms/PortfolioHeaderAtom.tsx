
"use client";
import React from 'react';
import { FileText } from 'lucide-react';

interface PortfolioHeaderProps {
  heading: string;
  headingSpan: string;
  sub: string;
}

export const PortfolioHeaderAtom: React.FC<PortfolioHeaderProps> = ({ heading, headingSpan, sub }) => {
  return (
    <div className="pt-40 pb-16 relative overflow-hidden bg-white dark:bg-black text-zinc-900 dark:text-white text-center border-b border-zinc-200 dark:border-zinc-900">
       {/* Background Effects */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15)_0%,transparent_70%)]" />
       
       <div className="container mx-auto px-6 relative z-10">
          
          {/* Uniform Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold animate-fade-in-up mx-auto shadow-sm mb-8">
             <FileText size={16} className="text-brand-500" />
             <span>ARSIP LAPANGAN</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.9]">
            <span className="text-zinc-900 dark:text-white block">{heading}</span>
            <span className="text-brand-600 dark:text-brand-500 block">{headingSpan}</span>
          </h1>
          
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {sub}
          </p>
       </div>
    </div>
  );
};
