import { unstable_cache as next_unstable_cache } from "next/cache";
import { redirect } from "next/navigation";
import { cache } from "react";
 
import { clsx, type ClassValue } from "clsx";
import { DateArg, format, formatDistanceToNow, FormatOptions } from "date-fns";
import * as DateFnsLocale from "date-fns/locale";
 
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getURL(path: string = "") {
  // Check if NEXT_PUBLIC_SITE_URL is set and non-empty. Set this to your site URL in production env.
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
      ? process.env.NEXT_PUBLIC_SITE_URL
      : // If not set, check for NEXT_PUBLIC_VERCEL_URL, which is automatically set by Vercel.
        process?.env?.NEXT_PUBLIC_VERCEL_URL &&
          process.env.NEXT_PUBLIC_VERCEL_URL.trim() !== ""
        ? process.env.NEXT_PUBLIC_VERCEL_URL
        : // If neither is set, default to localhost for local development.
          "http://localhost:3000/";

  // Trim the URL and remove trailing slash if exists.
  url = url.replace(/\/+$/, "");
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Ensure path starts without a slash to avoid double slashes in the final URL.
  path = path.replace(/^\/+/, "");

  // Concatenate the URL and the path.
  return path ? `${url}/${path}` : url;
}

type FormatDateOptions = {
  formatStr?: string;
  type?: "default" | "distance";
} & Omit<FormatOptions, "locale">;

export function formatDate(
  date: DateArg<Date>,
  { type, formatStr, ...opts }: FormatDateOptions = { formatStr: "PPP" }
) {
  if (type === "distance")
    return formatDistanceToNow(date, {
      locale: DateFnsLocale?.enUS,
      // roundingMethod: "floor", // Ensure intervals are rounded down
      // unit: "auto", // Automatically switch between s, m, h, d, etc.
      includeSeconds: true,
      addSuffix: true,
    });

  return format(date, formatStr!, {
    locale: DateFnsLocale?.enGB,
    ...opts,
  });
}
  