
import React from 'react';
import type { Metadata } from 'next';
import { ServicesSolution } from '../../../components/Solutions/Services';

export const metadata: Metadata = {
  title: 'Aplikasi Kasir Laundry, Barbershop & Bengkel (Services) | MKS',
  description: 'Solusi manajemen bisnis jasa & layanan. Booking online, komisi karyawan otomatis, dan tracking status order real-time. Anti drama.',
  alternates: {
    canonical: 'https://mesinkasirsolo.com/solutions/services',
  },
  openGraph: {
    title: 'Aplikasi Kasir Laundry, Barbershop & Bengkel (Services) | MKS',
    description: 'Stop jadi kacung di bisnis sendiri. Pake sistem MKS biar kerjaan rapi dan profit aman.',
    type: 'website',
    url: 'https://mesinkasirsolo.com/solutions/services',
    siteName: 'PT Mesin Kasir Solo',
  }
};

export default function ServicesPage() {
  return (
    <div className="pt-0">
      <ServicesSolution />
    </div>
  );
}
