
"use client";

import React from 'react';
import { useFnb } from './useFnb';
import { FnbHeroAtom } from './atoms/FnbHeroAtom';
import { FnbPainPointsAtom } from './atoms/FnbPainPointsAtom';
import { FnbFeaturesAtom } from './atoms/FnbFeaturesAtom';
import { FnbCtaAtom } from './atoms/FnbCtaAtom';

export const FnbSolution: React.FC = () => {
  const content = useFnb();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <FnbHeroAtom content={content.hero} />
      <FnbPainPointsAtom content={content.pain} />
      <FnbFeaturesAtom content={content.system} />
      <FnbCtaAtom content={content.cta} />
    </section>
  );
};
