
"use client";
import React from 'react';

interface HeroHeadingProps {
  brandName: string;
  title: string;
  subtitle: string;
}

export const HeroHeadingAtom: React.FC<HeroHeadingProps> = ({ brandName, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      {/* 
        SEMANTIC H1 (THE SEO ANCHOR)
        Hidden in plain sight: Designed as a "Kicker" or "Eyebrow" text.
        Google reads this as the main topic. Users see it as a category label.
      */}
      <h1 className="text-xs md:text-sm font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.3em] mb-6 border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-1.5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm">
        Solusi Mesin Kasir & Manajemen Bisnis
      </h1>

      {/* 
        VISUAL DISPLAY TEXT (MARKETING HOOK)
        Semantically a paragraph, but visually the "Title".
        This prevents keyword dilution in the H1.
      */}
      <p className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white drop-shadow-sm mb-8">
        <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-red-600 dark:from-brand-500 dark:to-red-500">
          {brandName}
        </span>
        {title}
      </p>

      <p className="text-lg lg:text-xl text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
