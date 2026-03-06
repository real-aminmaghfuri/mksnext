
import { WarrantyClaim } from '../../components/Warranty';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Klaim Garansi & Retur | PT Mesin Kasir Solo',
  description: 'Layanan purna jual resmi PT Mesin Kasir Solo. Ajukan klaim garansi atau pengembalian barang dengan mudah dan transparan.',
};

export default function WarrantyPage() {
  return <WarrantyClaim />;
}
