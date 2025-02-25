import { languageCodes } from './values.ts';

export type LangFeatures =
  | 'nasalVowels'
  | 'latinAlphabet'
  | 'stressTimed'
  | 'silableTimed';

export type LanguageCode = (typeof languageCodes)[number];
export type Language = {
  id: LanguageCode;
  features: LangFeatures[];
};
