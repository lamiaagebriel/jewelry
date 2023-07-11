"use client"

import { Button, ButtonProps, buttonVariants } from "@/ui/button"

// import { useAppDispatch, useAppSelector } from "@/context/store"
// import { CartProduct, add_to_cart, useCart } from "@/context/store/cart"
import { FC } from "react"
import { useToast } from "@/ui/use-toast"
import { Product } from "@prisma/client"
import { cn } from "@/lib/shadcn-ui"

const AddToCartButton: FC<
  ButtonProps & { product: Product }
  // & { add_product: CartProduct }
> = ({ product, className, ...props }) => {
  //   const dispatch = useAppDispatch()
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("w-9 h-9 p-2 text-foreground/95", className)}
      disabled={product.quantity === 0}
      onClick={() => {
        // dispatch(add_to_cart(product))
        toast({ title: "Added to cart successfully." })
      }}
      {...props}
    />
  )
}
export default AddToCartButton
