import { index, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { languageCodes } from '..//core/values.ts';

export const languages = sqliteTable(
  'language',
  {
    id: text({ enum: languageCodes }).primaryKey(),
    name: text().notNull(),
  },
  langs => [index('name_idx').on(langs.name)],
);

export const features = sqliteTable(
  'feature',
  {
    feature: text().notNull(),
    langId: text('lang_id')
      .notNull()
      .references(() => languages.id, { onDelete: 'cascade' }),
  },
  feats => [primaryKey({ columns: [feats.feature, feats.langId] })],
);
