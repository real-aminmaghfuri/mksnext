
"use client";
import React from 'react';
import { AlertTriangle, CheckCircle2, FileX } from 'lucide-react';
import { ProblemItem } from '../types';

interface WebAppProblemProps {
  content: {
    title: string;
    sub: string;
    items: ProblemItem[];
  }
}

export const WebAppProblemAtom: React.FC<WebAppProblemProps> = ({ content }) => {
  return (
    <div className="py-24 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900 relative transition-colors duration-500">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Heading */}
                <div>
                    <div className="inline-flex items-center gap-2 text-red-600 dark:text-red-500 mb-6">
                        <AlertTriangle size={24} className="animate-pulse" />
                        <h4 className="font-black uppercase tracking-widest text-sm">SYSTEM FAILURE DETECTED</h4>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6">
                        {content.title}
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                        {content.sub}
                    </p>
                </div>

                {/* Right: List */}
                <div className="space-y-6">
                    {content.items.map((item, idx) => (
                        <div key={idx} className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none transition-all">
                            <div className="flex items-start gap-4 mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                <FileX size={20} className="text-red-500 shrink-0 mt-1" />
                                <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm line-through decoration-red-500/50">
                                    {item.problem}
                                </p>
                            </div>
                            <div className="flex items-start gap-4 pl-4 border-l-2 border-blue-500">
                                <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-500 shrink-0 mt-1" />
                                <p className="text-zinc-900 dark:text-white font-bold text-base leading-snug">
                                    {item.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
  );
};
