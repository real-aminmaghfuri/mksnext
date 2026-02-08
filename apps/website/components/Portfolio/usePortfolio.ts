
"use client";

import { useState, useMemo, useEffect } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY, MOCK_PORTFOLIO } from 'shared';
import { PortfolioContent, PortfolioCategory } from './types';

export const usePortfolio = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');
  
  // Pagination State
  const [visibleCount, setVisibleCount] = useState(6);

  const content: PortfolioContent = {
    heading: text.portHeading,
    headingSpan: text.portHeadingSpan,
    sub: text.portSub,
    filters: {
      all: text.portFilterAll,
      physical: text.portFilterPhysical,
      digital: text.portFilterDigital,
    },
    items: MOCK_PORTFOLIO,
    cta: {
      title: text.portCtaTitle,
      sub: text.portCtaSub,
      btn: text.portCtaBtn
    },
    viewCaseText: text.portViewCase
  };

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const allFilteredItems = useMemo(() => {
    if (activeCategory === 'ALL') return content.items;
    return content.items.filter(item => item.category === activeCategory);
  }, [activeCategory, content.items]);

  // Sliced items for display
  const displayedItems = useMemo(() => {
    return allFilteredItems.slice(0, visibleCount);
  }, [allFilteredItems, visibleCount]);

  const hasMore = visibleCount < allFilteredItems.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return {
    content,
    activeCategory,
    setActiveCategory,
    filteredItems: displayedItems,
    hasMore,
    loadMore
  };
};
