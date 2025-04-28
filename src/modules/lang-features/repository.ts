import {
  getObjectByKey,
  setObjectToKey,
} from '../../database/redis/key-getters.ts';
import type { Language, LanguageCode, LanguageData } from '../../core/types.ts';
import { client } from '../../database/redis/config.ts';

async function getById(id: LanguageCode) {
  return (await getObjectByKey('lang', id)) as LanguageData | undefined;
}

async function getAll() {
  const results = await client.ft.search('idx:langs', '*', {
    RETURN: ['$.name', '$.exonym', '$.features'],
  });

  const langs = results.documents.map(doc => ({
    id: doc.id.slice(5),
    name: doc.value['$.name'],
    exonym: doc.value['$.exonym'],
    features: JSON.parse((doc.value['$.features'] as string) ?? '[]'),
  })) as Language[];

  return langs;
}

async function set(id: LanguageCode, data: LanguageData) {
  const res = await setObjectToKey('lang', id, data);
  return res === 'OK';
}

export default { getAll, getById, set };
