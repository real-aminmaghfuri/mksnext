
"use client";

import { useConfig } from 'ui';
import { LEGAL_SIDEBAR_DATA } from 'shared';

export const useLegalSidebar = () => {
  const { language } = useConfig();
  
  // Logic: In the future, we can map labels based on language here.
  // For now, we return the raw data structure.
  
  return {
    navGroups: LEGAL_SIDEBAR_DATA,
    currentLang: language
  };
};
