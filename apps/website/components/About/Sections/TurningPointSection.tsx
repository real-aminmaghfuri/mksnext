
"use client";

import React from 'react';

interface TurningPointSectionProps {
  content: {
    title: string;
    p1: string;
    p1Bold: string;
    p2Pre: string;
    p2Bold: string;
    p2Mid: string;
    p2Italic1: string;
    p2Mid2: string;
    p2Italic2: string;
  };
}

export const TurningPointSection: React.FC<TurningPointSectionProps> = ({ content }) => {
  return (
    <div className="mb-20 md:mb-28 relative max-w-4xl">
      <div className="flex flex-col gap-6 md:gap-8">
        
        {/* Title Block with Red Bar */}
        <div className="flex items-center gap-4 md:gap-8 mb-4">
            <div className="w-2 h-12 md:h-16 bg-gradient-to-b from-red-600 to-brand-700 shadow-[0_0_20px_rgba(220,38,38,0.4)]" />
            <h2 className="text-4xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none uppercase">
                {content.title}
            </h2>
        </div>

        {/* Content Block */}
        <div className="space-y-10 pl-8 md:pl-12 border-l-[1px] border-zinc-200 dark:border-zinc-800/50">
            <p className="text-xl md:text-3xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium opacity-90">
                {content.p1}
                <span className="font-black text-zinc-900 dark:text-white block mt-4 md:inline md:mt-0 underline decoration-brand-500/30 underline-offset-8">{content.p1Bold}</span>
            </p>

            <p className="text-xl md:text-3xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium opacity-90">
                {content.p2Pre}
                <span className="font-black text-zinc-900 dark:text-white">{content.p2Bold}</span>
                {content.p2Mid}
                <span className="italic text-brand-600 dark:text-brand-500 font-black">{content.p2Italic1}</span>
                {content.p2Mid2}
                <span className="italic text-brand-600 dark:text-brand-500 font-black">{content.p2Italic2}</span>
            </p>
        </div>

      </div>
    </div>
  );
};
