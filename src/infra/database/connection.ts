import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import * as schema from "./schema";
import dotenv from 'dotenv';

dotenv.config();

export const db = drizzle(
  postgres(process.env["DATABASE_URL"]!, { prepare: false }),
  { schema }
);
