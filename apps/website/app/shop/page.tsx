
import React from 'react';
import type { Metadata } from 'next';
import { Shop } from '../../components/Shop';
import { MOCK_PRODUCTS } from 'shared';

export const metadata: Metadata = {
  title: 'Katalog Senjata Kasir & Hardware | Supply Drop MKS',
  description: 'Daftar lengkap mesin kasir Android, PC Desktop, Printer Thermal, dan Barcode Scanner. Stok ready Solo, siap kirim seluruh Indonesia.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/shop',
  },
  openGraph: {
    title: 'Katalog Senjata Kasir & Hardware | Supply Drop MKS',
    description: 'Upgrade bisnismu pake equipment standar militer. Tahan banting, anti rewel, siap dihajar orderan.',
    url: 'https://mesinkasirsolo.com/shop',
    siteName: 'PT Mesin Kasir Solo',
    type: 'website',
  }
};

export default function ShopPage() {
  // SCHEMA MARKUP (JURUS BAYANGAN: KATALOG PRODUK)
  // Google bakal baca ini sebagai daftar barang dagangan resmi.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Katalog Mesin Kasir Solo',
    'description': 'Hardware dan software kasir grade industrial untuk UMKM dan Corporate.',
    'itemListElement': MOCK_PRODUCTS.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': product.name,
        'description': product.desc,
        'image': product.image,
        'sku': `MKS-SKU-${product.id}`,
        'brand': {
          '@type': 'Brand',
          'name': 'MKS Hardware'
        },
        'offers': {
          '@type': 'Offer',
          'price': product.price.toString(),
          'priceCurrency': 'IDR',
          'availability': 'https://schema.org/InStock',
          'url': 'https://mesinkasirsolo.com/shop', // Nanti update ke slug detail produk kalau sudah ada
          'itemCondition': 'https://schema.org/NewCondition'
        }
      }
    }))
  };

  return (
    <>
      {/* INJECTION SUCCESSFUL: Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="pt-20">
        <Shop />
      </div>
    </>
  );
}
