import { createId } from "@paralleldrive/cuid2";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { lifecycleDates } from "./utils";

export const userTable = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId())
    .unique(),
  email: text("email").unique().notNull(),
  name: text("name").notNull(),
  businessName: text("businessName"),
  password_hash: text("password_hash"),
  emailVerified: boolean("email_verified").default(false),
  ...lifecycleDates,
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const resetTokensTable = pgTable("reset_tokens", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId())
    .unique(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  token: text("token"),
  tokenExpiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const verifyEmailTokensTable = pgTable("verify_email_tokens", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId())
    .unique(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  token: text("token"),
  tokenExpiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export type User = typeof userTable.$inferSelect;
export type NewUser = typeof userTable.$inferInsert;
