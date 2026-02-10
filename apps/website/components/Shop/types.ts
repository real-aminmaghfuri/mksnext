
import { ProductItem } from 'shared';

export type ShopCategory = 'ALL' | 'ANDROID' | 'PC' | 'PERIPHERALS';

export interface ShopLogic {
  text: any; // Flexible dictionary type
  products: ProductItem[];
  formatPrice: (price: number) => string;
  activeCategory: ShopCategory;
  setCategory: (cat: ShopCategory) => void;
  generateWaLink: (productName: string) => string;
}
