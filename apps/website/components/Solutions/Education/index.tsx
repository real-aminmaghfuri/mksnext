
"use client";

import React from 'react';
import { useEducation } from './useEducation';
import { EducationHeroAtom } from './atoms/EducationHeroAtom';
import { EducationChaosAtom } from './atoms/EducationChaosAtom';
import { EducationSystemAtom } from './atoms/EducationSystemAtom';
import { EducationCtaAtom } from './atoms/EducationCtaAtom';

export const EducationSolution: React.FC = () => {
  const content = useEducation();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <EducationHeroAtom content={content.hero} />
      <EducationChaosAtom content={content.chaos} />
      <EducationSystemAtom content={content.system} />
      <EducationCtaAtom content={content.cta} />
    </section>
  );
};
