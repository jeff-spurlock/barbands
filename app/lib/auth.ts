import { betterAuth } from "better-auth";
import { db } from "./db"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { user, session, account, verification } from "./db/schema";
 
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      session,
      account,
      verification
    }
  }),
  emailAndPassword: {
    enabled: true,
  }
})