import { z } from 'zod';
import { languageCodes } from '../values.ts ';

export const langCodeSchema = z.enum(languageCodes);
