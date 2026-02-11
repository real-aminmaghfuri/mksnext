
import React from 'react';
import type { Metadata } from 'next';
import { RetailSolution } from '../../../components/Solutions/Retail';

export const metadata: Metadata = {
  title: 'Sistem Kasir Ritel & Grosir Anti-Maling | MKS Digital',
  description: 'Software kasir minimarket dan toko grosir dengan fitur lock harga, blind stock opname, dan audit trail. Stop kebocoran stok sekarang.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions/retail',
  },
  openGraph: {
    title: 'Sistem Kasir Ritel & Grosir Anti-Maling | MKS Digital',
    description: 'Solusi brutal untuk masalah stok ghaib dan kasir nakal. Amankan profit lo sekarang.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/solutions/retail',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function RetailPage() {
  return (
    <div className="pt-0">
      <RetailSolution />
    </div>
  );
}
