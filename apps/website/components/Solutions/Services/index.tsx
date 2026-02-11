
"use client";

import React from 'react';
import { useServicesSolution } from './useServicesSolution';
import { ServicesHeroAtom } from './atoms/ServicesHeroAtom';
import { ServicesChaosAtom } from './atoms/ServicesChaosAtom';
import { ServicesFeaturesAtom } from './atoms/ServicesFeaturesAtom';
import { ServicesCtaAtom } from './atoms/ServicesCtaAtom';

export const ServicesSolution: React.FC = () => {
  const content = useServicesSolution();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <ServicesHeroAtom content={content.hero} />
      <ServicesChaosAtom content={content.chaos} />
      <ServicesFeaturesAtom content={content.system} />
      <ServicesCtaAtom content={content.cta} />
    </section>
  );
};
