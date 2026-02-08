
"use client";
import React from 'react';
import { Button } from 'ui';

interface PortfolioCtaProps {
  title: string;
  sub: string;
  btnText: string;
}

export const PortfolioCtaAtom: React.FC<PortfolioCtaProps> = ({ title, sub, btnText }) => {
  return (
    <div className="bg-black py-24 border-t border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-900/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                {title}
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8">
                {sub}
            </p>
            <a href="https://wa.me/628816566935" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="uppercase tracking-widest font-black shadow-xl shadow-brand-900/40">
                    {btnText}
                </Button>
            </a>
        </div>
    </div>
  );
};
