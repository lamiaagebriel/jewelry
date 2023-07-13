"use client"

import { FC, useState } from "react"
import { useRouter } from "next/navigation"

import { Button, ButtonProps } from "@/ui/button"
import { useToast } from "@/ui/use-toast"
import { useAppDispatch, useAppSelector, useCart } from "@/constants/store"
import { createOrder } from "@/actions"
import { resetCart } from "@/constants/store/cart"

const SubmitOrderButton: FC<ButtonProps> = ({ className, ...props }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const cart = useAppSelector(useCart)
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  const submitHandler = async () => {
    try {
      setIsLoading(true)
      const res = await createOrder({ fields: cart })

      if (res.status === "failure") {
        toast({
          variant: "destructive",
          title: "Ooh, something wrong occurred.",
          description: res.error,
        })
        return
      }

      if (res.status === "fields") {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: res.errors.pop()?.message,
        })
        return
      }

      toast({ description: res.message })
      dispatch(resetCart())
      console.log(`/orders/${res.data}`)
      router.push(`/orders/${res.data}`)
      // redirect(`/orders/${res.data}`)
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Ooh, This is too bad.",
        description: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      size="lg"
      className="mt-4 w-full"
      disabled={
        !cart.products.length ||
        !cart.actual_cost ||
        !cart.cost ||
        !cart.total_items ||
        !cart.order_info
      }
      isLoading={isLoading}
      onClick={submitHandler}
      {...props}
    />
  )
}
export default SubmitOrderButton
