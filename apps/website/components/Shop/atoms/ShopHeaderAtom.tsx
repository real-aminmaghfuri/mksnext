
"use client";
import React from 'react';

interface ShopHeaderProps {
  title: string;
  subtitle: string;
}

export const ShopHeaderAtom: React.FC<ShopHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="pt-12 pb-16 px-4 relative overflow-hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
       <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">
            {title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
       </div>
    </div>
  );
};
