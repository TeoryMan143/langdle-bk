import { Hono } from '@hono/hono';
import { langCodeSchema } from '..//core/schemas/language.ts';
import { getLanguage, getLanguageFeatures } from './action.ts';

const langFeatures = new Hono();

langFeatures.get('/:id', async c => {
  const { error, data: langId } = langCodeSchema.safeParse(c.req.param('id'));

  if (error) {
    return c.json(
      {
        message: 'Error invalid language code',
      },
      400,
    );
  }

  const lang = await getLanguage(langId);

  const features = await getLanguageFeatures(langId);

  return c.json({ language: lang.name, features });
});

export default langFeatures;
