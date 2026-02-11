
import React from 'react';
import type { Metadata } from 'next';
import { WebAppService } from '../../../components/Services/WebApp';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Aplikasi Web Sistem Custom | MKS Tech',
  description: 'Bangun sistem manajemen bisnis custom (ERP/CRM/Inventory) dengan teknologi Modern Web App. Tinggalkan cara lama, beralih ke digital automation.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/services/web-app',
  },
  openGraph: {
    title: 'Jasa Pembuatan Aplikasi Web Sistem Custom | MKS Tech',
    description: 'Custom War System buat bisnis lo. Scalable, Secure, High Performance.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/services/web-app',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function WebAppPage() {
  return (
    <div className="pt-0">
      <WebAppService />
    </div>
  );
}
