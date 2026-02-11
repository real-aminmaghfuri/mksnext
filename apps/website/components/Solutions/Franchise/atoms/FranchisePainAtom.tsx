
"use client";
import React from 'react';
import { Ghost, Unplug } from 'lucide-react';

interface FranchisePainProps {
  content: {
    title: string;
    sub: string;
    points: string[];
  }
}

export const FranchisePainAtom: React.FC<FranchisePainProps> = ({ content }) => {
  return (
    <div className="py-24 bg-violet-50 dark:bg-zinc-950 border-y border-violet-100 dark:border-zinc-800 relative transition-colors duration-500">
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-violet-100 dark:bg-violet-900/20 rounded-full text-violet-600 dark:text-violet-500 mb-6">
                    <Unplug size={40} className="animate-pulse" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6">
                    {content.title}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
                    {content.sub}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.points.map((point, idx) => (
                    <div key={idx} className="bg-white dark:bg-black p-8 rounded-3xl border border-violet-200 dark:border-violet-900/30 shadow-lg dark:shadow-none flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Ghost size={80} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-500 flex items-center justify-center font-black mb-4">
                            {idx + 1}
                        </div>
                        <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200 leading-tight relative z-10">
                            "{point}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
