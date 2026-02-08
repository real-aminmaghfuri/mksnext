"use client";

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { LegalityDetailsCard } from './LegalityDetailsCard';
import { LegalityActionCard } from './LegalityActionCard';

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
      {/* Header Section */}
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

      {/* Main Container */}
      <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg dark:shadow-none">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0">
            {/* Step 1 Component: Details List (Left) */}
            <LegalityDetailsCard content={content} />

            {/* Step 2 Component: CTA Action (Right) */}
            <LegalityActionCard content={content} />
        </div>
      </div>
    </div>
  );
};