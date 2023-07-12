"use client"

import { FC, ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import { ThemeProvider as NextThemeProvider } from "next-themes"

import { Toaster } from "@/ui/toaster"
import { store } from "@/constants/store"

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}

        <Toaster />
      </Provider>
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
