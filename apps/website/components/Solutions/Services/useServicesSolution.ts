
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Smartphone, BellRing, Calculator, CalendarClock } from 'lucide-react';
import { ServicesContent } from './types';

export const useServicesSolution = (): ServicesContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.svcHeroBadge,
      title: text.svcHeroTitle,
      span: text.svcHeroTitleSpan,
      sub: text.svcHeroSub,
    },
    chaos: {
      title: text.svcChaosTitle,
      sub: text.svcChaosSub,
      points: [text.svcChaos1, text.svcChaos2, text.svcChaos3],
    },
    system: {
      title: text.svcSolTitle,
      sub: text.svcSolSub,
      features: [
        {
          title: text.svcFeature1Title,
          desc: text.svcFeature1Desc,
          icon: Smartphone
        },
        {
          title: text.svcFeature2Title,
          desc: text.svcFeature2Desc,
          icon: BellRing
        },
        {
          title: text.svcFeature3Title,
          desc: text.svcFeature3Desc,
          icon: Calculator
        },
        {
          title: text.svcFeature4Title,
          desc: text.svcFeature4Desc,
          icon: CalendarClock
        }
      ]
    },
    cta: {
      title: text.svcCtaTitle,
      sub: text.svcCtaSub,
      btn: text.svcCtaBtn
    }
  };
};
