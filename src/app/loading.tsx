import { Loader2 } from "lucide-react"
import { Heading } from "@/ui/typography"

const Loading = async () => {
  return (
    <main className="min-h-screen grid place-content-center">
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
