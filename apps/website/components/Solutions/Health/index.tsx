
"use client";

import React from 'react';
import { useHealth } from './useHealth';
import { HealthHeroAtom } from './atoms/HealthHeroAtom';
import { HealthDiagnosisAtom } from './atoms/HealthDiagnosisAtom';
import { HealthSystemAtom } from './atoms/HealthSystemAtom';
import { HealthCtaAtom } from './atoms/HealthCtaAtom';

export const HealthSolution: React.FC = () => {
  const content = useHealth();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <HealthHeroAtom content={content.hero} />
      <HealthDiagnosisAtom content={content.diagnosis} />
      <HealthSystemAtom content={content.system} />
      <HealthCtaAtom content={content.cta} />
    </section>
  );
};
