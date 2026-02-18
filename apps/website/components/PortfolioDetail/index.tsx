
"use client";

import React, { useEffect } from 'react';
import { PortfolioItem } from 'shared';
import { usePortfolioDetail } from './usePortfolioDetail';
import { PortfolioDetailHeroAtom } from './atoms/PortfolioDetailHeroAtom';
import { PortfolioDetailContentAtom } from './atoms/PortfolioDetailContentAtom';
import Link from 'next/link';
import { ArrowLeft, X } from 'lucide-react';

interface PortfolioDetailProps {
  item: PortfolioItem;
}

export const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ item }) => {
  const { isDigital } = usePortfolioDetail(item);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden flex flex-col animate-fade-in-up">
       
       {/* Top Nav (Mobile) */}
       <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 shrink-0 lg:hidden">
          <Link href="/portfolio" className="p-2 -ml-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
             <ArrowLeft size={24} />
          </Link>
          <span className="font-bold text-xs uppercase tracking-widest line-clamp-1">{item.title}</span>
          <div className="w-8" /> 
       </div>

       {/* Close Button (Desktop) */}
       <Link 
         href="/portfolio" 
         className="hidden lg:flex absolute top-6 right-6 z-[60] w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 items-center justify-center text-zinc-900 dark:text-white transition-all hover:rotate-90 shadow-xl border border-zinc-200 dark:border-zinc-700"
       >
          <X size={24} strokeWidth={2.5} />
       </Link>

       <div className="flex-1 overflow-y-auto custom-scrollbar">
          <PortfolioDetailHeroAtom item={item} isDigital={isDigital} />
          <PortfolioDetailContentAtom item={item} />
       </div>

    </div>
  );
};
