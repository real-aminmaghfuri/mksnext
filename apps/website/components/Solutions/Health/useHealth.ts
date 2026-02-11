
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Siren, QrCode, FileText, ListChecks } from 'lucide-react';
import { HealthContent } from './types';

export const useHealth = (): HealthContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.hlthHeroBadge,
      title: text.hlthHeroTitle,
      span: text.hlthHeroTitleSpan,
      sub: text.hlthHeroSub,
    },
    diagnosis: {
      title: text.hlthDiagTitle,
      sub: text.hlthDiagSub,
      points: [text.hlthDiag1, text.hlthDiag2, text.hlthDiag3],
    },
    system: {
      title: text.hlthSolTitle,
      sub: text.hlthSolSub,
      features: [
        {
          title: text.hlthFeature1Title,
          desc: text.hlthFeature1Desc,
          icon: Siren
        },
        {
          title: text.hlthFeature2Title,
          desc: text.hlthFeature2Desc,
          icon: QrCode
        },
        {
          title: text.hlthFeature3Title,
          desc: text.hlthFeature3Desc,
          icon: ListChecks
        },
        {
          title: text.hlthFeature4Title,
          desc: text.hlthFeature4Desc,
          icon: FileText
        }
      ]
    },
    cta: {
      title: text.hlthCtaTitle,
      sub: text.hlthCtaSub,
      btn: text.hlthCtaBtn
    }
  };
};
