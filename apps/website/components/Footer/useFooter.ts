
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FooterContent } from './types';

export const useFooter = (): FooterContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    description: text.footerDesc,
    col1Title: text.footerCol1,
    col1Links: [
      { label: text.footerLink1, href: '#' },
      { label: text.footerLink2, href: '#' },
      { label: text.footerLink3, href: '#' },
      { label: text.footerLink4, href: '#' },
    ],
    col2Title: text.footerCol2,
    contactItems: [
      { icon: MapPin, text: "Jl. Slamet Riyadi No. X, Surakarta, Jawa Tengah, Indonesia" },
      { icon: Phone, text: "+62 812-XXXX-XXXX" },
      { icon: Mail, text: "biz@mesinkasirsolo.com" },
    ],
    copyright: text.footerCopy,
    legalLinks: [text.footerLegal1, text.footerLegal2]
  };
};
