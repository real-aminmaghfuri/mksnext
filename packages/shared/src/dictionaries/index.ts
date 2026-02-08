
import { Language, Translation } from '../types';
import { ID_DICTIONARY } from './id';
import { EN_DICTIONARY } from './en';

export const DICTIONARY: Record<Language, Translation> = {
  [Language.ID]: ID_DICTIONARY,
  [Language.EN]: EN_DICTIONARY,
};
