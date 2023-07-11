import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/shadcn-ui"

import { Heading } from "@/ui/typography"

type LoadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {}

const Loading: FC<LoadingProps> = ({ className, ...props }) => {
  return (
    <main className={cn("grid place-content-center", className)} {...props}>
      <div className="container space-y-4 grid place-items-center ">
        <Loader2 className="w-8 h-8 animate-spin" />
        <Heading variant="h4" className="animate-pulse">
          Loading...
        </Heading>
      </div>
    </main>
  )
}
export default Loading
