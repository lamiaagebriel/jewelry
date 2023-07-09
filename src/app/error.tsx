"use client"

import { Button } from "@/ui/button"
import { Heading, Paragraph } from "@/ui/typography"

const Error = ({ reset, error }: { error: Error; reset: () => void }) => {
  return (
    <main className="min-h-screen grid place-content-center">
      <div className="container grid place-items-center">
        <Heading>Internal Server Error</Heading>

        <Paragraph variant="muted" className="text-center max-w-prose">
          {error.message ||
            "Something went wrong while loading the necessary data, Try again later."}
        </Paragraph>

        <Button
          variant="outline"
          size="lg"
          className="mt-8"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </main>
  )
}

export default Error
