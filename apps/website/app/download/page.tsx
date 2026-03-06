
import { DownloadCenter } from '@/components/DownloadCenter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Center | PT Mesin Kasir Solo',
  description: 'Pusat unduhan driver, software, dan manual book resmi dari PT Mesin Kasir Solo.',
};

export default function DownloadPage() {
  return <DownloadCenter />;
}
