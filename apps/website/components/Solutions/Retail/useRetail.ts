
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Lock, ScanEye, EyeOff, BarChart4 } from 'lucide-react';
import { RetailContent } from './types';

export const useRetail = (): RetailContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      title: text.rtlHeroTitle,
      span: text.rtlHeroSpan,
      sub: text.rtlHeroSub,
    },
    pain: {
      title: text.rtlPainTitle,
      sub: text.rtlPainSub,
      points: [text.rtlPain1, text.rtlPain2, text.rtlPain3],
    },
    system: {
      title: text.rtlSysTitle,
      sub: text.rtlSysSub,
      features: [
        {
          title: text.rtlFeature1,
          desc: text.rtlFeature1Desc,
          icon: Lock
        },
        {
          title: text.rtlFeature2,
          desc: text.rtlFeature2Desc,
          icon: ScanEye
        },
        {
          title: text.rtlFeature3,
          desc: text.rtlFeature3Desc,
          icon: EyeOff
        },
        {
          title: text.rtlFeature4,
          desc: text.rtlFeature4Desc,
          icon: BarChart4
        }
      ]
    },
    cta: {
      title: text.rtlCtaTitle,
      sub: text.rtlCtaSub,
      btn: text.rtlCtaBtn
    }
  };
};
