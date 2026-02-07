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
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
            {content.title}
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
            {content.desc}
        </p>
      </div>

      {/* Main Card */}
      <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
            {/* Left Side: Data List */}
            <div className="lg:col-span-8 p-6 md:p-10 space-y-6 md:space-y-0">
                
                {/* Entity Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-zinc-800 border-dashed">
                    <span className="text-zinc-500 font-medium">{content.labelEntity}</span>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        <span className="text-white font-bold tracking-tight text-lg">{content.valueEntity}</span>
                    </div>
                </div>

                 {/* NIB Row */}
                 <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-zinc-800 border-dashed">
                    <span className="text-zinc-500 font-medium">{content.labelNIB}</span>
                    <span className="text-white font-mono font-bold mt-2 md:mt-0">{content.values.nib}</span>
                </div>

                {/* SK Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-zinc-800 border-dashed">
                    <span className="text-zinc-500 font-medium">{content.labelSK}</span>
                    <span className="text-white font-mono font-bold mt-2 md:mt-0">{content.values.sk}</span>
                </div>

                {/* NPWP Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-zinc-800 border-dashed">
                    <span className="text-zinc-500 font-medium">{content.labelNPWP}</span>
                    <span className="text-white font-mono font-bold mt-2 md:mt-0">{content.values.npwp}</span>
                </div>

                {/* Bank Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4">
                    <span className="text-zinc-500 font-medium">{content.labelBank}</span>
                    <div className="text-right mt-2 md:mt-0">
                        <p className="text-white font-mono font-bold text-lg">{content.values.bank}</p>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase">{content.values.bankName}</p>
                    </div>
                </div>

                <div className="pt-4">
                     <p className="text-xs text-zinc-500 italic">{content.footerNote}</p>
                </div>
            </div>

            {/* Right Side: CTA */}
            <div className="lg:col-span-4 p-6 md:p-10 bg-zinc-950/50 border-t lg:border-t-0 lg:border-l border-zinc-800 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px]" />
                
                <div className="relative z-10 text-center lg:text-left">
                    <h4 className="text-blue-500 font-black tracking-widest text-sm mb-2">{content.ctaTitle}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        {content.ctaDesc}
                    </p>
                    <a href="https://oss.go.id" target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button fullWidth className="bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20 border-none text-white">
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