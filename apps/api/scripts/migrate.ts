import { readFileSync } from 'fs';
import path from 'path';
import { pg } from '../src/db';

async function run() {
  const sql = readFileSync(path.join(__dirname, '../migrations/0001_init.sql'), 'utf8');
  await pg.query(sql);
  await pg.end();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
