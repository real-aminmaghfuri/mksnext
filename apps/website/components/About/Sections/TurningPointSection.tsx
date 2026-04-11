
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
        <div className="flex items-center gap-4 md:gap-8 mb-6">
            <div className="w-2.5 h-16 md:h-24 bg-gradient-to-b from-red-600 to-brand-700 shadow-[0_0_30px_rgba(220,38,38,0.5)]" />
            <h2 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-[-0.06em] uppercase leading-[0.75]">
                {content.title}
            </h2>
        </div>

        {/* Content Block */}
        <div className="space-y-12 pl-10 md:pl-16 border-l-[2px] border-zinc-200 dark:border-zinc-800/50">
            <p className="text-2xl md:text-4xl leading-[1.1] text-zinc-600 dark:text-zinc-400 font-bold tracking-tight opacity-90">
                {content.p1}
                <span className="font-black text-zinc-900 dark:text-white block mt-6 underline decoration-brand-500/40 underline-offset-[12px] decoration-4">{content.p1Bold}</span>
            </p>

            <p className="text-2xl md:text-4xl leading-[1.1] text-zinc-600 dark:text-zinc-400 font-bold tracking-tight opacity-90">
                {content.p2Pre}
                <span className="font-black text-zinc-900 dark:text-white">{content.p2Bold}</span>
                {content.p2Mid}
                <span className="italic text-brand-600 dark:text-brand-500 font-black drop-shadow-sm">{content.p2Italic1}</span>
                {content.p2Mid2}
                <span className="italic text-brand-600 dark:text-brand-500 font-black drop-shadow-sm">{content.p2Italic2}</span>
            </p>
        </div>

      </div>
    </div>
  );
};
