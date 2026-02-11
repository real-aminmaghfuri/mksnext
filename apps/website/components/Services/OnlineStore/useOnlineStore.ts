
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { 
  ShoppingCart, Truck, CreditCard, Smartphone, 
  BarChart3, Zap, Globe 
} from 'lucide-react';
import { StoreContent } from './types';

export const useOnlineStore = (): StoreContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.wsHeroBadge,
      title: text.wsHeroTitle,
      titleSpan: text.wsHeroTitleSpan,
      sub: text.wsHeroSub,
    },
    painPoints: {
      title: text.wsPainTitle,
      sub: text.wsPainSub,
      comparisons: [
        { manual: text.wsPainManual1, auto: text.wsPainAuto1 },
        { manual: text.wsPainManual2, auto: text.wsPainAuto2 },
        { manual: text.wsPainManual3, auto: text.wsPainAuto3 },
        { manual: text.wsPainManual4, auto: text.wsPainAuto4 },
      ]
    },
    features: {
      title: text.wsFeatureTitle,
      sub: text.wsFeatureSub,
      items: [
        {
          title: text.wsFeature1Title,
          desc: text.wsFeature1Desc,
          icon: Truck
        },
        {
          title: text.wsFeature2Title,
          desc: text.wsFeature2Desc,
          icon: CreditCard
        },
        {
          title: text.wsFeature3Title,
          desc: text.wsFeature3Desc,
          icon: Smartphone
        },
        {
          title: text.wsFeature4Title,
          desc: text.wsFeature4Desc,
          icon: BarChart3
        },
        {
          title: text.wsFeature5Title,
          desc: text.wsFeature5Desc,
          icon: Globe
        },
        {
          title: text.wsFeature6Title,
          desc: text.wsFeature6Desc,
          icon: Zap
        }
      ]
    },
    steps: {
      title: text.wsStepTitle,
      steps: [
        { num: "01", title: text.wsStep1Title, desc: text.wsStep1Desc },
        { num: "02", title: text.wsStep2Title, desc: text.wsStep2Desc },
        { num: "03", title: text.wsStep3Title, desc: text.wsStep3Desc }
      ]
    },
    cta: {
      title: text.wsCtaTitle,
      sub: text.wsCtaSub,
      btn: text.wsCtaBtn
    }
  };
};
