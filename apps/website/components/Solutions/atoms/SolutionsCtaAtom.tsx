
"use client";
import React from 'react';
import { Button } from 'ui';
import { MessageSquare } from 'lucide-react';

interface SolutionsCtaProps {
  title: string;
  desc: string;
  btn: string;
}

export const SolutionsCtaAtom: React.FC<SolutionsCtaProps> = ({ title, desc, btn }) => {
  return (
    <div className="container mx-auto px-6 mb-24">
      <div className="rounded-[32px] bg-gradient-to-br from-zinc-900 to-black p-10 md:p-16 text-center relative overflow-hidden border border-zinc-800 shadow-2xl">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-600/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            {title}
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
            {desc}
          </p>
          <a href="/contact">
             <Button size="lg" className="bg-brand-600 hover:bg-brand-500 text-white font-black tracking-widest uppercase px-10 shadow-lg shadow-brand-900/40">
                <MessageSquare size={18} className="mr-2" /> {btn}
             </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
