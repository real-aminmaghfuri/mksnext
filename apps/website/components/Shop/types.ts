
import { ProductItem } from 'shared';

export interface ShopLogic {
  text: any; // Flexible dictionary type
  products: ProductItem[];
  formatPrice: (price: number) => string;
}
