
"use client";

import React from 'react';
import { useFranchise } from './useFranchise';
import { FranchiseHeroAtom } from './atoms/FranchiseHeroAtom';
import { FranchisePainAtom } from './atoms/FranchisePainAtom';
import { FranchiseSystemAtom } from './atoms/FranchiseSystemAtom';
import { FranchiseCtaAtom } from './atoms/FranchiseCtaAtom';

export const FranchiseSolution: React.FC = () => {
  const content = useFranchise();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <FranchiseHeroAtom content={content.hero} />
      <FranchisePainAtom content={content.pain} />
      <FranchiseSystemAtom content={content.system} />
      <FranchiseCtaAtom content={content.cta} />
    </section>
  );
};
