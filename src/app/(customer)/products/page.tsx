import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Products | ${process.env.APP_TITLE}`,
}
import { Products as ProductsLayout } from "@/components/products"
import { getProducts } from "@/actions"
const Products = async () => {
  const products = await getProducts()
  if (!products.length) throw Error("No Product Found.")

  return (
    <section>
      <div className="container space-y-8">
        <ProductsLayout products={products} />
      </div>
    </section>
  )
}
export default Products
