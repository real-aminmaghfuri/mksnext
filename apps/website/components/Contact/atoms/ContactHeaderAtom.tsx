
"use client";
import React from 'react';
import { Radio } from 'lucide-react';

interface ContactHeaderProps {
  heading: string;
  sub: string;
}

export const ContactHeaderAtom: React.FC<ContactHeaderProps> = ({ heading, sub }) => {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white text-center border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
      {/* Radar Effect Background - Adaptive */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-500 text-[10px] font-black uppercase tracking-widest mb-8 animate-pulse shadow-sm">
            <Radio size={12} /> FREQUENCY OPEN
         </div>

         <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-zinc-900 dark:text-white">
            {heading}
         </h1>
         
         <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {sub}
         </p>
      </div>
    </div>
  );
};
