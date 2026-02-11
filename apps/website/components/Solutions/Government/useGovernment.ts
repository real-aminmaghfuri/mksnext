
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Smartphone, PieChart, MessageSquareWarning, SearchCheck } from 'lucide-react';
import { GovernmentContent } from './types';

export const useGovernment = (): GovernmentContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.govHeroBadge,
      title: text.govHeroTitle,
      span: text.govHeroTitleSpan,
      sub: text.govHeroSub,
    },
    pain: {
      title: text.govPainTitle,
      sub: text.govPainSub,
      points: [text.govPain1, text.govPain2, text.govPain3],
    },
    system: {
      title: text.govSolTitle,
      sub: text.govSolSub,
      features: [
        {
          title: text.govFeature1Title,
          desc: text.govFeature1Desc,
          icon: Smartphone
        },
        {
          title: text.govFeature2Title,
          desc: text.govFeature2Desc,
          icon: PieChart
        },
        {
          title: text.govFeature3Title,
          desc: text.govFeature3Desc,
          icon: MessageSquareWarning
        },
        {
          title: text.govFeature4Title,
          desc: text.govFeature4Desc,
          icon: SearchCheck
        }
      ]
    },
    cta: {
      title: text.govCtaTitle,
      sub: text.govCtaSub,
      btn: text.govCtaBtn
    }
  };
};
