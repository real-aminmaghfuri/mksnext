
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Users, 
  Clock, 
  Compass,
  MonitorOff, 
  GraduationCap, 
  Cpu, 
  Headphones 
} from 'lucide-react';
import { VisionContent } from './types';

export const useVision = (): VisionContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    heading: text.visionHeading,
    sub: text.visionSub,
    visionTitle: text.visionTitle,
    statement: text.visionStatement,
    
    missionTitle: text.missionTitle,
    missionSub: text.missionSub,
    missionItems: [
      {
        id: "01",
        title: text.mission1Title,
        desc: text.mission1Desc,
      },
      {
        id: "02",
        title: text.mission2Title,
        desc: text.mission2Desc,
      },
      {
        id: "03",
        title: text.mission3Title,
        desc: text.mission3Desc,
      },
      {
        id: "04",
        title: text.mission4Title,
        desc: text.mission4Desc,
      }
    ],

    dnaTitle: text.dnaTitle,
    dnaSub: text.dnaSub,
    dnaItems: [
      {
        title: text.dna1Title,
        desc: text.dna1Desc,
        icon: ShieldCheck
      },
      {
        title: text.dna2Title,
        desc: text.dna2Desc,
        icon: TrendingUp
      },
      {
        title: text.dna3Title,
        desc: text.dna3Desc,
        icon: MonitorOff // Simulating "Anti Sambat" / No Complaints
      },
      {
        title: text.dna4Title,
        desc: text.dna4Desc,
        icon: Users
      },
      {
        title: text.dna5Title,
        desc: text.dna5Desc,
        icon: Zap
      },
      {
        title: text.dna6Title,
        desc: text.dna6Desc,
        icon: Compass // Long term
      }
    ],

    manifesto: {
      title: text.manifestoTitle,
      text: text.manifestoText,
      footer: text.manifestoFooter
    }
  };
};
