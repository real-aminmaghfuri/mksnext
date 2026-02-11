
"use client";
import React from 'react';
import { Skull } from 'lucide-react';

interface RetailPainProps {
  content: {
    title: string;
    sub: string;
    points: string[];
  }
}

export const RetailPainAtom: React.FC<RetailPainProps> = ({ content }) => {
  return (
    <div className="py-24 bg-red-50 dark:bg-zinc-950 border-y border-red-100 dark:border-zinc-800 relative transition-colors duration-500">
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/20 rounded-full text-red-600 dark:text-red-500 mb-6">
                    <Skull size={40} />
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
                    <div key={idx} className="bg-white dark:bg-black p-8 rounded-3xl border border-red-200 dark:border-red-900/30 shadow-lg dark:shadow-none flex items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
                        <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200 leading-tight">
                            "{point}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
