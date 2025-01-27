import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // const pathname = req.nextUrl.pathname;

  // // Fetch session from Lucia
  // const sessionCookieName = lucia.sessionCookieName; // Name of the session cookie
  // const sessionCookie = req.cookies.get(sessionCookieName)?.value;

  // const sessionResult = sessionCookie
  //   ? await lucia.validateSession(sessionCookie).catch(() => null)
  //   : null;

  // const isAuth = !!sessionResult?.user;
  // const isAuthPage = pathname.startsWith("/auth");

  // const sensitiveRoutes = ["/admin", "/api"];

  // // Redirect authenticated users away from the auth pages
  // if (isAuthPage && isAuth) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  // // Redirect unauthenticated users trying to access sensitive routes
  // if (
  //   (!isAuth || sessionResult?.user?.role !== "ADMIN") &&
  //   sensitiveRoutes.some((route) => pathname.startsWith(route))
  // ) {
  //   return NextResponse.redirect(new URL("/auth", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth", "/admin/:path*", "/api/:path*"],
};
