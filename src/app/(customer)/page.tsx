import type { Metadata } from "next"
export const metadata: Metadata = { title: `Home | ${process.env.APP_TITLE}` }

import Link from "next/link"
import { Image } from "@/ui/image"

import { Heading, Paragraph } from "@/ui/typography"
import { ArrowRight, Instagram } from "lucide-react"
import { buttonVariants } from "@/ui/button"
import { HERO, STATS } from "@/constants/layout"
import { getProducts } from "@/actions"
import { Product } from "@/components/products"

const Home = async () => {
  const products = await getProducts()

  return (
    <>
      {/* hero section */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {HERO.slice(0, 1).map((hero, i) => (
              <div
                key={i}
                className="relative w-full h-[650px] rounded-lg overflow-hidden"
              >
                <Image priority src={hero.image} alt={`${hero.title} Image`} />
                <div className="absolute left-6 top-6">
                  <Paragraph variant="large">{hero.title}</Paragraph>
                  <Paragraph variant="muted">from ${hero.from}</Paragraph>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4 h-[650px]">
              {HERO.slice(1).map((hero, i) => (
                <div
                  key={i}
                  className="relative w-full h-full rounded-lg overflow-hidden"
                >
                  <Image
                    priority
                    src={hero.image}
                    alt={`${hero.title} Image`}
                  />
                  <div className="absolute left-6 top-6">
                    <Paragraph variant="large">{hero.title}</Paragraph>
                    <Paragraph variant="muted">from ${hero.from}</Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section>
        <div className="container grid place-items-center items-center justify-center py-32">
          <div className="relative ml-24 w-full flex items-center gap-10">
            <h1 className="-z-10 absolute -left-20 -top-2 tracking-[0.6rem] text-8xl text-secondary">
              2023
            </h1>
            <Heading className="font-thin">New Collection</Heading>
            <Paragraph variant="muted" className="max-w-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              aspernatur alias dignissimos beatae architecto temporibus,
              assumenda ea, perspiciatis provident voluptatem quia quo?
              Adipisci, ullam.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* Some Products */}
      {products.length && (
        <section>
          <div className="container space-y-4">
            <div className="flex justify-end items-center">
              <Link
                href={{ pathname: "/products" }}
                className={buttonVariants({
                  variant: "link",
                })}
              >
                More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-8">
              {products.slice(0, 8).map((product, i) => (
                <Product key={i} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section>
        <div className="container py-24">
          <dl className="grid grid-cols-1 gap-16 text-center sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Instagram  */}
      {products.length && (
        <section className="relative">
          <div className="grid grid-cols-4 md:grid-cols-8 overflow-hidden">
            {products.slice(-8).map((product) => (
              <div key={product.id} className="relative w-full group">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary/10">
                  <Image src={product.image} alt={`${product.title} Image`} />
                </div>

                <Link
                  href={{ pathname: `/products/${product.slug}` }}
                  target="_blank"
                  className="absolute top-0 left-0 w-full h-full bg-primary/10 text-primary-foreground place-items-center hidden group-hover:grid transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            ))}
          </div>

          <Paragraph className="absolute top-2/4 left-2/4 -translate-y-full -translate-x-2/4 bg-background p-2">
            #{process.env.APP_TITLE}
          </Paragraph>
        </section>
      )}
    </>
  )
}
export default Home
