
"use client";
import React from 'react';
import Link from 'next/link';
import { Logo, useConfig } from 'ui';
import { DICTIONARY } from 'shared';

export const LogoAtom: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return (
    <Link href="/" aria-label="Mesin Kasir Solo Home" className="flex items-center gap-3 cursor-pointer group shrink-0">
      <div className="group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
         <Logo className="w-10 h-10" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-black text-lg md:text-xl tracking-tighter leading-none text-zinc-900 dark:text-white uppercase">
          MESIN KASIR <span className="text-brand-500">SOLO</span>
        </span>
        <span className="text-[8px] md:text-[9px] font-black text-zinc-500 dark:text-zinc-400 tracking-[0.4em] uppercase leading-tight mt-1.5">
          {text.navTagline}
        </span>
      </div>
    </Link>
  );
};
