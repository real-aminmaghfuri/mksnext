
import React from 'react';
import type { Metadata } from 'next';
import { CompanyProfile } from '../../../components/Services/CompanyProfile';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Company Profile Premium | MKS Digital',
  description: 'Bikin website perusahaan yang bonafide, cepat, dan SEO ready. Jangan biarkan brand lo terlihat murahan di mata klien. Upgrade digital sekarang.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/services/company-profile',
  },
  openGraph: {
    title: 'Jasa Website Company Profile Premium | MKS Digital',
    description: 'Markas Digital untuk brand lo. Website cepat, aman, dan elegan.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/services/company-profile',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function CompanyProfilePage() {
  return (
    <div className="pt-0">
      <CompanyProfile />
    </div>
  );
}
