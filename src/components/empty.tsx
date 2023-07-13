import Link from "next/link"
import { ChevronLeft, ShoppingCart } from "lucide-react"

import { buttonVariants } from "@/ui/button"
import { Heading } from "@/ui/typography"
import { FC } from "react"

type EmptyProps = {
  title: React.ReactNode
  link: NavLink
}
const Empty: FC<EmptyProps> = ({ title, link }) => {
  return (
    <section className="h-[50vh] grid place-content-center">
      <div className="container py-8 flex flex-col items-center">
        <Heading className="mt-5 mb-10 text-center uppercase font-extralight">
          {title}
        </Heading>

        <Link
          href={{ pathname: link.to }}
          className={buttonVariants({
            variant: "ghost",
          })}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          <span>{link.title}</span>
        </Link>
      </div>
    </section>
  )
}
export default Empty
