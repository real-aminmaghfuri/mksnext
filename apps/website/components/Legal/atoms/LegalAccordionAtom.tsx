
"use client";
import React, { useState, useEffect } from 'react';
import { QnaItem } from 'shared';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface LegalAccordionProps {
  items: QnaItem[];
}

export const LegalAccordionAtom: React.FC<LegalAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#faq-')) {
        const index = parseInt(hash.split('-')[1]);
        if (!isNaN(index) && index < items.length) {
          setOpenIndex(index);
          // Scroll to the item
          const element = document.getElementById(`faq-${index}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [items.length]);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
                key={idx} 
                id={`faq-${idx}`}
                className={`bg-white dark:bg-zinc-900/50 border transition-all duration-300 rounded-2xl overflow-hidden scroll-mt-32
                    ${isOpen 
                        ? 'border-brand-500/30 shadow-lg shadow-brand-500/5' 
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
            >
                <button 
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                    <span className={`font-bold text-base md:text-lg transition-colors italic leading-snug ${isOpen ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-800 dark:text-zinc-200'}`}>
                        {item.q}
                    </span>
                    <div className={`p-2 rounded-full transition-colors shrink-0 ml-4 ${isOpen ? 'bg-brand-500/10 text-brand-600' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'}`}>
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                </button>
                
                <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="px-6 pb-8 pt-0">
                        <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-4">
                            {item.a}
                        </p>
                    </div>
                </div>
            </div>
          );
        })}
    </div>
  );
};
