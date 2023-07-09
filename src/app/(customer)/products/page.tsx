import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Products | ${process.env.APP_TITLE}`,
}

const Products = () => {
  return (
    <section>
      <div className="container">Products</div>
    </section>
  )
}
export default Products
