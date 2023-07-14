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
  disabled,
  ...props
}) => {
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("w-9 h-9 p-2 text-foreground/95", className)}
      disabled={cart.product.quantity === 0 || disabled}
      onClick={() => {
        try {
          dispatch(addCart(cart))
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
