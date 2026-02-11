
"use client";
import React from 'react';

interface StoreStepProps {
  content: {
    title: string;
    steps: { num: string; title: string; desc: string }[];
  }
}

export const StoreStepAtom: React.FC<StoreStepProps> = ({ content }) => {
  return (
    <div className="py-24 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 relative transition-colors duration-500">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-center text-zinc-900 dark:text-white uppercase tracking-tighter mb-16">
                {content.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.steps.map((step, idx) => (
                    <div key={idx} className="relative group">
                        {/* Connecting Line (Desktop) */}
                        {idx !== content.steps.length - 1 && (
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-zinc-100 dark:bg-zinc-800 z-0" />
                        )}
                        
                        <div className="relative z-10 text-center px-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-zinc-50 dark:bg-zinc-900 border-4 border-white dark:border-black flex items-center justify-center text-xl font-black text-zinc-300 dark:text-zinc-700 group-hover:text-emerald-500 group-hover:border-emerald-500 transition-all duration-300 mb-6 shadow-xl">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-4">
                                {step.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
