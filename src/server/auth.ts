import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "~/env";
import { db } from "~/server/db";
import { createTable } from "~/server/db/schema";

// NOTE: The T3 starter kit uses a custom table creation function.
// We will use a simplified adapter call for now.
// @ts-ignore
export const adapter = DrizzleAdapter(db);

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);