
"use client";

import { usePathname } from 'next/navigation';
import { useConfig } from 'ui';
import { Language, DICTIONARY, Theme } from 'shared';
import { NavbarLogic } from './types';

export const useNavbar = (): NavbarLogic => {
  const pathname = usePathname();
  const { theme, toggleTheme, language, setLanguage } = useConfig();
  const text = DICTIONARY[language];

  const toggleLang = () => {
    setLanguage(language === Language.ID ? Language.EN : Language.ID);
  };

  return {
    isDark: theme === Theme.DARK,
    language,
    pathname,
    toggleTheme,
    toggleLang,
    text
  };
};
