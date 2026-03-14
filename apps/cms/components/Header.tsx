
"use client";
import React from 'react';
import { useData } from '../contexts/DataContext';
import Image from 'next/image';

export const Header: React.FC<{ title: string }> = ({ title }) => {
  const { user } = useData();
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-20">
      <h2 className="text-xl font-black tracking-tight uppercase">{title}</h2>
      <div className="flex items-center gap-3">
         <div className="text-right hidden sm:block">
            <p className="text-xs font-black leading-none mb-0.5">{user.name}</p>
            <p className="text-[9px] text-zinc-500 font-bold uppercase leading-none">{user.role}</p>
         </div>
         <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative">
            <Image src={user.avatar} alt="User" fill className="object-cover" />
         </div>
      </div>
    </header>
  );
};
