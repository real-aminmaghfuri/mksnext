
"use client";

import React from 'react';
import { useGovernment } from './useGovernment';
import { GovernmentHeroAtom } from './atoms/GovernmentHeroAtom';
import { GovernmentPainAtom } from './atoms/GovernmentPainAtom';
import { GovernmentSystemAtom } from './atoms/GovernmentSystemAtom';
import { PortfolioMarquee } from '../../Services/Shared/PortfolioMarquee';
import { GovernmentCtaAtom } from './atoms/GovernmentCtaAtom';

export const GovernmentSolution: React.FC = () => {
  const content = useGovernment();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <GovernmentHeroAtom content={content.hero} />
      <GovernmentPainAtom content={content.pain} />
      <GovernmentSystemAtom content={content.system} />
      <PortfolioMarquee 
        filterKeywords={["desa", "birokrasi", "pemerintah"]}
        title="DESA"
        titleAccent="DIGITAL"
        subtitle="Transformasi birokrasi desa jadi lebih cepat dan transparan. Pelayanan publik cuma butuh hitungan menit."
      />
      <GovernmentCtaAtom content={content.cta} />
    </section>
  );
};
