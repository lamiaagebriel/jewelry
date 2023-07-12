"use client"

import Link from "next/link"
import dynamic from "next/dynamic"

import { ShoppingBag } from "lucide-react"
import { buttonVariants } from "@/ui/button"

import { useAppSelector, useCart } from "@/constants/store"

const CartButton = () => {
  const cart = useAppSelector(useCart)

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
        {cart.total_items || 0}
      </span>
    </div>
  )
}

export default dynamic(() => Promise.resolve(CartButton), { ssr: false })
