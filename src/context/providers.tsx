"use client"

import { FC, ReactNode } from "react"
import { Toaster } from "@/ui/toaster"

interface Props {
  children: ReactNode
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

export default Providers
