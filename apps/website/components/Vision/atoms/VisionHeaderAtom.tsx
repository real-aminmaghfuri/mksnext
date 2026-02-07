
"use client";
import React from 'react';

interface VisionHeaderProps {
  heading: string;
  sub: string;
  statement: string;
}

export const VisionHeaderAtom: React.FC<VisionHeaderProps> = ({ heading, sub, statement }) => {
  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black text-brand-500 uppercase tracking-widest mb-6">
            Grand Design
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase mb-8 leading-none">
            {heading}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-12">
            {sub}
          </p>

          <div className="relative p-8 md:p-12 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center border-4 border-white dark:border-black shadow-lg">
                <span className="text-white font-black text-xl">V</span>
             </div>
             <p className="text-2xl md:text-3xl font-serif italic font-bold text-zinc-900 dark:text-white leading-tight">
               "{statement}"
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
