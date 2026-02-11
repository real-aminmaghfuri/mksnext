
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Warehouse, Smartphone, ShieldCheck, Wallet } from 'lucide-react';
import { CorporateContent } from './types';

export const useCorporate = (): CorporateContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.corpHeroBadge,
      title: text.corpHeroTitle,
      span: text.corpHeroTitleSpan,
      sub: text.corpHeroSub,
    },
    pain: {
      title: text.corpPainTitle,
      sub: text.corpPainSub,
      points: [text.corpPain1, text.corpPain2, text.corpPain3],
    },
    system: {
      title: text.corpSolTitle,
      sub: text.corpSolSub,
      features: [
        {
          title: text.corpFeature1Title,
          desc: text.corpFeature1Desc,
          icon: Warehouse
        },
        {
          title: text.corpFeature2Title,
          desc: text.corpFeature2Desc,
          icon: Smartphone
        },
        {
          title: text.corpFeature3Title,
          desc: text.corpFeature3Desc,
          icon: ShieldCheck
        },
        {
          title: text.corpFeature4Title,
          desc: text.corpFeature4Desc,
          icon: Wallet
        }
      ]
    },
    cta: {
      title: text.corpCtaTitle,
      sub: text.corpCtaSub,
      btn: text.corpCtaBtn
    }
  };
};
