
import React from 'react';
import type { Metadata } from 'next';
import { Legal } from '../../components/Legal';

export const metadata: Metadata = {
  title: 'Intel Brief (FAQ) | PT Mesin Kasir Solo',
  description: 'Jawaban taktis buat pertanyaan yang sering ditembakkan ke markas MKS.',
};

export default function FAQPage() {
  return (
    <div className="pt-0">
      <Legal type="FAQ" />
    </div>
  );
}
