import { Language, Translation, ProductItem } from './types';

export const DICTIONARY: Record<Language, Translation> = {
  [Language.ID]: {
    heroTitle: "Bisnis Lo Medan Perang, Bos. Jangan Bawa Mainan.",
    heroSubtitle: "Ini senjata paling savage buat validasi cuan lo di Solo. Gue ngeracik MKS bukan buat gaya-gayaan doang, tapi buat mastiin operasional lo gak ancur di tengah jalan.",
    ctaPrimary: "Sikat Sekarang",
    ctaSecondary: "Liat Barangnya",
    dashboardTitle: "Ruang Kendali",
    statsRevenue: "Total Cuan",
    statsOrders: "Transaksi Masuk",
    navDashboard: "Markas",
    navInventory: "Gudang",
    navSettings: "Settingan",
    loginHeading: "Login Komandan",
    loginSub: "Masuk ke akses level dewa.",
    
    // Website Nav
    navHome: "Markas",
    navAbout: "Jejak Gue",
    navServices: "Senjata",
    navShop: "Supply",
    navMenu: "Menu",
    navClose: "Cabut",

    // Services
    servicesTitle: "Amunisi Tempur Kita",
    servicesSub: "Gue gak jualan kecap manis. Ini semua infrastruktur sadis biar bisnis lo gak mati konyol dimakan kompetitor.",
    srvHardware: "Gear Fisik",
    srvHardwareDesc: "Mesin kasir badak, scanner laser, printer anti macet. Tahan banting buat lo yang kerjanya barbar.",
    srvSoftware: "Otak Digital",
    srvSoftwareDesc: "Arsitektur Monorepo, Next.js. Bukan web template murahan yang bikin malu brand lo di depan investor.",
    srvSeo: "Dominasi Google",
    srvSeoDesc: "Halaman satu atau mati. Teknik SEO 'black-ops' & organik buat nyulik trafik kompetitor masuk ke lapak lo.",
    srvConsulting: "Transfer Ilmu",
    srvConsultingDesc: "Gue ajarin SOP kasir anti maling, manajemen stok rapi, dan strategi marketing jalanan yang udah teruji.",

    // Shop
    shopTitle: "Supply Drop",
    shopSub: "Upgrade bisnismu pake equipment standar militer. Tahan banting, anti rewel, siap dihajar orderan ribuan kali.",
    shopBtnOrder: "Angkut Via WA",
    shopUnit: "Unit",

    // About
    aboutHeading: "Dibangun Dari Luka & Aspal Panas.",
    aboutTagline: "Story gue bukan dongeng motivasi basi. Ini kronik berdarah-darah, jalan kaki nawarin alat, dan penolakan yang bikin mental gue sekeras baja.",
    aboutFounderQuote: "Jujur-jujuran aja... Tahun 2022, gue pernah 'mati suri'. Aset digital ilang, domain diambil orang, profil google bisnis disuspend. Pernah juga dikadalin sama karyawan. Sistem berantakan gara-gara gue terlalu percaya sama 'manusia' tanpa sistem kontrol. Saat itu gue belajar satu hal mahal: Bisnis tanpa sistem yang kuat cuma nunggu waktu buat meledak.",
    
    // Turning Point Section
    aboutTurnTitle: "Titik Balik (The Turn)",
    aboutTurnP1: "Dari kehancuran itu, gue bangun ulang semuanya sendirian. Bukan buat bales dendam, tapi buat mastiin ",
    aboutTurnP1Bold: "lo gak perlu ngerasain sakit yang gue rasain.",
    aboutTurnP2Pre: "SIBOS dan Mesin Kasir yang gue rakit sekarang lahir dari trauma itu. Ini bukan sekadar alat jualan, ini adalah ",
    aboutTurnP2Bold: "asuransi",
    aboutTurnP2Mid: " buat bisnis lo. Gue desain fitur-fiturnya berdasarkan apa yang ",
    aboutTurnP2Italic1: "nyelametin duit",
    aboutTurnP2Mid2: ", bukan cuma apa yang ",
    aboutTurnP2Italic2: "keliatan canggih.",

    aboutPhil1Title: "Street Tested",
    aboutPhil1Desc: "Sistem gue lahir di jalanan, bukan di lab ber-AC. Udah kebal sama error lapangan.",
    aboutPhil2Title: "No Bullsh*t",
    aboutPhil2Desc: "Fitur sampah gue buang. Gue cuma kasih apa yang beneran lo butuhin buat nyari duit.",
    aboutPhil3Title: "Survival Instinct",
    aboutPhil3Desc: "Gue pernah bangkrut. Gue tau persis cara jagain aset lo biar gak bernasib sama kayak gue dulu.",

    // Legality Section
    legalTitle: "Gue Main Bersih",
    legalDesc: "Bisnis itu soal kepercayaan. Gue gak mau ngerusak nama yang udah gue bangun lagi dari nol. Ini buktinya gue legal.",
    legalLabelEntity: "Badan Hukum",
    legalValueEntity: "PT MESIN KASIR SOLO",
    legalLabelNIB: "NIB (Izin Usaha)",
    legalLabelSK: "SK Kemenkumham",
    legalLabelNPWP: "NPWP Perusahaan",
    legalLabelBank: "Rekening Sah (BNC)",
    legalCtaTitle: "CEK VALIDITAS",
    legalCtaDesc: "Lo bisa cek sendiri data perusahaan gue di web pemerintah biar yakin.",
    legalCtaBtn: "Buka OSS.GO.ID",
    legalFooterNote: "*Buat lo yang butuh dokumen asli buat vendor list atau tender, chat admin gue. Kita transparan.",

    // History Timeline
    hist2015Title: "2015: Modaldengkul.com",
    hist2015Desc: "Gue jalan kaki, Bos. Door-to-door di panasnya Solo nawarin mesin kasir. Ditolak ratusan kali, kaki lecet, tapi mental gue jadi bulletproof.",
    hist2018Title: "2018: Pasukan Terbentuk",
    hist2018Desc: "Mulai rekrut tim. Kita ngerasa di atas angin, tapi lupa kalo pondasi sistem kita masih kerupuk. Rapuh.",
    hist2021Title: "2021: Lahirnya SIBOS",
    hist2021Desc: "Gue muak sama aplikasi pasaran yang lembek. Gue bikin SIBOS. Kasir tempur buat kondisi lapangan yang brutal.",
    hist2022Title: "2022: Kiamat Kecil",
    hist2022Desc: "Pandemi hajar kita. Tim bubar jalan. Duit ludes. Domain 'kasirsolo' & 'sibos' ilang diserobot orang. Google Bisnis gue disuspend. Gelap, Bos.",
    hist2025Title: "2025: Balas Dendam",
    hist2025Desc: "Kita bangkit dari kubur. Bangun ulang dari nol pake arsitektur Enterprise Monorepo. Lebih pinter, lebih kejam, lebih siap perang.",

    // Footer
    footerDesc: "PT Mesin Kasir Solo. Kita partner perang lo. Gue sediain hardware kasir badak, Web Apps canggih, dan strategi Digital Marketing buat lo yang obsesi dominasi pasar.",
    footerCol1: "Amunisi",
    footerLink1: "Paket Kasir UMKM",
    footerLink2: "Enterprise War System",
    footerLink3: "Bikin Website Killer",
    footerLink4: "Konsultan SEO 'Jahat'",
    footerCol2: "Markas Komando",
    footerCopy: "© 2024 PT Mesin Kasir Solo. Jangan macem-macem, hak cipta dilindungi.",
    footerLegal1: "Aturan Main",
    footerLegal2: "Syarat Perang",
  },
  [Language.EN]: {
    heroTitle: "Your Business is War. Don't Bring Toys.",
    heroSubtitle: "This is the most savage weapon to validate your hustle in Solo. I built MKS not to look cool, but to ensure your ops don't crumble under fire.",
    ctaPrimary: "Let's Ride",
    ctaSecondary: "Check Gear",
    dashboardTitle: "Command Center",
    statsRevenue: "Total Loot",
    statsOrders: "Incoming Hits",
    navDashboard: "HQ",
    navInventory: "Armory",
    navSettings: "Configs",
    loginHeading: "Commander Login",
    loginSub: "Access god-mode privileges.",

    // Website Nav
    navHome: "HQ",
    navAbout: "My Scars",
    navServices: "Weapons",
    navShop: "Supply",
    navMenu: "Intel",
    navClose: "Bail",

    // Services
    servicesTitle: "Our Combat Loadout",
    servicesSub: "I don't sell sweet talk. This is the brutal infrastructure you need so your business doesn't die a stupid death.",
    srvHardware: "Physical Gear",
    srvHardwareDesc: "Tank-grade registers, laser scanners. Built tough for those of you who work like savages.",
    srvSoftware: "Digital Brain",
    srvSoftwareDesc: "Monorepo Architecture, Next.js. Not some cheap template web that embarrasses your brand in front of VCs.",
    srvSeo: "Google Domination",
    srvSeoDesc: "Page one or die trying. Black-ops & organic SEO techniques to hijack your competitor's traffic.",
    srvConsulting: "Skill Transfer",
    srvConsultingDesc: "I teach you anti-theft cashier SOPs, strict inventory control, and street-tested marketing strategies.",

    // Shop
    shopTitle: "Supply Drop",
    shopSub: "Upgrade your hustle with military-grade business equipment. Durable, glitch-proof, ready to take a beating.",
    shopBtnOrder: "Grab via WA",
    shopUnit: "Unit",

    // About
    aboutHeading: "Built on Asphalt & Wounds.",
    aboutTagline: "My story isn't some cheesy motivational quote. It's a chronicle of bleeding out, walking miles to sell tools, and rejections that turned my mind into steel.",
    aboutFounderQuote: "To be honest... In 2022, I almost 'died'. Digital assets gone, domain stolen, Google Business suspended. Even got played by employees. The system was a mess because I trusted 'humans' too much without a control system. That's when I learned a costly lesson: Business without a strong system is just waiting to explode.",
    
    // Turning Point Section
    aboutTurnTitle: "Titik Balik (The Turn)",
    aboutTurnP1: "From that destruction, I rebuilt everything alone. Not for revenge, but to ensure ",
    aboutTurnP1Bold: "you don't have to feel the pain I felt.",
    aboutTurnP2Pre: "SIBOS and the Cash Registers I build now were born from that trauma. These aren't just sales tools, they are ",
    aboutTurnP2Bold: "insurance",
    aboutTurnP2Mid: " for your business. I designed the features based on what ",
    aboutTurnP2Italic1: "saves money",
    aboutTurnP2Mid2: ", not just what ",
    aboutTurnP2Italic2: "looks high-tech.",

    aboutPhil1Title: "Street Tested",
    aboutPhil1Desc: "My system was born on the streets, not in an AC lab. It's immune to field errors.",
    aboutPhil2Title: "No Bullsh*t",
    aboutPhil2Desc: "I cut the garbage features. I only give you what you actually need to make bank.",
    aboutPhil3Title: "Survival Instinct",
    aboutPhil3Desc: "I went bankrupt once. I know exactly how to guard your assets so you don't end up like I did.",

    // Legality Section
    legalTitle: "I Play Clean",
    legalDesc: "Business is trust. I won't ruin the name I rebuilt from zero. Here is the proof I am legal.",
    legalLabelEntity: "Legal Entity",
    legalValueEntity: "PT MESIN KASIR SOLO",
    legalLabelNIB: "NIB (Business License)",
    legalLabelSK: "Ministry Decree (SK)",
    legalLabelNPWP: "Company Tax ID",
    legalLabelBank: "Official Bank Acc (BNC)",
    legalCtaTitle: "CHECK VALIDITY",
    legalCtaDesc: "You can check my company data yourself on the government website.",
    legalCtaBtn: "Open OSS.GO.ID",
    legalFooterNote: "*Need original docs for vendor list or tender? Chat my admin. We are transparent.",

    // History Timeline
    hist2015Title: "2015: The Grind",
    hist2015Desc: "I walked, Boss. Door-to-door under the sun selling registers. Hundreds of 'No's. Bleeding feet, bulletproof mindset.",
    hist2018Title: "2018: The Squad",
    hist2018Desc: "Started recruiting. We felt invincible, but forgot our system foundation was made of crackers. Fragile.",
    hist2021Title: "2021: Birth of SIBOS",
    hist2021Desc: "Sick of weak market apps. I engineered SIBOS. Combat-ready POS for brutal field conditions.",
    hist2022Title: "2022: The Mini Apocalypse",
    hist2022Desc: "Pandemic hit hard. Team dissolved. Funds dried up. Domains stolen. Google Business suspended. Total darkness, Boss.",
    hist2025Title: "2025: The Vengeance",
    hist2025Desc: "Rising from the grave. Rebuilt from scratch using Enterprise Monorepo. Smarter, meaner, readier for war.",

    // Footer
    footerDesc: "PT Mesin Kasir Solo. We are your combat partners. I provide tank-grade hardware, sophisticated Web Apps, and Digital Marketing strategies for those obsessed with market domination.",
    footerCol1: "The Arsenal",
    footerLink1: "SME POS Packs",
    footerLink2: "Enterprise War System",
    footerLink3: "Build Killer Websites",
    footerLink4: "'Evil' SEO Consulting",
    footerCol2: "Command HQ",
    footerCopy: "© 2024 PT Mesin Kasir Solo. Don't try anything funny. All rights reserved.",
    footerLegal1: "Rules of Engagement",
    footerLegal2: "Terms of War",
  }
};

export const MOCK_STATS = [
  { label: 'Revenue', value: 'IDR 2.4M', trend: '+12.5%' },
  { label: 'Orders', value: '1,240', trend: '+5.2%' },
  { label: 'Active POS', value: '24', trend: '0%' },
];

export const MOCK_PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: "MKS Fighter V1",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=400",
    desc: "Paket Kasir Android lengkap + Printer Thermal 58mm. Siap tempur untuk warung & cafe.",
    tag: "BEST SELLER"
  },
  {
    id: 2,
    name: "Thermal Savage 80mm",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400",
    desc: "Printer dapur heavy duty. Auto cutter. Koneksi LAN + USB. Anti macet saat rush hour.",
    tag: "HEAVY DUTY"
  },
  {
    id: 3,
    name: "Scanner Laser Gun",
    price: 450000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=400",
    desc: "Barcode scanner 1D/2D. Baca barcode lecek? Bisa. Respon milidetik."
  },
  {
    id: 4,
    name: "MKS Pro Tablet",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400",
    desc: "Tablet khusus POS. Baterai badak 8000mAh. Layar IPS jernih. Sudah include stand metal."
  }
];