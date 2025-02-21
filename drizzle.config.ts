import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'turso',
  schema: './database/tables.ts',
  dbCredentials: {
    authToken: Deno.env.get('DB_TOKEN')!,
    url: Deno.env.get('DB_URL')!,
  },
});
