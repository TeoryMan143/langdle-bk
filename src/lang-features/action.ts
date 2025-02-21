import { type LanguageCode } from '..//core/types.ts';
import { db } from '..//database/config.ts';
import { languages, features } from '..//database/tables.ts';
import { eq } from 'drizzle-orm';

export async function getLanguage(id: LanguageCode) {
  const [lang] = await db.select().from(languages).where(eq(languages.id, id));
  return lang;
}

export async function getLanguageFeatures(id: LanguageCode) {
  const feats = await db
    .select({
      feature: features.feature,
    })
    .from(languages)
    .where(eq(languages.id, id))
    .innerJoin(features, eq(languages.id, features.langId));

  return feats.map(f => f.feature);
}
