
"use client";

import React from 'react';
import { useInventory } from '../../hooks/useInventory';
import { InventoryHeaderAtom } from './atoms/InventoryHeaderAtom';
import { InventoryTableAtom } from './atoms/InventoryTableAtom';

export const Inventory: React.FC = () => {
  const { 
    text, 
    products, 
    isLoading, 
    searchQuery, 
    setSearchQuery, 
    formatCurrency 
  } = useInventory();

  return (
    <div className="p-3 pb-20">
       <InventoryHeaderAtom 
          title="LOGISTIK & STOK"
          searchPlaceholder="Cari nama barang atau SKU..."
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAdd={() => alert("Fitur Tambah Produk akan aktif di update berikutnya, Ndan!")}
       />

       <InventoryTableAtom 
          products={products}
          isLoading={isLoading}
          formatCurrency={formatCurrency}
       />
    </div>
  );
};
