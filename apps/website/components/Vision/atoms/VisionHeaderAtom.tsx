
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

        {/* Vision Card (The Dream) - Striking Background */}
        <div className="relative p-1 rounded-[32px] bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 shadow-2xl max-w-5xl mx-auto group">
             
             {/* Main Card Content with Solid/Gradient Background */}
             <div className="bg-gradient-to-br from-brand-600 to-red-600 rounded-[28px] p-8 md:p-14 relative overflow-hidden h-full flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-inner">
                 
                 {/* Decorative Glow inside card */}
                 <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[80px] rounded-full pointer-events-none" />

                 {/* Icon Box - White now for contrast */}
                 <div className="relative z-10 w-20 h-20 shrink-0 rounded-3xl bg-white text-brand-600 flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <Target size={40} />
                 </div>

                 <div className="flex-1 text-center md:text-left relative z-20">
                    <h3 className="text-xs font-black text-brand-100 mb-3 uppercase tracking-[0.2em] opacity-90">
                        {visionTitle}
                    </h3>
                    {/* Reduced Text Size */}
                    <p className="text-xl md:text-2xl font-bold text-white leading-snug tracking-tight">
                        "{statement}"
                    </p>
                 </div>

                 {/* Decorative Shapes */}
                 <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full border-4 border-white/10 z-0 pointer-events-none" />
             </div>
        </div>

      </div>
    </div>
  );
};
