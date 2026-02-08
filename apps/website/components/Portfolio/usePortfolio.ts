
"use client";

import { useState, useMemo } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY, MOCK_PORTFOLIO } from 'shared';
import { PortfolioContent, PortfolioCategory } from './types';

export const usePortfolio = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');

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

  const filteredItems = useMemo(() => {
    if (activeCategory === 'ALL') return content.items;
    return content.items.filter(item => item.category === activeCategory);
  }, [activeCategory, content.items]);

  return {
    content,
    activeCategory,
    setActiveCategory,
    filteredItems
  };
};
