import { cookies as nextCookies } from "next/headers";
import { NextRequest } from "next/server";
import {   getAuth, google, lucia,  } from "@/lib/lucia"

export async function GET(req: NextRequest) {
  const cookies = nextCookies(); 
  const { session } = await getAuth();
  if (!session) throw new Error("you are not logged in.");

  await lucia.invalidateSession(session?.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );  
  const response = new Response(null, {
    status: 302,
    headers: { Location: '/auth' },
  }); 
  return response;

}
 
