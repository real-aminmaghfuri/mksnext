
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { HeroLogic } from './types';

export const useHero = (): HeroLogic => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    content: {
      badgeText: "System v2.0: SECURE & READY",
      brandName: "PT MESIN KASIR SOLO",
      title: text.heroTitle,
      subtitle: text.heroSubtitle,
      ctaPrimary: text.ctaPrimary,
      ctaSecondary: text.ctaSecondary
    }
  };
};
