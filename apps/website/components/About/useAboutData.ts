
"use client";

import { useConfig } from 'ui';
import { DICTIONARY, Language, CompanyIdentity } from 'shared';
import { Footprints, Users, Code, Skull, Zap } from 'lucide-react';

export const useAboutData = (identity: CompanyIdentity) => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  // Logic: Quote Parsing - Made Robust for Empty/Different formats
  const parseQuote = () => {
    const rawQuote = identity.founderQuote || text.aboutFounderQuote;
    
    // Check if rawQuote is empty
    if (!rawQuote) {
        return {
            heading: "Jujur-jujuran aja...",
            bodyPrefix: "Bisnis tanpa sistem yang kuat cuma nunggu waktu buat meledak.",
            emphasis: "",
            bodySuffix: ""
        };
    }

    const quoteHeading = language === Language.ID ? "Jujur-jujuran aja..." : "To be honest...";
    
    // Attempt to remove the heading if it exists in the raw text
    let quoteBody = rawQuote;
    if (rawQuote.includes(quoteHeading)) {
        quoteBody = rawQuote.replace(quoteHeading, "").trim();
    }

    // Safe Split: Use the first sentence as bodyPrefix, rest as emphasis
    // Matches the first period, exclamation, or question mark followed by space
    const splitMatch = quoteBody.match(/([.?!])\s/);
    
    if (splitMatch && splitMatch.index) {
        const splitIndex = splitMatch.index + 1; // Include the punctuation
        return {
            heading: quoteHeading,
            bodyPrefix: quoteBody.substring(0, splitIndex),
            emphasis: quoteBody.substring(splitIndex).trim(),
            bodySuffix: ""
        };
    }

    // Fallback if no sentence structure found
    return {
      heading: quoteHeading,
      bodyPrefix: "", // Empty prefix
      emphasis: quoteBody, // Put everything in the box
      bodySuffix: ""
    };
  };

  // Use Dynamic Identity for Founder Section
  const founderData = {
      name: identity.founderName || "AMIN MAGHFURI",
      role: identity.founderRole || "COMMANDING OFFICER",
      photo: identity.founderPhoto, // Pass through, component handles fallback
      quote: parseQuote()
  };

  // Logic: Legality Data (Merged with DB)
  // Passing the full bankAccounts array to the component instead of just one
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
      bankAccounts: identity.bankAccounts || [] // Pass array
    }
  };

  // Turning Point & Timeline (Static for now, but could be dynamic later)
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
