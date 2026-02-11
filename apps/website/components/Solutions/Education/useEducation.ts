
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Smartphone, Building, Fingerprint, UserPlus } from 'lucide-react';
import { EducationContent } from './types';

export const useEducation = (): EducationContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.eduHeroBadge,
      title: text.eduHeroTitle,
      span: text.eduHeroTitleSpan,
      sub: text.eduHeroSub,
    },
    chaos: {
      title: text.eduChaosTitle,
      sub: text.eduChaosSub,
      points: [text.eduChaos1, text.eduChaos2, text.eduChaos3],
    },
    system: {
      title: text.eduSolTitle,
      sub: text.eduSolSub,
      features: [
        {
          title: text.eduFeature1Title,
          desc: text.eduFeature1Desc,
          icon: Smartphone
        },
        {
          title: text.eduFeature2Title,
          desc: text.eduFeature2Desc,
          icon: Building
        },
        {
          title: text.eduFeature3Title,
          desc: text.eduFeature3Desc,
          icon: Fingerprint
        },
        {
          title: text.eduFeature4Title,
          desc: text.eduFeature4Desc,
          icon: UserPlus
        }
      ]
    },
    cta: {
      title: text.eduCtaTitle,
      sub: text.eduCtaSub,
      btn: text.eduCtaBtn
    }
  };
};
