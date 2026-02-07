"use client";

import { useConfig } from 'ui';
import { DICTIONARY, Language } from 'shared';
import { Footprints, Users, Code, Skull, Zap } from 'lucide-react';

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

  // Logic: Turning Point Parsing
  const turningPoint = {
    title: text.aboutTurnTitle,
    p1: text.aboutTurnP1,
    p1Bold: text.aboutTurnP1Bold,
    p2Pre: text.aboutTurnP2Pre,
    p2Bold: text.aboutTurnP2Bold,
    p2Mid: text.aboutTurnP2Mid,
    p2Italic1: text.aboutTurnP2Italic1,
    p2Mid2: text.aboutTurnP2Mid2,
    p2Italic2: text.aboutTurnP2Italic2,
  };

  // Logic: Timeline Mapping
  const timeline = [
    { year: '2015', title: text.hist2015Title, desc: text.hist2015Desc, icon: Footprints, color: 'text-zinc-500 bg-zinc-100 dark:bg-zinc-800' },
    { year: '2018', title: text.hist2018Title, desc: text.hist2018Desc, icon: Users, color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20' },
    { year: '2021', title: text.hist2021Title, desc: text.hist2021Desc, icon: Code, color: 'text-brand-600 bg-brand-100 dark:bg-brand-900/20' },
    { year: '2022', title: text.hist2022Title, desc: text.hist2022Desc, icon: Skull, color: 'text-red-600 bg-red-100 dark:bg-red-900/20' },
    { year: '2025', title: text.hist2025Title, desc: text.hist2025Desc, icon: Zap, color: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20' },
  ];

  // Logic: Legality Data
  const legality = {
    title: text.legalTitle,
    desc: text.legalDesc,
    labelEntity: text.legalLabelEntity,
    valueEntity: text.legalValueEntity,
    labelNIB: text.legalLabelNIB,
    labelSK: text.legalLabelSK,
    labelNPWP: text.legalLabelNPWP,
    labelBank: text.legalLabelBank,
    ctaTitle: text.legalCtaTitle,
    ctaDesc: text.legalCtaDesc,
    ctaBtn: text.legalCtaBtn,
    footerNote: text.legalFooterNote,
    values: {
      nib: "1226000711085",
      sk: "AHU-006097.AH.01.30.Tahun 2021",
      npwp: "53.494.885.6-532.000",
      bank: "5859459406740414",
      bankName: "A.N PT MESIN KASIR SOLO"
    }
  };

  return {
    text,
    quote: parseQuote(),
    turningPoint,
    timeline,
    legality
  };
};