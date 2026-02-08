
"use client";

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from 'ui';

interface LegalityData {
  title: string;
  desc: string;
  labelEntity: string;
  valueEntity: string;
  labelNIB: string;
  labelSK: string;
  labelNPWP: string;
  labelBank: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
  footerNote: string;
  values: {
    nib: string;
    sk: string;
    npwp: string;
    bank: string;
    bankName: string;
  }
}

interface LegalitySectionProps {
  content: LegalityData;
}

export const LegalitySection: React.FC<LegalitySectionProps> = ({ content }) => {
  return (
    <div className="mb-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
            <ShieldCheck size={32} strokeWidth={2.5} />
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4">
            {content.title}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
            {content.desc}
        </p>
      </div>

      {/* Main Card */}
      <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg dark:shadow-none">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0">
            {/* Left Side: Data List with Orange 500 at 20% Opacity + Readable Text */}
            <div className="lg:col-span-8 p-6 md:p-10 space-y-6 md:space-y-0 bg-orange-500/20 backdrop-blur-md">
                
                {/* Entity Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-black/10 dark:border-white/10 border-dashed">
                    <span className="text-zinc-800 dark:text-zinc-200 font-bold">{content.labelEntity}</span>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <CheckCircle2 size={16} className="text-brand-700 dark:text-brand-500" />
                        <span className="text-zinc-900 dark:text-white font-black tracking-tight text-lg">{content.valueEntity}</span>
                    </div>
                </div>

                 {/* NIB Row */}
                 <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-black/10 dark:border-white/10 border-dashed">
                    <span className="text-zinc-800 dark:text-zinc-200 font-bold">{content.labelNIB}</span>
                    <span className="text-zinc-900 dark:text-white font-mono font-black mt-2 md:mt-0">{content.values.nib}</span>
                </div>

                {/* SK Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-black/10 dark:border-white/10 border-dashed">
                    <span className="text-zinc-800 dark:text-zinc-200 font-bold">{content.labelSK}</span>
                    <span className="text-zinc-900 dark:text-white font-mono font-black mt-2 md:mt-0">{content.values.sk}</span>
                </div>

                {/* NPWP Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-black/10 dark:border-white/10 border-dashed">
                    <span className="text-zinc-800 dark:text-zinc-200 font-bold">{content.labelNPWP}</span>
                    <span className="text-zinc-900 dark:text-white font-mono font-black mt-2 md:mt-0">{content.values.npwp}</span>
                </div>

                {/* Bank Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4">
                    <span className="text-zinc-800 dark:text-zinc-200 font-bold">{content.labelBank}</span>
                    <div className="text-right mt-2 md:mt-0">
                        <p className="text-zinc-900 dark:text-white font-mono font-black text-lg">{content.values.bank}</p>
                        <p className="text-[10px] text-zinc-700 dark:text-zinc-300 font-bold uppercase">{content.values.bankName}</p>
                    </div>
                </div>

                <div className="pt-4">
                     <p className="text-xs text-zinc-600 dark:text-zinc-400 italic font-medium">{content.footerNote}</p>
                </div>
            </div>

            {/* Right Side: CTA with Gradient (80% opacity) */}
            <div className="lg:col-span-4 p-6 md:p-10 bg-gradient-to-br from-brand-600/80 to-red-600/80 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1))] bg-[size:20px_20px] opacity-20" />
                
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 blur-[50px] rounded-full pointer-events-none" />

                <div className="relative z-10 text-center lg:text-left">
                    {/* Blue Title Text - Size Increased to 2xl */}
                    <h4 className="font-black tracking-widest text-xl md:text-2xl mb-4 text-blue-200 drop-shadow-md uppercase">
                        {content.ctaTitle}
                    </h4>
                    
                    <p className="text-white/95 text-sm leading-relaxed mb-8 font-bold">
                        {content.ctaDesc}
                    </p>
                    
                    <a href="https://oss.go.id" target="_blank" rel="noopener noreferrer" className="block w-full">
                        {/* Blue Button */}
                        <Button fullWidth className="!bg-blue-600 !bg-none hover:!bg-blue-700 text-white shadow-xl shadow-blue-900/30 border-none">
                            {content.ctaBtn}
                        </Button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
