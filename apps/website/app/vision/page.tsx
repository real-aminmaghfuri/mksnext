
import React from 'react';
import type { Metadata } from 'next';
import { Vision } from '../../components/Vision';

export const metadata: Metadata = {
  title: 'Visi & Misi Markas MKS | PT Mesin Kasir Solo',
  description: 'Gue punya mimpi besar buat digitalisasi UMKM Indonesia tanpa ribet. Ini roadmap masa depan kita.',
};

export default function VisionPage() {
  return (
    <div className="pt-20">
      <Vision />
    </div>
  );
}
