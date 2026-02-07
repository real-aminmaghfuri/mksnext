
"use client";
import React from 'react';

interface HeroHeadingProps {
  brandName: string;
  title: string;
  subtitle: string;
}

export const HeroHeadingAtom: React.FC<HeroHeadingProps> = ({ brandName, title, subtitle }) => {
  return (
    <>
      <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white drop-shadow-sm">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-red-600 dark:from-brand-500 dark:to-red-500">
          {brandName}
        </span>
        <br />
        {title}
      </h1>
      <p className="text-lg lg:text-xl text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
        {subtitle}
      </p>
    </>
  );
};
