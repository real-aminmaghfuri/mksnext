
"use client";
import React from 'react';
import { UserPlus } from 'lucide-react';

interface CareerHeaderProps {
  heading: string;
  headingSpan: string;
  sub: string;
}

export const CareerHeaderAtom: React.FC<CareerHeaderProps> = ({ heading, headingSpan, sub }) => {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-black">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="container mx-auto px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-white text-[10px] font-black uppercase tracking-widest mb-8">
            <UserPlus size={12} className="text-brand-500" />
            JOIN THE RESISTANCE
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            {heading} <br/>
            <span className="text-brand-500">{headingSpan}</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            {sub}
          </p>
       </div>
    </div>
  );
};
