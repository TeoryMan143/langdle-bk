import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as tables from './tables.ts';

const turso = createClient({
  authToken: Deno.env.get('DB_TOKEN'),
  url: Deno.env.get('DB_URL')!,
});

export const db = drizzle(turso, { schema: tables });
