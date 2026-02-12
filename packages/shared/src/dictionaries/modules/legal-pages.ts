
import { LegalPageDictionary } from '../../types';

export const LegalPage_ID: LegalPageDictionary = {
  termsTitle: "ATURAN MAIN",
  termsSub: "Bukan basa-basi hukum. Ini adalah kontrak tempur antara Gue (MKS) dan Lo (Klien) biar gak ada drama di kemudian hari.",
  termsContent: `
    <h3>1. KESEPAKATAN DASAR</h3>
    <p>Dengan mengakses layanan PT Mesin Kasir Solo (selanjutnya disebut "MKS"), lo setuju untuk tunduk pada aturan main ini. Kalau lo gak setuju, silakan tutup tab browser dan cari vendor lain yang lebih lembek.</p>
    
    <h3>2. PRODUK & GARANSI</h3>
    <p>Semua hardware yang gue jual adalah barang baru dan bergaransi resmi distributor. MKS bantu klaim garansi, TAPI keputusan ganti unit atau servis ada di tangan distributor pusat. Jangan marah-marah ke teknisi gue kalau prosesnya makan waktu.</p>
    
    <h3>3. LAYANAN SOFTWARE</h3>
    <p>Software MKS (SIBOS/Web Apps) adalah lisensi penggunaan, bukan hak milik kode sumber (source code), kecuali lo beli paket "Enterprise White Label" dengan harga khusus. Dilarang keras membajak, mendekompilasi, atau menjual ulang tanpa izin tertulis.</p>
    
    <h3>4. PEMBAYARAN & REFUND</h3>
    <p>DP (Down Payment) minimal 50% untuk mulai proyek custom. Pelunasan WAJIB dilakukan sebelum serah terima akses penuh. Refund tidak berlaku jika pembatalan sepihak dari klien setelah proyek berjalan.</p>
    
    <h3>5. BATASAN TANGGUNG JAWAB</h3>
    <p>MKS tidak bertanggung jawab atas kerugian bisnis akibat kelalaian user (lupa password, kena virus karena download sembarangan, atau korupsi karyawan). Kami sediakan sistem pengaman, tapi kuncinya ada di tangan lo.</p>
  `,
  
  privacyTitle: "PROTOKOL KERAHASIAAN",
  privacySub: "Data lo adalah aset. Gue jaga lebih ketat daripada rahasia negara. Gak ada istilah jual data ke pihak ketiga.",
  privacyContent: `
    <h3>1. DATA YANG KITA KUMPULKAN</h3>
    <p>Kita cuma simpen data yang esensial buat operasional: Nama, Alamat Toko, Nomor WA, dan data transaksi penjualan (untuk fitur dashboard). Kita gak kepo sama data pribadi lo yang gak relevan.</p>
    
    <h3>2. PENGGUNAAN DATA</h3>
    <p>Data lo dipake buat: memproses order, analisis performa bisnis lo (di dashboard lo sendiri), dan kirim info update sistem. MKS TIDAK AKAN PERNAH menjual database klien ke kompetitor, pinjol, atau sales asuransi.</p>
    
    <h3>3. KEAMANAN DATA</h3>
    <p>Semua koneksi ke server MKS terenkripsi (SSL/TLS). Password lo di-hash (diacak) sehingga bahkan tim IT MKS pun gak bisa baca password asli lo.</p>
    
    <h3>4. HAK LO</h3>
    <p>Lo berhak minta penghapusan data (Right to be Forgotten) kalau lo berhenti langganan. Chat admin, kita musnahkan data lo dari server secara permanen.</p>
  `,

  faqTitle: "INTEL BRIEF (FAQ)",
  faqSub: "Jawaban taktis buat pertanyaan yang sering ditembakkan ke markas.",
  faqItems: [
    {
        q: "Apakah sekali bayar atau langganan?",
        a: "Hardware sekali bayar jadi hak milik. Software ada yang sekali bayar (Lifetime License) untuk versi Desktop, dan ada yang langganan (SaaS) untuk versi Cloud/Web App demi maintenance server & update fitur."
    },
    {
        q: "Kalau internet mati, kasir tetep jalan?",
        a: "Jalan terus, Bos. SIBOS punya fitur 'Offline First'. Transaksi kesimpen di lokal dulu, pas internet nyala lagi otomatis sinkron ke cloud. Gak ada alesan gak bisa jualan."
    },
    {
        q: "Trainingnya gimana? Saya luar kota.",
        a: "Kita punya modul video tutorial lengkap. Kalau masih bingung, teknisi kita siap Remote Desktop (TeamViewer) atau Zoom Call private sampai lo dan karyawan lo paham 100%."
    },
    {
        q: "Support jam berapa?",
        a: "Tim support standby jam kerja (09:00 - 17:00). Tapi kalau ada error kritis (sistem mati total), WA aja. Founder sering begadang kok, siapa tau dibales."
    },
    {
        q: "Bisa custom fitur?",
        a: "Bisa banget. Itu spesialisasi MKS. Tapi custom ada biayanya, bos. Kita hitung based on complexity & man-hours. Konsultasi dulu aja."
    }
  ]
};

export const LegalPage_EN: LegalPageDictionary = {
  termsTitle: "RULES OF ENGAGEMENT",
  termsSub: "No legal fluff. This is the combat contract between Me (MKS) and You (Client) to avoid drama later.",
  termsContent: `
    <h3>1. BASIC AGREEMENT</h3>
    <p>By accessing PT Mesin Kasir Solo services (hereinafter "MKS"), you agree to abide by these rules. If you disagree, please close the browser tab and find a softer vendor.</p>
    
    <h3>2. PRODUCTS & WARRANTY</h3>
    <p>All hardware sold is brand new with official distributor warranty. MKS assists with claims, BUT the decision to replace or repair lies with the central distributor. Don't yell at my technicians if the process takes time.</p>
    
    <h3>3. SOFTWARE SERVICES</h3>
    <p>MKS Software (SIBOS/Web Apps) is a usage license, not source code ownership, unless you buy the "Enterprise White Label" package at a special price. Piracy, decompilation, or resale without written permission is strictly prohibited.</p>
    
    <h3>4. PAYMENT & REFUND</h3>
    <p>Minimum 50% DP (Down Payment) to start custom projects. Full payment MUST be made before full access handover. Refunds do not apply for unilateral cancellation by client after the project starts.</p>
    
    <h3>5. LIMITATION OF LIABILITY</h3>
    <p>MKS is not liable for business losses due to user negligence (forgotten passwords, viruses from careless downloads, or employee corruption). We provide security systems, but the key is in your hands.</p>
  `,
  
  privacyTitle: "CLASSIFIED PROTOCOLS",
  privacySub: "Your data is an asset. I guard it tighter than state secrets. No selling data to third parties.",
  privacyContent: `
    <h3>1. DATA WE COLLECT</h3>
    <p>We only store essential operational data: Name, Shop Address, WA Number, and sales transaction data (for dashboard features). We don't snoop on irrelevant personal data.</p>
    
    <h3>2. DATA USAGE</h3>
    <p>Your data is used to: process orders, analyze your business performance (on your own dashboard), and send system updates. MKS WILL NEVER sell client databases to competitors, loan sharks, or insurance sales.</p>
    
    <h3>3. DATA SECURITY</h3>
    <p>All connections to MKS servers are encrypted (SSL/TLS). Your passwords are hashed (scrambled) so even MKS IT team cannot read your actual password.</p>
    
    <h3>4. YOUR RIGHTS</h3>
    <p>You have the Right to be Forgotten if you unsubscribe. Chat admin, we will permanently destroy your data from the server.</p>
  `,

  faqTitle: "INTEL BRIEF (FAQ)",
  faqSub: "Tactical answers for frequently fired questions at HQ.",
  faqItems: [
    {
        q: "Is it one-time payment or subscription?",
        a: "Hardware is one-time payment, yours forever. Software has one-time payment options (Lifetime License) for Desktop versions, and subscription (SaaS) for Cloud/Web Apps for server maintenance & updates."
    },
    {
        q: "If internet dies, does POS still work?",
        a: "Works perfectly, Boss. SIBOS has 'Offline First' feature. Transactions stored locally, auto-syncs to cloud when internet returns. No excuse not to sell."
    },
    {
        q: "How about training? I'm out of town.",
        a: "We have complete video modules. If still confused, our techs are ready for Remote Desktop (TeamViewer) or private Zoom Call until you and your staff understand 100%."
    },
    {
        q: "Support hours?",
        a: "Support team stands by during work hours (09:00 - 17:00). But for critical errors (total system failure), just WA. Founder stays up late often, might reply."
    },
    {
        q: "Can I request custom features?",
        a: "Absolutely. That's MKS specialty. But custom costs money, boss. Calculated based on complexity & man-hours. Let's consult first."
    }
  ]
};
