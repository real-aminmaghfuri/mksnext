
import { KnowledgeBase } from '@/components/KnowledgeBase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Knowledge Base | PT Mesin Kasir Solo',
  description: 'Pusat tutorial, panduan, dan dokumentasi teknis resmi dari PT Mesin Kasir Solo.',
};

export default function KbPage() {
  return <KnowledgeBase />;
}
