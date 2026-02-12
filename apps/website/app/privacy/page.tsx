
import React from 'react';
import type { Metadata } from 'next';
import { Legal } from '../../components/Legal';

export const metadata: Metadata = {
  title: 'Protokol Kerahasiaan (Privacy Policy) | PT Mesin Kasir Solo',
  description: 'Cara gue jaga data bisnis lo. Transparan, aman, dan gak ada jual-beli data ke pihak ketiga.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-0">
      <Legal type="PRIVACY" />
    </div>
  );
}
