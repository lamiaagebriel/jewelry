import { cookies as nextCookies } from "next/headers";
import { cache } from "react";

import { PrismaAdapter, } from "@lucia-auth/adapter-prisma";
import { Google } from "arctic";
import { Lucia, TimeSpan } from "lucia";
import type { Session, User } from "lucia";


import { getURL } from "@/lib/utils";
import { db } from "./prisma";
import { User as PrismaUser } from "@prisma/client";

const adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
  sessionExpiresIn: new TimeSpan(30, "d"),
  sessionCookie: {
    name: "session",
    expires: false, // session cookies have very long lifespan (2 years)
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return { ...attributes };
  },
});

export const google = new Google(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  `${getURL()}/api/auth/callback/google`
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseSessionAttributes: {};
    DatabaseUserAttributes: Omit<PrismaUser, "password"> & {
      notifications: string;
    };
  }
}


export const uncachedGetAuth = async (): Promise<
  { user: User; session: Session } | { user: null; session: null }
> => {
  const cookies = nextCookies();
  const sessionId = cookies.get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    return { user: null, session: null };
  }
  const result = await lucia.validateSession(sessionId);
  // next.js throws when you attempt to set cookie when rendering page
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {
    console.error("Failed to set session cookie");
  }

  return result;

};

export const getAuth = cache(uncachedGetAuth);
