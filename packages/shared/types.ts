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
  
  navHome: string;
  navAbout: string;
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
  aboutPhil1Title: string;
  aboutPhil1Desc: string;
  aboutPhil2Title: string;
  aboutPhil2Desc: string;
  aboutPhil3Title: string;
  aboutPhil3Desc: string;

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