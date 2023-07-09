import type { Metadata } from "next"
export const metadata: Metadata = { title: `Auth | ${process.env.APP_TITLE}` }

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { buttonVariants } from "@/ui/button"
import { Heading, Paragraph } from "@/ui/typography"
import { Separator } from "@/ui/separator"
import { GoogleButton } from "@/components/buttons"

const Auth = () => {
  return (
    <section>
      <div className="container py-8">
        <div className="mt-5 mb-20 space-y-2 flex flex-col items-center">
          <Heading className="text-center uppercase font-extralight">
            {process.env.APP_TITLE}
          </Heading>
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            <span>Go Home</span>
          </Link>
        </div>

        <div className="space-y-4 grid place-items-center">
          <div className="grid place-items-center">
            <Heading>Join Us Today</Heading>
            <Paragraph variant="muted">
              Sign in with one of the following providers.
            </Paragraph>
          </div>
          <Separator />

          <GoogleButton />
        </div>
      </div>
    </section>
  )
}
export default Auth
