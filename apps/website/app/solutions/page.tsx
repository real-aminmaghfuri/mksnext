
import React from 'react';
import type { Metadata } from 'next';
import { 
  MOCK_SOLUTIONS, 
  ID_DICTIONARY 
} from 'shared';
import { SolutionsHeaderAtom } from '../../components/Solutions/atoms/SolutionsHeaderAtom';
import { IndustryFilterAtom } from '../../components/Solutions/atoms/IndustryFilterAtom';
import { SolutionGridAtom } from '../../components/Solutions/atoms/SolutionGridAtom';
import { SolutionsCtaAtom } from '../../components/Solutions/atoms/SolutionsCtaAtom';

export const metadata: Metadata = {
  title: 'Solusi Sistem Kasir & Manajemen Bisnis Terlengkap | MKS',
  description: 'Pusat solusi bisnis untuk berbagai industri: Retail, F&B, Jasa, Kesehatan, hingga Corporate. Temukan senjata yang pas buat medan perang bisnis lo.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions',
  }
};

export default function SolutionsPage() {
  // Static Content Configuration (Default to ID for SEO Base)
  const content = {
    header: {
      badge: "INDUSTRY SOLUTIONS",
      title: ID_DICTIONARY.navBizHeader, 
      subtitle: "Sistem kasir dan manajemen yang dirancang khusus untuk medan tempur bisnis lo. Pilih industri, liat senjatanya."
    },
    filters: {
      all: ID_DICTIONARY.navIndAll,
      retail: ID_DICTIONARY.navIndRetail,
      fnb: ID_DICTIONARY.navIndFnb,
      services: ID_DICTIONARY.navIndService,
      health: ID_DICTIONARY.navIndHealth,
      corp: ID_DICTIONARY.navIndCorp,
      edu: ID_DICTIONARY.navIndEdu
    },
    cta: {
      title: ID_DICTIONARY.portCtaTitle,
      desc: ID_DICTIONARY.portCtaSub,
      btn: ID_DICTIONARY.portCtaBtn
    }
  };

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      
      {/* 
        Hero Section 
      */}
      <SolutionsHeaderAtom 
        badge={content.header.badge}
        title={content.header.title}
        subtitle={content.header.subtitle}
      />

      {/* 
        Filter Bar (Navigation Hub)
        activeFilter="ALL" makes the "Semua" button active/orange.
        Other buttons act as Links to /solutions/[slug].
      */}
      <IndustryFilterAtom 
        filters={content.filters}
        activeFilter="ALL"
      />

      {/* 
        Grid Display 
        Show ALL solutions by default here.
      */}
      <SolutionGridAtom solutions={MOCK_SOLUTIONS} />

      {/* 
        Call to Action 
      */}
      <SolutionsCtaAtom 
        title={content.cta.title}
        desc={content.cta.desc}
        btn={content.cta.btn}
      />

    </section>
  );
}
