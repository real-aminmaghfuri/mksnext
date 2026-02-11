
"use client";

import React from 'react';
import { useRetail } from './useRetail';
import { RetailHeroAtom } from './atoms/RetailHeroAtom';
import { RetailPainAtom } from './atoms/RetailPainAtom';
import { RetailSystemAtom } from './atoms/RetailSystemAtom';
import { RetailCtaAtom } from './atoms/RetailCtaAtom';

export const RetailSolution: React.FC = () => {
  const content = useRetail();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <RetailHeroAtom content={content.hero} />
      <RetailPainAtom content={content.pain} />
      <RetailSystemAtom content={content.system} />
      <RetailCtaAtom content={content.cta} />
    </section>
  );
};
