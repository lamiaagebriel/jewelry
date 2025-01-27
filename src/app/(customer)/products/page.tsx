import type { Metadata } from "next";
export const metadata: Metadata = {
  title: `Products | ${process.env.APP_TITLE}`,
};
import { Products as ProductsLayout } from "@/components/products";
import { getProducts } from "@/actions"; 
import { Product } from "@prisma/client";
import Empty from "@/components/empty";

function sortProductsByCreatedAtDesc(products: Product[]): Product[] {
  return products.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });
}

const Products = async () => {
  const products = sortProductsByCreatedAtDesc(await getProducts());

  if (!products.length) {
    return (
      <Empty
        title={<div className="flex items-center gap-3">NO PRODUCTS.</div>}
        link={{ to: "/", title: "Go Home" }}
      />
    );
  }

  return (
    <section>
      <div className="container space-y-8">
        <ProductsLayout products={products} />
      </div>
    </section>
  );
};
export default Products;
