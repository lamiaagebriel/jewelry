import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Page not found | ${process.env.APP_TITLE}`,
}

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { buttonVariants } from "@/ui/button"
import { Heading, Paragraph } from "@/ui/typography"

const PageNotFound = () => {
  return (
    <main className="min-h-screen grid place-content-center">
      <div className="container grid place-items-center">
        <Heading>Site not found...</Heading>
        <Paragraph variant="muted" className="text-center max-w-prose">
          The site you&apos;re searching for does not exist.
        </Paragraph>
        <Link
          className={buttonVariants({
            variant: "outline",
            className: "mt-8",
          })}
          href="/"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  )
}

export default PageNotFound
