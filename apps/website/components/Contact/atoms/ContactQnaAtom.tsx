
"use client";
import React from 'react';
import { QnaItem } from 'shared';
import { HelpCircle } from 'lucide-react';

interface ContactQnaProps {
  items: QnaItem[];
}

export const ContactQnaAtom: React.FC<ContactQnaProps> = ({ items }) => {
  return (
    <div className="container mx-auto px-6 mb-20 relative z-10 -mt-10">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-xl dark:shadow-none">
         <div className="flex items-center gap-2 mb-6 text-brand-600 dark:text-brand-500">
            <HelpCircle size={20} />
            <h3 className="font-bold uppercase tracking-widest text-sm">Quick Intel (FAQ)</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, idx) => (
                <div key={idx} className="space-y-2">
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg">{item.q}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.a}</p>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};
