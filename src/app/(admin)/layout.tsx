import { ThemeProvider } from "@/components/providers"
import Header from "./header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <main className="grow py-4">{children}</main>
      </ThemeProvider>
    </>
  )
}
