
import React from 'react';
import type { Metadata } from 'next';
import { OnlineStore } from '../../../components/Services/OnlineStore';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Web Toko Online Auto-Pilot | MKS Digital',
  description: 'Bikin toko online dengan sistem auto ongkir & payment gateway otomatis. Biarkan website jualan 24 jam selagi lo tidur. Stop jadi admin manual.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/services/online-store',
  },
  openGraph: {
    title: 'Jasa Web Toko Online Auto-Pilot | MKS Digital',
    description: 'Mesin uang otomatis. Auto Ongkir, Payment Gateway, Laporan Realtime.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/services/online-store',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function OnlineStorePage() {
  return (
    <div className="pt-0">
      <OnlineStore />
    </div>
  );
}
