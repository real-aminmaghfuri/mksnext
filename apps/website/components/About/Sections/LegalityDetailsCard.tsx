
"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BankAccount } from 'shared';

// Define the shape of data required for this specific card
export interface LegalityDetailsContent {
  labelEntity: string;
  valueEntity: string;
  labelNIB: string;
  labelSK: string;
  labelNPWP: string;
  labelBank: string;
  footerNote: string;
  values: {
    nib: string;
    sk: string;
    npwp: string;
    bankAccounts: BankAccount[];
  }
}

interface LegalityDetailsCardProps {
  content: LegalityDetailsContent;
}

export const LegalityDetailsCard: React.FC<LegalityDetailsCardProps> = ({ content }) => {
  return (
    <div className="lg:col-span-8 p-8 md:p-12 space-y-8 md:space-y-0 bg-white/50 dark:bg-luxury-panel/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/50 rounded-2xl shadow-2xl">
                
        {/* Entity Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-zinc-200 dark:border-zinc-800 border-dashed">
            <span className="text-zinc-500 dark:text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em]">{content.labelEntity}</span>
            <div className="flex items-center gap-3 mt-3 md:mt-0">
                <CheckCircle2 size={24} strokeWidth={3} className="text-brand-600 dark:text-brand-500" />
                <span className="text-zinc-900 dark:text-white font-black tracking-[-0.04em] text-3xl uppercase leading-none">{content.valueEntity}</span>
            </div>
        </div>

            {/* NIB Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-zinc-200 dark:border-zinc-800 border-dashed">
            <span className="text-zinc-500 dark:text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em]">{content.labelNIB}</span>
            <span className="text-zinc-900 dark:text-white font-mono font-black mt-3 md:mt-0 text-xl tracking-tight">{content.values.nib}</span>
        </div>

        {/* SK Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-zinc-200 dark:border-zinc-800 border-dashed">
            <span className="text-zinc-500 dark:text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em]">{content.labelSK}</span>
            <span className="text-zinc-900 dark:text-white font-mono font-black mt-3 md:mt-0 text-xl tracking-tight">{content.values.sk}</span>
        </div>

        {/* NPWP Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-zinc-200 dark:border-zinc-800 border-dashed">
            <span className="text-zinc-500 dark:text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em]">{content.labelNPWP}</span>
            <span className="text-zinc-900 dark:text-white font-mono font-black mt-3 md:mt-0 text-xl tracking-tight">{content.values.npwp}</span>
        </div>

        {/* Bank Row - Multi Account */}
        <div className="flex flex-col md:flex-row md:items-start justify-between py-6">
            <span className="text-zinc-500 dark:text-zinc-400 font-black uppercase text-[10px] tracking-[0.2em] mb-4 md:mb-0">{content.labelBank}</span>
            <div className="text-right space-y-6">
                {content.values.bankAccounts.map((acc, idx) => (
                    <div key={idx} className="group/bank">
                        <p className="text-zinc-900 dark:text-white font-mono font-black text-2xl tracking-tighter group-hover/bank:text-brand-600 transition-colors">{acc.accountNumber}</p>
                        <p className="text-zinc-500 dark:text-zinc-400 font-black uppercase text-[10px] tracking-widest mt-1">{acc.bankName} <span className="text-brand-600">/</span> {acc.accountHolder}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-[10px] text-zinc-500 dark:text-zinc-500 italic font-black uppercase tracking-widest leading-relaxed">{content.footerNote}</p>
        </div>
    </div>
  );
};
