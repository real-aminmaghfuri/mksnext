
import React from 'react';
import type { Metadata } from 'next';
import { FnbSolution } from '../../../components/Solutions/Fnb';

export const metadata: Metadata = {
  title: 'Sistem Kasir Restoran & Cafe (F&B) | MKS Digital',
  description: 'Manajemen dapur digital anti chaos. KDS, QR Order, dan lock resep bahan baku. Solusi brutal buat owner resto yang capek rugi bahan.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions/fnb',
  },
  openGraph: {
    title: 'Sistem Kasir Restoran & Cafe (F&B) | MKS Digital',
    description: 'Stop bakar duit di dapur. Pakai sistem F&B tempur dari MKS.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/solutions/fnb',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function FnbPage() {
  return (
    <div className="pt-0">
      <FnbSolution />
    </div>
  );
}
