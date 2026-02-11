
import React from 'react';
import type { Metadata } from 'next';
import { HealthSolution } from '../../../components/Solutions/Health';

export const metadata: Metadata = {
  title: 'Aplikasi Kasir Apotek & Klinik (Medis) | MKS',
  description: 'Solusi manajemen apotek & klinik. Kartu stok digital, notifikasi expired date, dan rekam medis pasien. Akurasi 100% tanpa kompromi.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions/health',
  },
  openGraph: {
    title: 'Aplikasi Kasir Apotek & Klinik (Medis) | MKS',
    description: 'Urusan nyawa jangan main-main. Pake sistem MKS buat jaga akurasi stok obat dan resep dokter.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/solutions/health',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function HealthPage() {
  return (
    <div className="pt-0">
      <HealthSolution />
    </div>
  );
}
