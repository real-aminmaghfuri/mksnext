
import { Language, Translation } from '../types';
import { ID_DICTIONARY } from './id';
import { EN_DICTIONARY } from './en';

// EXPORT THESE SO APPS CAN USE THEM DIRECTLY FOR SSG/SEO
export { ID_DICTIONARY } from './id';
export { EN_DICTIONARY } from './en';

export const DICTIONARY: Record<Language, Translation> = {
  [Language.ID]: ID_DICTIONARY,
  [Language.EN]: EN_DICTIONARY,
};
