import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Products | ${process.env.APP_TITLE}`,
}
import { Products as ProductsLayout } from "@/components/products"
import { getProducts } from "@/actions"
import { notFound } from "next/navigation"
const Products = async () => {
  const products = await getProducts()

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
