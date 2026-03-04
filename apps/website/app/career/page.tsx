
import React from 'react';
import type { Metadata } from 'next';
import { Career } from '../../components/Career';

export const metadata: Metadata = {
  title: 'Gabung Pasukan MKS | Karir PT Mesin Kasir Solo',
  description: 'Gue gak butuh robot. Gue butuh petarung yang siap diajak gila bangun ekosistem kasir terbaik di Indonesia.',
};

export default function CareerPage() {
  return (
    <div className="pt-0"> 
      {/* pt-0 because CareerHeader handles its own top padding/styling heavily */}
      <Career />
    </div>
  );
}
