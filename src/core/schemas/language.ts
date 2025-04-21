import { z } from 'zod';
import { langFeatures, languageCodes } from '../values.ts ';

export const langCodeSchema = z.enum(languageCodes);

export const langDataSchema = z.object({
  name: z.string().min(1).trim(),
  exonym: z.string().min(1).trim().optional(),
  features: z.enum(langFeatures).array(),
});
