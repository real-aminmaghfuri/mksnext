
"use client";
import React from 'react';
import { ProcessItem } from '../types';

interface WebAppFlowProps {
  content: {
    title: string;
    steps: ProcessItem[];
  }
}

export const WebAppFlowAtom: React.FC<WebAppFlowProps> = ({ content }) => {
  return (
    <div className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-500">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-center text-zinc-900 dark:text-white uppercase tracking-tighter mb-20">
                {content.title}
            </h2>

            <div className="relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-zinc-100 dark:bg-zinc-800 -translate-y-1/2 z-0" />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {content.steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 bg-white dark:bg-zinc-950 lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-zinc-200 dark:border-zinc-800 lg:border-none shadow-sm lg:shadow-none">
                            <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 border-4 border-white dark:border-zinc-800 flex items-center justify-center text-xl font-black text-zinc-400 dark:text-zinc-500 mb-6 mx-auto group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:border-blue-500 transition-colors shadow-lg relative">
                                {step.num}
                                {idx < content.steps.length - 1 && (
                                    <div className="lg:hidden absolute bottom-[-40px] left-1/2 w-1 h-8 bg-zinc-100 dark:bg-zinc-800 -translate-x-1/2" />
                                )}
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 font-medium text-sm leading-relaxed">
                                    {step.desc}
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
