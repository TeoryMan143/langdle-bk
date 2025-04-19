import { getObjectByKey } from '../../database/redis/key-getters.ts';
import { Language } from '../types.ts';

export async function findById(id: string) {
  try {
    const lang = await getObjectByKey('lang', id);
    return lang as Language;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const LanguageRepository = { findById };
