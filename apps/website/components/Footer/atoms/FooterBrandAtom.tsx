
"use client";
import React from 'react';

interface FooterBrandAtomProps {
  description: string;
}

export const FooterBrandAtom: React.FC<FooterBrandAtomProps> = ({ description }) => {
  return (
    <div className="col-span-1 md:col-span-2">
      <div className="mb-6">
        <h2 className="font-black text-3xl tracking-tighter text-zinc-900 dark:text-white uppercase leading-none">
          PT MESIN KASIR SOLO
        </h2>
        {/* Orange Underline Bar */}
        <div className="mt-3 w-24 h-1.5 bg-brand-500 rounded-full" />
      </div>
      
      <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6 mt-6 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
