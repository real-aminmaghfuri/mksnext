
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Target, BookOpen, HeartHandshake } from 'lucide-react';
import { VisionContent } from './types';

export const useVision = (): VisionContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    heading: text.visionHeading,
    sub: text.visionSub,
    statement: text.visionStatement,
    missionTitle: text.missionTitle,
    missionItems: [
      {
        title: text.mission1Title,
        desc: text.mission1Desc,
        icon: Target,
        color: 'text-red-500 bg-red-500/10 border-red-500/20'
      },
      {
        title: text.mission2Title,
        desc: text.mission2Desc,
        icon: BookOpen,
        color: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
      },
      {
        title: text.mission3Title,
        desc: text.mission3Desc,
        icon: HeartHandshake,
        color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
      }
    ],
    manifesto: {
      title: text.manifestoTitle,
      text: text.manifestoText
    }
  };
};
