
"use client";

import { useConfig } from 'ui';
import { DICTIONARY, Language, CompanyIdentity } from 'shared';
import { Footprints, Users, Code, Skull, Zap } from 'lucide-react';

export const useAboutData = (identity: CompanyIdentity) => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  // Logic: Quote Parsing - Made Robust for Empty/Different formats
  const parseQuote = () => {
    // 1. Get Content: Use Identity if available and not empty, otherwise fallback to Dictionary
    let rawQuote = identity.founderQuote;
    if (!rawQuote || rawQuote.trim() === "") {
        rawQuote = text.aboutFounderQuote;
    }

    const quoteHeading = language === Language.ID ? "Jujur-jujuran aja..." : "To be honest...";
    
    // 2. Remove Heading if present (to avoid duplication)
    let quoteBody = rawQuote;
    if (quoteBody.includes(quoteHeading)) {
        quoteBody = quoteBody.replace(quoteHeading, "").trim();
    }

    // 3. Smart Split: Attempt to split into "Hook" (Prefix) and "Main Point" (Emphasis)
    // We look for the first sentence ending (. ? !)
    const splitMatch = quoteBody.match(/([.?!])\s/);
    
    if (splitMatch && splitMatch.index) {
        const splitIndex = splitMatch.index + 1;
        return {
            heading: quoteHeading,
            bodyPrefix: quoteBody.substring(0, splitIndex),
            emphasis: quoteBody.substring(splitIndex).trim(),
            bodySuffix: ""
        };
    }

    // 4. Fallback: If no split possible, put everything in Emphasis for impact
    return {
      heading: quoteHeading,
      bodyPrefix: "", 
      emphasis: quoteBody,
      bodySuffix: ""
    };
  };

  // Use Dynamic Identity for Founder Section
  const founderData = {
      name: identity.founderName || "AMIN MAGHFURI",
      role: identity.founderRole || "COMMANDING OFFICER",
      // Fallback photo if identity photo is missing
      photo: identity.founderPhoto || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      quote: parseQuote()
  };

  // Logic: Legality Data (Merged with DB)
  const legality = {
    title: text.legalTitle,
    desc: text.legalDesc,
    labelEntity: text.legalLabelEntity,
    valueEntity: identity.companyName || "PT MESIN KASIR SOLO",
    labelNIB: text.legalLabelNIB,
    labelSK: text.legalLabelSK,
    labelNPWP: text.legalLabelNPWP,
    labelBank: text.legalLabelBank,
    ctaTitle: text.legalCtaTitle,
    ctaDesc: text.legalCtaDesc,
    ctaBtn: text.legalCtaBtn,
    footerNote: text.legalFooterNote,
    values: {
      nib: identity.nib || "-",
      sk: identity.skKemenkumham || "-",
      npwp: identity.npwp || "-",
      bankAccounts: identity.bankAccounts || [] 
    }
  };

  // Turning Point & Timeline
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

  const timeline = [
    { year: '2015', title: text.hist2015Title, desc: text.hist2015Desc, icon: Footprints, color: 'text-zinc-500 bg-zinc-100 dark:bg-zinc-800' },
    { year: '2018', title: text.hist2018Title, desc: text.hist2018Desc, icon: Users, color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20' },
    { year: '2021', title: text.hist2021Title, desc: text.hist2021Desc, icon: Code, color: 'text-brand-600 bg-brand-100 dark:bg-brand-900/20' },
    { year: '2022', title: text.hist2022Title, desc: text.hist2022Desc, icon: Skull, color: 'text-red-600 bg-red-100 dark:bg-red-900/20' },
    { year: '2025', title: text.hist2025Title, desc: text.hist2025Desc, icon: Zap, color: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20' },
  ];

  return {
    text,
    founderData,
    turningPoint,
    timeline,
    legality
  };
};
