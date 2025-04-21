import { Hono } from '@hono/hono';
import langFeatures from './modules/lang-features/controller.ts';

const api = new Hono().basePath('/api');

api.route('/lang', langFeatures);

export default api;
