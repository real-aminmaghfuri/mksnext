
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Network, Calculator, ShieldCheck, Tag } from 'lucide-react';
import { FranchiseContent } from './types';

export const useFranchise = (): FranchiseContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.franHeroBadge,
      title: text.franHeroTitle,
      span: text.franHeroTitleSpan,
      sub: text.franHeroSub,
    },
    pain: {
      title: text.franPainTitle,
      sub: text.franPainSub,
      points: [text.franPain1, text.franPain2, text.franPain3],
    },
    system: {
      title: text.franSolTitle,
      sub: text.franSolSub,
      features: [
        {
          title: text.franFeature1Title,
          desc: text.franFeature1Desc,
          icon: Network
        },
        {
          title: text.franFeature2Title,
          desc: text.franFeature2Desc,
          icon: Calculator
        },
        {
          title: text.franFeature3Title,
          desc: text.franFeature3Desc,
          icon: ShieldCheck
        },
        {
          title: text.franFeature4Title,
          desc: text.franFeature4Desc,
          icon: Tag
        }
      ]
    },
    cta: {
      title: text.franCtaTitle,
      sub: text.franCtaSub,
      btn: text.franCtaBtn
    }
  };
};
