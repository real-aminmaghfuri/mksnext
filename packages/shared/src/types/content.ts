
import { NavDictionary } from './nav-types';

// Re-exporting NavDictionary for backward compatibility
export type { NavDictionary } from './nav-types';

export interface QnaItem {
  q: string;
  a: string;
}

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

export interface RetailDictionary {
  rtlHeroTitle: string;
  rtlHeroSpan: string;
  rtlHeroSub: string;
  rtlPainTitle: string;
  rtlPainSub: string;
  rtlPain1: string;
  rtlPain2: string;
  rtlPain3: string;
  rtlSysTitle: string;
  rtlSysSub: string;
  rtlFeature1: string;
  rtlFeature1Desc: string;
  rtlFeature2: string;
  rtlFeature2Desc: string;
  rtlFeature3: string;
  rtlFeature3Desc: string;
  rtlFeature4: string;
  rtlFeature4Desc: string;
  rtlCtaTitle: string;
  rtlCtaSub: string;
  rtlCtaBtn: string;
}

export interface WebAppDictionary {
  waHeroBadge: string;
  waHeroTitle: string;
  waHeroTitleSpan: string;
  waHeroSub: string;
  waProbTitle: string;
  waProbSub: string;
  waProb1: string;
  waSol1: string;
  waProb2: string;
  waSol2: string;
  waProb3: string;
  waSol3: string;
  waProb4: string;
  waSol4: string;
  waStackTitle: string;
  waStackSub: string;
  waStack1Title: string;
  waStack1Desc: string;
  waStack2Title: string;
  waStack2Desc: string;
  waStack3Title: string;
  waStack3Desc: string;
  waStack4Title: string;
  waStack4Desc: string;
  waStack5Title: string;
  waStack5Desc: string;
  waStack6Title: string;
  waStack6Desc: string;
  waProcTitle: string;
  waProc1Title: string;
  waProc1Desc: string;
  waProc2Title: string;
  waProc2Desc: string;
  waProc3Title: string;
  waProc3Desc: string;
  waProc4Title: string;
  waProc4Desc: string;
  waCtaTitle: string;
  waCtaSub: string;
  waCtaBtn: string;
  waCtaMessage: string;
}

export interface WebComproDictionary {
  wcHeroBadge: string;
  wcHeroTitle: string;
  wcHeroTitleSpan: string;
  wcHeroSub: string;
  wcRealityTitle: string;
  wcRealityDesc: string;
  wcReality1: string;
  wcReality2: string;
  wcReality3: string;
  wcFeatureTitle: string;
  wcFeatureSub: string;
  wcFeature1Title: string;
  wcFeature1Desc: string;
  wcFeature2Title: string;
  wcFeature2Desc: string;
  wcFeature3Title: string;
  wcFeature3Desc: string;
  wcFeature4Title: string;
  wcFeature4Desc: string;
  wcFeature5Title: string;
  wcFeature5Desc: string;
  wcFeature6Title: string;
  wcFeature6Desc: string;
  wcCtaTitle: string;
  wcCtaSub: string;
  wcCtaBtn: string;
}

export interface WebStoreDictionary {
  wsHeroBadge: string;
  wsHeroTitle: string;
  wsHeroTitleSpan: string;
  wsHeroSub: string;
  wsPainTitle: string;
  wsPainSub: string;
  wsPainManual1: string;
  wsPainAuto1: string;
  wsPainManual2: string;
  wsPainAuto2: string;
  wsPainManual3: string;
  wsPainAuto3: string;
  wsPainManual4: string;
  wsPainAuto4: string;
  wsFeatureTitle: string;
  wsFeatureSub: string;
  wsFeature1Title: string;
  wsFeature1Desc: string;
  wsFeature2Title: string;
  wsFeature2Desc: string;
  wsFeature3Title: string;
  wsFeature3Desc: string;
  wsFeature4Title: string;
  wsFeature4Desc: string;
  wsFeature5Title: string;
  wsFeature5Desc: string;
  wsFeature6Title: string;
  wsFeature6Desc: string;
  wsStepTitle: string;
  wsStep1Title: string;
  wsStep1Desc: string;
  wsStep2Title: string;
  wsStep2Desc: string;
  wsStep3Title: string;
  wsStep3Desc: string;
  wsCtaTitle: string;
  wsCtaSub: string;
  wsCtaBtn: string;
}

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
  FooterDictionary,
  RetailDictionary,
  WebAppDictionary,
  WebComproDictionary,
  WebStoreDictionary
{}
