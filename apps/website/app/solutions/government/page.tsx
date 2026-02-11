
import React from 'react';
import type { Metadata } from 'next';
import { GovernmentSolution } from '../../../components/Solutions/Government';

export const metadata: Metadata = {
  title: 'Smart Village & E-Government System | MKS',
  description: 'Solusi digital pemerintahan desa & dinas. Layanan mandiri warga, transparansi anggaran, dan pengaduan online. Pangkas birokrasi lelet.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions/government',
  },
  openGraph: {
    title: 'Smart Village & E-Government System | MKS',
    description: 'Reformasi birokrasi sekarang. Layani rakyat dengan sistem cepat, transparan, dan anti pungli.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/solutions/government',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function GovernmentPage() {
  return (
    <div className="pt-0">
      <GovernmentSolution />
    </div>
  );
}
