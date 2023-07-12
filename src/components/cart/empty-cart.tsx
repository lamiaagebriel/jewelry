import Link from "next/link"
import { ChevronLeft, ShoppingCart } from "lucide-react"

import { buttonVariants } from "@/ui/button"
import { Heading } from "@/ui/typography"

const EmptyCart = () => {
  return (
    <section className="h-[50vh] grid place-content-center">
      <div className="container py-8 flex flex-col items-center">
        <div className="mt-5 mb-10 space-y-2 flex items-center gap-4">
          <ShoppingCart className="w-9 h-9" />
          <Heading className="text-center uppercase font-extralight">
            Cart is empty
          </Heading>
        </div>

        <Link
          href="/products"
          className={buttonVariants({
            variant: "ghost",
          })}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          <span>Go Shopping</span>
        </Link>
      </div>
    </section>
  )
}
export default EmptyCart
