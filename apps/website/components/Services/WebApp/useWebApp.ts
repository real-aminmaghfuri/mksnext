
"use client";

import { 
  Database, Boxes, Lock, Zap, 
  LayoutDashboard, Server 
} from 'lucide-react';
import { WebAppContent } from './types';

export const useWebApp = (): WebAppContent => {
  return {
    hero: {
      badge: "ENTERPRISE SYSTEM ARCHITECTURE",
      title: "Sistem Lo Berantakan?",
      titleSpan: "Bisnis Lo Bom Waktu.",
      sub: "Excel udah lemot? Karyawan nipu data? Aplikasi pasaran fiturnya nanggung? Lo butuh 'Custom War System'. Gue bangunin aplikasi yang ngikutin cara kerja bisnis lo, bukan lo yang dipaksa ngikutin aplikasi.",
    },
    problems: {
      title: "STOP PAKAI MAINAN ANAK KECIL",
      sub: "Bisnis lo udah gede, transaksinya ribuan. Masih mau ngandelin tools gratisan atau manual? Ini resikonya:",
      items: [
        { 
          problem: "Data Tersebar di 10 Excel Berbeda.", 
          solution: "Centralized Database. Satu sumber kebenaran, bisa diakses real-time dari mana aja." 
        },
        { 
          problem: "Karyawan Bisa Edit Data Seenaknya.", 
          solution: "Role-Based Access Control (RBAC). Admin gudang gak bisa liat laporan keuangan. Log aktivitas tercatat." 
        },
        { 
          problem: "Sistem Crash Pas Orderan Rame.", 
          solution: "Scalable Cloud Architecture. Mau 100 atau 1 juta transaksi, server gue autoscale." 
        },
        { 
          problem: "Fitur Aplikasi Langganan Gak Sesuai SOP.", 
          solution: "Tailor-Made Logic. Gue koding sesuai SOP unik perusahaan lo. Gak ada fitur mubazir." 
        }
      ]
    },
    stack: {
      title: "ARSITEKTUR MASA DEPAN",
      sub: "Gue gak pake teknologi jaman batu. Ini stack yang dipake perusahaan Silicon Valley, gue bawa ke bisnis lo.",
      items: [
        {
          title: "Next.js & React",
          desc: "Framework frontend paling kenceng saat ini. UI licin, UX seamless, standar industri global.",
          icon: LayoutDashboard
        },
        {
          title: "Monorepo Turbo",
          desc: "Satu repo buat semua apps lo (Web, Admin, Mobile). Maintenance gampang, update fitur sat-set.",
          icon: Boxes
        },
        {
          title: "Supabase / PostgreSQL",
          desc: "Database relasional paling solid. Bisa nampung jutaan baris data tanpa batuk.",
          icon: Database
        },
        {
          title: "Edge Functions",
          desc: "Logic berjalan di server edge (dekat user). Proses hitung-hitungan berat jadi instan.",
          icon: Zap
        },
        {
          title: "End-to-End Encryption",
          desc: "Data sensitif lo aman. Bahkan admin database pun gak bisa baca password user.",
          icon: Lock
        },
        {
          title: "Cloud Infrastructure",
          desc: "Deploy di Vercel/AWS. Uptime 99.9%. Gak perlu takut mati lampu server lokal.",
          icon: Server
        }
      ]
    },
    process: {
      title: "BLUEPRINT MENUJU KENDALI TOTAL",
      steps: [
        { num: "01", title: "Bedah Anatomi", desc: "Gue gak langsung koding. Gue pelajari dulu SOP lo, masalah lo, dan di mana duit lo bocor." },
        { num: "02", title: "Prototyping", desc: "Gue bikin rancangan visual (UI/UX). Lo bisa klik-klik dulu aplikasinya sebelum jadi beneran." },
        { num: "03", title: "Execution", desc: "Fase coding. Gue bangun backend, frontend, dan database dengan standar clean code." },
        { num: "04", title: "Deployment", desc: "Sistem live. Gue training tim lo sampai bisa. Gue pantau performa server 24/7." }
      ]
    },
    cta: {
      title: "Bangun Kerajaan Digital Lo",
      sub: "Investasi sistem itu mahal di awal, tapi murah di akhir. Sekali bikin, profit lo aman seumur hidup. Jangan nunggu kolaps baru cari solusi.",
      btn: "KONSULTASI ARSITEKTUR SISTEM"
    }
  };
};
