
"use client";
import React from 'react';
import { Layers } from 'lucide-react';

interface ServicesHeaderProps {
  title: string;
  subtitle: string;
}

export const ServicesHeaderAtom: React.FC<ServicesHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      
      {/* Uniform Hero Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-black uppercase tracking-widest animate-fade-in-up shadow-sm mb-8">
          <Layers size={14} strokeWidth={3} className="text-brand-500" />
          <span>OUR SOLUTIONS</span>
      </div>

      <h2 className="text-fluid-h1 font-black text-zinc-900 dark:text-white mb-6 tracking-tighter leading-tight">
        {title}
      </h2>
      <p className="text-fluid-body text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto opacity-90">
        {subtitle}
      </p>
    </div>
  );
};
