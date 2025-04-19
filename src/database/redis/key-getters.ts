import { client } from './config.ts';

export async function getObjectByKey(group: string, id: string) {
  try {
    const lang = await client.json.get(`${group}:${id}`);
    return lang as object;
  } catch (error) {
    console.error('Redis error', error);
    return;
  }
}
