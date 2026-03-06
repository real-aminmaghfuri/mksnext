
import { OrderTracking } from '../../components/Track';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lacak Pesanan | PT Mesin Kasir Solo',
  description: 'Cek status pengiriman paket mesin kasir lo secara real-time. Masukkan nomor resi dan pantau pergerakan amunisi lo.',
};

export default function TrackPage() {
  return <OrderTracking />;
}
