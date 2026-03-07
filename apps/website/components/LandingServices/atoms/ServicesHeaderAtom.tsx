
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
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold animate-fade-in-up mx-auto shadow-sm mb-8">
          <Layers size={16} className="text-brand-500" />
          <span>OUR SOLUTIONS</span>
      </div>

      <h2 className="text-fluid-h1 font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
        {title}
      </h2>
      <p className="text-fluid-body text-zinc-600 dark:text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
};
