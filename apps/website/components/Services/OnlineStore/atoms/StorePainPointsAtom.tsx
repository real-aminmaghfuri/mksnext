
"use client";
import React from 'react';
import { XCircle, CheckCircle2, AlertOctagon } from 'lucide-react';
import { ComparisonItem } from '../types';

interface StorePainPointsProps {
  content: {
    title: string;
    sub: string;
    manualTitle: string;
    autoTitle: string;
    comparisons: ComparisonItem[];
  }
}

export const StorePainPointsAtom: React.FC<StorePainPointsProps> = ({ content }) => {
  return (
    <div className="py-24 bg-white dark:bg-black border-y border-zinc-200 dark:border-zinc-800 relative overflow-hidden transition-colors duration-500">
        {/* Background Noise */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 text-red-600 dark:text-red-500 mb-4 animate-pulse">
                    <AlertOctagon size={24} />
                    <h4 className="font-black uppercase tracking-widest text-sm">REALITY CHECK</h4>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6">
                    {content.title}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
                    {content.sub}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Manual / Hell Mode */}
                <div className="p-8 rounded-3xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/50 relative overflow-hidden group shadow-sm dark:shadow-none">
                    <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10">
                        <XCircle size={120} className="text-red-500" />
                    </div>
                    <h3 className="text-2xl font-black text-red-600 dark:text-red-500 uppercase mb-8 tracking-tight">
                        {content.manualTitle}
                    </h3>
                    <ul className="space-y-6 relative z-10">
                        {content.comparisons.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                <XCircle size={20} className="text-red-500 mt-1 shrink-0" />
                                <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">{item.manual}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Auto / Heaven Mode */}
                <div className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 relative overflow-hidden group shadow-xl shadow-emerald-500/10 dark:shadow-emerald-900/10">
                    <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10">
                        <CheckCircle2 size={120} className="text-emerald-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-500 uppercase mb-8 tracking-tight">
                        {content.autoTitle}
                    </h3>
                    <ul className="space-y-6 relative z-10">
                        {content.comparisons.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-500 mt-1 shrink-0" />
                                <p className="text-zinc-900 dark:text-white font-bold leading-relaxed">{item.auto}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};
