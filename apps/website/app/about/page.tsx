
import React from 'react';
import type { Metadata } from 'next';
import { About } from '../../components/About/index';
import { Repository } from 'data';

export const metadata: Metadata = {
  title: 'Kisah Berdarah di Balik MKS | PT Mesin Kasir Solo',
  description: 'Gue gak jualan mimpi. Gue jualan sistem yang lahir dari trauma bangkrut dan aspal panas jalanan Solo.',
};

// FORCE DYNAMIC: Matikan caching statis.
// Halaman ini akan dirender ulang setiap request untuk menampilkan data terbaru (Foto/Teks).
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AboutPage() {
  // Fetch Identity Data (Single Source of Truth)
  // Karena 'force-dynamic', ini akan selalu ambil data fresh dari Supabase/Dexie
  const identity = await Repository.getCompanyIdentity();

  return (
    <div className="pt-20">
      <About identity={identity} />
    </div>
  );
}
