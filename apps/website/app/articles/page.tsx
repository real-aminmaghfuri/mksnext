
import React from 'react';
import type { Metadata } from 'next';
import { Articles } from '../../components/Articles';
import { ID_DICTIONARY } from 'shared';

export const metadata: Metadata = {
  title: 'Gudang Wawasan & Strategi Bisnis Ritel | MKS Intel',
  description: 'Bongkar rahasia dapur manajemen ritel, strategi marketing jalanan, dan teknis operasional mesin kasir. Baca biar bisnis lo gak mati konyol.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/articles',
  },
  openGraph: {
    title: 'Gudang Wawasan & Strategi Bisnis Ritel | MKS Intel',
    description: 'Intel jalanan, strategi lapangan, dan update teknologi kasir terbaru.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/articles',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function ArticlesPage() {
  return (
    <div className="pt-0">
      <Articles />
    </div>
  );
}
