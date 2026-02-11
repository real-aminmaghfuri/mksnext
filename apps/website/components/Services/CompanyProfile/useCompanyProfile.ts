
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Globe, Zap, Search, Smartphone, ShieldCheck, Fingerprint } from 'lucide-react';
import { ProfileContent } from './types';

export const useCompanyProfile = (): ProfileContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.wcHeroBadge,
      title: text.wcHeroTitle,
      titleSpan: text.wcHeroTitleSpan,
      sub: text.wcHeroSub,
    },
    reality: {
      title: text.wcRealityTitle,
      desc: text.wcRealityDesc,
      points: [
        text.wcReality1,
        text.wcReality2,
        text.wcReality3,
      ]
    },
    features: {
      title: text.wcFeatureTitle,
      sub: text.wcFeatureSub,
      items: [
        {
          title: text.wcFeature1Title,
          desc: text.wcFeature1Desc,
          icon: Zap
        },
        {
          title: text.wcFeature2Title,
          desc: text.wcFeature2Desc,
          icon: Search
        },
        {
          title: text.wcFeature3Title,
          desc: text.wcFeature3Desc,
          icon: Smartphone
        },
        {
          title: text.wcFeature4Title,
          desc: text.wcFeature4Desc,
          icon: ShieldCheck
        },
        {
          title: text.wcFeature5Title,
          desc: text.wcFeature5Desc,
          icon: Globe
        },
        {
          title: text.wcFeature6Title,
          desc: text.wcFeature6Desc,
          icon: Fingerprint
        }
      ]
    },
    cta: {
      title: text.wcCtaTitle,
      sub: text.wcCtaSub,
      btn: text.wcCtaBtn
    }
  };
};
