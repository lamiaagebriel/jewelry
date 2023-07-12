import { FC } from "react"

import Link from "next/link"
import { Image } from "@/ui/image"

import { Heading, Paragraph } from "@/ui/typography"
import { Eye, ShoppingCart } from "lucide-react"
import { buttonVariants } from "@/ui/button"
import { AddToCartButton } from "@/components/buttons"
import { Badge } from "@/ui/badge"
import { getPrice } from "@/lib/fn"
import { Product } from "@prisma/client"
import { cn } from "@/lib/shadcn-ui"
import GetPrice from "./get-price"

type ProductProps = { product: Product; className?: string }
const Product: FC<ProductProps> = ({ product, className }) => {
  return (
    <div className="relative group">
      <div
        className={cn(
          "relative aspect-w-9 aspect-h-13 rounded-lg overflow-hidden",
          className
        )}
      >
        <Image src={product.image} alt={`${product.title} Image`} />
        {(product.discount > 0 || product.is_new) && (
          <div className="absolute left-6 top-6">
            <Badge variant={product.discount ? "default" : "secondary"}>
              {product.discount ? "Sale" : "New"}
            </Badge>
          </div>
        )}

        <div className="absolute top-0 left-0 w-full h-full bg-primary/20 text-primary-foreground place-items-center hidden group-hover:grid transition-colors">
          <div className="container flex justify-center items-center gap-4">
            <AddToCartButton cart={{ product, quantity: 1, size: 1 }}>
              <ShoppingCart />
            </AddToCartButton>

            <Link
              href={{ pathname: `/products/${product.slug}` }}
              className={buttonVariants({
                variant: "outline",
                size: "icon",
                className: "w-9 h-9 p-2 text-foreground/95",
              })}
            >
              <Eye />
            </Link>
          </div>
        </div>
      </div>

      <Link href={{ pathname: `/products/${product.slug}` }}>
        <div className="py-4 text-center space-y-3">
          <Heading variant="h6"> {product.title}</Heading>
          <GetPrice price={product.price} discount={product.discount} />
        </div>
      </Link>
    </div>
  )
}
export default Product
