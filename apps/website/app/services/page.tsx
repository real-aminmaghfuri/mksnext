import React from 'react';
import type { Metadata } from 'next';
import { Services } from '../../components/Services';

export const metadata: Metadata = {
  title: 'Layanan Tempur Bisnis | PT Mesin Kasir Solo',
  description: 'Dari setup hardware sampe sistem cloud ERP. Gue kasih solusi yang beneran nyelametin duit lo.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
    </div>
  );
}