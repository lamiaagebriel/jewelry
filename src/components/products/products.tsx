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
import { Product as ProductType } from "@prisma/client"
import { getCategories } from "@/lib/fn"
import { Product } from "@/components/products"
import { Badge } from "@/ui/badge"

type ProductsProps = { products: ProductType[] | [] }

const Products: FC<ProductsProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[] | []>(
    products || []
  )
  const categories = getCategories(products)

  if (!filteredProducts) return <h1>NO PRODUCTS</h1>

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <Badge variant="outline" size="default">
          {filteredProducts.length} product(s)
        </Badge>
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
              <Product key={i} product={product} className="aspect-h-11" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
export default Products
