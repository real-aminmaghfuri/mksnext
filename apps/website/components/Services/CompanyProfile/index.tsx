
"use client";

import React from 'react';
import { useCompanyProfile } from './useCompanyProfile';
import { ProfileHeroAtom } from './atoms/ProfileHeroAtom';
import { ProfileRealityAtom } from './atoms/ProfileRealityAtom';
import { ProfileFeaturesAtom } from './atoms/ProfileFeaturesAtom';
import { PortfolioMarquee } from '../Shared/PortfolioMarquee';
import { ProfileCtaAtom } from './atoms/ProfileCtaAtom';

export const CompanyProfile: React.FC = () => {
  const content = useCompanyProfile();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <ProfileHeroAtom content={content.hero} />
      <ProfileRealityAtom content={content.reality} />
      <ProfileFeaturesAtom content={content.features} />
      <PortfolioMarquee 
        filterKeywords={["compro"]}
        title="HASIL"
        titleAccent="TEMPUR"
        subtitle="Ini adalah beberapa markas digital yang udah gue bangun. Gak cuma cantik, tapi juga fungsional dan siap tempur di pasar."
      />
      <ProfileCtaAtom content={content.cta} />
    </section>
  );
};
