
"use client";
import React from 'react';
import { LinkItem } from '../types';
import Link from 'next/link';

interface FooterCopyrightAtomProps {
  copyrightBrand: string;
  copyrightMsg: string;
  legalLinks: LinkItem[];
}

export const FooterCopyrightAtom: React.FC<FooterCopyrightAtomProps> = ({ copyrightBrand, copyrightMsg, legalLinks }) => {
  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
      
      {/* 1. Copyright Block (2 Lines) */}
      <div className="flex flex-col gap-1">
         <p className="font-bold text-sm text-zinc-900 dark:text-white">
            {/* Logic to extract "PT Mesin Kasir Solo" and wrap it in Link if present */}
            {copyrightBrand.includes("PT Mesin Kasir Solo") ? (
                <>
                    {copyrightBrand.split("PT Mesin Kasir Solo")[0]} 
                    <Link href="/" className="hover:text-brand-500 transition-colors">PT Mesin Kasir Solo</Link>
                </>
            ) : (
                copyrightBrand
            )}
         </p>
         <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
            {copyrightMsg}
         </p>
      </div>

      {/* 2. Vertical Separator (Desktop Only) */}
      <div className="hidden md:block w-px h-8 bg-zinc-200 dark:bg-zinc-800" />

      {/* 3. Legal Links (Left Aligned next to Copyright) */}
      <div className="flex gap-6 text-xs font-bold text-zinc-500">
         {legalLinks.map((item, idx) => (
           <Link 
             key={idx} 
             href={item.href}
             className="hover:text-brand-500 cursor-pointer transition-colors"
           >
             {item.label}
           </Link>
         ))}
      </div>

    </div>
  );
};