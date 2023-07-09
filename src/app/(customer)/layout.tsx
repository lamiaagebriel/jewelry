import Footer from "./footer"
import Header from "./header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="grow py-4 mb-20">{children}</main>
      <Footer />
    </>
  )
}
