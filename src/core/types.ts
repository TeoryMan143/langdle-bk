import { z } from 'zod';
import { languageCodes, langFeatures } from './values.ts';
import { langDataSchema } from './schemas/language.ts';

export type LangFeatures = (typeof langFeatures)[number];
export type LanguageCode = (typeof languageCodes)[number];
export type LanguageData = z.TypeOf<typeof langDataSchema>;
export type Language = { id: LanguageCode } & LanguageData;
