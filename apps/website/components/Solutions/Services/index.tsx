
"use client";

import React from 'react';
import { useServicesSolution } from './useServicesSolution';
import { ServicesHeroAtom } from './atoms/ServicesHeroAtom';
import { ServicesChaosAtom } from './atoms/ServicesChaosAtom';
import { ServicesFeaturesAtom } from './atoms/ServicesFeaturesAtom';
import { PortfolioMarquee } from '../../Services/Shared/PortfolioMarquee';
import { ServicesCtaAtom } from './atoms/ServicesCtaAtom';

export const ServicesSolution: React.FC = () => {
  const content = useServicesSolution();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <ServicesHeroAtom content={content.hero} />
      <ServicesChaosAtom content={content.chaos} />
      <ServicesFeaturesAtom content={content.system} />
      <PortfolioMarquee 
        filterKeywords={["layanan", "jasa", "klinik", "laundry", "barbershop"]}
        title="SOLUSI"
        titleAccent="CERDAS"
        subtitle="Dari barbershop sampe laundry, sistem kami bantu manage antrian dan komisi karyawan dengan transparan."
      />
      <ServicesCtaAtom content={content.cta} />
    </section>
  );
};
