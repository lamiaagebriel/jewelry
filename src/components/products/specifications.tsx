"use client"
import { FC, useState } from "react"

import { ShoppingCart } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { getSizes } from "@/lib/fn"
import { AddToCartButton } from "@/components/buttons"
import { Product } from "@prisma/client"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/ui/use-toast"
import { z } from "zod"
import { req_positive_number, req_string } from "@/types/validations/utils"

type ProductSpecificationsProps = { product: Product }
const ProductSpecifications: FC<ProductSpecificationsProps> = ({ product }) => {
  const { toast } = useToast()
  const cartSchema = z.object({
    size: req_string("size"),
    quantity: req_positive_number("quantity"),
  })
  const form = useForm<z.infer<typeof cartSchema>>({
    resolver: zodResolver(cartSchema),
    defaultValues: {
      size: `${getSizes(product.sizes)[0]?.value || ""}`,
      quantity: product.quantity > 0 ? 1 : 0,
    },
  })

  const submitHandler = async (fields: z.infer<typeof cartSchema>) => {
    console.log(fields)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex flex-col justify-between gap-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <Select
                  onValueChange={(val) => {
                    // console.log(val)
                    field.onChange(val)
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {getSizes(product.sizes).map((size, i) => (
                      <SelectItem key={i} {...size} />
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <Select
                  onValueChange={(val) => field.onChange(parseInt(val))}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Array.from(Array(product.quantity).keys()).map((i) => (
                      <SelectItem key={i} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <AddToCartButton
          variant="default"
          size="lg"
          className="text-xl p-6 w-full text-primary-foreground"
          disabled={!form.formState.isValid}
          cart={{ product, quantity: 1, size: 1 }}
        >
          <ShoppingCart className="mr-2 w-6 h-6" />
          Add To Cart
        </AddToCartButton>
      </form>
    </Form>
  )
}
export default ProductSpecifications
