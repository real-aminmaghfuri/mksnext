
"use client";

import React from 'react';
import { useLegal } from './useLegal';
import { LegalPageType } from './types';
import { LegalHeaderAtom } from './atoms/LegalHeaderAtom';
import { LegalContentAtom } from './atoms/LegalContentAtom';
import { LegalAccordionAtom } from './atoms/LegalAccordionAtom';

interface LegalProps {
  type: LegalPageType;
}

export const Legal: React.FC<LegalProps> = ({ type }) => {
  const content = useLegal(type);

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24">
      <LegalHeaderAtom 
        title={content.title}
        sub={content.sub}
        type={type}
      />

      <div className="container mx-auto px-6 relative z-10 -mt-10">
         <div className="bg-white dark:bg-zinc-950 p-8 md:p-12 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none min-h-[500px]">
            {type === 'FAQ' ? (
                <LegalAccordionAtom items={content.faqItems || []} />
            ) : (
                <LegalContentAtom content={content.contentHtml || ""} />
            )}
         </div>
      </div>
    </section>
  );
};
