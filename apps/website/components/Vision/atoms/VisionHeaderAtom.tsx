
"use client";
import React from 'react';
import { Target } from 'lucide-react';

interface VisionHeaderProps {
  heading: string;
  sub: string;
  visionTitle: string;
  statement: string;
}

export const VisionHeaderAtom: React.FC<VisionHeaderProps> = ({ heading, sub, visionTitle, statement }) => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-900">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-black z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/5 dark:bg-brand-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Heading */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-brand-600 dark:text-brand-500 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
             Peta Perang Kita
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
            {heading.split('&').map((part, i) => (
               <span key={i} className={i === 1 ? "text-brand-600 dark:text-brand-500 block md:inline" : "block md:inline"}>
                 {part.trim()} {i === 0 && <span className="text-zinc-900 dark:text-white">&</span>} 
               </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            {sub}
          </p>
        </div>

        {/* Vision Card (The Dream) */}
        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden max-w-4xl mx-auto">
             <div className="bg-white/80 dark:bg-zinc-950/90 rounded-[22px] p-8 md:p-12 relative overflow-hidden h-full flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-sm">
                 
                 {/* Icon Box */}
                 <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-brand-500 to-red-600 flex items-center justify-center shadow-lg shadow-brand-500/20 text-white">
                    <Target size={40} />
                 </div>

                 <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tight">
                        {visionTitle}
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                        "{statement}"
                    </p>
                 </div>

                 {/* Decorative Circle */}
                 <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[20px] border-zinc-100 dark:border-zinc-900/50" />
                 <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full border-[20px] border-zinc-100 dark:border-zinc-900/50" />
             </div>
        </div>

      </div>
    </div>
  );
};
