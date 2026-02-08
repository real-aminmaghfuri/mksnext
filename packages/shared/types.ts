
export enum AppMode {
  WEBSITE = 'WEBSITE',
  SYSTEM = 'SYSTEM'
}

export enum WebsitePage {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  SHOP = 'SHOP'
}

export enum Language {
  ID = 'ID',
  EN = 'EN'
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
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
  navAbout: string; // TENTANG
  navAboutProfile: string;
  navAboutTeam: string;
  navAboutVision: string;
  navCareer: string; // REKRUTMEN
  
  navSolutions: string; // SOLUSI BISNIS
  navSolHardware: string;
  navSolSoftware: string;
  navSolConsulting: string;

  navInnovation: string; // INOVASI
  navHelp: string; // PUSAT BANTUAN
  navInsights: string; // WAWASAN

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
  
  // New Turning Point Section
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

  // Vision & Mission Section
  visionHeading: string;
  visionSub: string;
  visionStatement: string;
  missionTitle: string;
  mission1Title: string;
  mission1Desc: string;
  mission2Title: string;
  mission2Desc: string;
  mission3Title: string;
  mission3Desc: string;
  manifestoTitle: string;
  manifestoText: string;

  // Career Section
  careerHeading: string;
  careerSub: string;
  careerPerk1Title: string;
  careerPerk1Desc: string;
  careerPerk2Title: string;
  careerPerk2Desc: string;
  careerPerk3Title: string;
  careerPerk3Desc: string;
  careerRoleTitle: string;
  careerRoleEmpty: string;
  careerApplyBtn: string;

  // Legality Section
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

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  tag?: string;
}
