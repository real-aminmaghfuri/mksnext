
import { FileText, Lock, HelpCircle, Download, BookOpen, Truck, AlertTriangle } from 'lucide-react';
import { Translation } from 'shared';
import { MenuItem } from '../types';

export const getSupportMenu = (text: Translation): MenuItem => ({
  label: text.navHelp,
  path: '#',
  hasDropdown: true,
  icon: HelpCircle,
  columns: [
      {
          title: text.navSupLegalHeader,
          width: 'narrow',
          items: [
              { label: text.navSupTerms, path: '/terms', icon: FileText, desc: "Perjanjian Pengguna" },
              { label: text.navSupPrivacy, path: '/privacy', icon: Lock, desc: "Kebijakan Data" },
              { label: text.navSupFaq, path: '/faq', icon: HelpCircle, desc: "Tanya Jawab Umum" },
          ]
      },
      {
          title: text.navSupHeader,
          width: 'wide',
          items: [
            { label: text.navSupDownload, path: '/download', icon: Download, desc: "Driver & Software" },
            { label: text.navSupKb, path: '/articles', icon: BookOpen, desc: "Tutorial & Dokumentasi" },
            { label: text.navSupTrack, path: '/track', icon: Truck, desc: "Cek Resi Pengiriman" },
            { label: text.navSupClaim, path: '/warranty', icon: AlertTriangle, desc: "Layanan Purna Jual" },
          ]
      }
  ]
});
