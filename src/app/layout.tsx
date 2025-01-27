import "./globals.css"
import { Comfortaa } from "next/font/google"

import { cn } from "@/lib/shadcn-ui"
import Providers from "@/components/providers"
import { SessionProvider } from "@/components/session-provider"
import { getAuth } from "@/lib/lucia"

const comfortaa = Comfortaa({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getAuth();

  return (
    <html
      lang="en"
      dir="ltr"
      className={cn("text-xs sm:text-sm antialiased", comfortaa.className)}
    >
      <body className="min-h-screen flex flex-col antialiased">
       <SessionProvider value={session}>
       <Providers>{children}</Providers>
       </SessionProvider>
      </body>
    </html>
  )
}
