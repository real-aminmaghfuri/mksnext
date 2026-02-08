
"use client";
import React, { useState } from 'react';
import { QnaItem } from 'shared';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ContactQnaProps {
  items: QnaItem[];
}

export const ContactQnaAtom: React.FC<ContactQnaProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="container mx-auto px-6 mt-20 mb-20 max-w-4xl relative z-10">
      <div className="flex flex-col items-center mb-10 text-center">
         <div className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-500 mb-2">
            <HelpCircle size={24} />
            <h3 className="font-bold uppercase tracking-widest text-sm">Quick Intel (FAQ)</h3>
         </div>
         <p className="text-zinc-500 dark:text-zinc-400 text-sm">Jawaban cepat buat pertanyaan yang sering masuk.</p>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
                key={idx} 
                className={`bg-white dark:bg-zinc-900 border transition-all duration-300 rounded-2xl overflow-hidden
                    ${isOpen 
                        ? 'border-brand-500/30 shadow-lg shadow-brand-500/5' 
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
            >
                <button 
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                    <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-900 dark:text-white'}`}>
                        {item.q}
                    </span>
                    <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-brand-500/10 text-brand-600' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'}`}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                </button>
                
                <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="px-6 pb-6 pt-0">
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-4">
                            {item.a}
                        </p>
                    </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
