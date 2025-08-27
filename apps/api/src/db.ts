import { Pool } from 'pg';
import { createClient } from 'redis';

export const pg = new Pool({ connectionString: process.env.DATABASE_URL });
export const redis = createClient({ url: process.env.REDIS_URL });
redis.on('error', console.error);
redis.connect().catch(console.error);
