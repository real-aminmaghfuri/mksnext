
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { LegalContent, LegalPageType } from './types';

export const useLegal = (type: LegalPageType): LegalContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  switch (type) {
    case 'TERMS':
      return {
        type: 'TERMS',
        title: text.termsTitle,
        sub: text.termsSub,
        contentHtml: text.termsContent
      };
    case 'PRIVACY':
      return {
        type: 'PRIVACY',
        title: text.privacyTitle,
        sub: text.privacySub,
        contentHtml: text.privacyContent
      };
    case 'FAQ':
      return {
        type: 'FAQ',
        title: text.faqTitle,
        sub: text.faqSub,
        faqItems: text.faqItems
      };
    default:
      return {
        type: 'TERMS',
        title: "Legal",
        sub: "",
        contentHtml: ""
      };
  }
};
