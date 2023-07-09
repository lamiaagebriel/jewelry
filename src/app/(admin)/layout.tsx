import Header from "./header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="grow py-4">{children}</main>
    </>
  )
}
