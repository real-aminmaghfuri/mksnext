
"use client";

import React from 'react';
import { useOnlineStore } from './useOnlineStore';
import { StoreHeroAtom } from './atoms/StoreHeroAtom';
import { StorePainPointsAtom } from './atoms/StorePainPointsAtom';
import { StoreFeaturesAtom } from './atoms/StoreFeaturesAtom';
import { StoreStepAtom } from './atoms/StoreStepAtom';
import { PortfolioMarquee } from '../Shared/PortfolioMarquee';
import { StoreCtaAtom } from './atoms/StoreCtaAtom';

export const OnlineStore: React.FC = () => {
  const content = useOnlineStore();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 text-zinc-900 dark:text-white">
      <StoreHeroAtom content={content.hero} />
      <StorePainPointsAtom content={content.painPoints} />
      <StoreFeaturesAtom content={content.features} />
      <StoreStepAtom content={content.steps} />
      <PortfolioMarquee 
        filterKeywords={["store", "e-commerce"]}
        title="MESIN"
        titleAccent="UANG"
        subtitle="Lihat gimana toko online yang gue bangun bisa kerja otomatis 24 jam buat klien-klien gue. Rapi, kenceng, dan siap jualan."
      />
      <StoreCtaAtom content={content.cta} />
    </section>
  );
};
