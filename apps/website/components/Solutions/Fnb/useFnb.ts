
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Smartphone, MonitorPlay, Scale, Globe } from 'lucide-react';
import { FnbContent } from './types';

export const useFnb = (): FnbContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.fnbHeroBadge,
      title: text.fnbHeroTitle,
      span: text.fnbHeroTitleSpan,
      sub: text.fnbHeroSub,
    },
    pain: {
      title: text.fnbPainTitle,
      sub: text.fnbPainSub,
      points: [text.fnbPain1, text.fnbPain2, text.fnbPain3],
    },
    system: {
      title: text.fnbSolTitle,
      sub: text.fnbSolSub,
      features: [
        {
          title: text.fnbFeature1Title,
          desc: text.fnbFeature1Desc,
          icon: Smartphone
        },
        {
          title: text.fnbFeature2Title,
          desc: text.fnbFeature2Desc,
          icon: MonitorPlay
        },
        {
          title: text.fnbFeature3Title,
          desc: text.fnbFeature3Desc,
          icon: Scale
        },
        {
          title: text.fnbFeature4Title,
          desc: text.fnbFeature4Desc,
          icon: Globe
        }
      ]
    },
    cta: {
      title: text.fnbCtaTitle,
      sub: text.fnbCtaSub,
      btn: text.fnbCtaBtn
    }
  };
};
