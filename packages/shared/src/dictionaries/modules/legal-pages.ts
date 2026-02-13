
import { LegalPageDictionary } from '../../types';

export const LegalPage_ID: LegalPageDictionary = {
  termsTitle: "ATURAN MAIN",
  termsSub: "Bukan basa-basi hukum. Ini adalah kontrak tempur antara Gue (MKS) dan Lo (Klien) biar gak ada drama di kemudian hari.",
  termsContent: `
    <h3>1. KESEPAKATAN DASAR</h3>
    <p>Dengan mengakses layanan PT Mesin Kasir Solo (selanjutnya disebut "MKS"), lo setuju untuk tunduk pada aturan main ini. Kalau lo gak setuju atau merasa aturan ini terlalu keras, silakan tutup tab browser dan cari vendor lain yang lebih lembek.</p>
    
    <h3>2. PROTOKOL HARDWARE (FISIK)</h3>
    <p><strong>Garansi & Segel:</strong> Semua hardware (PC, Printer, Scanner) bergaransi resmi distributor. Segel rusak = Garansi hangus. Jangan coba-coba bongkar sendiri kalau lo bukan teknisi.</p>
    <p><strong>Wajib Video Unboxing:</strong> Komplain barang cacat/kurang TANPA video unboxing <em>uncut</em> (tanpa potongan) tidak akan kami layani. Ini prosedur standar buat nangkep "tuyul" ekspedisi atau buyer nakal.</p>
    
    <h3>3. LAYANAN CUSTOM DEVELOPMENT (WEB & APPS)</h3>
    <p><strong>Scope of Work (Lingkup Kerja):</strong> Kita kerja sesuai dokumen kesepakatan awal (SOW). Fitur tambahan di tengah jalan = <strong>INVOICE BARU</strong>. Jangan minta "bonus fitur" yang butuh koding 3 hari 3 malam.</p>
    <p><strong>Source Code:</strong> Kecuali disepakati lain (paket White Label / Enterprise), hak cipta kode sumber tetap milik MKS. Lo beli lisensi pakai, bukan beli otak programmer gue.</p>
    <p><strong>Revisi:</strong> Revisi itu perbaikan minor (bug, typo, warna), bukan ganti konsep total. Ganti konsep = Proyek Baru.</p>
    
    <h3>4. JASA SEO & DIGITAL MARKETING</h3>
    <p><strong>Gak Ada Jaminan Instan:</strong> SEO itu maraton, bukan lari sprint. Kalau ada yang janjiin "Halaman 1 Google Besok Pagi", itu penipu. Gue pake teknik <em>White Hat</em> & <em>Grey Hat</em> yang aman jangka panjang.</p>
    <p><strong>Algoritma Google:</strong> Google itu tuhan-nya SEO. Kalau mereka update algoritma dan peringkat lo goyang, itu resiko perang. Kita bakal optimasi ulang, tapi jangan nyalahin MKS atas kebijakan Google.</p>

    <h3>5. SOFTWARE AS A SERVICE (SaaS / LANGGANAN)</h3>
    <p><strong>Telat Bayar = System Lock:</strong> Server butuh listrik, tim support butuh makan. Kalau lo telat bayar langganan bulanan/tahunan, sistem otomatis mengunci akses data lo sampai invoice lunas. No Hard Feelings, just Business.</p>
    <p><strong>Data Ownership:</strong> Data transaksi adalah milik lo 100%. MKS gak berhak dan gak akan mengklaim data penjualan lo. Lo bisa export data kapan aja selagi masa aktif masih berlaku.</p>
    
    <h3>6. PEMBAYARAN & REFUND</h3>
    <p>DP (Down Payment) minimal 50% untuk mulai proyek custom. Pelunasan WAJIB dilakukan sebelum serah terima akses penuh/deploy server. Refund <strong>TIDAK BERLAKU</strong> jika pembatalan sepihak dari klien setelah proyek berjalan atau barang sudah dikirim.</p>
    
    <h3>7. BATASAN TANGGUNG JAWAB</h3>
    <p>MKS menyediakan sistem keamanan terbaik, tapi kuncinya ada di tangan lo. Kami tidak bertanggung jawab atas kerugian bisnis akibat:</p>
    <ul>
        <li>Kelalaian user (Password ditempel di monitor, kena phising, download virus).</li>
        <li>Korupsi/kecurangan karyawan lo sendiri (Sistem MKS punya log audit, gunakan itu buat bukti).</li>
        <li>Force Majeure (Bencana alam, perang, kiamat internet global).</li>
    </ul>
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
    <p>By accessing PT Mesin Kasir Solo services (hereinafter "MKS"), you agree to abide by these rules. If you disagree or find these rules too harsh, please close the browser tab and find a softer vendor.</p>
    
    <h3>2. HARDWARE PROTOCOLS</h3>
    <p><strong>Warranty & Seals:</strong> All hardware (PC, Printer, Scanner) comes with official distributor warranty. Broken seal = Void warranty. Do not attempt to disassemble unless you are a technician.</p>
    <p><strong>Mandatory Unboxing Video:</strong> Complaints about defective/missing items WITHOUT an <em>uncut</em> unboxing video will not be entertained. This is standard procedure to catch shipping mishaps or bad faith buyers.</p>
    
    <h3>3. CUSTOM DEVELOPMENT (WEB & APPS)</h3>
    <p><strong>Scope of Work (SOW):</strong> We work according to the initial agreement document. Additional features mid-way = <strong>NEW INVOICE</strong>. Do not ask for "bonus features" that require 3 days of coding.</p>
    <p><strong>Source Code:</strong> Unless agreed otherwise (White Label / Enterprise package), source code copyright remains with MKS. You buy a usage license, not my programmer's brain.</p>
    <p><strong>Revisions:</strong> Revisions are for minor fixes (bugs, typos, colors), not a total concept overhaul. Concept change = New Project.</p>
    
    <h3>4. SEO & DIGITAL MARKETING</h3>
    <p><strong>No Instant Guarantees:</strong> SEO is a marathon, not a sprint. Anyone promising "Page 1 Google Tomorrow" is a scammer. I use <em>White Hat</em> & <em>Grey Hat</em> techniques that are safe for the long run.</p>
    <p><strong>Google Algorithm:</strong> Google is the god of SEO. If they update the algorithm and your ranking shakes, that's the risk of war. We will re-optimize, but don't blame MKS for Google's policies.</p>

    <h3>5. SOFTWARE AS A SERVICE (SaaS / SUBSCRIPTION)</h3>
    <p><strong>Late Payment = System Lock:</strong> Servers need electricity, support teams need food. If you are late on monthly/yearly subscription, the system automatically locks data access until the invoice is paid. No Hard Feelings, just Business.</p>
    <p><strong>Data Ownership:</strong> Transaction data is 100% yours. MKS has no right and will not claim your sales data. You can export data anytime while your subscription is active.</p>
    
    <h3>6. PAYMENT & REFUND</h3>
    <p>Minimum 50% DP (Down Payment) to start custom projects. Full payment MUST be made before full access handover/server deploy. Refunds <strong>DO NOT APPLY</strong> for unilateral cancellation by the client after the project starts or goods are shipped.</p>
    
    <h3>7. LIMITATION OF LIABILITY</h3>
    <p>MKS provides top-tier security systems, but the key is in your hands. We are not liable for business losses due to:</p>
    <ul>
        <li>User negligence (Password taped to monitor, phishing, downloading viruses).</li>
        <li>Your own employee corruption (MKS system has audit logs, use them for evidence).</li>
        <li>Force Majeure (Natural disasters, war, global internet apocalypse).</li>
    </ul>
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
