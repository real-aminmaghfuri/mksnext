
"use client";

import { useState, useEffect } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY, CompanyIdentity } from 'shared';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FooterContent } from './types';
import { Repository } from 'data';

export const useFooter = (): FooterContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const [identity, setIdentity] = useState<CompanyIdentity | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchIdentity = async () => {
      try {
        const response = await Repository.getCompanyIdentity();
        if (mounted && response.success && response.data) {
          setIdentity(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch footer identity:", error);
      }
    };
    fetchIdentity();
    return () => { mounted = false; };
  }, []);

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
      { icon: MapPin, text: identity?.addressOps || "Gumiring 04/04, Sidomulyo, Banjarejo, Blora, Jawa Tengah 58253" },
      { icon: Phone, text: identity?.whatsapp || "+62 881-6566-935" },
      { icon: Mail, text: identity?.email || "owner.kasirsolo@gmail.com" },
    ],
    copyrightBrand: text.footerCopyBrand,
    copyrightMsg: text.footerCopyMsg,
    legalLinks: [
      { label: text.footerLegal1, href: '/terms' },
      { label: text.footerLegal2, href: '/privacy' }
    ]
  };
};