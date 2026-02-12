
import React from 'react';
import type { Metadata } from 'next';
import { Legal } from '../../components/Legal';

export const metadata: Metadata = {
  title: 'Aturan Main (Terms of Service) | PT Mesin Kasir Solo',
  description: 'Syarat dan ketentuan penggunaan layanan MKS. Bukan basa-basi hukum, ini kontrak tempur kita.',
};

export default function TermsPage() {
  return (
    <div className="pt-0">
      <Legal type="TERMS" />
    </div>
  );
}
