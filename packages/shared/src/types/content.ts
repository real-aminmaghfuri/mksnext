
export interface QnaItem {
  q: string;
  a: string;
}

export interface Translation {
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  dashboardTitle: string;
  statsRevenue: string;
  statsOrders: string;
  navDashboard: string;
  navInventory: string;
  navSettings: string;
  loginHeading: string;
  loginSub: string;
  
  // Updated Nav Structure
  navHome: string;
  navAbout: string; 
  navAboutProfile: string;
  navAboutTeam: string;
  navAboutVision: string;
  navAboutPortfolio: string; 
  navContact: string; 
  navCareer: string; 
  
  navSolutions: string; // Keep for backward compat
  navSolHardware: string; // Keep for backward compat
  navSolSoftware: string; // Keep for backward compat
  navSolConsulting: string; // Keep for backward compat

  navInnovation: string; // Keep for backward compat
  // New Web Service Keys
  navWebCompro: string;
  navWebEcom: string;
  navWebCustom: string;
  navWebSeo: string;

  // --- NEW NAVIGATION DICTIONARY (STEP 1) ---
  navLayanan: string; // The Main Menu "LAYANAN"
  
  // Col 1: Technology
  navTechHeader: string;
  navTechCompro: string;
  navTechEcom: string;
  navTechCustom: string;

  // Col 2: Business Solutions
  navBizHeader: string;
  navIndRetail: string;
  navIndFnb: string;
  navIndService: string;
  navIndHealth: string;
  navIndEdu: string;
  navIndCorp: string;
  navIndAll: string;
  // ------------------------------------------

  navHelp: string;
  navInsights: string;

  navServices: string;
  navShop: string;
  navMenu: string;
  navClose: string;

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

  shopTitle: string;
  shopSub: string;
  shopBtnOrder: string;
  shopUnit: string;

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

  // Portfolio Section
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

  // Articles Section
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

  // Contact Section
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

  // Topics
  contactTopic1: string;
  contactTopic2: string;
  contactTopic3: string;
  contactTopic4: string;

  // Maps
  contactMapsTitle: string;
  contactMapsDesc: string;

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