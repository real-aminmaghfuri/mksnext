
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Flame, Target, Heart } from 'lucide-react';
import { CareerContent } from './types';

export const useCareer = (): CareerContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    heading: text.careerHeading,
    headingSpan: text.careerHeadingSpan,
    sub: text.careerSub,

    dnaTitle: text.careerDnaTitle,
    dnaSub: text.careerDnaSub,
    dnaItems: [
      {
        title: text.careerDna1Title,
        desc: text.careerDna1Desc,
        icon: Flame,
        color: "text-brand-500"
      },
      {
        title: text.careerDna2Title,
        desc: text.careerDna2Desc,
        icon: Target,
        color: "text-brand-500"
      },
      {
        title: text.careerDna3Title,
        desc: text.careerDna3Desc,
        icon: Heart,
        color: "text-brand-500"
      }
    ],

    antiTitle: text.careerAntiTitle,
    antiPersonas: [
      { text: text.careerAnti1 },
      { text: text.careerAnti2 },
      { text: text.careerAnti3 },
      { text: text.careerAnti4 },
    ],

    roleTitle: text.careerRoleTitle,
    roleSub: text.careerRoleSub,
    forceHireTitle: text.careerForceHireTitle,
    forceHireDesc: text.careerForceHireDesc,
    forceHireBtn: text.careerForceHireBtn
  };
};
