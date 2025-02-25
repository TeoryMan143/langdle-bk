import { createClient } from 'redis';

const client = createClient({
  url: Deno.env.get('REDIS_URL'),
});

client.on('error', err => {
  console.log('Redis error: ', err);
});

await client.connect();

export { client };
