import type { LanguageData, LanguageCode, Language } from '../../core/types.ts';
import langRepository from './repository.ts';

export async function getLanguageById(
  id: LanguageCode,
): Promise<Language | undefined> {
  const data = await langRepository.getById(id);

  if (!data) {
    return;
  }

  const langData = { id, ...data };
  return langData;
}

export function getAllLanguages(): Promise<Language[]> {
  return langRepository.getAll();
}

export function setLanguageData({
  id,
  data,
}: {
  id: LanguageCode;
  data: LanguageData;
}) {
  return langRepository.set(id, data);
}
