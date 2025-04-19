import type { Language, LanguageCode } from '..//core/types.ts';
import { getObjectByKey } from '../database/redis/key-getters.ts';

export async function getLanguageById(id: LanguageCode) {
  const langData = (await getObjectByKey('lang', id)) as Language;
  return langData;
}
