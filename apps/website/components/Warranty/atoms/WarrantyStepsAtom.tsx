
"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface WarrantyStepsProps {
  title: string;
  steps: { title: string; desc: string }[];
}

export const WarrantyStepsAtom: React.FC<WarrantyStepsProps> = ({ title, steps }) => {
  return (
    <div className="container mx-auto px-6 py-24">
      <h2 className="text-sm font-black uppercase tracking-widest text-brand-600 dark:text-brand-500 mb-16 text-center">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500 transition-all shadow-xl shadow-black/5 h-full">
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tighter group-hover:text-brand-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-zinc-200 dark:text-zinc-800 z-10">
                <ChevronRight size={32} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
