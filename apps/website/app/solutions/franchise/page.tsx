
import React from 'react';
import type { Metadata } from 'next';
import { FranchiseSolution } from '../../../components/Solutions/Franchise';

export const metadata: Metadata = {
  title: 'Sistem Manajemen Franchise & Kemitraan | MKS',
  description: 'Sistem kontrol pusat untuk bisnis franchise. Pantau omzet mitra real-time, kunci stok bahan baku, dan hitung royalti otomatis. Stop kecurangan mitra.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions/franchise',
  },
  openGraph: {
    title: 'Sistem Manajemen Franchise & Kemitraan | MKS',
    description: 'Duplikasi sukses, bukan duplikasi masalah. Kontrol penuh ratusan cabang dalam satu dashboard.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/solutions/franchise',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function FranchisePage() {
  return (
    <div className="pt-0">
      <FranchiseSolution />
    </div>
  );
}
