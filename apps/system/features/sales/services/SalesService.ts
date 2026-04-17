import { Product, Transaction, CartItem } from 'types';
import { SalesRepository } from '../repositories/SalesRepository';

/**
 * SalesService (Business Logic Layer)
 * STRICT RULE: ONLY business logic mapping.
 * MUST orchestrate calls to Repository.
 * MUST NOT use React or access DB primitives directly.
 */
export class SalesService {
  
  /** Fetch catalog mapping logic (could include pricing rules later) */
  static async loadCatalog(): Promise<Product[]> {
    // Calling repository
    const response = await SalesRepository.getAvailableProducts();
    
    if (!response.success) {
      console.error("[SalesService] Catalog Load Fail:", response.error);
      throw new Error(response.error);
    }

    // Here we could inject business logic, e.g. mapping discounts for the day
    return response.data || [];
  }

  /** Calculate cart totals */
  static calculateTotal(cart: CartItem[]): number {
    return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  /** Execute Checkout Sequence */
  static async executeCheckout(cart: CartItem[], paymentMethod: string): Promise<void> {
    if (cart.length === 0) throw new Error("CART_EMPTY_ERROR");

    // 1. Calculate business numbers
    const finalTotal = this.calculateTotal(cart);

    // 2. Build the exact transaction schema
    const transactionPayload: Transaction = {
      total: finalTotal,
      status: 'COMPLETED',
      paymentMethod,
      createdAt: new Date(),
    };

    // 3. Delegate to Repository to persist
    const response = await SalesRepository.persistTransaction(transactionPayload);

    if (!response.success) {
      console.error("[SalesService] Checkout Fail:", response.error);
      throw new Error(response.error);
    }
  }

  /** Logic to add item or increment qty */
  static processAddToCart(currentCart: CartItem[], product: Product): CartItem[] {
    const existingIndex = currentCart.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
      const newCart = [...currentCart];
      newCart[existingIndex].quantity += 1;
      return newCart;
    }
    return [...currentCart, { product, quantity: 1 }];
  }

  /** Logic to update item qty or remove if zero */
  static processUpdateQuantity(currentCart: CartItem[], productId: number, quantity: number): CartItem[] {
    if (quantity <= 0) {
      return currentCart.filter(item => item.product.id !== productId);
    }
    return currentCart.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    );
  }
}

