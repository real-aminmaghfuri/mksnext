
"use client";

import React from 'react';
import { useCorporate } from './useCorporate';
import { CorporateHeroAtom } from './atoms/CorporateHeroAtom';
import { CorporatePainAtom } from './atoms/CorporatePainAtom';
import { CorporateSystemAtom } from './atoms/CorporateSystemAtom';
import { PortfolioMarquee } from '../../Services/Shared/PortfolioMarquee';
import { ProductShowcase } from '../Shared/ProductShowcase';
import { CorporateCtaAtom } from './atoms/CorporateCtaAtom';

export const CorporateSolution: React.FC = () => {
  const content = useCorporate();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <CorporateHeroAtom content={content.hero} />
      <CorporatePainAtom content={content.pain} />
      <CorporateSystemAtom content={content.system} />
      <PortfolioMarquee 
        filterKeywords={["pabrik", "corporate", "perusahaan", "industri"]}
        title="SISTEM"
        titleAccent="PABRIK"
        subtitle="Otomasi laporan produksi dan manajemen aset perusahaan. Efisiensi maksimal untuk profit optimal."
      />
      <CorporateCtaAtom content={content.cta} />
      <ProductShowcase 
        category="PC"
        title="HARDWARE"
        subtitle="PC All-in-One Industrial Grade yang tahan debu dan panas untuk lingkungan pabrik lo."
      />
    </section>
  );
};
