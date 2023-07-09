"use client"

import Link from "next/link"
import dynamic from "next/dynamic"

import { ShoppingBag } from "lucide-react"
import { buttonVariants } from "@/ui/button"

const CartButton = dynamic(
  () =>
    Promise.resolve(() => {
      return (
        <div className="relative">
          <Link
            href={{ pathname: "/cart" }}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <ShoppingBag className="w-4 h-4" />
          </Link>
          <span className="text-[11px] font-mono absolute top-0 -translate-y-1/3 right-0 translate-x-1/3">
            0
          </span>
        </div>
      )
    }),
  { ssr: false }
)

export default CartButton
