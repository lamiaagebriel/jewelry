import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Product | ${process.env.APP_TITLE}`,
}

import { FC } from "react"

import { ShoppingCart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs"
import { Image } from "@/ui/image"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { Heading, Paragraph } from "@/ui/typography"
import { getProduct } from "@/actions"
import { getPrice } from "@/lib/fn"
import { AddToCartButton } from "@/components/buttons"

type ProductProps = {
  params: { slug: string }
}

const Product: FC<ProductProps> = async ({ params }) => {
  const res = await getProduct({ slug: params.slug })
  if (res.status !== "success" || !res.data) throw Error("No Product Found.")
  const product = res.data

  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-[1fr,0.7fr] gap-24">
        {/* <Tabs defaultValue="0" className="w-full grid grid-cols-[75px,1fr]">
          <TabsList
            className="bg-transparent h-full flex flex-col justify-center items-center gap-4"
            aria-orientation="vertical"
          >
            {product.images.map((src, i) => (
              <TabsTrigger
                key={i}
                value={i.toString()}
                className="aspect-1 w-20"
              >
                <Image src={src} alt="" />
              </TabsTrigger>
            ))}
          </TabsList>

          {product.images.map((src, i) => (
            <TabsContent
              key={i}
              value={i.toString()}
              className="aspect-1 w-full"
            >
              <Image src={src} alt="" />
            </TabsContent>
          ))}
        </Tabs> */}

        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="flex justify-between items-start gap-8">
              <div>
                <Heading variant="h1">{product.title}</Heading>
                <Paragraph variant="muted">{product.category}</Paragraph>
              </div>
              <Heading variant="h3">
                ${getPrice(product.price, product.discount).toFixed(1)}
              </Heading>
            </div>
            <Paragraph>{product.description}</Paragraph>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sizes */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sizes" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size, i) => (
                    <SelectItem key={i} value={size.toString()}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> */}

              {/* Quantity */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent>
                  {Array(5).map((_, i) => (
                    <SelectItem key={i} value={i.toString()}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <AddToCartButton
              variant="default"
              size="lg"
              className="text-xl p-6 w-full text-primary-foreground"
              cart={{ product, quantity: 1, size: 1 }}
            >
              <ShoppingCart className="mr-2 w-6 h-6" />
              Add To Cart
            </AddToCartButton>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Product
