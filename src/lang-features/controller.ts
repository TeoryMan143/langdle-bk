import { Hono } from '@hono/hono';
import { langCodeSchema } from '..//core/schemas/language.ts';
// import { getLanguage, getLanguageFeatures } from './action.ts';
import { getLanguageById } from '../database/redis/key-getters.ts';

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

  const lang = await getLanguageById(langId);

  return c.json(lang);
});

export default langFeatures;
