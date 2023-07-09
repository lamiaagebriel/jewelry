import "./globals.css"
import { Comfortaa } from "next/font/google"

import { cn } from "@/lib/shadcn-ui"
import Providers from "@/context/providers"

const comfortaa = Comfortaa({ subsets: ["latin"] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={cn(
        "text-xs sm:text-sm antialiased light",
        comfortaa.className
      )}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
