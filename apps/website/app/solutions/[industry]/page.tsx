
import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { 
  getIndustrySlugs, 
  getIndustryBySlug, 
  MOCK_SOLUTIONS, 
  ID_DICTIONARY, 
  SolutionItem
} from 'shared';
import { SolutionsHeaderAtom } from '../../../components/Solutions/atoms/SolutionsHeaderAtom';
import { IndustryFilterAtom } from '../../../components/Solutions/atoms/IndustryFilterAtom';
import { SolutionGridAtom } from '../../../components/Solutions/atoms/SolutionGridAtom';
import { SolutionsCtaAtom } from '../../../components/Solutions/atoms/SolutionsCtaAtom';

// 1. Static Params for SSG
export async function generateStaticParams() {
  return getIndustrySlugs();
}

// 2. Dynamic Metadata
type Props = {
  params: Promise<{ industry: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const data = getIndustryBySlug(industry);

  if (!data) return {};

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      // url: ... (optional)
    }
  };
}

// 3. Server Component
export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const data = getIndustryBySlug(industry);

  if (!data) {
    notFound();
  }

  // Filter Solutions
  const filteredSolutions = MOCK_SOLUTIONS.filter(
    (s: SolutionItem) => s.industryTag === data.tag
  );

  // Prepare Props for Atoms (Using ID Dictionary for SEO pages default)
  const filters = {
    all: ID_DICTIONARY.navIndAll,
    retail: ID_DICTIONARY.navIndRetail,
    fnb: ID_DICTIONARY.navIndFnb,
    services: ID_DICTIONARY.navIndService,
    health: ID_DICTIONARY.navIndHealth,
    corp: ID_DICTIONARY.navIndCorp,
    edu: ID_DICTIONARY.navIndEdu
  };

  const cta = {
    title: ID_DICTIONARY.portCtaTitle,
    desc: ID_DICTIONARY.portCtaSub,
    btn: ID_DICTIONARY.portCtaBtn
  };

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      
      <SolutionsHeaderAtom 
        badge="INDUSTRY SOLUTIONS"
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />

      {/* 
         Server Component renders Client Component. 
         We don't pass onFilterChange because navigation is handled by Link hrefs in the atom.
      */}
      <IndustryFilterAtom 
        filters={filters}
        activeFilter={data.tag}
      />

      <SolutionGridAtom solutions={filteredSolutions} />

      <SolutionsCtaAtom 
        title={cta.title}
        desc={cta.desc}
        btn={cta.btn}
      />

    </section>
  );
}
