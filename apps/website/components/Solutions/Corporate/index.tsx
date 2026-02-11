
"use client";

import React from 'react';
import { useCorporate } from './useCorporate';
import { CorporateHeroAtom } from './atoms/CorporateHeroAtom';
import { CorporatePainAtom } from './atoms/CorporatePainAtom';
import { CorporateSystemAtom } from './atoms/CorporateSystemAtom';
import { CorporateCtaAtom } from './atoms/CorporateCtaAtom';

export const CorporateSolution: React.FC = () => {
  const content = useCorporate();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <CorporateHeroAtom content={content.hero} />
      <CorporatePainAtom content={content.pain} />
      <CorporateSystemAtom content={content.system} />
      <CorporateCtaAtom content={content.cta} />
    </section>
  );
};
