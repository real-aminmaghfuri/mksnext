
"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BankAccount } from 'data';

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
    <div className="lg:col-span-8 p-6 md:p-10 space-y-6 md:space-y-0 bg-blue-600/15 backdrop-blur-md">
                
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

        {/* Bank Row - Multi Account */}
        <div className="flex flex-col md:flex-row md:items-start justify-between py-4">
            <span className="text-zinc-800 dark:text-zinc-200 font-bold mb-2 md:mb-0">{content.labelBank}</span>
            <div className="text-right space-y-4">
                {content.values.bankAccounts.map((acc, idx) => (
                    <div key={idx}>
                        <p className="text-zinc-900 dark:text-white font-mono font-black text-lg">{acc.accountNumber}</p>
                        <p className="text-zinc-900 dark:text-zinc-300 font-bold uppercase text-[10px]">{acc.bankName} - {acc.accountHolder}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="pt-4">
                <p className="text-xs text-zinc-600 dark:text-zinc-400 italic font-medium">{content.footerNote}</p>
        </div>
    </div>
  );
};
