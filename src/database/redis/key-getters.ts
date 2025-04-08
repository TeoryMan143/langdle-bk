import type { Language } from '../../core/types.ts';
import { client } from './config.ts';

export async function getLanguageById(id: string) {
  try {
    const lang = await client.json.get(`lang:${id}`);
    return lang as Language;
  } catch (error) {
    console.error('Redis error', error);
    return;
  }
}
