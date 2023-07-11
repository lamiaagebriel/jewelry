"use client"
import { FC, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { Product } from "@prisma/client"
import { getCategories } from "@/lib/fn"
import ProductLayout from "./product"

type ProductsProps = { products: Product[] | [] }

const Products: FC<ProductsProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[] | []>(
    products || []
  )
  const categories = getCategories(products)

  if (!filteredProducts) return <h1>NO PRODUCTS</h1>

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <Select
          onValueChange={(val: string) => {
            console.log(val)
            if (val === "none") {
              setFilteredProducts(products)
              return
            }

            setFilteredProducts(
              products.filter(
                (product) =>
                  product.category?.toLowerCase() === val.toLowerCase()
              )
            )
          }}
        >
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none" className="font-semibold">
              Categories
            </SelectItem>

            {categories.map((category, i) => (
              <SelectItem key={i} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-8"
      >
        <AnimatePresence>
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              className="relative group"
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <ProductLayout
                key={i}
                product={product}
                className="aspect-h-11"
              />

              {/* <div className="relative aspect-w-9 aspect-h-11 rounded-lg overflow-hidden">
                <Image src={product.imageSrc} alt={product.imageAlt} />
                {product.discount > 0 && (
                   || product.isNew
                  <div className="absolute left-6 top-6">
                    <Paragraph variant="small">
                      {product.discount ? "Sale" : "New"}
                    </Paragraph>
                  </div>
                )}

                <div className="absolute top-0 left-0 w-full h-full bg-primary/20 text-primary-foreground place-items-center hidden group-hover:grid transition-colors">
                  <div className="container flex justify-center items-center gap-4">
                    <AddToCartButton
                      variant="outline"
                      size="icon"
                      className="w-9 h-9 p-2 text-foreground/95"
                      disabled={product.quantity === 0}
                      product={{
                        product,
                        quantity: 1,
                        size: product.sizes?.length ? product.sizes[0] : 0,
                      }}
                    >
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
              </div> */}

              {/* <Link href={{ pathname: `/products/${product.slug}` }}>
                <div className="py-4 text-center space-y-3">
                  <h6 className="font-semibold tracking-widest">
                    {product.title}
                  </h6>
                  <div className="inline-flex items-center justify-center gap-2">
                    <Paragraph
                      variant="muted"
                      className={(product.discount > 0 && "line-through") || ""}
                    >
                      ${product.price}
                    </Paragraph>
                    {product.discount > 0 && (
                      <Paragraph variant="muted">
                        $
                        {(product.price * (1 - product.discount / 100)).toFixed(
                          1
                        )}
                      </Paragraph>
                    )}
                  </div>
                </div>
              </Link> */}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
export default Products
