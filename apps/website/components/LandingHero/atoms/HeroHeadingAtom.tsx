
"use client";
import React from 'react';

interface HeroHeadingProps {
  brandName: string;
  title: string;
  subtitle: string;
}

export const HeroHeadingAtom: React.FC<HeroHeadingProps> = ({ brandName, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center w-full">
      {/* 
        SEMANTIC H1 (THE SEO ANCHOR)
        Refined as a sharp, elegant kicker.
      */}
      <h1 className="text-[10px] md:text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-[0.4em] mb-8 animate-fade-in-up">
        Solusi Mesin Kasir & Manajemen Bisnis
      </h1>

      {/* 
        VISUAL DISPLAY TEXT (MARKETING HOOK)
        Massive, sharp, and commanding.
      */}
      <div className="text-fluid-display font-black tracking-tighter leading-[0.95] text-zinc-900 dark:text-white mb-10 animate-fade-in-up [animation-delay:100ms] w-full">
        <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-br from-brand-500 via-brand-600 to-red-700">
          {brandName}
        </span>
        <div className="opacity-90">
          {title}
        </div>
      </div>

      <p className="text-fluid-body text-zinc-600 dark:text-zinc-400 max-w-2xl font-medium leading-relaxed opacity-80 animate-fade-in-up [animation-delay:200ms]">
        {subtitle}
      </p>
    </div>
  );
};
