"use client";

import { useConfig } from 'ui';
import { DICTIONARY, Language } from 'shared';
import { Footprints, Users, Code, Skull, Zap, Target, ShieldAlert, HeartCrack } from 'lucide-react';

export const useAboutData = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  // Logic: Quote Parsing
  const parseQuote = () => {
    const quoteHeading = language === Language.ID ? "Jujur-jujuran aja..." : "To be honest...";
    const quoteBody = text.aboutFounderQuote.replace(quoteHeading, "").trim();
    const emphasisTrigger = language === Language.ID ? 'Bisnis tanpa sistem' : 'Business without a strong system';
    
    const parts = quoteBody.split(emphasisTrigger);
    return {
      heading: quoteHeading,
      bodyPrefix: parts[0] || "",
      emphasis: emphasisTrigger,
      bodySuffix: parts[1] || ""
    };
  };

  // Logic: Timeline Mapping
  const timeline = [
    { year: '2015', title: text.hist2015Title, desc: text.hist2015Desc, icon: Footprints, color: 'text-zinc-500 bg-zinc-100 dark:bg-zinc-800' },
    { year: '2018', title: text.hist2018Title, desc: text.hist2018Desc, icon: Users, color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20' },
    { year: '2021', title: text.hist2021Title, desc: text.hist2021Desc, icon: Code, color: 'text-brand-600 bg-brand-100 dark:bg-brand-900/20' },
    { year: '2022', title: text.hist2022Title, desc: text.hist2022Desc, icon: Skull, color: 'text-red-600 bg-red-100 dark:bg-red-900/20' },
    { year: '2025', title: text.hist2025Title, desc: text.hist2025Desc, icon: Zap, color: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20' },
  ];

  // Logic: Philosophy Mapping
  const philosophies = [
    { title: text.aboutPhil1Title, desc: text.aboutPhil1Desc, icon: Target },
    { title: text.aboutPhil2Title, desc: text.aboutPhil2Desc, icon: ShieldAlert },
    { title: text.aboutPhil3Title, desc: text.aboutPhil3Desc, icon: HeartCrack },
  ];

  return {
    text,
    quote: parseQuote(),
    timeline,
    philosophies
  };
};