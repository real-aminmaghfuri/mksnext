"use client";

import React from 'react';
import { Button } from 'ui';

// Define the shape of data required for the CTA card
export interface LegalityActionContent {
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}

interface LegalityActionCardProps {
  content: LegalityActionContent;
}

export const LegalityActionCard: React.FC<LegalityActionCardProps> = ({ content }) => {
  return (
    <div className="lg:col-span-4 p-6 md:p-10 bg-gradient-to-br from-brand-600 to-red-700 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05))] bg-[size:20px_20px] opacity-20" />
        
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[50px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center lg:text-left">
            {/* White Title Text - High Contrast */}
            <h4 className="font-black tracking-widest text-xl md:text-2xl mb-4 text-white drop-shadow-md uppercase">
                {content.ctaTitle}
            </h4>
            
            {/* White Description Text */}
            <p className="text-white/90 text-sm leading-relaxed mb-8 font-bold">
                {content.ctaDesc}
            </p>
            
            <a href="https://oss.go.id" target="_blank" rel="noopener noreferrer" className="block w-full">
                {/* White Button for maximum contrast on dark gradient */}
                <Button fullWidth className="bg-white text-brand-700 hover:bg-zinc-100 shadow-xl shadow-black/20 border-none font-black uppercase tracking-wider">
                    {content.ctaBtn}
                </Button>
            </a>
        </div>
    </div>
  );
};
