
"use client";
import React from 'react';

interface CareerHeaderProps {
  heading: string;
  sub: string;
}

export const CareerHeaderAtom: React.FC<CareerHeaderProps> = ({ heading, sub }) => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden bg-zinc-950">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[150px] pointer-events-none opacity-50" />
       <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-900 text-red-500 text-[10px] font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Hiring Now
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            {sub}
          </p>
       </div>
    </div>
  );
};
