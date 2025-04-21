import type { Language, LanguageCode } from '../../core/types.ts';
import { client } from '../../database/redis/config.ts';
import {
  getObjectByKey,
  setObjectToKey,
} from '../../database/redis/key-getters.ts';

export async function getLanguageById(id: LanguageCode) {
  const langData = (await getObjectByKey('lang', id)) as Language;
  return langData;
}

export async function getAllLanguages() {
  const results = await client.ft.search('idx:langs', '*', {
    RETURN: ['$.name', '$.exonym', '$.features'],
  });

  const langs = results.documents.map(doc => ({
    id: doc.id.slice(5),
    name: doc.value['$.name'],
    exonym: doc.value['$.exonym'],
    features: JSON.parse((doc.value['$.features'] as string) ?? '[]'),
  }));

  return langs;
}

export async function setLanguageData({
  id,
  data,
}: {
  id: LanguageCode;
  data: Language;
}) {
  const res = await setObjectToKey('lang', id, data);
  return res === 'OK';
}
