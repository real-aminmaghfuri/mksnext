
import React from 'react';
import type { Metadata } from 'next';
import { Portfolio } from '../../components/Portfolio';

export const metadata: Metadata = {
  title: 'Bukti Tempur (Portfolio) | PT Mesin Kasir Solo',
  description: '450+ klien udah gue amanin operasionalnya. Cek sendiri siapa aja yang udah pake senjata MKS.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-0">
      <Portfolio />
    </div>
  );
}
