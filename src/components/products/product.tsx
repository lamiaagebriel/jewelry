import { FC } from "react"

import Link from "next/link"
import { Image } from "@/ui/image"

import { Heading, Paragraph } from "@/ui/typography"
import { Eye, ShoppingCart } from "lucide-react"
import { buttonVariants } from "@/ui/button"
import { AddToCartButton } from "@/components/buttons"
import { Badge } from "@/ui/badge"
import { getPrice } from "@/lib/fn"
import { Product as PrismaProduct } from "@prisma/client"
import { cn } from "@/lib/shadcn-ui"
import GetPrice from "./get-price"



import * as React from "react";

import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

// import { Icons } from "./icons"; 
// import { Tooltip } from "@/ui/tooltip";




type ProductProps = {
  product: PrismaProduct
  className?: string
  quantity?: number
  isTitle?: boolean
}
const Product: FC<ProductProps> = ({
  product: e,
  className,
  quantity,
  isTitle = true,
}) => {
  return (
    <Card className="gap-0 relative overflow-hidden border-none p-0 outline-none">
      {(e.discount > 0 || e.is_new) && (
          <div className="absolute left-6 top-6">
            <Badge variant={e.discount ? "default" : "secondary"}>
              {e.discount ? "Sale" : "New"}
            </Badge>
          </div>
        )}

      <CardHeader className="relative border-none p-0 outline-none">
        <Link href={`/products/${e.slug}`}>
          <Image
            src={e?.image}
            alt={`${e?.title}`}
            className="aspect-[9/12] border-none"
          />
        </Link>

        <div className="absolute bottom-0 right-0 z-10 rounded-tl-xl bg-background pl-[6px] pt-[6px]">
          <div className="absolute right-0 top-0 size-4 -translate-y-[calc(100%-6px+0.5px)] translate-x-[calc(6px-0.5px)] rounded-br-xl border-[6px] border-l-0 border-t-0 border-background" />
          <div className="absolute bottom-0 left-0 size-4 -translate-x-[calc(100%-6px+0.5px)] translate-y-[calc(6px-0.5px)] rounded-br-xl border-[6px] border-l-0 border-t-0 border-background" />
          <div>


            <AddToCartButton
              variant="default"
              size='icon' 
              cart={{ product: e, quantity: 1, size: Number(e?.sizes?.split(",")?.[0]) ??  1 }}
              className="text-primary-foreground"
            >
              <ShoppingCart className="  w-6 h-6" /> 
            </AddToCartButton>
          </div>
        </div>
      </CardHeader>

      <Link
        href={`/products/${e.slug}`}>
        <CardContent className="space-y-1 p-4">
          <CardTitle>{e?.title}</CardTitle>
          
          <div>
            <GetPrice price={e.price} discount={e.discount} />
            {quantity && (
              <p className="ml-4 text-xs text-slate-500">x {quantity}</p>
            )}
          </div>
       
        </CardContent>
      </Link>
    </Card>
    
 
  )
}
export default Product
