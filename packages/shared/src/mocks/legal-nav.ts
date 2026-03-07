
import { Scale, Lock, HelpCircle, BookOpen, Monitor, Cloud, Code, TrendingUp, DollarSign, ShieldAlert, Database, Key, Trash2, MessageSquare, AlertCircle } from 'lucide-react';

export const LEGAL_SIDEBAR_DATA = [
  {
    category: "DOKUMEN RESMI",
    items: [
      { label: "Konstitusi (TOS)", path: "/terms", icon: Scale },
      { label: "Privasi Data", path: "/privacy", icon: Lock },
      { label: "Intel Brief (FAQ)", path: "/faq", icon: HelpCircle },
    ]
  },
  {
    category: "PASAL SPESIFIK (TOS)",
    items: [
      { label: "Bab I: Etika & Doktrin", path: "/terms#bab-1", icon: BookOpen },
      { label: "Bab II: Aturan Hardware", path: "/terms#bab-2", icon: Monitor },
      { label: "Bab III: Software & SaaS", path: "/terms#bab-3", icon: Cloud },
      { label: "Bab IV: Custom Project", path: "/terms#bab-4", icon: Code },
      { label: "Bab V: Jasa Digital/SEO", path: "/terms#bab-5", icon: TrendingUp },
      { label: "Bab VI: Duit & Refund", path: "/terms#bab-6", icon: DollarSign },
    ]
  },
  {
    category: "PROTOKOL PRIVASI",
    items: [
      { label: "No Data Selling", path: "/privacy#policy-1", icon: ShieldAlert },
      { label: "Data Collection", path: "/privacy#policy-2", icon: Database },
      { label: "Security Level", path: "/privacy#policy-3", icon: Key },
      { label: "Data Wipe Out", path: "/privacy#policy-5", icon: Trash2 },
    ]
  },
  {
    category: "INTEL BRIEF (FAQ)",
    items: [
      { label: "Sistem Pembayaran", path: "/faq#faq-0", icon: DollarSign },
      { label: "Support & Maintenance", path: "/faq#faq-1", icon: MessageSquare },
      { label: "Klaim Garansi", path: "/faq#faq-2", icon: AlertCircle },
    ]
  }
];
