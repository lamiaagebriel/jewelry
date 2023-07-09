"use client"

import { FC, ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
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
