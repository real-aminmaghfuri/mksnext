
"use client";

import { PortfolioItem } from 'shared';

export const usePortfolioDetail = (item: PortfolioItem) => {
  const isDigital = item.category === 'DIGITAL';

  return {
    isDigital
  };
};
