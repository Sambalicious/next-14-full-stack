import { type Config } from "drizzle-kit";
import { env } from "./env.mjs";

export default {
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  out: "./migration",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
