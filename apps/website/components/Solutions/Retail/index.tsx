
"use client";

import React from 'react';
import { useRetail } from './useRetail';
import { RetailHeroAtom } from './atoms/RetailHeroAtom';
import { RetailPainAtom } from './atoms/RetailPainAtom';
import { RetailSystemAtom } from './atoms/RetailSystemAtom';
import { PortfolioMarquee } from '../../Services/Shared/PortfolioMarquee';
import { ProductShowcase } from '../Shared/ProductShowcase';
import { RetailCtaAtom } from './atoms/RetailCtaAtom';

export const RetailSolution: React.FC = () => {
  const content = useRetail();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <RetailHeroAtom content={content.hero} />
      <RetailPainAtom content={content.pain} />
      <RetailSystemAtom content={content.system} />
      <PortfolioMarquee 
        filterKeywords={["retail", "toko", "minimarket"]}
        title="BUKTI"
        titleAccent="NYATA"
        subtitle="Lihat gimana sistem kami mengamankan stok dan profit di berbagai toko ritel dan grosir. Gak ada lagi drama stok ghaib."
      />
      <ProductShowcase 
        category="PC"
        title="HARDWARE"
        subtitle="Untuk ritel dan grosir, kami sarankan PC All-in-One yang tahan banting buat kerja rodi 24 jam."
      />
      <RetailCtaAtom content={content.cta} />
    </section>
  );
};
