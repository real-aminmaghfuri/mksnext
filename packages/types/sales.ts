import { Product } from './product';

/**
 * Transaction (Sales Order)
 */
export interface Transaction {
  id?: number; 
  uuid?: string;
  total: number;
  status: 'COMPLETED' | 'PENDING' | 'CANCELLED';
  paymentMethod: 'CASH' | 'QRIS' | 'DEBIT';
  createdAt: Date;
}

/**
 * CartItem (POS/Checkout Unit)
 */
export interface CartItem {
  product: Product;
  quantity: number;
}
