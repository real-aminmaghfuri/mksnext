
"use client";

import { useConfig } from 'ui';
import { DICTIONARY, MOCK_PRODUCTS } from 'shared';
import { ShopLogic } from './types';

export const useShop = (): ShopLogic => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      maximumSignificantDigits: 3 
    }).format(price);
  };

  return {
    text,
    products: MOCK_PRODUCTS,
    formatPrice
  };
};
