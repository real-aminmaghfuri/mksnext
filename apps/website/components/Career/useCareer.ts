
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { DollarSign, Laptop, Zap } from 'lucide-react';
import { CareerContent } from './types';

export const useCareer = (): CareerContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  // Currently no open roles, mapped as empty array
  const mockRoles: any[] = []; 

  return {
    heading: text.careerHeading,
    sub: text.careerSub,
    perks: [
      {
        title: text.careerPerk1Title,
        desc: text.careerPerk1Desc,
        icon: DollarSign,
        color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
      },
      {
        title: text.careerPerk2Title,
        desc: text.careerPerk2Desc,
        icon: Laptop,
        color: "text-blue-500 bg-blue-500/10 border-blue-500/20"
      },
      {
        title: text.careerPerk3Title,
        desc: text.careerPerk3Desc,
        icon: Zap,
        color: "text-brand-500 bg-brand-500/10 border-brand-500/20"
      }
    ],
    roleTitle: text.careerRoleTitle,
    roleEmpty: text.careerRoleEmpty,
    roles: mockRoles,
    applyBtn: text.careerApplyBtn
  };
};
