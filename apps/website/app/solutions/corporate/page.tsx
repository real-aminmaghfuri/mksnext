
import React from 'react';
import type { Metadata } from 'next';
import { CorporateSolution } from '../../../components/Solutions/Corporate';

export const metadata: Metadata = {
  title: 'WMS & Enterprise System untuk Pabrik & Distributor | MKS',
  description: 'Sistem manajemen gudang (WMS), Salesman Canvas, dan Hutang Piutang otomatis. Tutup celah kebocoran stok dan manipulasi order.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions/corporate',
  },
  openGraph: {
    title: 'WMS & Enterprise System untuk Pabrik & Distributor | MKS',
    description: 'Basmi mafia logistik di perusahaan lo. Sistem WMS MKS transparan, real-time, dan anti-maling.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/solutions/corporate',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function CorporatePage() {
  return (
    <div className="pt-0">
      <CorporateSolution />
    </div>
  );
}
