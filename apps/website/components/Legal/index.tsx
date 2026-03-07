
"use client";

import React from 'react';
import { useLegal } from './useLegal';
import { useLegalSidebar } from './hooks/useLegalSidebar';
import { LegalPageType } from './types';
import { LegalHeaderAtom } from './atoms/LegalHeaderAtom';
import { LegalContentAtom } from './atoms/LegalContentAtom';
import { LegalAccordionAtom } from './atoms/LegalAccordionAtom';
import { LegalSidebarAtom } from './atoms/LegalSidebarAtom';
import { LegalMobileNavAtom } from './atoms/LegalMobileNavAtom';

interface LegalProps {
  type: LegalPageType;
}

export const Legal: React.FC<LegalProps> = ({ type }) => {
  const content = useLegal(type);
  const { navGroups } = useLegalSidebar();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24">
      <LegalHeaderAtom 
        title={content.title}
        sub={content.sub}
        type={type}
      />

      {/* Mobile Navigation - Sticky below header */}
      <LegalMobileNavAtom data={navGroups} />

      <div className="container mx-auto px-6 relative z-10 -mt-10">
         
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Column (Left) - Hidden on Mobile */}
            <div className="hidden lg:block lg:col-span-3">
                <LegalSidebarAtom data={navGroups} />
            </div>

            {/* Content Column (Right) */}
            <div className="lg:col-span-9">
                <div className="bg-white dark:bg-zinc-950 p-8 md:p-12 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none min-h-[500px]">
                    {type === 'FAQ' ? (
                        <LegalAccordionAtom items={content.faqItems || []} />
                    ) : (
                        <LegalContentAtom content={content.contentHtml || ""} />
                    )}
                </div>
            </div>

         </div>

      </div>
    </section>
  );
};
