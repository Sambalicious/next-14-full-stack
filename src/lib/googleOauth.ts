import { Google } from "arctic";
import { env } from "env.mjs";

export const googleOAuthClient = new Google(
  env.GOOGLE_CLIENT_ID,
  env.GOOGLE_CLIENT_SECRET,
  `${env.NEXT_PUBLIC_URL}/api/auth/google/callback`,
);
