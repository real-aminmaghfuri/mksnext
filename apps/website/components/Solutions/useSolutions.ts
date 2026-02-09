
"use client";

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useConfig } from 'ui';
import { DICTIONARY, MOCK_SOLUTIONS, Language } from 'shared';
import { SolutionsContent, FilterType, SolutionsLogic } from './types';

export const useSolutions = (): SolutionsLogic => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const searchParams = useSearchParams();
  const router = useRouter();

  // 1. Initialize filter state
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');

  // 2. Sync State with URL Query Param on Mount/Update
  useEffect(() => {
    const tag = searchParams.get('tag');
    if (tag) {
      // Basic validation to ensure tag exists in our defined types could go here
      setActiveFilter(tag.toUpperCase() as FilterType);
    } else {
      setActiveFilter('ALL');
    }
  }, [searchParams]);

  // 3. Content Mapping
  const content: SolutionsContent = {
    header: {
      badge: "INDUSTRY SOLUTIONS",
      title: text.navBizHeader, // "SOLUSI BISNIS"
      subtitle: language === Language.ID 
        ? "Sistem kasir dan manajemen yang dirancang khusus untuk medan tempur bisnis lo. Pilih industri, liat senjatanya." 
        : "POS and management systems specifically designed for your business battlefield. Choose your industry, see the weapons.",
    },
    filters: {
      all: text.navIndAll,
      retail: text.navIndRetail,
      fnb: text.navIndFnb,
      services: text.navIndService,
      health: text.navIndHealth,
      corp: text.navIndCorp,
      edu: text.navIndEdu
    },
    cta: {
      title: text.portCtaTitle,
      desc: text.portCtaSub,
      btn: text.portCtaBtn
    }
  };

  // 4. Filtering Logic
  const filteredSolutions = useMemo(() => {
    if (activeFilter === 'ALL') return MOCK_SOLUTIONS;
    return MOCK_SOLUTIONS.filter(item => item.industryTag === activeFilter);
  }, [activeFilter]);

  // 5. Handler to update URL shallowly
  const setFilter = (tag: FilterType) => {
    setActiveFilter(tag);
    
    // Update URL to reflect state (UX Best Practice)
    const params = new URLSearchParams(window.location.search);
    if (tag === 'ALL') {
      params.delete('tag');
    } else {
      params.set('tag', tag);
    }
    
    // Push new URL without full reload
    router.push(`/solutions?${params.toString()}`, { scroll: false });
  };

  return {
    content,
    activeFilter,
    setFilter,
    filteredSolutions
  };
};
