
"use client";

import React from 'react';
import { useCompanyProfile } from './useCompanyProfile';
import { ProfileHeroAtom } from './atoms/ProfileHeroAtom';
import { ProfileRealityAtom } from './atoms/ProfileRealityAtom';
import { ProfileFeaturesAtom } from './atoms/ProfileFeaturesAtom';
import { ProfileCtaAtom } from './atoms/ProfileCtaAtom';

export const CompanyProfile: React.FC = () => {
  const content = useCompanyProfile();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      <ProfileHeroAtom content={content.hero} />
      <ProfileRealityAtom content={content.reality} />
      <ProfileFeaturesAtom content={content.features} />
      <ProfileCtaAtom content={content.cta} />
    </section>
  );
};
