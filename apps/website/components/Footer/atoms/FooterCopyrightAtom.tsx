
"use client";
import React from 'react';
import { LinkItem } from '../types';
import Link from 'next/link';

interface FooterCopyrightAtomProps {
  copyright: string;
  legalLinks: LinkItem[];
}

export const FooterCopyrightAtom: React.FC<FooterCopyrightAtomProps> = ({ copyright, legalLinks }) => {
  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
      <p className="font-medium">{copyright}</p>
      <div className="flex gap-6 mt-4 md:mt-0">
         {legalLinks.map((item, idx) => (
           <Link 
             key={idx} 
             href={item.href}
             className="hover:text-brand-500 cursor-pointer transition-colors font-medium"
           >
             {item.label}
           </Link>
         ))}
      </div>
    </div>
  );
};
