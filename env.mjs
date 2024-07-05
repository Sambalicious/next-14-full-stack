import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.string().optional(),
    DATABASE_URL: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    // HOST_NAME: z.string().min(1),
    // EMAIL_FROM: z.string().min(1),
    // EMAIL_SERVER_HOST: z.string().min(1),
    // EMAIL_SERVER_PORT: z.string().min(1),
    // EMAIL_SERVER_USER: z.string().min(1),
    // EMAIL_SERVER_PASSWORD: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_URL: z.string().min(1),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    // HOST_NAME: process.env.HOST_NAME,
    // EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
    // EMAIL_FROM: process.env.EMAIL_FROM,
    // EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    // EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    // EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
  },
});
