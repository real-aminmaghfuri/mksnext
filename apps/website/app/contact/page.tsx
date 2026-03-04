
import React from 'react';
import type { Metadata } from 'next';
import { Contact } from '../../components/Contact';
import { Repository } from 'data';

export const metadata: Metadata = {
  title: 'Hubungi Markas MKS | PT Mesin Kasir Solo',
  description: 'Butuh bantuan taktis buat bisnis lo? Chat admin gue atau dateng langsung ke markas. Kita siap tempur.',
};

export default async function ContactPage() {
  // Fetch from Supabase
  const identity = await Repository.getCompanyIdentity();

  return (
    <div className="pt-0">
      <Contact identity={identity} />
    </div>
  );
}
