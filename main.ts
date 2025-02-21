import api from './src/api.ts';

Deno.serve(api.fetch);
