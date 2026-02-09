
export interface QnaItem {
  q: string;
  a: string;
}

// --- ATOMIC INTERFACES ---

export interface HeroDictionary {
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface DashboardDictionary {
  dashboardTitle: string;
  statsRevenue: string;
  statsOrders: string;
  navDashboard: string;
  navInventory: string;
  navSettings: string;
}

export interface AuthDictionary {
  loginHeading: string;
  loginSub: string;
}

export interface NavDictionary {
  // Website Nav
  navHome: string;
  navAbout: string; 
  navAboutCompany: string;
  navAboutProfile: string;
  navAboutTeam: string;
  navAboutVision: string;
  navAboutPortfolio: string; 
  navContact: string; 
  navCareer: string; 
  
  // Innovation Profile
  navInnoHeader: string;
  navInnoSibos: string;
  navInnoQalam: string;
  
  // Legacy Solutions
  navSolutions: string;
  navSolHardware: string;
  navSolSoftware: string;
  navSolConsulting: string;

  // Web Services
  navInnovation: string;
  navWebCompro: string;
  navWebEcom: string;
  navWebCustom: string;
  navWebSeo: string;

  // Main Menu Service
  navLayanan: string;
  
  // Technology
  navTechHeader: string;
  navTechCompro: string;
  navTechEcom: string;
  navTechCustom: string;

  // Business Solutions
  navBizHeader: string;
  navIndRetail: string;
  navIndFnb: string;
  navIndService: string;
  navIndHealth: string;
  navIndEdu: string;
  navIndGov: string;
  navIndCorp: string;
  navIndAll: string;
  
  // Hardware Menu
  navHwBundle: string;
  navHwAndroid: string;
  navHwPc: string;
  navHwRegister: string;
  navHwScanner: string;
  navHwPaper: string;
  navHwDrawer: string;
  navHwDesk: string;
  navHwRack: string;
  navHwAksesoris: string;

  // Support Menu
  navHelp: string;
  navSupHeader: string;
  navSupDownload: string;
  navSupKb: string;
  navSupOrderHeader: string;
  navSupTrack: string;
  navSupClaim: string;
  navSupLegalHeader: string;
  navSupTerms: string;
  navSupPrivacy: string;
  navSupFaq: string;

  navInsights: string;
  navServices: string;
  navShop: string;
  navMenu: string;
  navClose: string;
}

export interface ServicesDictionary {
  servicesTitle: string;
  servicesSub: string;
  srvHardware: string;
  srvHardwareDesc: string;
  srvSoftware: string;
  srvSoftwareDesc: string;
  srvSeo: string;
  srvSeoDesc: string;
  srvConsulting: string;
  srvConsultingDesc: string;
}

export interface ShopDictionary {
  shopTitle: string;
  shopSub: string;
  shopBtnOrder: string;
  shopUnit: string;
}

export interface AboutDictionary {
  aboutHeading: string;
  aboutTagline: string;
  aboutFounderQuote: string;
  
  aboutTurnTitle: string;
  aboutTurnP1: string;
  aboutTurnP1Bold: string;
  aboutTurnP2Pre: string;
  aboutTurnP2Bold: string;
  aboutTurnP2Mid: string;
  aboutTurnP2Italic1: string;
  aboutTurnP2Mid2: string;
  aboutTurnP2Italic2: string;

  aboutPhil1Title: string;
  aboutPhil1Desc: string;
  aboutPhil2Title: string;
  aboutPhil2Desc: string;
  aboutPhil3Title: string;
  aboutPhil3Desc: string;
}

export interface HistoryDictionary {
  hist2015Title: string;
  hist2015Desc: string;
  hist2018Title: string;
  hist2018Desc: string;
  hist2021Title: string;
  hist2021Desc: string;
  hist2022Title: string;
  hist2022Desc: string;
  hist2025Title: string;
  hist2025Desc: string;
}

export interface LegalDictionary {
  legalTitle: string;
  legalDesc: string;
  legalLabelEntity: string;
  legalValueEntity: string;
  legalLabelNIB: string;
  legalLabelSK: string;
  legalLabelNPWP: string;
  legalLabelBank: string;
  legalCtaTitle: string;
  legalCtaDesc: string;
  legalCtaBtn: string;
  legalFooterNote: string;
}

export interface VisionDictionary {
  visionHeading: string;
  visionSub: string;
  visionTitle: string;
  visionStatement: string;
  missionTitle: string;
  missionSub: string;
  mission1Title: string;
  mission1Desc: string;
  mission2Title: string;
  mission2Desc: string;
  mission3Title: string;
  mission3Desc: string;
  mission4Title: string;
  mission4Desc: string;
  
  dnaTitle: string;
  dnaSub: string;
  dna1Title: string;
  dna1Desc: string;
  dna2Title: string;
  dna2Desc: string;
  dna3Title: string;
  dna3Desc: string;
  dna4Title: string;
  dna4Desc: string;
  dna5Title: string;
  dna5Desc: string;
  dna6Title: string;
  dna6Desc: string;

  manifestoTitle: string;
  manifestoText: string;
  manifestoFooter: string;
}

export interface CareerDictionary {
  careerHeading: string;
  careerHeadingSpan: string;
  careerSub: string;
  careerDnaTitle: string;
  careerDnaSub: string;
  
  careerDna1Title: string;
  careerDna1Desc: string;
  careerDna2Title: string;
  careerDna2Desc: string;
  careerDna3Title: string;
  careerDna3Desc: string;
  
  careerAntiTitle: string;
  careerAnti1: string;
  careerAnti2: string;
  careerAnti3: string;
  careerAnti4: string;

  careerRoleTitle: string;
  careerRoleSub: string;
  careerForceHireTitle: string;
  careerForceHireDesc: string;
  careerForceHireBtn: string;
}

export interface PortfolioDictionary {
  portHeading: string;
  portHeadingSpan: string;
  portSub: string;
  portFilterAll: string;
  portFilterPhysical: string;
  portFilterDigital: string;
  portCtaTitle: string;
  portCtaSub: string;
  portCtaBtn: string;
  portViewCase: string;
  portLoadMore: string;
}

export interface BlogDictionary {
  blogTitle: string;
  blogSub: string;
  blogSearchPlaceholder: string;
  blogLoadMore: string;
  blogSidebarTitle: string;
  blogSidebarProductTitle: string;
  blogCatAll: string;
  blogCatBiz: string;
  blogCatTech: string;
  articleBack: string;
  articleCtaTitle: string;
  articleCtaDesc: string;
  articleCtaBtn: string;
}

export interface ContactDictionary {
  contactHeading: string;
  contactSub: string;
  contactQnaTitle: string;
  contactQna: QnaItem[];
  
  contactInfoTitle: string; 
  contactOfficeLegalTitle: string;
  contactOfficeLegalAddress: string;
  contactOfficeOpsTitle: string;
  contactOfficeOpsAddress: string;
  contactLabelWa: string;
  contactLabelEmail: string;
  contactLabelHours: string;

  contactFormTitle: string;
  contactFormName: string;
  contactFormWa: string;
  contactFormAddress: string;
  contactFormTopic: string;
  contactFormMsg: string;
  contactFormBtn: string;
  contactFormNote: string;

  contactTopic1: string;
  contactTopic2: string;
  contactTopic3: string;
  contactTopic4: string;

  contactMapsTitle: string;
  contactMapsDesc: string;
}

export interface FooterDictionary {
  footerDesc: string;
  footerCol1: string;
  footerLink1: string;
  footerLink2: string;
  footerLink3: string;
  footerLink4: string;
  footerCol2: string;
  footerCopy: string;
  footerLegal1: string;
  footerLegal2: string;
}

// --- AGGREGATED INTERFACE (THE GOD INTERFACE REBORN) ---
// This ensures backward compatibility with existing code.
export interface Translation extends 
  HeroDictionary,
  DashboardDictionary,
  AuthDictionary,
  NavDictionary,
  ServicesDictionary,
  ShopDictionary,
  AboutDictionary,
  HistoryDictionary,
  LegalDictionary,
  VisionDictionary,
  CareerDictionary,
  PortfolioDictionary,
  BlogDictionary,
  ContactDictionary,
  FooterDictionary
{}
