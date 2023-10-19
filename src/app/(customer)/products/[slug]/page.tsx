import type { Metadata } from "next";
export const metadata: Metadata = {
  title: `Product | ${process.env.APP_TITLE}`,
};

import { FC } from "react";

import { Heading, HeadingVariants, Paragraph } from "@/ui/typography";
import { getProduct, getProducts } from "@/actions";
import { getCurrency, getPrice } from "@/lib/fn";
import { Gallery, ProductSpecifications } from "@/components/products";
import { Product as ProductLaytout } from "@/components/products";

type ProductProps = {
  params: { slug: string };
};

const Product: FC<ProductProps> = async ({ params }) => {
  const product = await getProduct({ slug: params.slug });
  if (!product) throw Error("No Product Found.");

  const products = (await getProducts()).slice(0, 4);

  return (
    <>
      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr,0.7fr] gap-40">
          <Gallery product={product} />
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="flex justify-between items-start gap-20">
                <div>
                  <Heading variant="h1">{product.title}</Heading>
                  <Paragraph variant="muted">{product.category}</Paragraph>
                </div>
                <Heading variant="h3">
                  {getCurrency(getPrice(product.price, product.discount))}
                </Heading>
              </div>

              <div>
                <p className="mt-4">
                  The Diamond Engagement Ring is a breathtaking piece of jewelry
                  that represents eternal love and commitment. This exquisite
                  ring features a brilliant-cut diamond securely set in a
                  lustrous platinum band. The diamond&apos;s exceptional sparkle
                  and fire will captivate everyone&apos;s attention. It is
                  meticulously crafted to symbolize the beauty and strength of
                  your relationship.
                </p>
                <br />
                <Heading variant="h6">Key Features</Heading>
                <ul className="px-8 list-disc [&>li]:pt-2">
                  <li>
                    Brilliant-cut diamond: The center stone is a dazzling
                    brilliant-cut diamond that radiates brilliance and elegance.
                  </li>
                  <li>
                    Platinum band: The band is crafted from premium-quality
                    platinum, known for its durability and luxurious appearance.
                  </li>
                  <li>
                    Symbol of love: This ring serves as a timeless symbol of
                    your enduring love and the promise of a lifelong
                    partnership.
                  </li>
                  <li>
                    Perfect for proposals: With its stunning design and
                    exquisite craftsmanship, it is the perfect choice for a
                    romantic proposal.
                  </li>
                </ul>

                <br />
                <Heading variant="h6">Sizes</Heading>
                <ul className="px-8 list-disc [&>li]:pt-2">
                  <li>
                    Available sizes: 5, 6, 7, 8, and 9. Choose the size that
                    fits comfortably on your finger for a perfect fit.
                  </li>
                </ul>

                <br />
                <Heading variant="h6">Colors</Heading>
                <ul className="px-4 list-disc [&>li]:pt-2">
                  <li>
                    Color: White. The platinum band beautifully complements the
                    brilliance of the diamond, creating a striking contrast.
                  </li>
                </ul>
              </div>
            </div>

            <ProductSpecifications product={product} />
          </div>
        </div>
      </section>

      {products && (
        <section>
          <div className=" container my-20 space-y-5">
            <h1 className={HeadingVariants({ variant: "h3" })}>
              More Products
            </h1>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 xl:gap-8">
              {products.map((product, i) => (
                <div key={product.id} className="relative group">
                  <ProductLaytout
                    key={i}
                    product={product}
                    className="aspect-h-11"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Product;
