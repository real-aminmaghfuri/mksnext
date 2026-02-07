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
    <div className="mb-40 md:mb-56 relative max-w-4xl">
      <div className="flex flex-col gap-6 md:gap-8">
        
        {/* Title Block with Red Bar */}
        <div className="flex items-center gap-4 md:gap-6 mb-2">
            <div className="w-1.5 h-10 md:h-12 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                {content.title}
            </h2>
        </div>

        {/* Content Block */}
        <div className="space-y-8 pl-6 md:pl-8 border-l border-zinc-800">
            <p className="text-lg md:text-xl leading-relaxed text-zinc-400">
                {content.p1}
                <span className="font-bold text-white block mt-2 md:inline md:mt-0">{content.p1Bold}</span>
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-zinc-400">
                {content.p2Pre}
                <span className="font-bold text-white">{content.p2Bold}</span>
                {content.p2Mid}
                <span className="italic text-zinc-300 font-medium">{content.p2Italic1}</span>
                {content.p2Mid2}
                <span className="italic text-zinc-300 font-medium">{content.p2Italic2}</span>
            </p>
        </div>

      </div>
    </div>
  );
};