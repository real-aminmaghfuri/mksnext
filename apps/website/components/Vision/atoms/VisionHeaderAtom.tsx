
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
        <div className="relative p-1.5 rounded-[32px] bg-gradient-to-b from-zinc-200 via-white to-zinc-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-black border border-zinc-200 dark:border-zinc-800 shadow-2xl dark:shadow-brand-900/10 overflow-hidden max-w-5xl mx-auto group">
             {/* Card Background Glow Effect */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-brand-500/5 dark:bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />

             <div className="bg-white/60 dark:bg-zinc-950/80 rounded-[28px] p-8 md:p-14 relative overflow-hidden h-full flex flex-col md:flex-row items-center gap-8 md:gap-16 backdrop-blur-xl">
                 
                 {/* Icon Box */}
                 <div className="relative z-10 w-24 h-24 shrink-0 rounded-3xl bg-gradient-to-br from-brand-500 to-red-600 flex items-center justify-center shadow-lg shadow-brand-500/30 text-white transform group-hover:scale-105 transition-transform duration-500">
                    <Target size={48} />
                 </div>

                 <div className="flex-1 text-center md:text-left relative z-20">
                    <h3 className="text-sm font-black text-brand-600 dark:text-brand-500 mb-3 uppercase tracking-[0.2em]">
                        {visionTitle}
                    </h3>
                    <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 dark:text-white font-black leading-tight tracking-tight">
                        "{statement}"
                    </p>
                 </div>

                 {/* Decorative Circle - Moved to z-0 to sit BEHIND text */}
                 <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border-[30px] border-zinc-50 dark:border-zinc-800/30 z-0 pointer-events-none opacity-50" />
                 <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full border-[20px] border-zinc-100 dark:border-zinc-800/50 z-0 pointer-events-none opacity-50" />
             </div>
        </div>

      </div>
    </div>
  );
};
