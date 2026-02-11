
import React from 'react';
import type { Metadata } from 'next';
import { EducationSolution } from '../../../components/Solutions/Education';

export const metadata: Metadata = {
  title: 'Sistem Manajemen Sekolah & SPP Digital | MKS',
  description: 'Aplikasi sekolah terintegrasi. Pembayaran SPP via WA, laporan keuangan yayasan real-time, dan PPDB online auto-pilot.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions/education',
  },
  openGraph: {
    title: 'Sistem Manajemen Sekolah & SPP Digital | MKS',
    description: 'Modernisasi sekolah lo sekarang. Transparan, akuntabel, dan bebas drama administrasi.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/solutions/education',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function EducationPage() {
  return (
    <div className="pt-0">
      <EducationSolution />
    </div>
  );
}
