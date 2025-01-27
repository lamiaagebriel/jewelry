import { cookies as nextCookies } from "next/headers";
import { NextRequest } from "next/server";
import {   google,  } from "@/lib/lucia"
 import { generateCodeVerifier, generateState } from "arctic"
 
export async function GET(req: NextRequest) {
  const cookies = nextCookies();
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  const url = google.createAuthorizationURL(state, codeVerifier, [
    "profile",
    "email",
  ]);

  cookies.set("google_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });
  cookies.set("google_oauth_code_verifier", codeVerifier, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });


  const response = new Response(null, {
    status: 302,
    headers: { Location: url?.toString() },
  });

  return response;

}
 
