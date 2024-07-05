import { migrate } from "drizzle-orm/postgres-js/migrator";

import { db } from ".";

export async function runMigrate() {
  console.warn("⏳ Running migrations...");

  const start = Date.now();

  await migrate(db, { migrationsFolder: "drizzle" });

  const end = Date.now();

  console.warn(`✅ Migrations completed in ${end - start}ms`);

  process.exit(0);
}

runMigrate().catch(err => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exit(1);
});
