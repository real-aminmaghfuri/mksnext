
"use client";
import React from 'react';
import { FileText } from 'lucide-react';

interface PortfolioHeaderProps {
  heading: string;
  headingSpan: string;
  sub: string;
}

export const PortfolioHeaderAtom: React.FC<PortfolioHeaderProps> = ({ heading, headingSpan, sub }) => {
  return (
    <div className="pt-40 pb-16 relative overflow-hidden bg-black text-white text-center">
       {/* Background Effects */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15)_0%,transparent_70%)]" />
       
       <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-brand-500 text-[10px] font-black uppercase tracking-widest mb-6">
             <FileText size={12} /> ARSIP LAPANGAN
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            <span className="text-brand-500">{heading}</span> {headingSpan}
          </h1>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {sub}
          </p>
       </div>
    </div>
  );
};
