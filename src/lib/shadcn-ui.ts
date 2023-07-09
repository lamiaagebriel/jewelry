import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const getFallback = (str: string) =>
  str
    .split(" ")
    .map((val) => val.slice(0, 1).toUpperCase())
    .join("")
