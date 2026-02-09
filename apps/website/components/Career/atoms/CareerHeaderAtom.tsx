
"use client";
import React from 'react';
import { UserPlus } from 'lucide-react';

interface CareerHeaderProps {
  heading: string;
  headingSpan: string;
  sub: string;
}

export const CareerHeaderAtom: React.FC<CareerHeaderProps> = ({ heading, headingSpan, sub }) => {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/10 dark:bg-brand-900/20 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="container mx-auto px-6 relative z-10 text-center">
          
          {/* Uniform Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold animate-fade-in-up mx-auto shadow-sm mb-8">
            <UserPlus size={16} className="text-brand-500" />
            <span>JOIN THE RESISTANCE</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
            {heading} <br/>
            <span className="text-brand-600 dark:text-brand-500">{headingSpan}</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            {sub}
          </p>
       </div>
    </div>
  );
};
