
"use client";

import React from 'react';
import { useEducation } from './useEducation';
import { EducationHeroAtom } from './atoms/EducationHeroAtom';
import { EducationChaosAtom } from './atoms/EducationChaosAtom';
import { EducationSystemAtom } from './atoms/EducationSystemAtom';
import { PortfolioMarquee } from '../../Services/Shared/PortfolioMarquee';
import { ProductShowcase } from '../Shared/ProductShowcase';
import { EducationCtaAtom } from './atoms/EducationCtaAtom';

export const EducationSolution: React.FC = () => {
  const content = useEducation();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <EducationHeroAtom content={content.hero} />
      <EducationChaosAtom content={content.chaos} />
      <EducationSystemAtom content={content.system} />
      <PortfolioMarquee 
        filterKeywords={["sekolah", "akademik", "spp"]}
        title="SISTEM"
        titleAccent="AKADEMIK"
        subtitle="Kelola SPP, absensi, dan nilai siswa dalam satu platform terintegrasi. Transparansi buat wali murid."
      />
      <ProductShowcase 
        category="PC"
        title="HARDWARE"
        subtitle="PC All-in-One untuk lab komputer atau administrasi sekolah yang butuh performa stabil."
      />
      <EducationCtaAtom content={content.cta} />
    </section>
  );
};
