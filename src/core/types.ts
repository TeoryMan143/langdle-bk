import { languageCodes } from './values.ts';

export type LangFeatures =
  | 'nasalVowels'
  | 'latinAlphabet'
  | 'stressTimed'
  | 'silableTimed';

export type LanguageCode = (typeof languageCodes)[number];
