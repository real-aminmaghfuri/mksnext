
"use client";
import React from 'react';
import { Download } from 'lucide-react';

interface DownloadHeaderProps {
  heading: string;
  sub: string;
}

export const DownloadHeaderAtom: React.FC<DownloadHeaderProps> = ({ heading, sub }) => {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white text-center border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold animate-fade-in-up mx-auto shadow-sm mb-8">
            <Download size={16} className="text-brand-500 animate-pulse" />
            <span>DOWNLOAD CENTER</span>
         </div>

         <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9] text-zinc-900 dark:text-white">
            {heading}
         </h1>
         
         <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {sub}
         </p>
      </div>
    </div>
  );
};
