
import { NavDictionary } from './nav-types';
import { HeroDictionary } from './dictionary/hero';
import { DashboardDictionary } from './dictionary/dashboard';
import { AuthDictionary } from './dictionary/auth';
import { ServicesDictionary } from './dictionary/services';
import { ShopDictionary } from './dictionary/shop';
import { AboutDictionary, HistoryDictionary } from './dictionary/profile';
import { VisionDictionary } from './dictionary/vision';
import { LegalDictionary, CareerDictionary, PortfolioDictionary } from './dictionary/company';
import { BlogDictionary } from './dictionary/blog';
import { ContactDictionary } from './dictionary/contact';
import { FooterDictionary } from './dictionary/footer';
import { WebAppDictionary, WebComproDictionary, WebStoreDictionary } from './dictionary/solutions-web';
import { RetailDictionary, FnbDictionary, ServiceBusinessDictionary, HealthDictionary } from './dictionary/solutions-industry-1';
import { EducationDictionary, GovernmentDictionary, CorporateDictionary, FranchiseDictionary } from './dictionary/solutions-industry-2';
import { LegalPageDictionary } from './dictionary/legal';
import { AssistantsDictionary } from './dictionary/assistants';

// Re-exporting for backward compatibility
export type { NavDictionary } from './nav-types';
export type { QnaItem } from './dictionary/base';
export type { HeroDictionary } from './dictionary/hero';
export type { DashboardDictionary } from './dictionary/dashboard';
export type { AuthDictionary } from './dictionary/auth';
export type { ServicesDictionary } from './dictionary/services';
export type { ShopDictionary } from './dictionary/shop';
export type { AboutDictionary, HistoryDictionary } from './dictionary/profile';
export type { VisionDictionary } from './dictionary/vision';
export type { LegalDictionary, CareerDictionary, PortfolioDictionary } from './dictionary/company';
export type { BlogDictionary } from './dictionary/blog';
export type { ContactDictionary } from './dictionary/contact';
export type { FooterDictionary } from './dictionary/footer';
export type { WebAppDictionary, WebComproDictionary, WebStoreDictionary } from './dictionary/solutions-web';
export type { RetailDictionary, FnbDictionary, ServiceBusinessDictionary, HealthDictionary } from './dictionary/solutions-industry-1';
export type { EducationDictionary, GovernmentDictionary, CorporateDictionary, FranchiseDictionary } from './dictionary/solutions-industry-2';
export type { LegalPageDictionary } from './dictionary/legal';
export type { AssistantsDictionary } from './dictionary/assistants';

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
  WebStoreDictionary,
  FnbDictionary,
  ServiceBusinessDictionary,
  HealthDictionary,
  EducationDictionary,
  GovernmentDictionary,
  CorporateDictionary,
  FranchiseDictionary,
  LegalPageDictionary,
  AssistantsDictionary
{}
