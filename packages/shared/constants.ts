
import { Language, Translation, ProductItem, PortfolioItem } from './types';

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
    
    // Website Nav - KEYWORD OPTIMIZED
    navHome: "BERANDA",
    navAbout: "PROFIL USAHA", // Popular: Profil
    navAboutProfile: "Tentang PT MKS",
    navAboutTeam: "Pasukan Elite",
    navAboutVision: "Visi & Misi",
    navAboutPortfolio: "Jejak Pertempuran",
    navContact: "Hubungi Gue",
    navCareer: "Rekrutmen Pasukan",
    
    navSolutions: "MESIN KASIR & APP", // Popular: Mesin Kasir, Aplikasi
    navSolHardware: "Hardware Kasir (POS)",
    navSolSoftware: "Software Kasir (SaaS)",
    navSolConsulting: "Konsultasi & SOP",

    navInnovation: "JASA WEBSITE", // Popular: Jasa Website
    navWebCompro: "Web Company Profile",
    navWebEcom: "Web Toko Online",
    navWebCustom: "Aplikasi Web Custom",
    navWebSeo: "Jasa SEO Google",

    navHelp: "SUPPORT",
    navInsights: "WAWASAN",
    
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

    // Vision Mission
    visionHeading: "Mimpi Gede & Kerja Keras.",
    visionSub: "Gue gak bangun PT Mesin Kasir Solo cuma buat cari untung receh. Gue punya misi buat nyelametin ribuan UMKM dari kebangkrutan karena buta data.",
    visionTitle: "Visi Gue (The Dream)",
    visionStatement: "Menjadi Benteng Pertahanan Digital #1 buat UMKM Indonesia. Gue mau liat warung kecil punya sistem secanggih minimarket modern, tanpa harus bayar mahal.",
    
    missionTitle: "Misi Harian (The Grind)",
    missionSub: "Ini yang tim gue kerjain tiap hari buat lo:",
    mission1Title: "Hancurin Mitos Mahal",
    mission1Desc: "Teknologi canggih gak harus bikin kantong bolong. Gue hadirkan mesin kasir & software enterprise dengan harga rakyat.",
    mission2Title: "Edukasi Sampai Pinter",
    mission2Desc: "Gue haram hukumnya jual putus. Lo dan staf lo bakal gue training sampai bener-bener ngerti cara baca data bisnis.",
    mission3Title: "Inovasi Gak Ada Matinya",
    mission3Desc: "SIBOS & QALAM bakal terus gue update. Lo gak perlu pusing mikirin coding, biar itu urusan gue.",
    mission4Title: "Support Tanpa Drama",
    mission4Desc: "Kalau alat rusak, gue yang pusing, bukan lo. Tim teknis gue siap backup biar jualan lo gak keganggu.",

    // DNA Section
    dnaTitle: "DNA Gue",
    dnaSub: "Prinsip jalanan yang gue tanam ke semua anak buah gue.",
    dna1Title: "Jujur Harga Mati",
    dna1Desc: "Gue gak bakal jual barang yang gak lo butuhin cuma demi omzet. Kalau barang jelek, gue bilang jelek. Transparansi nomor satu.",
    dna2Title: "Mental Baja",
    dna2Desc: "Lahir dari kegagalan 2022, gue punya mental survivor. Gue ngerti susahnya bangun bisnis dari nol karena gue juga ngalamin.",
    dna3Title: "Anti Sambat",
    dna3Desc: "Disini gak ada tempat buat ngeluh. Ada masalah? Cari solusi. Error? Perbaiki. Deadline? Sikat.",
    dna4Title: "Lo Bosnya",
    dna4Desc: "Gue idup dari profit lo. Kalau bisnis lo mati, bisnis gue juga mati. Jadi gue bakal mati-matian bikin lo sukses.",
    dna5Title: "Sat Set Wat Wet",
    dna5Desc: "Bisnis itu balapan. Gue kerja cepet. Chat dibales kilat, pengiriman gak pake lama, support sat-set.",
    dna6Title: "Jangka Panjang",
    dna6Desc: "Gue gak cari 'hit and run'. Gue mau nemenin lo dari jualan di garasi sampai punya cabang di mana-mana.",

    manifestoTitle: "Manifesto MKS",
    manifestoText: "Gue Gak Jual Alat Sulap, Gue Jual Senjata Perang.",
    manifestoFooter: "\"Di PT Mesin Kasir Solo, gue percaya satu hal: Bisnis tanpa data itu judi. Tugas gue adalah mastiin lo pegang kartu As (Sistem & Data) biar lo selalu menang di pasar.\"",

    // Career
    careerHeading: "Gue Gak Cari Karyawan,",
    careerHeadingSpan: "Gue Cari Partner Perjuangan.",
    careerSub: "PT Mesin Kasir Solo bukan tempat buat lo yang cuma cari \"zona nyaman\" 9-to-5. Ini markas buat lo yang mau ngebangun sistem buat nyelametin ribuan UMKM bareng gue.",
    
    careerDnaTitle: "DNA GUE",
    careerDnaSub: "Gue pernah jatuh sejatuh-jatuhnya di 2022. Kehilangan domain, kehilangan aset. Gue bangkit lagi sendirian. Kalau mental lo tempe, lo gak bakal bertahan di sini.",
    
    careerDna1Title: "Tahan Banting",
    careerDna1Desc: "Masalah teknis, komplain klien, deadline mepet itu makanan sehari-hari gue. Gue butuh Problem Solver yang tenang pas badai dateng.",
    careerDna2Title: "Impact Over Output",
    careerDna2Desc: "Jangan bangga cuma karena lo 'lembur'. Gue cuma nilai hasil akhir. Kode lo bikin transaksi makin cepet? Itu yang gue itung.",
    careerDna3Title: "Empati ke User",
    careerDna3Desc: "Klien gue itu pedagang pasar & ustadz TPA. Sistem lo harus membumi. Jangan bikin UI/UX rumit yang cuma dimengerti anak startup Jaksel.",

    careerAntiTitle: "JANGAN COBA-COBA MASUK KALAU:",
    careerAnti1: "Mental PNS (Cari Aman)",
    careerAnti2: "Baperan (Anti Kritik)",
    careerAnti3: "Males Belajar",
    careerAnti4: "Kerja Kayak Robot",

    careerRoleTitle: "Posisi Tempur",
    careerRoleSub: "Kalau lo merasa punya DNA yang sama, ambil senjata lo dan gabung barisan.",
    careerForceHireTitle: "Gue Belum Buka Lowongan",
    careerForceHireDesc: "Skill above average (Top 1%)? Force me to hire you via the reckless path.",
    careerForceHireBtn: "UPLOAD CV SPONTANEOUSLY",

    // Portfolio Section
    portHeading: "JEJAK PERANG MESIN KASIR SOLO",
    portHeadingSpan: "BUKAN KALENG-KALENG.",
    portSub: "Gue gak jual janji manis. Ini bukti otentik instalasi Mesin Kasir Solo dan sistem digital yang gue kerjain. Foto asli lapangan, bukan colongan Google. Cek sendiri biar lo yakin gue bukan sales abal-abal.",
    portFilterAll: "Semua Arsenal",
    portFilterPhysical: "Mesin Kasir (Fisik)",
    portFilterDigital: "Software & Web (Otak)",
    portCtaTitle: "Mau Bisnis Lo Masuk Sini?",
    portCtaSub: "Jangan cuma jadi penonton kesuksesan orang lain. Saatnya giliran lo yang gue bantu upgrade sistemnya.",
    portCtaBtn: "MULAI PROYEK BARU",
    portViewCase: "LIHAT DETAIL",

    // Contact
    contactHeading: "Gak Usah Sungkan, Chat Gue Aja.",
    contactSub: "Di sini gak ada Chatbot atau Admin Robot. Lo bakal ngobrol sama manusia asli (Gue & Tim Inti) yang ngerti lapangan. Gue pastikan setiap chat lo dibalas solusi, bukan template.",
    contactQnaTitle: "INTEL DASAR (FAQ)",
    contactQna: [
      { q: "\"Mas, ada toko fisiknya gak buat liat barang?\"", a: "Jawab: Sekarang gue fokus main *Online & Gudang* aja. Kenapa? Biar gue gak perlu bebanin biaya sewa ruko mahal ke harga barang lo (jadi lebih murah). Gantinya? Kita *Video Call* sepuasnya buat demo unit, atau transaksi via Marketplace (Tokped/Shopee) biar lo aman." },
      { q: "\"Bisa kirim ke luar pulau? Aman gak?\"", a: "Jawab: Aman 100%. Gue udah kirim unit dari Aceh sampe Papua. Packing kayu, asuransi, garansi sampai tujuan nyala normal. Kalau pecah, gue ganti baru." },
      { q: "\"Kalau rusak gimana klaim garansinya?\"", a: "Jawab: Hardware garansi resmi 1 tahun. Software? Gue support seumur hidup selama lo langganan. Gue gak bakal lari dari tanggung jawab." },
      { q: "\"Saya gaptek Mas, bakal diajari cara pakainya?\"", a: "Jawab: Wajib. Gue haram hukumnya jual lepas. Tim gue bakal training lo & staf sampe bener-bener lancar (bisa via Zoom atau datang langsung)." }
    ],
    contactOfficeLegalTitle: "KANTOR LEGAL (ADMIN)",
    contactOfficeLegalAddress: "Perum Graha Tiara 2 B1, Gumpang 07/01, Kartasura, Sukoharjo, Jawa Tengah, Indonesia 57169",
    contactOfficeOpsTitle: "MARKAS OPERASIONAL",
    contactOfficeOpsAddress: "Gumiring 04/04, Sidomulyo, Banjarejo, Blora, Jawa Tengah, Indonesia 58253",
    contactLabelWa: "WHATSAPP (FAST)",
    contactLabelEmail: "EMAIL RESMI",
    contactLabelHours: "JAM OPERASIONAL",

    contactFormTitle: "Drop Pesan Disini",
    contactFormName: "Mas / Mba ...",
    contactFormWa: "WA: 0812...",
    contactFormAddress: "Alamat / Lokasi Lo...",
    contactFormTopic: "MAU BAHAS APA?",
    contactFormMsg: "Ceritain kebutuhan atau masalah lo disini...",
    contactFormBtn: "LANJUT KE WHATSAPP",
    contactFormNote: "*Gue bakal bales secepatnya. Kalau urgent, mending telpon langsung.",

    contactTopic1: "Konsultasi Sistem",
    contactTopic2: "Lapor Error",
    contactTopic3: "Ajak Kerjasama",
    contactTopic4: "Sekadar Sapa",
    
    contactMapsTitle: "LOKASI KITA",
    contactMapsDesc: "Temukan markas kami di peta. Silakan mampir kalau mau konsultasi tatap muka.",

    // Legality
    legalTitle: "Gue Main Bersih",
    legalDesc: "Business is trust. I won't ruin the name I rebuilt from zero. Here is the proof I am legal.",
    legalLabelEntity: "Legal Entity",
    legalValueEntity: "PT MESIN KASIR SOLO",
    legalLabelNIB: "NIB (Izin Usaha)",
    legalLabelSK: "SK Kemenkumham",
    legalLabelNPWP: "NPWP Perusahaan",
    legalLabelBank: "Rekening Sah (BNC)",
    legalCtaTitle: "CEK VALIDITAS",
    legalCtaDesc: "Lo bisa cek sendiri data perusahaan gue di web pemerintah biar yakin.",
    legalCtaBtn: "Buka OSS.GO.ID",
    legalFooterNote: "*Buat lo yang butuh dokumen asli buat vendor list atau tender, chat admin gue. Kita transparan.",

    // History
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
    
    // Website Nav - EN
    navHome: "HOME",
    navAbout: "MKS PROFILE",
    navAboutProfile: "Company Profile",
    navAboutTeam: "Elite Squad",
    navAboutVision: "Vision & Mission",
    navAboutPortfolio: "Battle Tracks",
    navContact: "Contact Me",
    navCareer: "Join Corps",
    
    navSolutions: "POS & SOFTWARE",
    navSolHardware: "POS Hardware",
    navSolSoftware: "SaaS POS System",
    navSolConsulting: "Biz Consulting",

    navInnovation: "WEB SERVICES",
    navWebCompro: "Company Profile Website",
    navWebEcom: "E-Commerce Store",
    navWebCustom: "Custom Web App",
    navWebSeo: "Google SEO",

    navHelp: "SUPPORT",
    navInsights: "INSIGHTS",

    navServices: "Weapons",
    navShop: "Supply",
    navMenu: "Intel",
    navClose: "Bail",

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

    shopTitle: "Supply Drop",
    shopSub: "Upgrade your hustle with military-grade business equipment. Durable, glitch-proof, ready to take a beating.",
    shopBtnOrder: "Grab via WA",
    shopUnit: "Unit",

    aboutHeading: "Built on Asphalt & Wounds.",
    aboutTagline: "My story isn't some cheesy motivational quote. It's a chronicle of bleeding out, walking miles to sell tools, and rejections that turned my mind into steel.",
    aboutFounderQuote: "To be honest... In 2022, I almost 'died'. Digital assets gone, domain stolen, Google Business suspended. Even got played by employees. The system was a mess because I trusted 'humans' too much without a control system. That's when I learned a costly lesson: Business without a strong system is just waiting to explode.",
    
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

    // Vision Mission
    visionHeading: "Big Dreams & Hard Work.",
    visionSub: "I didn't build PT MKS just for petty cash. I have a mission to save thousands of SMEs from bankruptcy caused by data blindness.",
    visionTitle: "My Vision (The Dream)",
    visionStatement: "To be the #1 Digital Defense Fortress for Indonesian SMEs. I want to see small stalls have systems as advanced as modern minimarkets, without paying premium prices.",
    
    missionTitle: "Daily Mission (The Grind)",
    missionSub: "This is what my team grinds for everyday:",
    mission1Title: "Destroy 'Expensive' Myths",
    mission1Desc: "High tech doesn't mean empty pockets. I bring enterprise-grade registers & software at people's prices.",
    mission2Title: "Educate 'Til Smart",
    mission2Desc: "Selling and running is forbidden. I will train you and your staff until you truly understand business data.",
    mission3Title: "Innovation Never Dies",
    mission3Desc: "SIBOS & QALAM will keep updating. You don't need to stress about coding, let me handle that.",
    mission4Title: "No-Drama Support",
    mission4Desc: "If the tool breaks, I stress out, not you. My tech team is ready to backup so your sales don't stop.",

    // DNA
    dnaTitle: "My DNA",
    dnaSub: "Street principles I implant in all my troops.",
    dna1Title: "Honesty is Fatal",
    dna1Desc: "I won't sell you junk you don't need just for turnover. If it's bad, I say it's bad. Transparency is #1.",
    dna2Title: "Steel Mentality",
    dna2Desc: "Born from 2022 failure, I have a survivor mindset. I know the struggle of building from zero.",
    dna3Title: "Anti-Whining",
    dna3Desc: "No place for complaints here. Problem? Find solution. Error? Fix it. Deadline? Kill it.",
    dna4Title: "You Are The Boss",
    dna4Desc: "I live off your profit. If your business dies, mine does too. So I'll fight to make you succeed.",
    dna5Title: "Fast & Furious",
    dna5Desc: "Business is a race. I work fast. Instant replies, fast shipping, sat-set support.",
    dna6Title: "Long Game",
    dna6Desc: "I'm not here for 'hit and run'. I want to accompany you from a garage sale to nationwide branches.",

    manifestoTitle: "MKS Manifesto",
    manifestoText: "I Don't Sell Magic Tricks, I Sell War Weapons.",
    manifestoFooter: "\"At PT Mesin Kasir Solo, I believe one thing: Business without data is gambling. My job is ensuring you hold the Ace Card (System & Data) so you always win the market.\"",

    // Career (EN)
    careerHeading: "I Don't Need Employees,",
    careerHeadingSpan: "I Need Struggle Partners.",
    careerSub: "PT Mesin Kasir Solo is not for those seeking a 9-to-5 'comfort zone'. This is a base for those who want to build systems to save thousands of SMEs with me.",
    
    careerDnaTitle: "MY DNA",
    careerDnaSub: "I hit rock bottom in 2022. Lost domains, lost assets. I rose back up alone. If you're fragile, you won't survive here.",
    
    careerDna1Title: "Resilient",
    careerDna1Desc: "Tech issues, client complaints, tight deadlines are my daily bread. I need a Problem Solver who stays calm in a storm.",
    careerDna2Title: "Impact Over Output",
    careerDna2Desc: "Don't brag about 'overtime'. I only judge the final result. Does your code make transactions faster? That's what counts.",
    careerDna3Title: "User Empathy",
    careerDna3Desc: "My clients are market traders & religious teachers. Your system must be grounded. Don't make complex UX only startup kids understand.",

    careerAntiTitle: "DON'T EVEN TRY TO JOIN IF:",
    careerAnti1: "Safety Seeker (Civil Servant Mindset)",
    careerAnti2: "Can't Take Criticism (Fragile)",
    careerAnti3: "Lazy to Learn",
    careerAnti4: "Work Like a Robot",

    careerRoleTitle: "Combat Positions",
    careerRoleSub: "If you feel you share the same DNA, grab your weapon and join the line.",
    careerForceHireTitle: "I Haven't Opened Vacancies",
    careerForceHireDesc: "Skill above average (Top 1%)? Force me to hire you via the reckless path.",
    careerForceHireBtn: "UPLOAD CV SPONTANEOUSLY",

    // Portfolio
    portHeading: "SOLO POS WAR TRACKS",
    portHeadingSpan: "NO FAKE STUFF.",
    portSub: "I don't sell sweet promises. These are authentic proofs of MKS installations. Real field photos, not stolen from Google. Check yourself so you know I'm not a fake salesman.",
    portFilterAll: "All Arsenal",
    portFilterPhysical: "POS Hardware (Physical)",
    portFilterDigital: "Software & Web (Brain)",
    portCtaTitle: "Want Your Business Here?",
    portCtaSub: "Don't just watch others succeed. It's your turn for me to upgrade your system.",
    portCtaBtn: "START NEW PROJECT",
    portViewCase: "VIEW DETAIL",

    // Contact
    contactHeading: "Don't Be Shy, Just Chat Me.",
    contactSub: "No Chatbots or Robot Admins here. You'll talk to real humans (Me & Core Team) who understand the field. I ensure every chat gets a solution, not a template.",
    contactQnaTitle: "BASIC INTEL (FAQ)",
    contactQna: [
      { q: "\"Do you have a physical store to see items?\"", a: "Answer: Currently I focus on *Online & Warehouse* only. Why? So I don't have to load expensive rent costs onto your item price (cheaper for you). The replacement? We *Video Call* as much as you want for unit demos, or transaction via Marketplace (Tokped/Shopee) for safety." },
      { q: "\"Can you ship outside the island? Is it safe?\"", a: "Answer: 100% Safe. I've shipped units from Aceh to Papua. Wood packing, insurance, warranty until arrival normal. If broken, I replace it new." },
      { q: "\"How to claim warranty if broken?\"", a: "Answer: Hardware official warranty 1 year. Software? I support lifetime as long as you subscribe. I won't run from responsibility." },
      { q: "\"I'm tech-illiterate, will I be taught how to use it?\"", a: "Answer: Mandatory. It's forbidden for me to just sell and leave. My team will train you & staff until fluent (via Zoom or on-site)." }
    ],
    contactOfficeLegalTitle: "LEGAL OFFICE",
    contactOfficeLegalAddress: "Perum Graha Tiara 2 B1, Gumpang 07/01, Kartasura, Sukoharjo, Central Java, Indonesia 57169",
    contactOfficeOpsTitle: "OPS HQ",
    contactOfficeOpsAddress: "Gumiring 04/04, Sidomulyo, Banjarejo, Blora, Central Java, Indonesia 58253",
    contactLabelWa: "WHATSAPP (FAST)",
    contactLabelEmail: "OFFICIAL EMAIL",
    contactLabelHours: "OPERATIONAL HOURS",

    contactFormTitle: "Drop Your Message",
    contactFormName: "Mr / Ms ...",
    contactFormWa: "WA: +62...",
    contactFormAddress: "Your Location / Address...",
    contactFormTopic: "TOPIC?",
    contactFormMsg: "Tell us your needs or problems...",
    contactFormBtn: "CONTINUE TO WHATSAPP",
    contactFormNote: "*I'll reply ASAP. If urgent, call directly.",

    contactTopic1: "System Consultation",
    contactTopic2: "Report Error",
    contactTopic3: "Partnership",
    contactTopic4: "Just Saying Hi",
    
    contactMapsTitle: "OUR LOCATIONS",
    contactMapsDesc: "Find our HQs on the map. Feel free to visit if you want face-to-face consultation.",

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

    hist2015Title: "2015: The Grind",
    hist2015Desc: "I walked, Boss. Door-to-door under the sun selling registers. Hundreds of 'No's. Bleeding feet, bulletproof mindset.",
    hist2018Title: "2018: The Squad",
    hist2018Desc: "Started recruiting. We felt invincible, but forgot our system foundation was made of crackers. Fragile.",
    hist2021Title: "2021: Birth of SIBOS",
    hist2021Desc: "Sick of weak market apps. I engineered SIBOS. Combat-ready POS for brutal field conditions.",
    hist2022Title: "2022: The Mini Apocalypse",
    hist2022Desc: "Pandemi hit hard. Team dissolved. Funds dried up. Domains stolen. Google Business suspended. Total darkness, Boss.",
    hist2025Title: "2025: The Vengeance",
    hist2025Desc: "Rising from the grave. Rebuilt from scratch using Enterprise Monorepo. Smarter, meaner, readier for war.",

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

// Doubled the data for pagination demo
export const MOCK_PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "Website Company Profile (Compro) Pasirmas Barkah - Rembang",
    category: "DIGITAL",
    tag: "Solusi Bisnis",
    desc: "Pengembangan website profil perusahaan yang komprehensif mengintegrasikan seluruh lini bisnis strategis untuk memvalidasi kredibilitas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Web Company Profile (Compro) Dinara Skincare - Sukoharjo",
    category: "DIGITAL",
    tag: "Solusi Bisnis",
    desc: "Solusi teknis yang diimplementasikan adalah pengembangan website company profile yang responsif dan teroptimasi SEO.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Instalasi & Training Mesin Kasir Android Desktop - Fauzan Net - Sragen",
    category: "PHYSICAL",
    tag: "Hardware & Instalasi",
    desc: "Solusi teknis dilakukan melalui penyusunan struktur kategori yang sistematis dan optimalisasi manajemen database.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Digital Marketing Executive KPF Semarang - Broker trading komoditi Emas",
    category: "DIGITAL",
    tag: "Solusi Bisnis",
    desc: "Implementasi strategi pemasaran digital mencakup analisis mendalam terhadap perilaku pasar dan eksekusi kampanye terukur.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Mesin Kasir Android Desktop Touchscreen - Short Coffee - Surakarta",
    category: "PHYSICAL",
    tag: "Hardware & Instalasi",
    desc: "Short Coffee di Surakarta menghadapi tantangan untuk menghadirkan area kasir yang selaras dengan estetika interior.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Instalasi & training mesin kasir komputer - Orinawa - BTC Solo",
    category: "PHYSICAL",
    tag: "Hardware & Instalasi",
    desc: "Orinawa di BTC Solo menghadapi tantangan operasional signifikan akibat volume transaksi harian yang sangat tinggi.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Cafe POS System - Kopi Kenangan Mantan - Wonogiri",
    category: "PHYSICAL",
    tag: "Hardware & Instalasi",
    desc: "Instalasi sistem Point of Sales dual screen untuk manajemen pesanan dapur dan kasir depan secara real-time.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "E-Commerce Integration - Batik Solo Modern",
    category: "DIGITAL",
    tag: "Solusi Bisnis",
    desc: "Pembangunan platform e-commerce terintegrasi payment gateway dan perhitungan ongkir otomatis.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Retail Management System - Toko Kelontong Berkah",
    category: "PHYSICAL",
    tag: "Hardware & Instalasi",
    desc: "Implementasi barcode scanner omni-directional untuk percepatan transaksi di jam sibuk.",
    image: "https://images.unsplash.com/photo-1583574932824-c10e0c0f8629?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Company Profile - Konstruksi Jaya Abadi",
    category: "DIGITAL",
    tag: "Solusi Bisnis",
    desc: "Desain website korporat dengan portofolio proyek interaktif dan sistem tender online.",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Restaurant Management - Steak House Solo",
    category: "PHYSICAL",
    tag: "Hardware & Instalasi",
    desc: "Setup full kitchen display system (KDS) menggantikan printer kertas untuk efisiensi dapur.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "SEO Optimization - Klinik Kecantikan Glowing",
    category: "DIGITAL",
    tag: "Solusi Bisnis",
    desc: "Optimasi SEO lokal untuk mendominasi kata kunci pencarian klinik kecantikan di area Solo Raya.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  }
];
