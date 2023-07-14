"use client"
import { FC } from "react"

import Link from "next/link"
import { useAppDispatch } from "@/constants/store"
import { Image } from "@/ui/image"
import { Check, Clock, Plus, Minus } from "lucide-react"
import { Button } from "@/ui/button"
import { removeCart } from "@/constants/store/cart"
import { AddToCartButton } from "@/components/buttons"
import GetPrice from "@/components/products/get-price"
import { CartProduct } from "@/types/cart"
import { HeadingVariants } from "@/ui/typography"

type ProductCartProps = {
  cart: CartProduct
}
const ProductCart: FC<ProductCartProps> = ({
  cart: { product, quantity, size },
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex py-6">
      <div className="flex-shrink-0">
        <Image
          src={product.image}
          alt={`${product.image} Image`}
          className="w-24 h-24 rounded-md sm:w-32 sm:h-32"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col sm:ml-6">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm">
              <Link
                href={{
                  pathname: `/products/${product.slug}`,
                }}
                className={HeadingVariants({ variant: "h6" })}
              >
                {product.title}
              </Link>
            </h4>
            <div className="inline-flex items-center">
              <GetPrice price={product.price} discount={product.discount} />

              <p className="ml-4 text-xs text-slate-500">x {quantity}</p>
            </div>
          </div>
          <p className="mt-[1px] text-sm text-gray-500">{product.category}</p>
          <div className="mt-2">
            <p>size: {size}</p>
          </div>
        </div>

        <div className="mt-4 flex-1 flex items-end justify-between">
          <p className="flex items-center text-sm text-gray-700 space-x-2">
            {product.quantity ? (
              <Check
                className="flex-shrink-0 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
            ) : (
              <Clock
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                aria-hidden="true"
              />
            )}

            <span>
              {product.quantity ? "In stock" : `Will be available soon.`}
            </span>
          </p>

          <div className="space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="w-9 h-9 p-2 text-foreground/95"
              onClick={() =>
                dispatch(
                  removeCart({
                    product: product,
                    quantity: 1,
                  })
                )
              }
            >
              <Minus />
            </Button>
            <AddToCartButton
              cart={{
                product,
                quantity: quantity,
                size: size,
              }}
            >
              <Plus />
            </AddToCartButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCart
