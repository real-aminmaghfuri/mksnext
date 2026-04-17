/**
 * Product (Core ERP Stock Unit)
 */
export interface Product {
  id?: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
}

/**
 * ProductCatalogue (Website/SEO Extended Details)
 */
export interface ProductCatalogue extends Product {
  image: string; // Thumbnail
  gallery: string[]; // Multi-image support
  desc: string; // Short desc
  review: string; // Long narrative
  specs: string[];
  inBox: string[];
  weight: string;
  dimensions: string;
  tag?: string;
  category: any; // Overridden for website categories
}
