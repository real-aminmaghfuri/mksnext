
"use client";

import React from 'react';
import { useFnb } from './useFnb';
import { FnbHeroAtom } from './atoms/FnbHeroAtom';
import { FnbPainPointsAtom } from './atoms/FnbPainPointsAtom';
import { FnbFeaturesAtom } from './atoms/FnbFeaturesAtom';
import { PortfolioMarquee } from '../../Services/Shared/PortfolioMarquee';
import { ProductShowcase } from '../Shared/ProductShowcase';
import { FnbCtaAtom } from './atoms/FnbCtaAtom';

export const FnbSolution: React.FC = () => {
  const content = useFnb();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <FnbHeroAtom content={content.hero} />
      <FnbPainPointsAtom content={content.pain} />
      <FnbFeaturesAtom content={content.system} />
      <PortfolioMarquee 
        filterKeywords={["resto", "cafe", "restaurant", "kopi", "steak"]}
        title="DAPUR"
        titleAccent="NGEBUT"
        subtitle="Dari cafe estetik sampe resto bintang lima, sistem kami udah buktiin bisa handle rush hour tanpa pusing."
      />
      <ProductShowcase 
        category="ANDROID"
        title="GADGET"
        subtitle="Tablet POS kenceng buat waiter lo biar gak ada lagi salah catat pesanan pelanggan."
      />
      <FnbCtaAtom content={content.cta} />
    </section>
  );
};
