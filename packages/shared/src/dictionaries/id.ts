
import { Translation } from '../types';
import { Hero_ID } from './modules/hero';
import { Dashboard_ID } from './modules/dashboard';
import { Auth_ID } from './modules/auth';
import { Navigation_ID } from './modules/navigation';
import { Services_ID } from './modules/services';
import { Shop_ID } from './modules/shop';
import { About_ID, History_ID, Legal_ID } from './modules/about';
import { Vision_ID } from './modules/vision';
import { Career_ID } from './modules/career';
import { Portfolio_ID } from './modules/portfolio';
import { Blog_ID } from './modules/blog';
import { Contact_ID } from './modules/contact';
import { Footer_ID } from './modules/footer';

export const ID_DICTIONARY: Translation = {
  ...Hero_ID,
  ...Dashboard_ID,
  ...Auth_ID,
  ...Navigation_ID,
  ...Services_ID,
  ...Shop_ID,
  ...About_ID,
  ...History_ID,
  ...Legal_ID,
  ...Vision_ID,
  ...Career_ID,
  ...Portfolio_ID,
  ...Blog_ID,
  ...Contact_ID,
  ...Footer_ID,
};
