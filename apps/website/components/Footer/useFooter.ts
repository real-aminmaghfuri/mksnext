
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
      { label: text.footerLink1, href: '/shop' },
      { label: text.footerLink2, href: '/services/web-app' },
      { label: text.footerLink3, href: '/services/company-profile' },
      { label: text.footerLink4, href: '/services/seo' },
    ],
    col2Title: text.footerCol2,
    contactItems: [
      { icon: MapPin, text: "Jl. Slamet Riyadi No. X, Surakarta, Jawa Tengah, Indonesia" },
      { icon: Phone, text: "+62 881-6566-935" },
      { icon: Mail, text: "owner.kasirsolo@gmail.com" },
    ],
    copyright: text.footerCopy,
    legalLinks: [
      { label: text.footerLegal1, href: '/terms' },
      { label: text.footerLegal2, href: '/privacy' }
    ]
  };
};
