"use client"

import { FC } from "react"
import { cn } from "@/lib/shadcn-ui"

import { Button, ButtonProps } from "@/ui/button"
import { useToast } from "@/ui/use-toast"

import { useAppDispatch } from "@/constants/store"
import { addCart } from "@/constants/store/cart"
import { CartProduct } from "@/types/cart"

const AddToCartButton: FC<ButtonProps & { cart: CartProduct }> = ({
  cart,
  className,
  ...props
}) => {
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("w-9 h-9 p-2 text-foreground/95", className)}
      disabled={cart.product.quantity === 0}
      onClick={() => {
        try {
          dispatch(addCart({ product: cart.product, quantity: 1, size: 1 }))
          toast({ title: "Added to cart successfully." })
        } catch (error: any) {
          toast({
            variant: "destructive",
            title: "Ooh, This is too bad.",
            description: error.message,
          })
        }
      }}
      {...props}
    />
  )
}
export default AddToCartButton
