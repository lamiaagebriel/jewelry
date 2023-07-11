"use client"

import { FC, ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { Toaster } from "@/ui/toaster"

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  )
}

export default Providers

export const ThemeProvider: FC<ProvidersProps> = ({ children }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  )
}
