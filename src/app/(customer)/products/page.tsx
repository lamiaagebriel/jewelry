import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Products | ${process.env.APP_TITLE}`,
}
import ProductsLayout from "@/components/products"
import { getProducts } from "@/actions"
const Products = async () => {
  const products = await getProducts()
  if (products.status !== "success") throw Error("No Product Found.")

  return (
    <section>
      <div className="container space-y-8">
        <ProductsLayout products={products?.data || []} />
      </div>
    </section>
  )
}
export default Products
