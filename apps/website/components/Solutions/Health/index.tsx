
"use client";

import React from 'react';
import { useHealth } from './useHealth';
import { HealthHeroAtom } from './atoms/HealthHeroAtom';
import { HealthDiagnosisAtom } from './atoms/HealthDiagnosisAtom';
import { HealthSystemAtom } from './atoms/HealthSystemAtom';
import { PortfolioMarquee } from '../../Services/Shared/PortfolioMarquee';
import { ProductShowcase } from '../Shared/ProductShowcase';
import { HealthCtaAtom } from './atoms/HealthCtaAtom';

export const HealthSolution: React.FC = () => {
  const content = useHealth();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <HealthHeroAtom content={content.hero} />
      <HealthDiagnosisAtom content={content.diagnosis} />
      <HealthSystemAtom content={content.system} />
      <PortfolioMarquee 
        filterKeywords={["klinik", "apotek", "medis"]}
        title="REKAM"
        titleAccent="MEDIS"
        subtitle="Digitalisasi rekam medis dan manajemen stok obat yang akurat. Pasien senang, admin tenang."
      />
      <ProductShowcase 
        category="PC"
        title="HARDWARE"
        subtitle="PC All-in-One yang steril dan andal untuk kebutuhan administrasi klinik dan apotek lo."
      />
      <HealthCtaAtom content={content.cta} />
    </section>
  );
};
