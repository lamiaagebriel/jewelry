import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Products | ${process.env.APP_TITLE}`,
}

import { Heading } from "@/ui/typography"
import { DataTable } from "@/ui/data-table"

import { ProductsDialog } from "@/components/dialogs/components"
import { getProducts } from "@/actions"
import { PRODUCTS_COLUMNS } from "@/constants/columns"
import { getCategories } from "@/lib/fn"

const Products = async () => {
  const products = await getProducts()
  const categories = getCategories(products)

  return (
    <section>
      <div className="container py-4 space-y-4">
        <div className="flex items-center justify-between space-y-2 mb-10">
          <Heading variant="h3">Products</Heading>
          <div className="flex items-center gap-4">
            <ProductsDialog categories={categories} />
          </div>
        </div>

        <DataTable search="title" data={products} columns={PRODUCTS_COLUMNS} />
      </div>
    </section>
  )
}
export default Products
