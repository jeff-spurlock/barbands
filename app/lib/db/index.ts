import 'dotenv/config';
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { testTable } from './schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});
const db = drizzle({ client: pool });

async function main() {
  const test: typeof testTable.$inferInsert = {
    name: 'John',
  };
  await db.insert(testTable).values(test);
  console.log('New user created!')

}
main();