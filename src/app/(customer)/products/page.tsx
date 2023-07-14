import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Products | ${process.env.APP_TITLE}`,
}
import { Products as ProductsLayout } from "@/components/products"
import { getProducts } from "@/actions"
import { notFound } from "next/navigation"
import { Product } from "@prisma/client"

function sortProductsByCreatedAtDesc(products: Product[]): Product[] {
  return products.sort((a, b) => {
    const dateA = new Date(a.created_at)
    const dateB = new Date(b.created_at)
    return dateB.getTime() - dateA.getTime()
  })
}

const Products = async () => {
  const products = sortProductsByCreatedAtDesc(await getProducts())

  if (!products.length) notFound()

  return (
    <section>
      <div className="container space-y-8">
        <ProductsLayout products={products} />
      </div>
    </section>
  )
}
export default Products
