
"use client";

import { Globe, Zap, Search, Smartphone, ShieldCheck, Fingerprint } from 'lucide-react';
import { ProfileContent } from './types';

export const useCompanyProfile = (): ProfileContent => {
  return {
    hero: {
      badge: "DIGITAL HEADQUARTERS",
      title: "Website Lo Adalah",
      titleSpan: "Wajah Lo.",
      sub: "Hari gini PT gak punya website resmi? Lo itu hantu atau perusahaan? Gue bangunin 'Markas Digital' yang bikin klien lo sungkem sebelum ketemu langsung.",
    },
    reality: {
      title: "JANGAN JADI BISNIS GHAIB",
      desc: "Lo boleh punya ruko 3 lantai, tapi kalau di Google nama PT lo gak muncul, di mata klien milenial & korporat, lo itu 'Ghaib'. Kredibilitas lo Nol.",
      points: [
        "Instagram doang gak cukup, itu lapak mainan, bukan kantor resmi.",
        "Investor & Bank butuh validasi digital, bukan kartu nama kertas.",
        "Kompetitor lo udah punya website, lo masih ngandelin broadcast WA?",
      ]
    },
    features: {
      title: "Spesifikasi Tempur",
      sub: "Gue gak pake template gratisan yang loadingnya kayak siput. Ini spek website yang gue rakit buat lo:",
      items: [
        {
          title: "Architecture: Next.js",
          desc: "Teknologi yang dipake Netflix & TikTok. Cepet, ringan, anti-lelet. Bukan WordPress yang gampang di-hack bocil.",
          icon: Zap
        },
        {
          title: "SEO Friendly (Radar Google)",
          desc: "Struktur kodingan gue bikin Google jatuh cinta. Website lo gampang dipanggil di halaman satu.",
          icon: Search
        },
        {
          title: "Mobile First (Jempol Friendly)",
          desc: "90% klien lo buka web dari HP. Desain gue adaptif, tombolnya pas di jempol, gak perlu zoom-in zoom-out.",
          icon: Smartphone
        },
        {
          title: "Cyber Security (Benteng Digital)",
          desc: "SSL Certificate, Anti-DDOS, dan proteksi data standar industri. Aset digital lo aman dari serangan siber.",
          icon: ShieldCheck
        },
        {
          title: "Luxury UI/UX",
          desc: "Tampilan mahal. Gue mainin 'Negative Space' dan tipografi yang bikin brand lo keliatan bonafide.",
          icon: Globe
        },
        {
          title: "Brand Identity",
          desc: "Gue gak asal copy-paste. Web ini bakal memancarkan aura & karakter bisnis lo yang sebenernya.",
          icon: Fingerprint
        }
      ]
    },
    cta: {
      title: "Berhenti Jadi Penonton",
      sub: "Saatnya lo punya aset digital sendiri. Sekali bayar, aset seumur hidup. Jangan nunggu kompetitor lo makin jauh.",
      btn: "KONSULTASI WEBSITE SEKARANG"
    }
  };
};
