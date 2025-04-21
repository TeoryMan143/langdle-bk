import { createClient } from 'redis';

const client = createClient({
  username: Deno.env.get('REDIS_USER'),
  password: Deno.env.get('REDIS_PASSWORD'),
  socket: {
    host: Deno.env.get('REDIS_HOST'),
    port: +Deno.env.get('REDIS_PORT')!,
  },
});

client.on('error', err => {
  console.log('Redis error: ', err);
});

await client.connect();

export { client };
