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
    <div className="lg:col-span-4 p-6 md:p-10 bg-indigo-700 dark:bg-gradient-to-br dark:from-blue-600/60 dark:to-indigo-600/60 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1))] bg-[size:20px_20px] opacity-20" />
        
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 blur-[50px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center lg:text-left">
            {/* Orange Title Text - Calibrated for contrast */}
            <h4 className="font-black tracking-widest text-xl md:text-2xl mb-4 text-brand-300 dark:text-brand-400 drop-shadow-md uppercase">
                {content.ctaTitle}
            </h4>
            
            {/* White Description Text */}
            <p className="text-white text-sm leading-relaxed mb-8 font-bold">
                {content.ctaDesc}
            </p>
            
            <a href="https://oss.go.id" target="_blank" rel="noopener noreferrer" className="block w-full">
                {/* Orange-Red Gradient Button */}
                <Button fullWidth className="bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 text-white shadow-xl shadow-brand-900/30 border-none">
                    {content.ctaBtn}
                </Button>
            </a>
        </div>
    </div>
  );
};
